/* eslint-disable no-use-before-define */
/* eslint-disable no-console */
/* eslint-disable func-style */
/* globals zip */
import * as THREE from "./three.module.js";

import { GUI } from "./dat.gui.module.js";

import { LDrawLoader } from "./LDrawLoader.js";

import CustomShaderMaterial from "./three-custom-shader-material-3.2.12-modified-vanilla.js";

// const spector = new SPECTOR.Spector();
// spector.displayUI();

let container, progressBarDiv;

let camera, scene, renderer, gui, guiData;

let model, textureCube, gridHelper;

let matMap;

// const ldrawPath = 'models/ldraw/officialLibrary/';
const ldrawPath = "three-stuff/";

const modelFileList = {
	"Car": "models/car.ldr_Packed.mpd",
	"Basic Bricks": "models/basic-bricks.ldr_Packed.mpd",
	"Bots": "models/bots.ldr_Packed.mpd",
	"Misc": "models/misc.ldr_Packed.mpd",
	"Much Stuff": "models/much-stuff.ldr_Packed.mpd",
	// 'Lunar Vehicle': 'models/1621-1-LunarMPVVehicle.mpd_Packed.mpd',
	// 'Radar Truck': 'models/889-1-RadarTruck.mpd_Packed.mpd',
	// 'Trailer': 'models/4838-1-MiniVehicles.mpd_Packed.mpd',
	// 'Bulldozer': 'models/4915-1-MiniConstruction.mpd_Packed.mpd',
	// 'Helicopter': 'models/4918-1-MiniFlyers.mpd_Packed.mpd',
	// 'Plane': 'models/5935-1-IslandHopper.mpd_Packed.mpd',
	// 'Lighthouse': 'models/30023-1-Lighthouse.ldr_Packed.mpd',
	// 'X-Wing mini': 'models/30051-1-X-wingFighter-Mini.mpd_Packed.mpd',
	// 'AT-ST mini': 'models/30054-1-AT-ST-Mini.mpd_Packed.mpd',
	// 'AT-AT mini': 'models/4489-1-AT-AT-Mini.mpd_Packed.mpd',
	// 'Shuttle': 'models/4494-1-Imperial Shuttle-Mini.mpd_Packed.mpd',
	// 'TIE Interceptor': 'models/6965-1-TIEIntercep_4h4MXk5.mpd_Packed.mpd',
	// 'Star fighter': 'models/6966-1-JediStarfighter-Mini.mpd_Packed.mpd',
	// 'X-Wing': 'models/7140-1-X-wingFighter.mpd_Packed.mpd',
	// 'AT-ST': 'models/10174-1-ImperialAT-ST-UCS.mpd_Packed.mpd'
};

const renderSize = [2000, 1000];
const aspect = renderSize[0] / renderSize[1];
const brickWidthLDU = 20; // Ldraw Units
const brickWidthPixels = 15; // target scale for matching Junkbot's pixel art
const frustumSize = renderSize[1] * brickWidthLDU / brickWidthPixels;

init();
animate();

let tweening = false;
function tween(object, to, from) {
	if (tweening) {
		return;
	}
	tweening = true;
	if (!from) {
		from = {};
		for (const key of Object.keys(to)) {
			from[key] = object[key];
		}
	}
	const startTime = performance.now();
	function animate() {
		let timeFraction = (performance.now() - startTime) / 1000;
		if (timeFraction < 1) {
			requestAnimationFrame(animate);
		} else {
			tweening = false;
			timeFraction = 1;
		}
		for (const [key, toValue] of Object.entries(to)) {
			const fromValue = from[key];
			const value = fromValue + (toValue - fromValue) * timeFraction;
			object[key] = value;
		}
	}
	animate();
}

