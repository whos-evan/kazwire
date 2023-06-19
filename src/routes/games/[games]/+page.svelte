<script lang="ts" context="module">
	declare var __uv$config: any;
</script>

<script lang="ts">
	// TODO: Dynamicly determine how to access the game:
	// 1. If the game is hosted locally just use the path
	// 2. If the game is hosted on another server use the proxied path
	// 3. If the game is emulated determine what emulator is required and use the required path (i.e. /emulators/super-mario-64, /ruffle/duck-life)

	import type { Game } from '@prisma/client';
	import { PUBLIC_API_BASE_URL } from '$env/static/public';

	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	// Turns a search into a valid URL
	function search(input: string) {
		let template: string = 'https://www.google.com/search?q=%s&hl=en';
		try {
			// input is a valid URL:
			// eg: https://example.com, https://example.com/test?q=param
			return new URL(input).toString();
		} catch (err) {
			// input was not a valid URL
		}

		try {
			// input is a valid URL when http:// is added to the start:
			// eg: example.com, https://example.com/test?q=param
			const url: URL = new URL(`http://${input}`);
			// only if the hostname has a TLD/subdomain
			if (url.hostname.includes('.')) return url.toString();
		} catch (err) {
			// input was not valid URL
		}

		// input may have been a valid URL, however the hostname was invalid

		// Attempts to convert the input to a fully qualified URL have failed
		// Treat the input as a search query
		return template.replace('%s', encodeURIComponent(input));
	}

	onMount(async () => {
		// Register the service worker
		// navigator.serviceWorker.register('/uv.js', { scope: __uv$config.prefix }).then((reg) => {
		// 	if (reg.installing) {
		// 		const sw = reg.installing || reg.waiting;
		// 		sw.onstatechange = function () {
		// 			if (sw.state === 'installed') {
		// 				// SW installed.  Refresh page so SW can respond with SW-enabled page.
		// 				window.location.reload();
		// 			}
		// 		};
		// 	}
		// });
	});

	async function iframeSearch(embedURL: string) {
		let iframe: HTMLIFrameElement = document.getElementById('iframe') as HTMLIFrameElement;

		iframe.src = __uv$config.prefix + __uv$config.encodeUrl(search(embedURL));
	}

	// Get the slug of the URL
	const slug: string = $page.params.games;

	// Get the games from the api
	async function getGame(id: string) {
		const response: Response = await fetch(PUBLIC_API_BASE_URL + '/api/games/' + id);
		if (response.status === 404) {
			// Redirect to 404 page
			window.location.href = '/games/';
		}
		const game: Game = await response.json();
		return game;
	}

	// Fullscreen the iframe
	function fullScreen() {
		const iframe: HTMLIFrameElement = document.getElementById('iframe') as HTMLIFrameElement;
		iframe.requestFullscreen();
	}

	// Expand the iframe to fill the screen
	function expandiFrame() {
		const document: Document = window.document;
		const frame: HTMLIFrameElement = document.getElementById('iframe') as HTMLIFrameElement;

		document.body.style.overflow = 'hidden';
		// Settings required for the frame to fill the screen
		frame.style.position = 'fixed';
		frame.style.top = '0px';
		frame.style.bottom = '0px';
		frame.style.left = '0px';
		frame.style.right = '0px';
		frame.style.height = '100%';
		frame.style.width = '100%';
		frame.style.zIndex = '9999';
		frame.style.border = 'none';

		frame.classList.toggle('rounded-t-lg');
	}

	import Icon from '@iconify/svelte';
	import Tag from '$lib/components/Tag.svelte';

	import GoogleAds from '$lib/components/GoogleAds.svelte';
	let innerWidth: number = 0;

	let loadedFrame: boolean = false;
	let loadingGame: boolean = false;
	async function loadFrame() {
		loadedFrame = true;
		loadingGame = true;

		let game: Game;
		//  Get the game from the api
		await getGame(slug).then((data) => {
			game = data;
			// If the game has an embedURL search for it using the iframeSearch function
			if (game.embedURL != null) {
				iframeSearch(game.embedURL);
			}
		});

		// Just in case wait 5 seconds before removing the loading screen
		setTimeout(() => {
			loadedGame();
		}, 5000);
	}
	function loadedGame() {
		// Wait 0.5 second before removing the loading screen
		setTimeout(() => {
			loadingGame = false;
			// Remove the hidden class from the iframe
			const iframe: HTMLIFrameElement = document.getElementById('iframe') as HTMLIFrameElement;
			iframe.classList.remove('hidden');
		}, 500);

		// Add to the views
		fetch(PUBLIC_API_BASE_URL + '/api/games/' + slug + '/views', {
			method: 'POST'
		});
	}
</script>

<svelte:head>
	<script src="/uv/uv.bundle.js" defer></script>
	<script src="/uv/uv.config.js" defer></script>
	<script src="/uv.js" defer></script>
</svelte:head>

<svelte:window bind:innerWidth />

