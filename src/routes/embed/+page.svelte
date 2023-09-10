<script lang="ts" context="module">
	declare var __uv$config: any;
</script>

<script lang="ts">
	import Icon from '@iconify/svelte';
	import { onMount } from 'svelte';

	import { page } from '$app/stores';

	let searchQuery: string = $page.url.searchParams.get('search') || '';
	let contentTitle: string = 'Nothing yet...';

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

	function registerServiceWorker() {
		// Register the service worker
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
	}

	onMount(async () => {
		// Check if they are using brave
		if (navigator.brave) {
			showErrorScreen = true;
		}

		registerServiceWorker();
	});

	function loadContent() {
		showScreen = true;
		showLoadingScreen = true;

		iframeSearch();

		// Increment the loading bar every 100ms
		let interval = setInterval(() => {
			percentDone += 1;
			if (percentDone >= 100) {
				clearInterval(interval);
			}
		}, 45);

		// Wait 5 seconds before loading the iframe
		setTimeout(() => {
			showLoadingScreen = false;
			let iframe: HTMLIFrameElement = document.getElementById('iframe') as HTMLIFrameElement;
			iframe.classList.remove('opacity-0');
			let frame: HTMLIFrameElement = document.getElementById('frame') as HTMLIFrameElement;
			frame.classList.remove('hidden');
		}, 5000);
	}

	async function iframeSearch() {
		navigator.serviceWorker.getRegistrations().then((registrations) => {
			if (registrations.length === 0) {
				// Service worker is not installed so register it
				registerServiceWorker();
			}
		});

		// Get the iframe
		let iframe: HTMLIFrameElement = document.getElementById('iframe') as HTMLIFrameElement;

		// Set the iframe source to the search query
		iframe.src = __uv$config.prefix + __uv$config.encodeUrl(search(searchQuery));
	}

	// Fullscreen the iframe
	function fullScreen() {
		const iframe: HTMLIFrameElement = document.getElementById('iframe') as HTMLIFrameElement;
		iframe.requestFullscreen();
	}

	function reloadiFrame() {
		const iframe: HTMLIFrameElement = document.getElementById('iframe') as HTMLIFrameElement;
		// add the spin animation to the button
		const reloadButton: HTMLButtonElement = document.getElementById('reload') as HTMLButtonElement;
		reloadButton.classList.add('animate-spin');

		iframe.contentWindow?.location.reload();

		// remove the spin animation from the button after 1 second
		setTimeout(() => {
			reloadButton.classList.remove('animate-spin');
		}, 500);
	}

	let innerWidth: number = 0;
	let showScreen: boolean = false;
	let showLoadingScreen: boolean = false;
	let showErrorScreen: boolean = false;
	let percentDone: number = 0;

	let mousePos: { x: number; y: number } = { x: 0, y: 0 };
</script>

<svelte:window bind:innerWidth on:mousemove={(e) => (mousePos = { x: e.clientX, y: e.clientY })} />

<svelte:head>
	<title>Kazwire - Search Freely Embeded</title>
	<meta name="description" content="Search freely with Kazwire with an embed!" />
	<meta property="og:description" content="Search freely with Kazwire with an embed!" />
	<script src="/uv/uv.bundle.js" defer></script>
	<script src="/uv/uv.config.js" defer></script>
	<script src="/uv.js" defer></script>
</svelte:head>