function init() {

	container = document.createElement("div");
	document.body.appendChild(container);

	// camera = new THREE.PerspectiveCamera( 45, aspect, 1, 10000 );
	camera = new THREE.OrthographicCamera(frustumSize * aspect / -2, frustumSize * aspect / 2, frustumSize / 2, frustumSize / -2, -10000, 100000);
	// camera.position.set( 150, 200, 250 );
	camera.position.set(0, 0, 250);
	camera.lookAt(new THREE.Vector3(0, 0, 0));
	camera.position.set(1210, -250, 250);
	camera.updateProjectionMatrix();

	// scene

	scene = new THREE.Scene();
	// scene.background = new THREE.Color( 0xdeebed );

	const ambientLight = new THREE.AmbientLight(0xdedede, 0.8);
	scene.add(ambientLight);

	const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
	directionalLight.position.set(-1000, 3200, 1500);
	scene.add(directionalLight);

	const divisions = 100;
	const size = 15 * divisions;
	gridHelper = new THREE.GridHelper(size, divisions);
	scene.add(gridHelper);

	//

	renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true, preserveDrawingBuffer: true });
	// renderer.setPixelRatio(window.devicePixelRatio); // I'm generating pixel art, and I want to be able to zoom in to inspect it
	renderer.setSize(...renderSize);
	container.appendChild(renderer.domElement);

	// controls = new OrbitControls( camera, renderer.domElement );

	//

	guiData = {
		modelFileName: modelFileList["Basic Bricks"],
		envMapActivated: false,
		customShaderActivated: true,
		separateObjects: true,
		displayLines: false,
		conditionalLines: false,
		smoothNormals: false,
		constructionStep: 0,
		noConstructionSteps: "No steps.",
		grid: false,
		obliqueProjection: false,
		pixelScanner: false,
		exportSprites,
	};

	setupProjection();

	window.addEventListener("resize", setupProjection, false);

	window.addEventListener("keydown", (event) => {
		if (event.code === "KeyI") {
			tween(model.rotation, { x: model.rotation.x - Math.PI / 2 });
		}
		if (event.code === "KeyK") {
			tween(model.rotation, { x: model.rotation.x + Math.PI / 2 });
		}
		if (event.code === "KeyJ") {
			tween(model.rotation, { y: model.rotation.y - Math.PI / 2 });
		}
		if (event.code === "KeyL") {
			tween(model.rotation, { y: model.rotation.y + Math.PI / 2 });
		}
		let moveSpeed = 1;
		if (event.ctrlKey) {
			moveSpeed = 0.01;
		} else if (event.shiftKey) {
			moveSpeed = 10;
		}
		if (event.key === "ArrowUp") {
			model.position.y += moveSpeed;
		}
		if (event.key === "ArrowDown") {
			model.position.y -= moveSpeed;
		}
		if (event.key === "ArrowRight") {
			model.position.x += moveSpeed;
		}
		if (event.key === "ArrowLeft") {
			model.position.x -= moveSpeed;
		}
		if (event.key === "PageUp") {
			model.position.z += moveSpeed;
		}
		if (event.key === "PageDown") {
			model.position.z -= moveSpeed;
		}
		if (event.key === "Insert") {
			model.scale.x += 0.01 * moveSpeed;
			model.scale.y += 0.01 * moveSpeed;
			model.scale.z += 0.01 * moveSpeed;
			console.log("scale", model.scale);
		}
		if (event.key === "Delete") {
			model.scale.x -= 0.01 * moveSpeed;
			model.scale.y -= 0.01 * moveSpeed;
			model.scale.z -= 0.01 * moveSpeed;
			console.log("scale", model.scale);
		}
	});

	progressBarDiv = document.createElement("div");
	progressBarDiv.innerText = "Loading...";
	progressBarDiv.style.fontSize = "3em";
	progressBarDiv.style.color = "#888";
	progressBarDiv.style.display = "block";
	progressBarDiv.style.position = "absolute";
	progressBarDiv.style.top = "50%";
	progressBarDiv.style.width = "100%";
	progressBarDiv.style.textAlign = "center";


	// load materials and then the model

	reloadObject(true);

}

window.addEventListener("scroll", () => {
	scrollTo(0, 0);
});

