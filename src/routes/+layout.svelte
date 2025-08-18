<script lang="ts">
	import Footer from '$lib/components/Footer/Footer.svelte';
	import Nav from '$lib/components/Nav/Nav.svelte';
	import Gtm from '$lib/components/Collection/GTM.svelte';
	import { afterNavigate } from '$app/navigation';
	import { browser } from '$app/environment';
	import { config } from '$lib/config';
	import '../app.css';
	import customMessage from '$lib/console';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	import SearchBar from '$lib/components/SearchBar.svelte';
	import { fade } from 'svelte/transition';
	import { themeChange } from 'theme-change';

	afterNavigate(() => {
		if (browser) {
			let tabName = localStorage.getItem('tabName');
			let tabIcon = localStorage.getItem('tabIcon');

			if (tabName) document.getElementsByTagName('title')[0].innerText = tabName;
			if (tabIcon) (document.getElementById('favicon') as HTMLLinkElement).href = tabIcon;
		}
	});

	let theme = '';

	// if control  + k is pressed, focus the search bar and ensure the browser doesn't do anything
	onMount(() => {
		customMessage();

		window.addEventListener('keydown', (e) => {
			if (browser) {
				let panicKey = localStorage.getItem('panicKey');
				let panicLink = localStorage.getItem('panicLink');

				if (e.key == panicKey) location.assign(panicLink as string);
			}

			if (e.ctrlKey && e.key === 'k') {
				e.preventDefault();
				if (window.searchBar === undefined) {
					return;
				}

				if (window.searchBar.open) {
					window.searchBar.close();
				} else {
					window.searchBar.showModal();
				}
			}
		});

		themeChange(false);
	});

	// Reset the layout for certain pages containing the url path
	const layoutResetPaths = ['/games/ruffle', '/games/emulator'];
	let resetLayout = false;
	for (const path of layoutResetPaths) {
		if ($page.url.pathname.includes(path)) {
			resetLayout = true;
		}
	}
</script>

<svelte:head>
	<link
		href="https://fonts.googleapis.com/css2?family={config.fonts
			.googleFont}:wght@100;200;300;400;500;600;700;800;900&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<Gtm gtmId={config.analytics.gtmID} />

{#if !resetLayout}
	<Nav />
{/if}

{#if !resetLayout}
	<div class="min-h-[100vh] w-full bg-base-100 p-5 font-main">
		{#if config.features.searchBar}
			<dialog id="searchBar" class="modal">
				<form method="dialog" class="modal-box h-fit" in:fade out:fade={{ duration: 50 }}>
					<SearchBar />
				</form>
				<form method="dialog" class="modal-backdrop">
					<button>close</button>
				</form>
			</dialog>
		{/if}
		<slot />
	</div>
{:else}
	<slot />
{/if}

{#if !resetLayout}
	<Footer />
{/if}
