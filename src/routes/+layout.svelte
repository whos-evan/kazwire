<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import Icon from '@iconify/svelte';

	import '$lib/i18n'; // Import to initialize. Important :)
	import { locale, waitLocale } from 'svelte-i18n';
	import { _ } from 'svelte-i18n';
	import { isLoading } from 'svelte-i18n';

	export const load = async () => {
		if (browser) {
			locale.set(window.navigator.language);
		}
		await waitLocale();
	};

	import Analytics from '$lib/components/Google/Analytics.svelte';

	// Reset the layout for certain pages containing the url path
	const layoutResetPaths = ['/games/ruffle', '/games/emulator', '/school', '/embed'];
	let resetLayout = false;
	for (const path of layoutResetPaths) {
		if ($page.url.pathname.includes(path)) {
			resetLayout = true;
		}
	}

	// Function for cloaking the tab
	function getTitle() {
		const storedTitle = localStorage.getItem('title');
		if (storedTitle) {
			document.title = storedTitle;
		}
	}

	function getFavicon() {
		const storedFavicon: string = localStorage.getItem('favicon') || '';
		if (storedFavicon) {
			// Change favicon by creating a new link element
			let link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
			if (!link) {
				link = document.createElement('link');
				link.rel = 'icon';
				link.type = 'image/x-icon';
				link.href = storedFavicon;
				document.getElementsByTagName('head')[0].appendChild(link);
			} else {
				link.href = storedFavicon;
			}
		}
	}

	import { experiments } from '$lib/experiments';

	let numOfExperiments = 0;

	onMount(() => {
		getTitle();
		getFavicon();

		numOfExperiments = experiments.getNumberOfShownExperiments();

		(window.adsbygoogle = window.adsbygoogle || []).push({});

		// Add an event listener to see if the user presses control + shift + i
		document.addEventListener('keydown', (e) => {
			if (e.ctrlKey && e.shiftKey && e.key === 'I') {
				// Prevent default
				e.preventDefault();
				// Redirect the user if they are not already on the school page
				if (!window.location.href.includes('/school')) {
					window.location.href = '/school';
				} else {
					// Otherwise, just reload the page
					window.location.href = '/';
				}
			}
		});
	});

	let darkMode = true;

	function handleSwitchDarkMode() {
		darkMode = !darkMode;

		localStorage.setItem('theme', darkMode ? 'dark' : 'light');

		darkMode
			? document.documentElement.classList.add('dark')
			: document.documentElement.classList.remove('dark');
	}

	if (browser) {
		if (
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			document.documentElement.classList.add('dark');
			darkMode = true;
		} else {
			document.documentElement.classList.remove('dark');
			darkMode = false;
		}
	}

	let menuIsHidden = false;

	let windowWidth = 0;
</script>

<!-- https://codepen.io/hulyak/pen/yLbwXvB -->

<svelte:window bind:innerWidth={windowWidth} />

<Analytics />