function updateObjectsVisibility() {

	model.traverse((c) => {

		if (c.isLineSegments) {

			if (c.isConditionalLine) {

				c.visible = guiData.conditionalLines;

			} else {

				c.visible = guiData.displayLines;

			}

		} else if (c.isGroup) {

			// Hide objects with construction step > gui setting
			c.visible = c.userData.constructionStep <= guiData.constructionStep;

		}

	});

	gridHelper.visible = guiData.grid;

}

function reloadObject(resetCamera) {

	if (model) {

		scene.remove(model);

	}

	model = null;

	updateProgressBar(0);
	showProgressBar();

	const lDrawLoader = new LDrawLoader();
	lDrawLoader.separateObjects = guiData.separateObjects;
	lDrawLoader.smoothNormals = guiData.smoothNormals;
	lDrawLoader
		.setPath(ldrawPath)
		.load(guiData.modelFileName, (group2) => {

			if (model) {

				scene.remove(model);

			}

			model = group2;

			// Convert from LDraw coordinates: rotate 180 degrees around OX
			model.rotation.x = Math.PI;

			scene.add(model);

			// Adjust materials

			if (guiData.customShaderActivated) {

				matMap = new Map();

				for (const material of lDrawLoader.materials) {
					matMap.set(material, new CustomShaderMaterial(
						THREE[material.type], // base material
						null, // fragment shader
						document.getElementById("vertexShader").textContent,
						{
							// uniforms
							uTime: {
								value: 0,
							},
						},
						{
							// options
							...material
						}
					));
				}

				console.log(lDrawLoader.materials, matMap);

				model.traverse((c) => {
					console.log("material", c.material);

					if (c.material instanceof Array) {
						c.material = c.material.map((m) => matMap.get(m) ?? m);
					} else {
						c.material = matMap.get(c.material) ?? c.material;
					}

					// Frustum culling doesn't understand my custom projection done in the vertex shader.
					// I may be able to enable the projection matrix, for Three.js to do culling with,
					// but it's too imprecise for pixel art rendering, and I would have to
					// force the shader to ignore the projection matrix.
					// (And I'm not 100% sure it would work nicely anyway.)
					if (c.frustumCulled) {
						c.frustumCulled = false;
					}

				});

			} else {

				const materials = lDrawLoader.materials;

				if (guiData.envMapActivated) {

					if (!textureCube) {

						// Envmap texture
						const r = "textures/cube/Bridge2/";
						const urls = [
							`${r}posx.jpg`, `${r}negx.jpg`,
							`${r}posy.jpg`, `${r}negy.jpg`,
							`${r}posz.jpg`, `${r}negz.jpg`
						];
						textureCube = new THREE.CubeTextureLoader().load(urls);
						textureCube.mapping = THREE.CubeReflectionMapping;

					}

					for (let i = 0, n = materials.length; i < n; i++) {

						const material = materials[i];

						if (material.userData.canHaveEnvMap) {

							material.envMap = textureCube;

						}

					}

				}

			}

			guiData.constructionStep = model.userData.numConstructionSteps - 1;

			updateObjectsVisibility();

			// Adjust camera and light

			// const bbox = new THREE.Box3().setFromObject(model);
			// const size = bbox.getSize(new THREE.Vector3());
			// const radius = Math.max(size.x, Math.max(size.y, size.z)) * 0.5;

			if (resetCamera) {

				// controls.target0.copy( bbox.getCenter( new THREE.Vector3() ) );
				// controls.position0.set( - 2.3, 2, 2 ).multiplyScalar( radius ).add( controls.target0 );
				// controls.reset();

			}

			createGUI();

			hideProgressBar();

		}, onProgress, onError);

}

