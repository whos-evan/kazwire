<script>
	/**
	 * @type {string}
	 */
	export let gameId;

	/**
	 * @type {string}
	 */
	export let appId;

	/**
	 * @type {string}
	 */
	export let embedURL;

	/**
	 * @type {string}
	 */
	export let title;

	/**
	 * @type {string}
	 */
	export let description;

	/**
	 * @type {string}
	 */
	export let developer;

	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	import { auth, db } from '../firebase';

	import gamesJson from '../routes/games/games.json';
	import appsJson from '../routes/games/games.json';

	import Back from './buttons/back.svelte';
	import Minimize from './buttons/minimize.svelte';

	let maximized = false;
	
	let lovedGameIds = [];
	let lovedAppIds = [];

	function minimize() {
		// make the iframe fill the entire screen
		let gameFrame = document.getElementById('frame');
		document.body.style.overflow = 'auto';
		gameFrame.style.position = 'relative';
		gameFrame.style.top = '0px';
		gameFrame.style.bottom = '0px';
		gameFrame.style.left = '0px';
		gameFrame.style.right = '0px';
		gameFrame.style.height = '100%';
		gameFrame.style.width = '100%';
		gameFrame.style.zIndex = '0';
		gameFrame.style.border = 'none';
		gameFrame.classList.add("rounded-t-lg");

		maximized = false;
	}

	let slug = $page.url.pathname.substr($page.url.pathname.lastIndexOf('/') + 1);

	function getGame() {
		// for loop to find the game in the json file
		for (let i = 0; i < gamesJson['games'].length; i++) {
			if (gamesJson['games'][i]['id'] == slug) {
				return gamesJson['games'][i];
			}
		}
	}

	async function iframeSearch(input) {
		await registerSW();

		let iframe = document.getElementById('iframe');
		iframe.src = __uv$config.prefix + __uv$config.encodeUrl(input);
	}

	function updateHeart() {
		// check if the game is loved
		let heart = document.getElementById('heart');
		const user = auth.currentUser;
		if (user) {
			db.collection('users')
				.doc(user.uid)
				.get()
				.then((doc) => {
					if (doc.exists) {
						lovedGameIds = doc.data().lovedGames;
						if (lovedGameIds.includes(slug)) {
							heart.style.fill = '#ef4444';
						} else {
							heart.style.fill = '#ffffff';
						}
					} else {
						heart.style.fill = '#ffffff';
					}
				});
		} else {
			if (localStorage.getItem('loved')?.includes(slug)) {
				heart.style.fill = '#ef4444';
			} else {
				heart.style.fill = '#ffffff';
			}
		}
	}

	// toggle loved
	function toggleLoved() {
		if (lovedGameIds.includes(slug)) {
			// Remove the game from the lovedGameIds array
			lovedGameIds = lovedGameIds.filter((id) => id !== slug);
		} else {
			// Add the game to the lovedGameIds array
			lovedGameIds.push(slug);
		}
		const user = auth.currentUser;
		if (user) {
			// Write the updated list to Firestore
			// Check if the user's data exists in firestore first
			db.collection('users')
				.doc(user.uid)
				.get()
				.then((doc) => {
					if (doc.exists) {
						db.collection('users').doc(user.uid).update({ lovedGames: lovedGameIds });
						updateHeart();
					} else {
						// create the user's data if it doesn't exist
						db.collection('users')
							.doc(user.uid)
							.set({ lovedGames: lovedGameIds }, { merge: true })
							.then(() => updateHeart())
							.catch((error) => console.error('Error writing document: ', error));
						updateHeart();
					}
				});
		} else {
			// Convert local storage items to array
			// Write the updated list to local storage
			localStorage.setItem('loved', lovedGameIds.join(','));
			updateHeart();
		}
	}

	function fullScreen() {
		let gameFrame = document.getElementById('frame');
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

	function maximize() {
		// make the iframe fill the entire screen
		let gameFrame = document.getElementById('frame');
		document.body.style.overflow = 'hidden';
		gameFrame.style.position = 'fixed';
		gameFrame.style.top = '0px';
		gameFrame.style.bottom = '0px';
		gameFrame.style.left = '0px';
		gameFrame.style.right = '0px';
		gameFrame.style.height = '100%';
		gameFrame.style.width = '100%';
		gameFrame.style.zIndex = '9999';
		gameFrame.style.border = 'none';

		let iframe = document.getElementById?.('iframe');
		iframe?.classList.toggle('rounded-t-lg');
		

		maximized = true;
	}

	onMount(async () => {
		let authenticated = false;
		await Promise.race([
			new Promise((resolve) => {
				auth.onAuthStateChanged((user) => {
					if (user) {
						authenticated = true;
						resolve();
					}
				});
			}),
			new Promise((resolve) => setTimeout(resolve, 1000))
		]);

		if (authenticated) {
			// Code to run if the user is authenticated
			const user = auth.currentUser;
			// Write the updated list to Firestore
			// Check if the user's data exists in firestore first
			db.collection('users')
				.doc(user.uid)
				.get()
				.then((doc) => {
					if (doc.exists) {
						lovedGameIds = doc.data().lovedGames;
						db.collection('users').doc(user.uid).update({ lovedGames: lovedGameIds });
						updateHeart();
					} else {
						// create the user's data if it doesn't exist
						db.collection('users')
							.doc(user.uid)
							.set({ lovedGames: [slug] });
						lovedGameIds = [slug];
						updateHeart();
					}
				});
		} else {
			// Write the updated list to local storage
			lovedGameIds = localStorage?.getItem('loved')?.split(',');
			updateHeart();
		}

		if (gameId !== undefined) {
			if (getGame()['embedURL'] != undefined) {
				iframeSearch(getGame()['embedURL']);
			}

			gtag('event', 'page_view', {
				page_title: getGame()['name'],
				page_location: window.location.href,
				page_path: window.location.pathname
			});
		} else if (embedURL != undefined) {
			iframeSearch(embedURL);
			// remove the heart
			document.getElementById('heart').style.display = 'none';
		} else {
			alert('Error, contact the developer.');
		}
	});
</script>

<div
	class="flex h-[calc(100vh-132px)] xl:w-full lg:w-[1000px] md:w-[820px] sm:w-full float-left pl-5 pr-5 pb-5"
>
	<div class="flex-grow mb-14 align-center">
		{#if gameId != undefined}
			{#if getGame()['embedURL'] != undefined}
				<div id="frame" class="w-full h-full">
					<button class="absolute" on:click={minimize}>
						<Back />
					</button>
					{#if maximized}
						<button class="absolute" on:click={minimize}>
							<Minimize />
						</button>
					{/if}
					<iframe id="iframe" class="w-full h-full rounded-t-lg bg-black" {title} />
				</div>
			{:else if getGame()['emulator'] == 'ruffle'}
				<script src="/game/ruffle/ruffle.js"></script>
				<div class="w-full h-full">
					<div id="frame" class="w-full h-full rounded-t-lg bg-black">
						<button class="absolute" on:click={minimize}>
							<Back />
						</button>
						{#if maximized}
							<button class="absolute" on:click={minimize}>
								<Minimize />
							</button>
						{/if}
						<embed src="/game/{slug}/{slug}.swf" class="h-full w-full" />
					</div>
				</div>
			{:else}
				<div class="flex w-full h-full">
					<div id="frame" class="w-full h-full rounded-t-lg bg-black">
						<button class="absolute" on:click={minimize}>
							<Back />
						</button>
						{#if maximized}
							<button class="absolute" on:click={minimize}>
								<Minimize />
							</button>
						{/if}
						<iframe
							src="/game/{slug}/index.html"
							class="w-full h-full rounded-t-lg bg-black"
							id="iframe"
							{title}
						/>
					</div>
				</div>
			{/if}
		{:else if embedURL != undefined}
			<div id="frame" class="w-full h-full rounded-t-lg bg-black">
				{#if maximized}
					<button class="absolute" on:click={minimize}>
						<Minimize />
					</button>
				{/if}
				<iframe class="w-full h-full rounded-t-lg bg-black" id="iframe" {title} />
			</div>
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
