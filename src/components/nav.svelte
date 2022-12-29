<script lang="ts">
	import { darkMode } from '../dark';
	import { onMount } from 'svelte';

	onMount(() => {
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
</script>

<div class="Nav">
	<nav
		class="bg-secondaryLight dark:bg-secondaryDark max-w mb-5 shadow-md shadow-black dark:shadow-white"
	>
		<div class="flex items-center justify-between flex-wrap p-3">
			<div class="flex items-center text-white ml-10">
				<ul class="align-middle leading-[2.5rem]">
					<li class="float-left">
						<a class="block transition duration-100 hover:scale-[110%]" href="/">
							<img src="/logo.png" class="h-10" alt="Kazwire Logo" />
						</a>
					</li>
					<li class="float-left transition duration-100 hover:scale-[102%]">
						<a href="/search" class="text-white text-md hover:text-gray-200 ml-10">Search</a>
					</li>
					<li class="float-left transition duration-100 hover:scale-[102%]">
						<a href="/games" class="text-white text-md hover:text-gray-200 ml-10">Games</a>
					</li>
					<li class="float-left transition duration-100 hover:scale-[102%]">
						<a href="/apps" class="text-white text-md hover:text-gray-200 ml-10">Apps</a>
					</li>
					<li class="float-left transition duration-100 hover:scale-[102%]">
						<a href="/settings" class="text-white hover:text-gray-200 text-md ml-10">Settings</a>
					</li>
					<li class="float-left transition duration-100 hover:scale-[102%]">
						<a href="/discord" class="text-white hover:text-gray-200 text-md ml-10"
							>Support/Discord</a
						>
					</li>
				</ul>
			</div>
			<div class="float-right text-white text-xl mr-10">
				<button
					id="theme-selector"
					class="transition duration-100 hover:scale-[105%] bg-secondary text-white font-bold py-2 px-4 rounded-full"
					on:click={toggle}
				>
					☀️
				</button>
			</div>
		</div>
	</nav>
</div>
