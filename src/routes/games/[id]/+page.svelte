<script lang="ts" context="module">
	declare var __uv$config: any;
</script>

<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;

	import { PUBLIC_API_BASE_URL } from '$env/static/public';
	import { config } from '$lib/config';

	import { onMount } from 'svelte';

	import { enhance } from '$app/forms';

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

	function encodeURL(url: string): string {
		if (!browser) {
			return url;
		}
		// check if the service worker is installed
		navigator.serviceWorker.getRegistrations().then((registrations) => {
			if (registrations.length === 0) {
				// Service worker is not installed so register it
				registerServiceWorker();
			}
		});

		return __uv$config.prefix + __uv$config.encodeUrl(search(url));
	}

	let canShare: boolean = false;
	onMount(async () => {
		// Initialize bare-mux (v3 approach)
		try {
			// Dynamic import for bare-mux using ESM
			// @ts-ignore - BareMux types not available
			const { BareMuxConnection } = await import('@mercuryworkshop/bare-mux');
			const connection = new BareMuxConnection('/baremux/worker.js');

			// Set the transport to use epoxy with relative WebSocket path
			const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
			const wsUrl = `${protocol}//${window.location.host}/wisp/`;
			await connection.setTransport('/epoxy/index.mjs', [{ wisp: wsUrl }]);

			console.log('Bare-mux initialized successfully');
		} catch (err) {
			console.error('Failed to initialize bare-mux:', err);
		}

		let interval = setInterval(async () => {
			// @ts-ignore
			if (navigator && __uv$config.prefix) {
				//@ts-ignore
				navigator.serviceWorker.register('/uv.js', { scope: __uv$config.prefix }).then((reg) => {
					if (reg.installing) {
						const sw = reg.installing || reg.waiting;
						sw.onstatechange = function () {
							if (sw.state === 'installed') {
								// SW installed.  Refresh page so SW can respond with SW-enabled page.
								window.location.reload();
							}
						};
					}
				});

				clearInterval(interval);
			}
		}, 500);

		// Check if the browser supports the share API
		if (navigator.canShare({ url: window.location.href })) {
			canShare = true;
		}

		// Fire event when its finished rendering
		const event = new CustomEvent('rendered', {
			detail: {
				name: 'game',
				id: data.game.id
			}
		});

		window.dispatchEvent(event);
	});

	// Fullscreen the iframe
	function fullScreen() {
		const iframe: HTMLIFrameElement = document.getElementById('iframe') as HTMLIFrameElement;
		iframe.requestFullscreen();
	}

	let expanded: boolean = false;
	// Expand the iframe to fill the screen
	function expandiFrame(): void {
		if (!loadedFrame) {
			return;
		}

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
		frame.style.zIndex = '500';
		frame.style.border = 'none';

		frame.classList.toggle('rounded-t-lg');

		expanded = true;
	}

	function shrinkiFrame() {
		const document: Document = window.document;
		const frame: HTMLIFrameElement = document.getElementById('iframe') as HTMLIFrameElement;

		document.body.style.overflow = 'auto';
		// Settings required for the frame to fill the screen
		frame.style.position = 'relative';
		frame.style.top = '0px';
		frame.style.bottom = '0px';
		frame.style.left = '0px';
		frame.style.right = '0px';
		frame.style.height = '100%';
		frame.style.width = '100%';
		frame.style.zIndex = '9999';
		frame.style.border = 'none';

		frame.classList.toggle('rounded-t-lg');

		expanded = false;
	}

	import Icon from '@iconify/svelte';
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import Vert from '$lib/components/Google/Vert.svelte';
	import Vert2 from '$lib/components/Google/Vert2.svelte';
	import Leaderboard from '$lib/components/Google/Leaderboard.svelte';

	let innerWidth: number = 0;

	let loadedFrame: boolean = false;
	let loadingGame: boolean = false;
	async function loadFrame() {
		loadedFrame = true;
		loadingGame = true;
		// Just in case wait 5 seconds before removing the loading screen
		setTimeout(() => {
			loadedGame();
		}, 5000);

		// scroll 104 pixels down 3 second after the page loads
		// if and only if the user has not scrolled down
		if (window.scrollY === 0) {
			window.scrollTo({
				top: 104,
				behavior: 'smooth'
			});
		}
	}

	function addView() {
		// Add to the views
		fetch(PUBLIC_API_BASE_URL + '/api/games/' + data.game.id + '/views', {
			method: 'POST'
		});
	}

	function loadedGame() {
		// Wait 0.5 second before removing the loading screen
		setTimeout(() => {
			// Remove the hidden class from the iframe
			const iframe: HTMLIFrameElement = document.getElementById('iframe') as HTMLIFrameElement;
			iframe.classList.remove('opacity-0');

			loadingGame = false;
		}, 500);
	}
</script>

<svelte:window bind:innerWidth />
<svelte:head>
	<title>{config.branding.name} - {data.game.name}</title>
	<meta property="og:title" content="{config.branding.name} - {data.game.name}" />
	<meta
		name="description"
		content="Play {data.game.name} for free now on {config.branding.name}!"
	/>
	<meta
		property="og:description"
		content="Play {data.game.name} for free now on {config.branding.name}!"
	/>

	<script src="/uv/uv.bundle.js"></script>
	<script src="/uv/uv.config.js"></script>
	<script src="/uv.js"></script>
</svelte:head>

