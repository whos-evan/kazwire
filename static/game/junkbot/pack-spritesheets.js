/* global require */
/* eslint-disable no-console */
const fs = require("fs");
const packer = require("gamefroot-texture-packer");

let waiting = 0;
for (const name of ["backgrounds", "menus", "sprites"]) {
	const subFolders = ["", "Undercover Exclusive/"];
	if (name === "sprites") {
		subFolders.push("custom/");
	}
	for (const subfolderName of subFolders) {
		const inFolderPath = `images/${name}/${subfolderName}`;
		const outFolderPath = `images/spritesheets/${subfolderName}`;
		waiting += 1;
		console.log(`Packing ${inFolderPath} to ${outFolderPath}...`);

		packer(`${inFolderPath}*.png`, {
			format: "easel.js",
			name,
			path: outFolderPath,
			// eslint-disable-next-line no-loop-func
		}, (err) => {
			if (err) {
				throw err;
			}
			console.log(`${name} spritesheet successfully generated`);

			fs.readFile(`${outFolderPath}${name}-1.json`, "utf8", (err, json) => {
				if (err) {
					throw err;
				}
				json = json.replace(/\s*\/\/.*/g, ""); // remove line comments
				json = json.replace(/:\[/g, ": ["); // add whitespace
				json = json.replace(/\t\t\t\t?/g, "\t\t"); // fix indentation
				json = json.replace(/"images": \["[^"]*"\]/g, `"images": ["${name}.png"]`); // update filename reference
				fs.writeFile(`${outFolderPath}${name}.json`, json, (err) => {
					if (err) {
						throw err;
					}
					fs.unlink(`${outFolderPath}${name}-1.json`, (err) => {
						if (err) {
							throw err;
						}
						fs.rename(`${outFolderPath}${name}-1.png`, `${outFolderPath}${name}.png`, (err) => {
							if (err) {
								throw err;
							}
							waiting -= 1;
							if (waiting === 0) {
								console.log("All done!");
							}
						});
					});
				});
			});
		});
	}
}
