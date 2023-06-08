<script lang="ts">
	import '../app.css';
	import { browser } from '$app/environment';
	import Icon from '@iconify/svelte';

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

<div class="bg-primary dark:bg-black">
	<div class="fixed z-20 w-full px-5 py-5">
		<nav
			class="flex w-full flex-wrap items-center justify-between rounded-lg bg-secondary bg-opacity-90 px-4 py-4 text-lg text-white shadow-md shadow-black dark:shadow-white md:py-0"
		>
			<div class="align-items-center mb-auto mt-auto flex-col">
				<a href="/">
					<img id="logo" src="/logo.png" class="inline-block h-16 p-3" alt="Kazwire Logo" />
					<span
						class="hidden whitespace-nowrap align-middle text-2xl font-semibold text-white lg:inline-block"
						>Kazwire</span
					>
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
				<div class="w-full md:flex md:w-auto md:items-center" id="menu">
					<ul class="pt-4 text-base text-white md:flex md:justify-between md:pt-0">
						<li class="m-auto">
							<a class="block py-2 hover:text-primary md:p-4" href="/search" data-sveltekit-reload>Search</a>
						</li>
						<li class="m-auto">
							<a class="block py-2 hover:text-primary md:p-4" href="/games" data-sveltekit-reload>Games</a>
						</li>
						<li class="m-auto">
							<a class="block py-2 hover:text-primary md:p-4" href="/apps" data-sveltekit-reload>Apps</a>
						</li>
						<li class="m-auto">
							<a class="block py-2 hover:text-primary md:p-4" href="/settings" data-sveltekit-reload>Settings</a>
						</li>
						<li class="m-auto">
							<a class="block py-2 hover:text-primary md:p-4" href="/discord" data-sveltekit-reload>Support/Discord</a>
						</li>
						<li class="m-auto">
							<a class="block py-2 hover:text-primary md:p-4" href="/account" data-sveltekit-reload>Sign Up</a>
						</li>
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
		<padding class="flex h-28 w-full" />
	{:else}
		<padding class="flex h-36 w-full" />
	{/if}

	<div class="mx-8 min-h-[90vh]">
		<slot />
	</div>

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
				<a href="/about-the-developers" class="text-md self-center text-white hover:underline">
					Made with ❤️ by evan
				</a>
			</div>
			<div class="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6">
				<div>
					<h2 class="mb-6 text-sm font-semibold uppercase text-white">Resources</h2>
					<ul class="text-white">
						<li class="mb-4">
							<a href="/request" class="hover:underline">Request a Game</a>
						</li>
						<li class="mb-4">
							<a href="/discord" class="hover:underline">Get Support</a>
						</li>
						<li>
							<a href="/faq" class="hover:underline">FAQ</a>
						</li>
					</ul>
				</div>
				<div>
					<h2 class="mb-6 text-sm font-semibold uppercase text-white">Online Services</h2>
					<ul class="text-white">
						<li class="mb-4">
							<a href="/search" class="hover:underline">Search</a>
						</li>
						<li class="mb-4">
							<a href="/games" class="hover:underline">Games</a>
						</li>
						<li>
							<a href="/apps" class="hover:underline">Apps</a>
						</li>
					</ul>
				</div>
				<div>
					<h2 class="mb-6 text-sm font-semibold uppercase text-white">Legal</h2>
					<ul class="text-white">
						<li class="mb-4">
							<a href="/legal/privacy-policy" class="hover:underline">Privacy Policy</a>
						</li>
						<li class="mb-4">
							<a href="/legal/tos" class="hover:underline">Terms &amp; Conditions</a>
						</li>
						<li>
							<a href="/legal/dmca" class="hover:underline">DMCA</a>
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
