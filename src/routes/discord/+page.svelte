<script lang="ts" context="module">
	declare var __uv$config: any;
</script>

<script lang="ts">
	import { onMount } from 'svelte';

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
		if (!navigator.serviceWorker) throw new Error("Your browser doesn't support service workers.");

		await navigator.serviceWorker.register('/uv.js', {
			scope: __uv$config.prefix
		});
	});

	async function iframeSearch(embedURL: string) {
		let iframe: HTMLIFrameElement = document.getElementById('iframe') as HTMLIFrameElement;

		iframe.src = __uv$config.prefix + __uv$config.encodeUrl(search(embedURL));
	}

	// Fullscreen the iframe
	function fullScreen() {
		const iframe: HTMLIFrameElement = document.getElementById('iframe') as HTMLIFrameElement;
		iframe.requestFullscreen();
	}

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

	let name = "Kazwire's Discord - .gg/tPynKdd3nv";

	onMount(async () => {
		iframeSearch('https://discord.com/servers/kazchat-785577600219086881');
	});
</script>

<svelte:head>
	<script src="/uv/uv.bundle.js" defer></script>
	<script src="/uv/uv.config.js" defer></script>
	<script src="/uv.js" defer></script>
</svelte:head>

<head>
	<title>Kazwire - {name}</title>
	<meta name="description" content="Play {name} for free now on Kazwire!" />
	<meta property="og:description" content="Play {name} for free now on Kazwire!" />
</head>
<div class="relative flex flex-row justify-center">
	<div
		class="float-left flex h-[calc(100vh-132px)] pb-5 sm:w-full md:w-[820px] lg:w-[1000px] xl:w-full"
	>
		<div class="align-center mb-14 flex-grow">
			<div id="frame" class="h-full w-full rounded-t-lg bg-white">
				<iframe
					class="h-full w-full rounded-t-lg bg-white"
					id="iframe"
					title={name}
					src="about:blank"
				/>
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
				<div class="flex">
					<img src="/logo.png" alt="Logo" class="my-auto ml-4 h-6 w-6" />
					<div class="ml-2 truncate text-2xl font-bold leading-[3.5rem]">
						{name}
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