function setupProjection() {

	camera.aspect = renderSize[0] / renderSize[1];
	camera.left = -frustumSize * camera.aspect / 2;
	camera.right = frustumSize * camera.aspect / 2;
	camera.top = frustumSize / 2;
	camera.bottom = -frustumSize / 2;
	// camera.left = 0;
	// camera.right = frustumSize * camera.aspect;
	// camera.top = frustumSize;
	// camera.bottom = 0;

	camera.updateProjectionMatrix();

	if (guiData.obliqueProjection) {
		// code based on https://stackoverflow.com/a/26060068/2624876
		// Create shear matrix for oblique projection
		const alpha = Math.PI / 4;

		const Syx = 0,
			Szx = -0.5 * Math.cos(alpha),
			Sxy = 0,
			Szy = -0.5 * Math.sin(alpha),
			Sxz = 0,
			Syz = 0;

		const matrix = new THREE.Matrix4();

		matrix.set(1, Syx, Szx, 0, Sxy, 1, Szy, 0, Sxz, Syz, 1, 0, 0, 0, 0, 1);

		// const matrix = new THREE.Matrix4();
		// 1. result of the above code
		// matrix.fromArray([1, 0, 0, 0, 0, 1, 0, 0, -0.3535533905932738, -0.35355339059327373, 1, 0, 0, 0, 0, 1]);
		// 2. try using the same number since they're similar
		// matrix.fromArray([1, 0, 0, 0, 0, 1, 0, 0, -0.3535533905932738, -0.3535533905932738, 1, 0, 0, 0, 0, 1]);
		// 3. try reducing precision
		// matrix.fromArray([1, 0, 0, 0, 0, 1, 0, 0, -0.35, -0.35, 1, 0, 0, 0, 0, 1]);
		// matrix.fromArray([1, 0, 0, 0, 0, 1, 0, 0, -0.32, -0.32, 1, 0, 0, 0, 0, 1]);
		// matrix.fromArray([1, 0, 0, 0, 0, 1, 0, 0, -0.25, -0.25, 1, 0, 0, 0, 0, 1]);
		// 4. head-on view
		// matrix.fromArray([1, 0, 0, 0, 0, 1, 0, 0, -0., -0., 1, 0, 0, 0, 0, 1]);

		camera.projectionMatrix.multiply(matrix);
		camera.projectionMatrixInverse.getInverse(camera.projectionMatrix);
	}

	renderer.setSize(...renderSize);
}

function createGUI() {

	if (gui) {

		gui.destroy();
	}

	gui = new GUI();

	gui.add(guiData, "modelFileName", modelFileList).name("Model")
		.onFinishChange(() => {

			reloadObject(true);

		});

	gui.add(guiData, "separateObjects").name("Separate Objects")
		.onChange(() => {

			reloadObject(false);

		});

	if (guiData.separateObjects) {

		if (model.userData.numConstructionSteps > 1) {

			gui.add(guiData, "constructionStep", 0, model.userData.numConstructionSteps - 1).step(1)
				.name("Construction step")
				.onChange(updateObjectsVisibility);

		} else {

			gui.add(guiData, "noConstructionSteps").name("Construction step")
				.onChange(updateObjectsVisibility);

		}
	}

	gui.add(guiData, "envMapActivated").name("Env. map")
		.onChange(() => {

			reloadObject(false);

		});

	gui.add(guiData, "customShaderActivated").name("Custom shader")
		.onChange(() => {

			reloadObject(false);

		});

	gui.add(guiData, "smoothNormals").name("Smooth Normals")
		.onChange(() => {

			reloadObject(false);

		});

	gui.add(guiData, "displayLines").name("Display Lines")
		.onChange(updateObjectsVisibility);
	gui.add(guiData, "conditionalLines").name("Conditional Lines")
		.onChange(updateObjectsVisibility);

	gui.add(guiData, "grid").name("Grid")
		.onChange(updateObjectsVisibility);

	gui.add(guiData, "obliqueProjection").name("Oblique Projection")
		.onChange(() => {
			setupProjection();
		});

	gui.add(guiData, "pixelScanner").name("Pixel Scanner (measurement tool)")
		.onChange((value) => {
			// scanningCanvas.hidden = !value;
			// remove from DOM instead of hiding it so it doesn't show up in the Spector canvas dropdown
			// Spector is a WebGL debugging tool, available as a browser extension or library.
			if (value) {
				document.body.appendChild(scanningCanvas);
			} else {
				scanningCanvas.remove();
			}
		});

	gui.add(guiData, "exportSprites").name("Export Sprites");

}

//

function animate() {

	requestAnimationFrame(animate);
	render();

}

