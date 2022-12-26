<script>
	import { onMount } from 'svelte';

	async function iframeSearch(input) {
		await registerSW();

		let iframe = document.getElementById('app-frame');

		iframe.src = __uv$config.prefix + __uv$config.encodeUrl(input);
	}
	// get game files based off slug from games directory
	import { page } from '$app/stores';

	import appsJson from '../apps.json';

	let slug = $page.url.pathname.substr($page.url.pathname.lastIndexOf('/') + 1);

	function getApp() {
		// for loop to find the game in the json file
		for (let i = 0; i < appsJson['apps'].length; i++) {
			if (appsJson['apps'][i]['id'] == slug) {
				return appsJson['apps'][i];
			}
		}
	}

	// check if the game is loved
	function isLoved() {
		let loved;
		let heart = document.getElementById('heart');
		let loves = localStorage.getItem('lovedApps') || '';
		loves.split(',').forEach((item) => {
			if (item == slug) {
				loved = 'true';
				heart.classList.add('fill-red-500');
			}
		});
		if (loved == undefined) {
			loved = 'false';
			heart.classList.remove('fill-red-500');
		}
		return loved;
	}

	// toggle loved
	function toggleLoved() {
		if (isLoved() == 'true') {
			let loves = localStorage.getItem('lovedApps') || '';
			let removeLoves = loves.replace(slug + ',', '');
			localStorage.setItem('loved', removeLoves);
			heart.classList.remove('fill-red-500');
		} else {
			let loves = localStorage.getItem('lovedApps') || '';
			localStorage.setItem('lovedApps', loves + slug + ',');
			heart.classList.add('fill-red-500');
		}
	}

	onMount(() => {
		function getAppPath() {
			if (getApp()['embedURL'] != undefined) {
				iframeSearch(getApp()['embedURL']);
			} else {
				document.getElementById('app-frame').src = '/app/' + slug + '/' + 'index.html';
			}
		}
		getAppPath();
		isLoved();
	});

	export let title = getApp()['name'];
	export let description = getApp()['description'];
	export let developer = getApp()['developer'];

	function fullScreen() {
		let appFrame = document.getElementById('app-frame');
		if (appFrame.requestFullscreen) {
			appFrame.requestFullscreen();
		} else if (appFrame.mozRequestFullScreen) {
			/* Firefox */
			appFrame.mozRequestFullScreen();
		} else if (appFrame.webkitRequestFullscreen) {
			/* Chrome, Safari and Opera */
			appFrame.webkitRequestFullscreen();
		} else if (appFrame.msRequestFullscreen) {
			/* IE/Edge */
			appFrame.msRequestFullscreen();
		}
	}

	function maximize() {
		// make the iframe fill the entire screen
		let appFrame = document.getElementById('app-frame');
		document.body.style.overflow = 'hidden';
		appFrame.style.position = 'fixed';
		appFrame.style.top = '0px';
		appFrame.style.bottom = '0px';
		appFrame.style.right = '0px';
		appFrame.style.width = '100%';
		appFrame.style.margin = '0';
		appFrame.style.padding = '0';
		appFrame.style.overflow = 'hidden';
		appFrame.style.zIndex = '999999';
		appFrame.style.height = '100%';
		appFrame.style.borderRadius = '0';
	}

	import VertAd from '../../../components/vert-ad.svelte';
</script>

<div class="flex flex-row relative justify-center">
	<div
		class="flex h-[calc(100vh-132px)] xl:w-full lg:w-[1000px] md:w-[820px] sm:w-full float-left pl-5 pr-5 pb-5"
	>
		<div class="flex-grow mb-14 align-center">
			{#if getApp()['embedURL'] != undefined}
				<div class="w-full h-full">
					<iframe id="app-frame" class="w-full h-full rounded-t-lg bg-black" {title} />
				</div>
			{:else}
				<p>Error. Please contact the developer of this app.</p>
			{/if}

			<div class="grid">
				<div
					class="w-full relative items-center leading-[3.5rem] mt-2 rounded-b-lg bg-secondaryLight dark:bg-secondaryDark text-white"
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
					<div class="float-right mr-5">
						<button class="mt-[1.1rem] h-5 w-5 fill-white" on:click={maximize}>
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
								><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path
									d="M344 0H488c13.3 0 24 10.7 24 24V168c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-39-39-87 87c-9.4 9.4-24.6 9.4-33.9 0l-32-32c-9.4-9.4-9.4-24.6 0-33.9l87-87L327 41c-6.9-6.9-8.9-17.2-5.2-26.2S334.3 0 344 0zM184 496H40c-13.3 0-24-10.7-24-24V328c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2l39 39 87-87c9.4-9.4 24.6-9.4 33.9 0l32 32c9.4 9.4 9.4 24.6 0 33.9l-87 87 39 39c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8z"
								/></svg
							>
						</button>
					</div>
					<div class="float-right mr-5">
						<button id="heart" class="mt-[1.1rem] h-5 w-5 fill-white" on:click={toggleLoved}>
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
								><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path
									d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"
								/></svg
							>
						</button>
					</div>
					<div class="ml-5 h-auto">
						"{title}" by: {developer}
					</div>
				</div>
			</div>
		</div>
	</div>
	<div
		class="w-full max-w-[280px] hidden xl:flex flex-col justify-center items-center gap-y-2 px-3 bg-opacity-50 backdrop-blur-md"
		align="middle"
	>
		<VertAd />
	</div>
</div>
