<script>
	import { onMount } from 'svelte';

	async function iframeSearch(input) {
        await registerSW();

        let iframe = document.getElementById('game-frame');

        iframe.src = __uv$config.prefix + __uv$config.encodeUrl(input);
    }
	// get game files based off slug from games directory
	import { page } from '$app/stores';

	import gamesJson from '../games.json';

	let slug = $page.url.pathname.substr($page.url.pathname.lastIndexOf('/') + 1);
	console.log(slug);

	function getGame() {
		// for loop to find the game in the json file
		for (let i = 0; i < gamesJson['games'].length; i++) {
			if (gamesJson['games'][i]['id'] == slug) {
				return gamesJson['games'][i];
			}
		}
	}
	onMount(() => {
		function getGamePath() {
			if (getGame()['embedURL'] != undefined) {
				iframeSearch(getGame()['embedURL']);
			} else {
				document.getElementById('game-frame').src = '/games/' + slug + '/' + 'index.html';
			}
		}
		getGamePath();
	});

	export let title = getGame()['name'];
	export let description = getGame()['description'];
	export let developer = getGame()['developer'];

	export function fullScreen() {
		let gameFrame = document.getElementById('game-frame');
		if (gameFrame.requestFullscreen) {
			gameFrame.requestFullscreen();
		} else if (gameFrame.mozRequestFullScreen) {
			/* Firefox */
			gameFrame.mozRequestFullScreen();
		} else if (gameFrame.webkitRequestFullscreen) {
			/* Chrome, Safari and Opera */
			gameFrame.webkitRequestFullscreen();
		} else if (gameFrame.msRequestFullscreen) {
			/* IE/Edge */
			gameFrame.msRequestFullscreen();
		}
	}
</script>

<div class="flex h-[calc(100vh-132px)] max-w-full pl-5 pr-5 pb-5">
	<div class="flex-grow mb-14 align-center">
		<iframe src="" id="game-frame" class="w-full h-full rounded-t-lg bg-black" {title} />
		<div
			class="block relative items-center h-14 leading-[3.5rem] mt-2 rounded-b-lg bg-[#0875bb] text-white"
		>
			<div class="float-right mr-5">
				<button class="mt-4 h-5 w-5 fill-white" on:click={fullScreen}>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
						><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path
							d="M32 32C14.3 32 0 46.3 0 64v96c0 17.7 14.3 32 32 32s32-14.3 32-32V96h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H32zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H64V352zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32h64v64c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32H320zM448 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64H320c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32V352z"
						/></svg
					>
				</button>
			</div>
			<div class="ml-5">
				"{title}" by: {developer}
			</div>
		</div>
	</div>
</div>