{#if resetLayout}
	<slot />
{:else if !$isLoading}
	<div class="z-[10000] bg-white dark:bg-black">
		<div class="fixed z-50 w-full">
			<nav
				class="flex w-full flex-wrap items-center justify-between bg-secondary bg-opacity-90 px-4 py-4 text-lg text-white md:py-0"
			>
				<div class="align-items-center mb-auto mt-auto flex-col">
					<a href="/" class="flex items-center justify-center">
						<img id="logo" src="/logo.png" class="inline-block h-16 p-3" alt="Kazwire Logo" />
						<div class="flex items-center gap-[6px]">
							<span
								class="hidden whitespace-nowrap align-middle text-2xl font-semibold text-white lg:inline-block"
								>Kazwire</span
							>
							<!-- Beta icon
							<span
								class="mt-1 inline-block text-xs font-semibold uppercase tracking-widest text-gray-300"
								>Beta</span
							> -->
						</div>
					</a>
				</div>

				{#if windowWidth < 784}
					<button
						aria-label="Hamburger Menu Dropdown"
						on:click={() => (menuIsHidden = !menuIsHidden)}
					>
						<Icon class="h-6 w-6" icon="pixelarticons:menu" />
					</button>
				{/if}

				{#if menuIsHidden || windowWidth > 784}
					<div class="z-50 w-full md:flex md:w-auto md:items-center" id="menu">
						<ul class="pt-4 text-base text-white md:flex md:justify-between md:pt-0">
							<li class="m-auto">
								<a class="block py-2 hover:text-primary md:p-4" href="/search" data-sveltekit-reload
									>{$_('search')}</a
								>
							</li>
							<li class="m-auto">
								<a class="block py-2 hover:text-primary md:p-4" href="/games" data-sveltekit-reload
									>{$_('games')}</a
								>
							</li>
							<li class="m-auto">
								<a class="block py-2 hover:text-primary md:p-4" href="/apps" data-sveltekit-reload
									>{$_('apps')}</a
								>
							</li>
							<li class="m-auto">
								<a
									class="block py-2 hover:text-primary md:p-4"
									href="/settings"
									data-sveltekit-reload>{$_('settings')}</a
								>
							</li>
							<li class="m-auto">
								<a
									class="block py-2 hover:text-primary md:p-4"
									href="/discord/prompt"
									data-sveltekit-reload>{$_('support')}</a
								>
							</li>
							<!-- <li class="m-auto">
								<a
									class="block py-2 hover:text-primary md:p-4"
									href="/account"
									data-sveltekit-reload>Sign Up</a
								>
							</li> -->
							<li class="m-auto">
								<button
									id="theme-selector"
									class="rounded-full bg-secondary p-2 font-bold text-white transition duration-100 hover:scale-[105%]"
									on:click={() => handleSwitchDarkMode()}
								>
									{#if darkMode}
										<Icon class="h-6 w-6" icon="pixelarticons:moon" />
									{:else}
										<Icon class="h-6 w-6" icon="pixelarticons:sun-alt" />
									{/if}
								</button>
							</li>
						</ul>
					</div>
				{/if}
			</nav>
		</div>

		{#if windowWidth > 768}
			<padding class="flex h-20 w-full" />
		{:else}
			<padding class="flex h-28 w-full" />
		{/if}

		{#if $locale == 'ar'}
			<div class="mx-8 min-h-[90vh]" dir="rtl">
				<slot />
			</div>
		{:else}
			<div class="mx-8 min-h-[90vh]">
				<slot />
			</div>
		{/if}

		<!-- https://flowbite.com/docs/components/footer/ -->
		<footer class="mt-10 bg-secondary p-4 sm:p-6">
			<div class="md:flex md:justify-between">
				<div class="mb-6 md:mb-0">
					<a href="https://kazwire.com/" class="mb-2 flex items-center">
						<img src="/logo.png" class="mr-3 h-8" alt="Kazwire Logo" />
						<span class="self-center whitespace-nowrap text-2xl font-semibold text-white"
							>Kazwire</span
						>
					</a>
					<a
						href="/about-the-developers"
						class="text-md flex self-center text-white hover:underline"
					>
						{$_('credit')}
					</a>
					{#if numOfExperiments > 0}
						<a
							href="/settings#experiments"
							class="text-md mt-2 flex flex-col self-center rounded-lg bg-green-500 px-2 py-1 text-white hover:underline"
						>
							{numOfExperiments} experiment{#if numOfExperiments > 1}s{/if} running
						</a>
					{/if}
				</div>
				<div class="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6">
					<div>
						<h2 class="mb-6 text-sm font-semibold uppercase text-white">{$_('resources')}</h2>
						<ul class="text-white">
							<li class="mb-4">
								<a href="/embed" data-sveltekit-reload class="hover:underline">{$_('embed_kazwire')}</a>
							</li>
							<li class="mb-4">
								<a href="/request" class="hover:underline">{$_('request_a_game')}</a>
							</li>
							<li class="mb-4">
								<a href="/discord/prompt" class="hover:underline">{$_('get_support')}</a>
							</li>
							<li class="mb-4">
								<a href="/faq" class="hover:underline">{$_('faq')}</a>
							</li>
							<li>
								<a href="/final-grade" class="hover:underline">{$_('final_grade_calculator')}</a>
							</li>
						</ul>
					</div>
					<div>
						<h2 class="mb-6 text-sm font-semibold uppercase text-white">{$_('online_services')}</h2>
						<ul class="text-white">
							<li class="mb-4">
								<a href="/search" class="hover:underline">{$_('search')}</a>
							</li>
							<li class="mb-4">
								<a href="/games" class="hover:underline">{$_('games')}</a>
							</li>
							<li>
								<a href="/apps" class="hover:underline">{$_('apps')}</a>
							</li>
						</ul>
					</div>
					<div>
						<h2 class="mb-6 text-sm font-semibold uppercase text-white">{$_('legal')}</h2>
						<ul class="text-white">
							<li class="mb-4">
								<a href="/legal/privacy-policy" class="hover:underline">{$_('privacy_policy')}</a>
							</li>
							<li class="mb-4">
								<a href="/legal/tos" class="hover:underline">{$_('terms_and_conditions')}</a>
							</li>
							<li>
								<a href="/legal/dmca" class="hover:underline">{$_('dmca')}</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<hr class="my-6 border-gray-300 sm:mx-auto lg:my-8" />
			<div class="sm:flex sm:items-center sm:justify-between">
				<span class="text-sm text-white sm:text-center"
					>© 2023 <a href="https://kazwire.com/" class="hover:underline">Kazwire</a>
				</span>
				<div class="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
					<a href="https://discord.gg/FEkFSWRFM9" class="text-white hover:text-primary">
						<Icon class="h-5 w-5" icon="akar-icons:discord-fill" />
						<span class="sr-only">Discord server</span>
					</a>
					<a href="https://github.com/whos-evan/kazwire" class="text-white hover:text-primary">
						<Icon class="h-5 w-5" icon="akar-icons:github-fill" />
						<span class="sr-only">GitHub</span>
					</a>
				</div>
			</div>
		</footer>
	</div>
{/if}
