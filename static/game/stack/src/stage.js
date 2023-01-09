const THREE = require('three');
const { TweenLite } = require('../lib/TweenLite');

const helper = require('./helper');

const config = require('./config');

class Stage {
	constructor() {
		// container
		this.container = document.getElementById('game');

		// renderer
		this.renderer = new THREE.WebGLRenderer({
			antialias: true,
			alpha: false
		});

		this.renderer.setSize(window.innerWidth, window.innerHeight);
		this.renderer.setClearColor('#D0CBC7', 1);
		this.container.appendChild(this.renderer.domElement);

		// scene
		this.scene = new THREE.Scene();

		// camera
		const cameraConfig = config.camera;
		const aspect = window.innerWidth / window.innerHeight;
		const depth = cameraConfig.depth;
		this.camera = new THREE.OrthographicCamera(
			-depth * aspect,
			depth * aspect,
			depth,
			-depth,
			cameraConfig.near,
			cameraConfig.far
		);
		this.camera.position.fromArray(cameraConfig.position);
		this.camera.lookAt(new THREE.Vector3().fromArray(cameraConfig.lookAt));

		//light
		const lightsConfig = config.lights;
		lightsConfig.forEach((lightConfig) => {
			const LightClass = helper.get(THREE, lightConfig.type);
			if (LightClass) {
				const light = new LightClass(lightConfig.color, lightConfig.intensity);
				light.position.fromArray(lightConfig.position);
				this.scene.add(light);
			}
		});

		window.addEventListener('resize', () => this.onResize());
		this.onResize();
	}

	setCamera(y, speed = 0.3) {
		TweenLite.to(this.camera.position, speed, { y: y + 4, ease: Power1.easeInOut });
		TweenLite.to(this.camera.lookAt, speed, { y: y, ease: Power1.easeInOut });
	}

	onResize() {
		let viewSize = 30;
		this.renderer.setSize(window.innerWidth, window.innerHeight);
		this.camera.left = window.innerWidth / -viewSize;
		this.camera.right = window.innerWidth / viewSize;
		this.camera.top = window.innerHeight / viewSize;
		this.camera.bottom = window.innerHeight / -viewSize;
		this.camera.updateProjectionMatrix();
	}

	render() {
		this.renderer.render(this.scene, this.camera);
	}

	add(elem) {
		this.scene.add(elem);
	}

	remove(elem) {
		this.scene.remove(elem);
	}
}

module.exports = Stage;