<div class="relative flex flex-row justify-center">
	<div class="float-left flex h-[100vh] w-full pb-2">
		<div class="align-center mb-14 flex-grow">
			{#if showErrorScreen}
				<div class="relative flex h-full items-center justify-center bg-primary">
					<div class="absolute z-30 flex flex-col items-center justify-center gap-8">
						<div class="flex flex-col items-center gap-8 sm:flex-row">
							<img src="/logo.png" alt="Loading" class="h-24 w-24" />
							<h1
								class="text-center text-3xl font-bold text-white sm:text-5xl md:text-5xl lg:text-8xl"
							>
								Kazwire
							</h1>
						</div>
						<p class="text-center text-2xl text-white">An error occured while loading the page.</p>
					</div>
				</div>
			{:else if searchQuery == ''}
				<!-- Tutorial on how to embed this on any site-->
				<div class="relative flex h-full items-center justify-center bg-primary">
					<div class="absolute z-30 flex flex-col items-center justify-center gap-8">
						<div class="flex flex-col items-center gap-8 sm:flex-row">
							<img src="/logo.png" alt="Loading" class="h-24 w-24" />
							<h1
								class="text-center text-3xl font-bold text-white sm:text-5xl md:text-5xl lg:text-8xl"
							>
								Kazwire
							</h1>
						</div>
						<p class="text-center text-2xl text-white">
							To embed this on your site, add this code to your site:
						</p>
						<div class="rounded-lg bg-white p-4">
							<div
								style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"
							>
								<pre style="margin: 0; line-height: 125%"><span style="color: #007700"
										>&lt;iframe</span
									>
<span style="color: #0000CC">src=</span><span style="background-color: #fff0f0"
										>&quot;https://kazwire.com/embed?search=SEARCH_QUERY_HERE&quot;</span
									>
<span style="color: #0000CC">width=</span><span style="background-color: #fff0f0"
										>&quot;100%&quot;</span
									>
<span style="color: #0000CC">height=</span><span style="background-color: #fff0f0"
										>&quot;100%&quot;</span
									>
<span style="color: #0000CC">frameborder=</span><span style="background-color: #fff0f0"
										>&quot;0&quot;</span
									>
<span style="color: #0000CC">allowfullscreen</span>
<span style="color: #007700">/&gt;</span>
</pre>
							</div>
						</div>
					</div>
				</div>
			{:else if !showScreen}
				<div class="relative flex h-full items-center justify-center overflow-hidden">
					<img class="absolute z-20 h-full w-full object-cover opacity-60 blur-lg" alt="Game" />
					<div class="absolute z-10 h-full w-full bg-primary" />

					<!-- Content on top of the image -->
					<div class="absolute z-30 flex flex-col items-center justify-center">
						<div class="flex flex-col items-center gap-8 sm:flex-row">
							<img src="/logo.png" alt="Loading" class="h-24 w-24" />
							<h1
								class="text-center text-3xl font-bold text-white sm:text-5xl md:text-5xl lg:text-8xl"
							>
								Kazwire
							</h1>
						</div>

						<!-- Play now button -->
						<button class="lg:btn-xl btn mt-8" on:click={() => loadContent()}>
							Start Now
							<Icon icon="carbon:play-filled" class="my-auto ml-1 inline-block" />
						</button>
					</div>
				</div>
			{:else if showLoadingScreen}
				<div class="relative flex h-full items-center justify-center bg-primary transition-all">
					<div class="absolute z-30 flex flex-col items-center justify-center gap-8">
						<div class="flex flex-col items-center gap-8 sm:flex-row">
							<img src="/logo.png" alt="Loading" class="h-24 w-24" />
							<h1
								class="text-center text-3xl font-bold text-white sm:text-5xl md:text-5xl lg:text-8xl"
							>
								Kazwire
							</h1>
						</div>
						<p class="text-center text-2xl text-white">Browse for free now with Kazwire!</p>
						<div class="h-2.5 w-full rounded-full bg-gray-100">
							<div
								class="h-2.5 rounded-full bg-secondary transition-all"
								style="width: {percentDone}%"
							/>
						</div>
					</div>
				</div>
			{/if}

			<div id="frame" class="hidden h-full w-full bg-gray-100">
				<iframe class="h-full w-full bg-gray-100 opacity-0" id="iframe" title="Search frame" />
			</div>

			<div
				class="relative w-full items-center bg-tertiary py-1 text-black dark:bg-tertiaryDark dark:text-white"
			>
				<div class="float-right mr-5">
					<button class="mt-4 fill-white" on:click={() => fullScreen()}>
						<!-- Full screen -->
						<Icon class="h-6 w-6" icon="ic:baseline-fullscreen" />
					</button>
				</div>
				<div class="float-right mr-5">
					<button
						id="reload"
						class="mt-4 fill-white active:animate-spin"
						on:click={() => reloadiFrame()}
					>
						<Icon class="h-6 w-6" icon="mdi:reload" />
					</button>
				</div>
				<div class="flex">
					<img src="/logo.png" alt="Logo" class="my-auto ml-4 h-6 w-6" />
					<!-- TODO: Setup dynamic title change based on iFrame's content title -->
					<div class="ml-2 truncate text-2xl font-bold leading-[3.5rem]">Kazwire.com</div>
				</div>
			</div>
		</div>
	</div>
</div>
