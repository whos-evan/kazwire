const WEBGL = require('../lib/WebGL');
const Game = require('./game');

if (!WEBGL.isWebGLAvailable()) {
	console.error('WebGL is not supported in this browser.');
}

document.addEventListener('DOMContentLoaded', () => {
	new Game();
});