function render() {

	if (matMap) {
		for (const mat of matMap.values()) {
			mat.uniforms.uTime.value = performance.now() / 1000;
		}
	}

	renderer.render(scene, camera);

}

function onProgress(xhr) {

	if (xhr.lengthComputable) {

		updateProgressBar(xhr.loaded / xhr.total);

		console.log(`${Math.round(xhr.loaded / xhr.total * 100, 2)}% downloaded`);

	}

}

function onError() {

	const message = "Error loading model";
	progressBarDiv.innerText = message;
	console.log(message);

}

function showProgressBar() {

	document.body.appendChild(progressBarDiv);

}

function hideProgressBar() {

	document.body.removeChild(progressBarDiv);

}

function updateProgressBar(fraction) {

	progressBarDiv.innerText = `Loading... ${Math.round(fraction * 100, 2)}%`;

}

function sleep(ms) {
	return new Promise((resolve) => {
		setTimeout(resolve, ms);
	});
}

let addFilesToZipUI;
let cancelExportingSprites = false;
(() => {
	zip.configure({ workerScripts: { deflate: ["z-worker.js"] } });

	let zipWriter;
	function startNewZip() {
		zipWriter = new zip.ZipWriter(new zip.BlobWriter("application/zip"));
	}

	function addFile(file, options) {
		if (!zipWriter) {
			startNewZip();
		}
		return zipWriter.add(file.name, new zip.BlobReader(file), options);
	}
	async function getBlobURL() {
		if (zipWriter) {
			const blobURL = URL.createObjectURL(await zipWriter.close());
			zipWriter = null;
			return blobURL;
		} else {
			throw new Error("Zip file closed");
		}
	}

	(() => {

		const zipDialog = document.getElementById("zip-dialog");
		const closeZipDialogButton = document.getElementById("close-zip-dialog-button");
		const zipProgress = document.createElement("progress");
		const downloadButton = document.getElementById("download-button");
		const fileList = document.getElementById("file-list");
		const filenameInput = document.getElementById("filename-input");

		function clearAndCloseZipDialog() {
			fileList.innerHTML = "";
			fileList.classList.add("empty");
			zipDialog.hidden = true;
			startNewZip();
		}

		closeZipDialogButton.addEventListener("click", () => {
			clearAndCloseZipDialog();
			cancelExportingSprites = true;
			// TODO: cancel async operations instead of hiding twice
			setTimeout(() => {
				zipDialog.hidden = true;
			}, 500);
		});
		downloadButton.addEventListener("click", onDownloadButtonClick, false);

		addFilesToZipUI = async (fileItems) => {
			zipDialog.hidden = false;
			try {
				await addFiles(fileItems);
				downloadButton.disabled = false;
			} catch (error) {
				console.error("Failed to add files", error);
				alert(`Failed to add files:\n\n${error}`);
			} finally {
				zipProgress.remove();
			}
		};

		async function addFiles(fileItems) {
			downloadButton.disabled = true;
			await Promise.all(Array.from(fileItems).map(async (fileItem) => {
				const { file, previewImage } = fileItem;
				const li = document.createElement("li");
				const filenameContainer = document.createElement("span");
				const filename = document.createElement("span");
				const zipProgress = document.createElement("progress");
				filenameContainer.classList.add("filename-container");
				li.appendChild(filenameContainer);
				filename.classList.add("filename");
				filename.textContent = file.name;
				if (previewImage) {
					li.appendChild(previewImage.cloneNode(true));
				}
				filenameContainer.appendChild(filename);
				zipProgress.value = 0;
				zipProgress.max = 0;
				li.appendChild(zipProgress);
				fileList.classList.remove("empty");
				fileList.appendChild(li);
				li.title = file.name;
				li.classList.add("pending");
				const controller = new AbortController();
				const signal = controller.signal;
				const abortButton = document.createElement("button");
				abortButton.onclick = () => controller.abort();
				abortButton.textContent = "✖";
				abortButton.title = "Abort";
				filenameContainer.appendChild(abortButton);
				try {
					const entry = await addFile(file, {
						bufferedWrite: true,
						signal,
						onprogress: (index, max) => {
							li.classList.remove("pending");
							li.classList.add("busy");
							zipProgress.value = index;
							zipProgress.max = max;
						},
					});
					li.title += `\n  Last modification date: ${entry.lastModDate.toLocaleString()}\n  Compressed size: ${entry.compressedSize.toLocaleString()} bytes`;
				} catch (error) {
					if (error.message === zip.ERR_ABORT) {
						if (!li.previousElementSibling && !li.nextElementSibling) {
							fileList.classList.add("empty");
						}
						li.remove();
					} else {
						throw error;
					}
				} finally {
					li.classList.remove("busy");
					zipProgress.remove();
				}
			}));
		}

		async function onDownloadButtonClick(event) {
			let blobURL;
			try {
				blobURL = await getBlobURL();
			} catch (error) {
				console.error("Failed to get blob URL", error);
				alert(`Failed to get blob URL:\n\n${error}`);
			}
			if (blobURL) {
				const anchor = document.createElement("a");
				const clickEvent = new MouseEvent("click");
				anchor.href = blobURL;
				anchor.download = filenameInput.value || "rendered-sprites.zip";
				anchor.dispatchEvent(clickEvent);
				clearAndCloseZipDialog();
			}
			downloadButton.disabled = true;
			event.preventDefault();
		}

	})();

})();