{#if expanded}
	<!-- Button to shrink the iframe -->
	<button
		class="absolute left-0 top-0 z-[5000] m-4 rounded-full bg-secondary p-2 opacity-40"
		on:click={() => shrinkiFrame()}
	>
		<Icon class="h-6 w-6 text-secondary-content" icon="ic:round-compress" />
	</button>
{/if}

<div class="relative flex flex-row justify-center">
	<div class="float-left flex h-[calc(94vh-132px)] sm:w-full md:w-[820px] lg:w-[1000px] xl:w-full">
		{#if innerWidth > 1424}
			<Vert2 />
		{/if}
		<div class="align-center mb-14 flex-grow">
			<div id="frame" class="h-full w-full rounded-t-lg bg-white">
				{#if !loadedFrame}
					<div class="relative flex h-full items-center justify-center overflow-hidden">
						<img
							class="absolute z-20 h-full w-full object-cover opacity-60 blur-lg"
							src="/cdn/game/img/{data.game.image}"
							alt="Game"
						/>
						<div class="absolute z-10 h-full w-full rounded-t-lg bg-black" />

						<!-- Content on top of the image -->
						<div class="absolute z-30 flex flex-col items-center justify-center">
							<h1
								class="text-center text-3xl font-bold text-white sm:text-5xl md:text-5xl lg:text-8xl"
							>
								{data.game.name}
							</h1>

							<!-- Play now button -->
							<button
								class="btn btn-primary btn-xs mt-8 sm:btn-sm md:btn-md lg:btn-lg"
								on:click={() => addView()}
								on:click={() => loadFrame()}
							>
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
										{config.branding.name}
									</h1>
								</div>
								<Icon icon="line-md:loading-alt-loop" class="animate-spin text-6xl text-white" />
							</div>
						</div>
					{/if}
					<!-- Static game -->
					{#if data.game.embedURL == null && data.game.emulatorType == null}
						<iframe
							src={'/cdn/game/static/' + data.game.id + '/index.html'}
							class="h-full w-full rounded-t-lg bg-white opacity-0"
							id="iframe"
							title={data.game.name}
							on:load={() => loadedGame()}
						/>
						<!-- Ruffle game -->
					{:else if data.game.emulatorType == 'ruffle'}
						<iframe
							src={'/games/ruffle/' + data.game.id}
							class="h-full w-full rounded-t-lg bg-white opacity-0"
							id="iframe"
							title={data.game.name}
							on:load={() => loadedGame()}
						/>
						<!-- EmulatorJS game -->
					{:else if data.game.emulatorType == 'emulatorjs'}
						<iframe
							src={'/games/emulator/' + data.game.id}
							class="h-full w-full rounded-t-lg bg-white opacity-0"
							id="iframe"
							title={data.game.name}
						/>
						<!-- Proxied game -->
					{:else if data.game.embedURL != null}
						<iframe
							class="h-full w-full rounded-t-lg bg-white opacity-0"
							id="iframe"
							title={data.game.name}
							src={encodeURL(data.game.embedURL)}
							on:load={() => loadedGame()}
						/>
					{/if}
				{/if}
			</div>

			<div class="relative mt-2 w-full items-center rounded-b-lg bg-base-300 text-base-content">
				<div class="float-right mr-5">
					<button class="mt-4 fill-white" on:click={() => fullScreen()}>
						<!-- Full screen -->
						<Icon class="h-6 w-6" icon="ic:baseline-fullscreen" />
					</button>
				</div>
				<div class="float-right mr-5">
					<button class="mt-4" on:click={() => expandiFrame()}>
						<!-- Fill screen -->
						<Icon class="h-6 w-6" icon="ic:round-expand" />
					</button>
				</div>
				<div class="float-right mr-5">
					<form method="POST" use:enhance>
						<button id="heart" class="mt-4" formaction="?/love">
							<!-- Heart -->
							<!-- if the loved_games array includes the game id show the heart -->
							{#if data.loved_games !== undefined && data.loved_games.includes(data.game.id)}
								<Icon class="h-6 w-6 text-red-500" icon="mdi:heart" />
							{:else}
								<Icon class="h-6 w-6" icon="mdi:heart-outline" />
							{/if}
						</button>
					</form>
				</div>
				<div class="flex">
					<!-- Logo -->
					<img src="/logo.png" alt="Logo" class="my-auto ml-4 h-6 w-6" />
					<!-- Name -->
					<div class="ml-2 truncate text-2xl font-bold leading-[3.5rem]">
						{data.game.name}
					</div>
				</div>
			</div>
		</div>
		{#if innerWidth > 1224}
			<Vert />
		{/if}
	</div>
</div>

{#if innerWidth >= 728}
	<Leaderboard />
{/if}

<!-- Bottom area for displaying more information about the game -->
<!-- Center the div -->
<div class="flex justify-center pt-4 sm:pt-4 md:pt-0 lg:pt-0 xl:pt-0">
	<div
		class="rounded-lg bg-base-300 p-5 align-middle text-base-content sm:w-full md:w-[820px] lg:w-[1000px] xl:w-full"
	>
		<h1 class="text-3xl font-bold">{data.game.name}</h1>
		<p>
			{data.game.developer}
		</p>
		<p class="mt-1">
			{data.game.description}
		</p>
		<!-- Line -->
		<div class="my-2 h-[2px] w-10 rounded-lg bg-primary" />
		<div class="flex">
			<p>
				{data.game.views} Play{#if data.game.views != 1}s{/if}
			</p>
		</div>
		{#if data.game.tags.length > 0}
			<div class="mt-1 flex flex-row flex-wrap gap-2" />
		{/if}
		{#if canShare}
			<button
				class="btn btn-primary mt-4"
				on:click={() => navigator.share({ url: window.location.href })}
			>
				Share
				<Icon icon="mdi:share-variant" class="text-xl" />
			</button>
		{/if}
	</div>
</div>
