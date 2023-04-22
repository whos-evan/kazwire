<script lang="ts">
	/**
	 * @type {string}
	 */
	export let gameId;

	/**
	 * @type {string}
	 */
	export let appId;

	/**
	 * @type {boolean}
	 */
	export let loadHeart;

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

	import { auth, db } from '$lib/firebase';

	import gamesJson from '../../routes/games/games.json';
	import appsJson from '../../routes/apps/apps.json';

	import Back from './buttons/back.svelte';
	import Minimize from './buttons/minimize.svelte';

	let maximized = false;

	async function getFromDB(type: string) {
		if (auth.currentUser) {
			return new Promise((resolve) => {
				db.collection('users')
					.doc(auth.currentUser?.uid)
					.get()
					.then((doc) => {
						if (doc.exists) {
							let data = doc.data();
							if (data) {
								resolve(data[type]);
							}
						} else {
							resolve([]);
						}
					});
			});
		} else {
			let data = localStorage.getItem(type);
			if (data) {
				return JSON.parse(data);
			} else {
				return [];
			}
		}
	}

	async function addToDB(type: string, content: string) {
		if (auth.currentUser) {
			db.collection('users')
				.doc(auth.currentUser.uid)
				.get()
				.then((doc) => {
					if (doc.exists) {
						let data = doc.data();
						if (data) {
							let item = data[type];
							if (item) {
								for (let i = 0; i < item.length; i++) {
									if (item[i] == content) {
										return;
									}
								}
								item.push(content);
								db.collection('users')
									.doc(auth.currentUser?.uid)
									.update({
										[type]: item
									});
							} else {
								db.collection('users')
									.doc(auth.currentUser?.uid)
									.set(
										{
											[type]: [content]
										},
										{ merge: true }
									);
							}
						}
					} else {
						db.collection('users')
							.doc(auth.currentUser?.uid)
							.set(
								{
									[type]: [content]
								},
								{ merge: true }
							);
					}
				});
		} else {
			if (localStorage.getItem(type)) {
				localStorage.setItem(
					type,
					JSON.stringify([...JSON.parse(localStorage.getItem(type) || '[]'), content])
				);
			} else {
				localStorage.setItem(type, JSON.stringify([content]));
			}
		}
	}

	async function removeFromDB(type: string, content: string) {
		if (auth.currentUser) {
			db.collection('users')
				.doc(auth.currentUser.uid)
				.get()
				.then((doc) => {
					if (doc.exists) {
						let data = doc.data();
						if (data) {
							let item = data[type];
							if (item) {
								if (item.includes(content)) {
									item.splice(item.indexOf(content), 1);
									db.collection('users')
										.doc(auth.currentUser?.uid)
										.update({
											[type]: item
										});
								}
							}
						}
					}
				});
		} else {
			if (localStorage.getItem(type)) {
				let item = JSON.parse(localStorage.getItem(type) || '[]');
				if (item.includes(content)) {
					item.splice(item.indexOf(content), 1);
					localStorage.setItem(type, JSON.stringify(item));
				}
			} else {
				localStorage.setItem(type, JSON.stringify([]));
			}
		}
	}

	async function toggleLoved() {
		let game = getGame();
		let app = getApp();

		if (game) {
			let loved = await getFromDB('lovedGames').then((data) => {
				return data;
			});

			if (loved && loved.length > 0) {
				for (let i = 0; i < loved.length; i++) {
					if (loved[i] == game.id) {
						await removeFromDB('lovedGames', game.id);
					} else {
						await addToDB('lovedGames', game.id);
					}
				}
			} else {
				await addToDB('lovedGames', game.id);
			}
		} else if (app) {
			let loved = await getFromDB('lovedApps').then((data) => {
				return data;
			});

			if (loved && loved.length > 0) {
				for (let i = 0; i < loved.length; i++) {
					if (loved[i] == app.id) {
						await removeFromDB('lovedApps', app.id);
					} else {
						await addToDB('lovedApps', app.id);
					}
				}
			} else {
				await addToDB('lovedApps', app.id);
			}
		}
		// wait for db to update
		// then update the heart
		setTimeout(() => {
			updateLoved();
		}, 500);
	}

	async function updateLoved() {
		let game = getGame();
		let app = getApp();

		if (game) {
			let loved = await getFromDB('lovedGames').then((data) => {
				return data;
			});

			if (loved && loved.length > 0) {
				for (let i = 0; i < loved.length; i++) {
					if (loved[i] == game.id) {
						document.getElementById('heart').style.fill = '#ef4444';
					} else {
						document.getElementById('heart').style.fill = 'white';
					}
				}
			} else {
				document.getElementById('heart').style.fill = 'white';
			}
		} else if (app) {
			let loved = await getFromDB('lovedApps').then((data) => {
				return data;
			});

			if (loved && loved.length > 0) {
				for (let i = 0; i < loved.length; i++) {
					if (loved[i] == app.id) {
						document.getElementById('heart').style.fill = '#ef4444';
					} else {
						document.getElementById('heart').style.fill = 'white';
					}
				}
			} else {
				document.getElementById('heart').style.fill = 'white';
			}
		}
	}

	function minimize() {
		// make the iframe fill the entire screen
		let gameFrame = document.getElementById('frame');
		document.body.style.overflow = 'auto';
		if (gameFrame != null) {
			gameFrame.style.position = 'relative';
			gameFrame.style.top = '0px';
			gameFrame.style.bottom = '0px';
			gameFrame.style.left = '0px';
			gameFrame.style.right = '0px';
			gameFrame.style.height = '100%';
			gameFrame.style.width = '100%';
			gameFrame.style.zIndex = '0';
			gameFrame.style.border = 'none';
			gameFrame.classList.add('rounded-t-lg');
		}

		let iframe = document.getElementById?.('iframe');
		iframe?.classList.toggle('rounded-t-lg');

		maximized = false;
	}

	let slug = $page.url.pathname.substr($page.url.pathname.lastIndexOf('/') + 1);

	function getGame() {
		// for loop to find the game in the json file
		if (gameId != undefined) {
			for (let i = 0; i < gamesJson['games'].length; i++) {
				if (gamesJson['games'][i]['id'] == slug) {
					return gamesJson['games'][i];
				}
			}
		} else {
			return false;
		}
	}

	function getApp() {
		if (appId != undefined) {
			// for loop to find the game in the json file
			for (let i = 0; i < appsJson['apps'].length; i++) {
				if (appsJson['apps'][i]['id'] == slug) {
					return appsJson['apps'][i];
				}
			}
		} else {
			return false;
		}
	}

	// proxy
	async function iframeSearch(input) {
		await registerSW();

		let iframe = document.getElementById('iframe');
		iframe.src = __uv$config.prefix + __uv$config.encodeUrl(input);
	}

	// full screen
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
		// get the loved status
		setTimeout(() => {
			updateLoved();
		}, 500);

		// proxies the game
		if (gameId !== undefined) {
			if (getGame()['embedURL'] != undefined) {
				iframeSearch(getGame()['embedURL']);
			}

			gtag('event', 'page_view', {
				page_title: getGame()['name'],
				page_location: window.location.href,
				page_path: window.location.pathname
			});
			// proxies the app
		} else if (embedURL != undefined) {
			iframeSearch(embedURL);
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
					<iframe id="iframe" class="w-full h-full rounded-t-lg bg-white" {title} />
				</div>
			{:else if getGame()['emulator'] == 'ruffle'}
				<script src="/game/ruffle/ruffle.js"></script>
				<div class="w-full h-full">
					<div id="frame" class="w-full h-full rounded-t-lg bg-white">
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
					<div id="frame" class="w-full h-full rounded-t-lg bg-white">
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
							class="w-full h-full rounded-t-lg bg-white"
							id="iframe"
							{title}
						/>
					</div>
				</div>
			{/if}
		{:else if embedURL != undefined}
			<div id="frame" class="w-full h-full rounded-t-lg bg-white">
				{#if maximized}
					<button class="absolute" on:click={minimize}>
						<Minimize />
					</button>
				{/if}
				<iframe class="w-full h-full rounded-t-lg bg-white" id="iframe" {title} />
			</div>
		{/if}

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
			{#if loadHeart != false || loadHeart == undefined}
				<div class="float-right mr-5">
					<button id="heart" class="mt-[1.1rem] h-5 w-5 fill-white" on:click={toggleLoved}>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
							><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path
								d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"
							/></svg
						>
					</button>
				</div>
			{/if}
			<div class="ml-5 h-auto truncate">
				"{title}" by: {developer}
			</div>
		</div>
	</div>
</div>