async function exportSprites() {
	cancelExportingSprites = false;
	const toExport = [];
	scene.traverse((object) => {
		if (object.isMesh) {
			toExport.push(object);
		}
	});
	// toExport = toExport.slice(0, 3);
	for (const object of toExport) {
		exportSprite(object);
		// eslint-disable-next-line no-await-in-loop
		await sleep(10);
		if (cancelExportingSprites) {
			break;
		}
	}
}
// ctx is the 2d context of the canvas to be trimmed
// This function will return false if the canvas contains no or no non transparent pixels.
// Returns true if the canvas contains non transparent pixels
function trimCanvas(ctx) { // removes transparent edges
	let x, y, w, h, top, left, right, bottom, idx1, idx2, found;
	w = ctx.canvas.width;
	h = ctx.canvas.height;
	if (!w && !h) {
		return false;
	}
	const imgData = ctx.getImageData(0, 0, w, h);
	const data = new Uint32Array(imgData.data.buffer);
	idx1 = 0;
	idx2 = w * h - 1;
	found = false;
	// search from top and bottom to find first rows containing a non transparent pixel.
	for (y = 0; y < h && !found; y += 1) {
		for (x = 0; x < w; x += 1) {
			// eslint-disable-next-line no-plusplus
			if (data[idx1++] && !top) {
				top = y + 1;
				if (bottom) { // top and bottom found then stop the search
					found = true;
					break;
				}
			}
			// eslint-disable-next-line no-plusplus
			if (data[idx2--] && !bottom) {
				bottom = h - y - 1;
				if (top) { // top and bottom found then stop the search
					found = true;
					break;
				}
			}
		}
		if (y > h - y && !top && !bottom) {
			return false; // image is completely blank so do nothing
		}
	}
	top -= 1; // correct top
	found = false;
	// search from left and right to find first column containing a non transparent pixel.
	for (x = 0; x < w && !found; x += 1) {
		idx1 = top * w + x;
		idx2 = top * w + (w - x - 1);
		for (y = top; y <= bottom; y += 1) {
			if (data[idx1] && !left) {
				left = x + 1;
				if (right) { // if left and right found then stop the search
					found = true;
					break;
				}
			}
			if (data[idx2] && !right) {
				right = w - x - 1;
				if (left) { // if left and right found then stop the search
					found = true;
					break;
				}
			}
			idx1 += w;
			idx2 += w;
		}
	}
	left -= 1; // correct left
	if (w === right - left + 1 && h === bottom - top + 1) {
		return true; // no need to crop if no change in size
	}
	w = right - left + 1;
	h = bottom - top + 1;
	ctx.canvas.width = w;
	ctx.canvas.height = h;
	ctx.putImageData(imgData, -left, -top);
	return true;
}

