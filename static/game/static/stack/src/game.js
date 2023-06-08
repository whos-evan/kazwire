const Stage = require('./stage');
const { NormalBlock: Block, FallingBlock } = require('./block');

class Game {
	constructor() {
		this.STATES = {
			LOADING: 'loading',
			PLAYING: 'playing',
			READY: 'ready',
			ENDED: 'ended',
			RESETTING: 'resetting'
		};

		this.blocks = [];
		this.fallingBlocks = [];
		this.state = this.STATES.LOADING;

		this.stage = new Stage();

		this.mainContainer = document.getElementById('container');
		this.scoreContainer = document.getElementById('score');
		this.startButton = document.getElementById('start-button');
		this.instructions = document.getElementById('instructions');
		this.scoreContainer.innerHTML = '0';

		this.music = document.getElementById('music');

		this.addBlock();
		this.tick();

		for (let key in this.STATES) {
			this.mainContainer.classList.remove(this.STATES[key]);
		}
		this.setState(this.STATES.READY);

		document.addEventListener('keydown', (e) => {
			if (e.keyCode === 32) {
				// Space
				this.handleEvent();
			}
		});

		document.addEventListener('click', (e) => {
			this.handleEvent();
		});

		document.addEventListener('touchend', (e) => {
			this.handleEvent();
		});
	}

	handleEvent() {
		switch (this.state) {
			case this.STATES.READY:
				this.setState(this.STATES.PLAYING);
				this.music.play();
				this.addBlock();
				break;
			case this.STATES.PLAYING:
				this.addBlock();
				break;
			case this.STATES.ENDED:
				this.blocks.forEach((block) => {
					this.stage.remove(block.mesh);
				});
				this.blocks = [];
				this.scoreContainer.innerHTML = '0';
				this.addBlock();
				this.setState(this.STATES.READY);
				break;
			default:
				break;
		}
	}

	addBlock() {
		let lastBlock = this.blocks[this.blocks.length - 1];
		const lastToLastBlock = this.blocks[this.blocks.length - 2];

		if (lastBlock && lastToLastBlock) {
			const { axis, dimensionAlongAxis } = lastBlock.getAxis();
			const distance = lastBlock.position[axis] - lastToLastBlock.position[axis];
			let position, dimension;
			let positionFalling, dimensionFalling;
			const { color } = lastBlock;
			const newLength = lastBlock.dimension[dimensionAlongAxis] - Math.abs(distance);

			if (newLength <= 0) {
				this.stage.remove(lastBlock.mesh);
				this.setState(this.STATES.ENDED);
				this.music.pause();
				return;
			}

			dimension = { ...lastBlock.dimension };
			dimension[dimensionAlongAxis] = newLength;

			dimensionFalling = { ...lastBlock.dimension };
			dimensionFalling[dimensionAlongAxis] = Math.abs(distance);

			if (distance >= 0) {
				position = lastBlock.position;

				positionFalling = { ...lastBlock.position };
				positionFalling[axis] = lastBlock.position[axis] + newLength;
			} else {
				position = { ...lastBlock.position };
				position[axis] = lastBlock.position[axis] + Math.abs(distance);

				positionFalling = { ...lastBlock.position };
				positionFalling[axis] = lastBlock.position[axis] - Math.abs(distance);
			}

			this.blocks.pop();
			this.stage.remove(lastBlock.mesh);
			lastBlock = new Block({ dimension, position, color, axis }, true);

			this.blocks.push(lastBlock);
			this.stage.add(lastBlock.mesh);

			const fallingBlock = new FallingBlock({
				dimension: dimensionFalling,
				position: positionFalling,
				color
			});

			this.fallingBlocks.push(fallingBlock);
			this.stage.add(fallingBlock.mesh);
		}

		this.scoreContainer.innerHTML = String(this.blocks.length - 1);

		const newBlock = new Block(lastBlock);
		this.stage.add(newBlock.mesh);
		this.blocks.push(newBlock);

		this.stage.setCamera(this.blocks.length * 2);
	}

	setState(state) {
		const oldState = this.state;
		this.mainContainer.classList.remove(this.state);
		this.state = state;
		this.mainContainer.classList.add(this.state);
		return oldState;
	}

	tick() {
		if (this.blocks.length > 1) {
			this.blocks[this.blocks.length - 1].tick(this.blocks.length / 10);
		}
		this.fallingBlocks.forEach((block) => block.tick());
		this.fallingBlocks = this.fallingBlocks.filter((block) => {
			if (block.position.y > 0) {
				return true;
			} else {
				this.stage.remove(block.mesh);
				return false;
			}
		});
		this.stage.render();
		requestAnimationFrame(() => {
			this.tick();
		});
	}
}

module.exports = Game;
