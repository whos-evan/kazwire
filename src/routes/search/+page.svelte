<script lang="ts" context="module">
	declare var __uv$config: any;
</script>

<script lang="ts">
	import Icon from '@iconify/svelte';
	import { onMount } from 'svelte';

	let searchQuery: string = '';
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

	import { experiments } from '$lib/experiments';

	let searchAds: boolean;

	onMount(async () => {
		// Ads experiment
		experiments.fetchOrCreateExperimentData(
			'searchAds',
			'2023-08-01',
			'Adjusts the level of ads shown on the search page.',
			85,
			true
		);
		searchAds = experiments.shouldShow('searchAds');

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
	});

	async function iframeSearch() {
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

	// Updates the title of the page to the title of the iframe
	function checkTitle() {
		const iframe: HTMLIFrameElement = document.getElementById('iframe') as HTMLIFrameElement;
		contentTitle = iframe.contentDocument?.title || 'Nothing yet...';
	}

	import Vert from '$lib/components/Google/Vert.svelte';
	import Horz from '$lib/components/Google/Horz.svelte';
	import Leaderboard from '$lib/components/Google/Leaderboard.svelte';
	let innerWidth: number = 0;
</script>

<svelte:window bind:innerWidth />

<svelte:head>
	<title>Kazwire - Search Freely</title>
	<meta name="description" content="Search freely with Kazwire!" />
	<meta property="og:description" content="Search freely with Kazwire!" />
	<script src="/uv/uv.bundle.js" defer></script>
	<script src="/uv/uv.config.js" defer></script>
	<script src="/uv.js" defer></script>
</svelte:head>

<!-- Search bar -->
<div class="mb-6 flex justify-center">
	<form
		class="flex flex-col justify-center space-x-0 space-y-2 md:flex-row md:space-x-2 md:space-y-0"
	>
		<input
			class="focus:shadow-outline h-10 rounded-lg border px-3 text-base placeholder-gray-600"
			type="text"
			placeholder="Search for your favorites..."
			bind:value={searchQuery}
		/>
		<button class="btn" type="submit" on:click={async () => await iframeSearch()}> Search </button>
	</form>
</div>

<div class="relative flex flex-row justify-center">
	<div
		class="float-left flex h-[calc(80vh-132px)] pb-5 sm:w-full md:w-[820px] lg:w-[1000px] xl:w-full"
	>
		{#if innerWidth > 1300 && searchAds}
			<Vert />
		{/if}
		<div class="align-center mb-14 flex-grow">
			<div id="frame" class="h-full w-full rounded-t-lg bg-white">
				<iframe
					class="h-full w-full rounded-t-lg bg-white"
					id="iframe"
					title="Search frame"
					on:load={() => checkTitle()}
				/>
			</div>

			<div
				class="relative mt-2 w-full items-center rounded-b-lg bg-tertiary text-black dark:bg-tertiaryDark dark:text-white"
			>
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
					<div class="ml-2 truncate text-2xl font-bold leading-[3.5rem]">{contentTitle}</div>
				</div>
			</div>
		</div>
	</div>
	{#if innerWidth > 824 && searchAds}
		<Vert />
	{/if}
</div>

{#if innerWidth > 730 && searchAds}
	<Leaderboard />
{:else}
	<Horz />
{/if}
