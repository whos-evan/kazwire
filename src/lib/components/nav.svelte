<script lang="ts">
	import { darkMode } from '$lib/dark';
	import { onMount } from 'svelte';

	import { auth, googleProvider, user } from '$lib/firebase';

	import logos from '$lib/components/logos.json';

	let loggedIn = false;
	let localUser = null;

	let author = 'Kazwire';
	let logoAuthor = 'Kazwire';

	let logoSrc = '/logo.png';
	let menuIsHidden = false;

	let themeSelectorText = '☀️';

	auth.onAuthStateChanged(function (user) {
		if (user) {
			// User is signed in.
			loggedIn = true;
			localUser = user;
		} else {
			// No user is signed in.
			loggedIn = false;
		}
	});

	onMount(() => {
		// have a random chance to run the following function
		function changeLogo() {
			let numOfLogos = logos['logos'].length;
			let randomNum = Math.floor(Math.random() * numOfLogos);
			logoAuthor = logos['logos'][randomNum]['author'];
			logoSrc = '/' + logos['logos'][randomNum]['filename'];
		}

		// have a 1/100 chance to run the function
		if (Math.floor(Math.random() * 100) === 1) {
			changeLogo();
		}

		if ('serviceWorker' in navigator) {
			navigator.serviceWorker.register(window.location.origin + '/sw.js');
		}

		// gets the theme and sets it
		if (darkMode() === false) {
			themeSelectorText = '🌙';
			document.documentElement.classList.toggle('dark');
		} else {
			themeSelectorText = '☀️';
		}

		// gets the title and sets it
		let title = localStorage.getItem('title') || undefined;
		if (title) {
			document.title = title;
		}

		let favicon = localStorage.getItem('favicon') || undefined;
		if (favicon) {
			let link = document.querySelector("link[rel~='icon']");
			if (!link) {
				link = document.createElement('link');
				link.rel = 'icon';
				document.getElementsByTagName('head')[0].appendChild(link);
			}
			link.href = favicon;
		}
	});

	function toggle() {
		localStorage.setItem(
			'darkMode',
			localStorage.getItem('darkMode') === 'false' ? 'true' : 'false'
		);
		document.documentElement.classList.toggle('dark');

		themeSelectorText = darkMode() ? '☀️' : '🌙';
	}

	function toggleMenu() {
		menuIsHidden = !menuIsHidden;
	}

	let windowWidth = 0;
</script>

<!-- https://codepen.io/hulyak/pen/yLbwXvB -->

<svelte:window bind:innerWidth={windowWidth} />

<div class="w-full fixed z-20 px-5 py-5">
	<nav
		class="
          flex flex-wrap
          items-center
          justify-between
          w-full
          py-4
          md:py-0
          px-4
		  rounded-lg
          text-lg text-white
          bg-secondary
		  bg-opacity-90
		  shadow-md shadow-black dark:shadow-white
        "
	>
		<div class="mt-auto mb-auto flex-col align-items-center">
			<a href="/">
				<img
					id="logo"
					src={logoSrc}
					class="h-16 p-3 inline-block"
					alt="Kazwire Logo"
					on:mouseenter={() => {
						author = logoAuthor;
					}}
					on:mouseleave={() => {
						author = 'Kazwire';
					}}
				/>
				<span
					class="hidden lg:inline-block text-2xl font-semibold whitespace-nowrap text-white align-middle"
					>{author}</span
				>
			</a>
		</div>

		<button on:click={toggleMenu}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				id="menu-button"
				class="h-6 w-6 cursor-pointer md:hidden block"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M4 6h16M4 12h16M4 18h16"
				/>
			</svg>
		</button>
		{#if menuIsHidden || windowWidth > 768}
			<div class="w-full md:flex md:items-center md:w-auto" id="menu">
				<ul
					class="
              pt-4
              text-base text-white
              md:flex
              md:justify-between
              md:pt-0"
				>
					<li class="m-auto">
						<a class="md:p-4 py-2 block hover:text-primary" href="/search">Search</a>
					</li>
					<li class="m-auto">
						<a class="md:p-4 py-2 block hover:text-primary" href="/games">Games</a>
					</li>
					<li class="m-auto">
						<a class="md:p-4 py-2 block hover:text-primary" href="/apps">Apps</a>
					</li>
					<li class="m-auto">
						<a class="md:p-4 py-2 block hover:text-primary" href="/settings">Settings</a>
					</li>
					<li class="m-auto">
						<a class="md:p-4 py-2 block hover:text-primary" href="/discord">Support/Discord</a>
					</li>
					<li class="m-auto">
						{#if localUser}
							<a href="/account/profile">
								<img
									src={localUser.photoURL}
									class="transition duration-100 hover:scale-[105%] h-16 p-4 rounded-full"
									alt="Profile"
									referrerpolicy="no-referrer"
								/>
							</a>
						{:else}
							<a class="md:p-4 py-2 block hover:text-primary" href="/account">Sign Up</a>
						{/if}
					</li>
					<li class="m-auto">
						<button
							id="theme-selector"
							class="transition duration-100 hover:scale-[105%] bg-secondary text-white font-bold py-2 px-4 rounded-full"
							on:click={toggle}
						>
							{themeSelectorText}
						</button>
					</li>
				</ul>
			</div>
		{/if}
	</nav>
</div>

<padding class="flex w-full h-24" />