function exportSprite(subject) {
	// hide all objects except the subject, keeping track of the original visibility
	const oldVisibility = new Map();
	scene.traverse((object) => {
		if ("visible" in object) {
			oldVisibility.set(object, object.visible);
			if (object.isMesh) {
				object.visible = object === subject;
				if (object.visible) {
					object.traverseAncestors((ancestor) => {
						ancestor.visible = true;
					});
				}
			}
		}
	});
	// center camera on subject
	const oldPosition = camera.position.clone();
	camera.position.copy(subject.position);
	camera.position.z += 100;
	camera.lookAt(subject.position);
	camera.position.x += 500;

	// render the scene, and copy it to a canvas
	render();

	const canvas = document.createElement("canvas");
	const ctx = canvas.getContext("2d");
	canvas.width = renderer.domElement.width;
	canvas.height = renderer.domElement.height;
	ctx.drawImage(renderer.domElement, 0, 0);
	if (trimCanvas(ctx)) {
		// has pixels, good!
		canvas.toBlob((blob) => {
			const file = new File([blob], `${subject.name || subject.id}.png`, { type: "image/png" });
			const previewImage = document.createElement("img");
			previewImage.src = URL.createObjectURL(file);
			previewImage.onload = () => {
				// URL.revokeObjectURL(previewImage.src);
				// not revoking, so that you can save individual sprites
				// (and it's probably not worth revoking on dialog close)
			};
			addFilesToZipUI([
				{
					file,
					previewImage,
				}
			]);
		});
	} else {
		console.warn("no non-transparent (or non-transparent) pixels in canvas", canvas, subject);
	}

	// restore visibility (disable for debug or mildly fun animation)
	scene.traverse((object) => {
		if ("visible" in object) {
			object.visible = oldVisibility.get(object);
		}
	});
	camera.position.copy(oldPosition);
}

const scanningCanvas = document.createElement("canvas");
// document.body.appendChild(scanningCanvas); // appended conditionally
scanningCanvas.style.position = "absolute";
scanningCanvas.style.top = "0px";
scanningCanvas.style.left = "0px";

function scanPixels() {
	if (tweening || !guiData.pixelScanner) {
		return;
	}
	scanningCanvas.width = renderSize[0];
	scanningCanvas.height = renderSize[1];
	const context = scanningCanvas.getContext("2d");
	context.drawImage(renderer.domElement, 0, 0);
	const imageData = context.getImageData(0, 0, renderSize[0], renderSize[1]);
	const data = imageData.data;
	const buckets = [];
	for (let x = 0; x < imageData.width; x++) {
		buckets[x] = 0;
		for (let y = 0; y < imageData.height; y++) {
			const index = (y * imageData.width + x) * 4;
			const alpha = data[index + 3];
			buckets[x] += alpha;
		}
		buckets[x] /= imageData.height;
	}
	const transitions = [];
	for (let x = 0; x < imageData.width - 1; x++) {
		if (Math.abs(buckets[x] - buckets[x + 1]) > 1) {
			transitions.push(x);
		}
	}
	const distances = [];
	for (let i = 0; i < transitions.length - 1; i++) {
		distances.push(transitions[i + 1] - transitions[i]);
	}
	const averageDistance = distances.reduce((a, b) => a + b, 0) / distances.length;
	console.log({ transitions, distances, averageDistance });

	for (const transitionX of transitions) {
		for (let y = 0; y < imageData.height; y++) {
			const index = (y * imageData.width + transitionX) * 4;
			data[index + 3] = 255;
			data[index + 2] = 255;
			data[index + 1] = 255;
			data[index + 0] = 255;
		}
	}
	context.putImageData(imageData, 0, 0);

	for (let i = 0; i < distances.length; i++) {
		const x = transitions[i];
		const distance = distances[i];
		const y = scanningCanvas.height / 2 + (x * 50) % 500;
		context.fillStyle = "red";
		context.font = "20px Arial";
		context.fillText(distance, x, y);
	}
}

setInterval(scanPixels, 1000);