{#await getGame(slug) then game}
	<head>
		<title>Kazwire - {game.name}</title>
		<meta name="description" content="Play {game.name} for free now on Kazwire!" />
		<meta property="og:description" content="Play {game.name} for free now on Kazwire!" />
	</head>
	<div class="relative flex flex-row justify-center">
		<div
			class="float-left flex h-[calc(100vh-132px)] pb-5 sm:w-full md:w-[820px] lg:w-[1000px] xl:w-full"
		>
			<div class="align-center mb-14 flex-grow">
				<div id="frame" class="h-full w-full rounded-t-lg bg-white">
					{#if !loadedFrame}
						<div class="relative flex h-full items-center justify-center overflow-hidden">
							<img
								class="absolute z-20 h-full w-full object-cover opacity-60 blur-lg"
								src="/game/img/{game.image}"
								alt="Game"
							/>
							<div class="absolute z-10 h-full w-full rounded-t-lg bg-black" />

							<!-- Content on top of the image -->
							<div class="absolute z-30 flex flex-col items-center justify-center">
								<h1
									class="text-center text-3xl font-bold text-white sm:text-5xl md:text-5xl lg:text-8xl"
								>
									{game.name}
								</h1>

								<!-- Play now button -->
								<button class="lg:btn-xl btn mt-8" on:click={() => loadFrame()}>
									Play Now
									<Icon icon="carbon:play-filled" class="my-auto ml-1 inline-block" />
								</button>
							</div>
						</div>
					{:else}
						{#if loadingGame}
							<!-- Loading animation -->
							<div
								class="relative flex h-full items-center justify-center rounded-t-lg bg-black transition-all"
							>
								<div class="absolute z-30 flex flex-col items-center justify-center gap-8">
									<div class="flex flex-col items-center gap-8 sm:flex-row">
										<img src="/logo.png" alt="Loading" class="h-16 w-16" />
										<h1
											class="text-center text-3xl font-bold text-white sm:text-5xl md:text-5xl lg:text-8xl"
										>
											Kazwire
										</h1>
									</div>
									<Icon icon="line-md:loading-alt-loop" class="animate-spin text-6xl text-white" />
								</div>
							</div>
						{/if}
						<!-- Static game -->
						{#if game.embedURL == null && game.emulatorType == null}
							<iframe
								src={'/game/static/' + game.id + '/index.html'}
								class="hidden h-full w-full rounded-t-lg bg-white"
								id="iframe"
								title={game.name}
								on:load={() => loadedGame()}
							/>
							<!-- Ruffle game -->
						{:else if game.emulatorType == 'ruffle'}
							<iframe
								src={'/games/ruffle/' + game.id}
								class="hidden h-full w-full rounded-t-lg bg-white"
								id="iframe"
								title={game.name}
								on:load={() => loadedGame()}
							/>
							<!-- EmulatorJS game -->
						{:else if game.emulatorType == 'emulatorjs'}
							<iframe
								src={'/games/emulator/' + game.id}
								class="hidden h-full w-full rounded-t-lg bg-white"
								id="iframe"
								title={game.name}
							/>
							<!-- Proxied game -->
						{:else if game.embedURL != null}
							<iframe
								class="hidden h-full w-full rounded-t-lg bg-white"
								id="iframe"
								title={game.name}
								src="about:blank"
								on:load={() => loadedGame()}
							/>
						{/if}
					{/if}
				</div>

				<div
					class="relative mt-2 w-full items-center rounded-b-lg bg-tertiary text-black dark:bg-tertiaryDark dark:text-white"
				>
					<div class="float-right mr-5">
						<button class="mt-4 fill-white" on:click={() => fullScreen()}>
							<!-- Full screen -->
							<Icon class="h-6 w-6" icon="pixelarticons:aspect-ratio" />
						</button>
					</div>
					<div class="float-right mr-5">
						<button class="mt-4 fill-white" on:click={() => expandiFrame()}>
							<!-- Fill screen -->
							<Icon class="h-6 w-6" icon="pixelarticons:arrows-vertical" />
						</button>
					</div>
					<div class="float-right mr-5">
						<button id="heart" class="mt-4 fill-white">
							<!-- Heart -->
							<Icon class="h-6 w-6" icon="pixelarticons:heart" />
						</button>
					</div>
					<div class="flex">
						<!-- Logo -->
						<img src="/logo.png" alt="Logo" class="my-auto ml-4 h-6 w-6" />
						<!-- Name -->
						<div class="ml-2 truncate text-2xl font-bold leading-[3.5rem]">
							{game.name}
						</div>
					</div>
				</div>
			</div>
		</div>
		{#if innerWidth > 824}
			<GoogleAds slot="8673868840" />
		{/if}
	</div>

	<!-- Bottom area for displaying more information about the game -->
	<div
		class="rounded-lg bg-tertiary p-5 align-middle text-black dark:bg-tertiaryDark dark:text-white"
	>
		<h1 class="text-3xl font-bold">{game.name}</h1>
		<p class="text-gray-800 dark:text-gray-200">
			{game.developer}
		</p>
		<p class="mt-1">
			{game.description}
		</p>
		<!-- Line -->
		<div class="my-2 h-[2px] w-10 rounded-lg bg-gray-400 dark:bg-gray-700" />
		<div class="flex">
			<p class="text-gray-600 dark:text-gray-300">
				{game.views} Play{#if game.views != 1}s{/if}
			</p>
		</div>
		{#if game.tags.length > 0}
			<div class="mt-1 flex flex-row flex-wrap gap-2">
				{#each game.tags as tag}
					<Tag {tag} />
				{/each}
			</div>
		{/if}
	</div>
{:catch error}
	<p>{error.message}</p>
{/await}
