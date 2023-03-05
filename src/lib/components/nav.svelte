<script lang="ts">
	import { darkMode } from '$lib/dark';
	import { onMount } from 'svelte';

	import { auth, googleProvider, user } from '$lib/firebase';

	import logos from '$lib/components/logos.json';

	let loggedIn = false;
	let localUser = null;

	let author = 'Kazwire';
	let logoAuthor = 'Kazwire';

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
			document.getElementById('logo').src = '/' + logos['logos'][randomNum]['filename'];
		}

		changeLogo();

		if ('serviceWorker' in navigator) {
			navigator.serviceWorker.register(window.location.origin + '/sw.js');
		}

		// gets the theme and sets it
		let themeSelector = document.getElementById('theme-selector') || undefined;
		if (darkMode() === true) {
			if (themeSelector) {
				themeSelector.innerHTML = '🌙';
			}
		} else {
			if (themeSelector) {
				themeSelector.innerHTML = '☀️';
			}
		}

		// gets the title and sets it
		let title = localStorage.getItem('title') || undefined;
		if (title) {
			document.title = title;
		}

		let favicon = localStorage.getItem('favicon') || undefined;
		if (favicon) {
			var link = document.querySelector("link[rel~='icon']");
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

		let themeSelector = document.getElementById('theme-selector') || undefined;
		if (darkMode() === true) {
			if (themeSelector) {
				themeSelector.innerHTML = '🌙';
			}
		} else {
			if (themeSelector) {
				themeSelector.innerHTML = '☀️';
			}
		}
	}

	function toggleMenu() {
		document.getElementById('menu')?.classList.toggle('hidden');
	}
</script>

<!-- https://codepen.io/hulyak/pen/yLbwXvB -->

<nav
	class="
          flex flex-wrap
          items-center
          justify-between
          w-full
          py-4
          md:py-0
          px-4
		  mb-10
          text-lg text-white
          bg-secondary
		  shadow-md shadow-black dark:shadow-white
        "
>
	<div class="mt-auto mb-auto flex-col align-items-center">
		<a href="/">
			<img
				id="logo"
				src="/logo.png"
				class="h-16 p-3 inline-block"
				alt="Kazwire Logo"
				on:mouseenter={() => {
					author = logoAuthor;
				}}
				on:mouseleave={() => {
					author = 'Kazwire'
				}}
			/>
			<span
				class="hidden lg:inline-block text-2xl font-semibold whitespace-nowrap text-white align-middle"
				contenteditable="true"
				bind:innerHTML={author}>Kazwire</span
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

	<div class="hidden w-full md:flex md:items-center md:w-auto" id="menu">
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
					☀️
				</button>
			</li>
		</ul>
	</div>
</nav>
