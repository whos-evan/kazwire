<script lang="ts">
	import { darkMode } from '../dark';
	import { onMount } from 'svelte';

	onMount(() => {
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
	<nav class="bg-[#0875bb] max-w mb-5 shadow-md shadow-black dark:shadow-white">
		<div class="flex items-center justify-between flex-wrap p-6">
			<div class="flex items-center text-white ml-10">
				<ul class="align-middle leading-[4rem]">
					<li class="float-left">
						<a class="block" href="/">
							<img src="/logo.png" class="h-16" alt="Kazwire Logo" />
						</a>
					</li>
					<li class="float-left"><a href="/games" class="text-white text-lg ml-10">Games</a></li>
					<li class="float-left"><a href="/search" class="text-white text-lg ml-10">Search</a></li>
					<li class="float-left"><a href="/faq" class="text-white text-lg ml-10">FAQ</a></li>
					<li class="float-left"><a href="/" class="text-white text-lg ml-10">Support</a></li>
					<li class="float-left"><a href="/" class="text-white text-lg ml-10">Discord</a></li>
				</ul>
			</div>
			<div class="float-right text-white text-2xl mr-10">
				<button
					id="theme-selector"
					class="bg-[#0875bb] hover:bg-[#0875bb] text-white font-bold py-2 px-4 rounded-full"
					on:click={toggle}
				>
					☀️
				</button>
			</div>
		</div>
	</nav>
</div>
