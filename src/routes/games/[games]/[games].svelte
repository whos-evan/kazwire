<script>
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import gamesJson from '../games.json';

	let slug = $page.url.pathname.substr($page.url.pathname.lastIndexOf('/') + 1);

	function getGame() {
		// for loop to find the game in the json file
		for (let i = 0; i < gamesJson['games'].length; i++) {
			if (gamesJson['games'][i]['id'] == slug) {
				return gamesJson['games'][i];
			}
		}
	}

	let gameId = getGame()['id'];
	let title = getGame()['name'];
	let description = getGame()['description'];
	let developer = getGame()['developer'];
	let tags = getGame()['tags'];

	import VertAd from '$lib/components/vert-ad.svelte';
	import Embed from '$lib/components/embed.svelte';
</script>

<div class="flex flex-row relative justify-center">
	<div
		class="flex h-[calc(100vh-132px)] xl:w-full lg:w-[1000px] md:w-[820px] sm:w-full float-left pl-5 pr-5 pb-5"
	>
		<Embed {gameId} {title} {description} {developer} />
	</div>
	<div
		class="w-full max-w-[280px] hidden xl:flex flex-col justify-center items-center gap-y-2 px-3 bg-opacity-50 backdrop-blur-md"
		align="middle"
	>
		<VertAd />
	</div>
</div>

<div class="mr-10 ml-10 bg-secondary text-white rounded-lg p-5 align-middle">
	<h1 class="text-3xl font-bold">{title}</h1>
	<p class="text-[#b6e1fc]">
		{developer}
	</p>
	<!-- line -->
	<div class="h-[2px] w-10 bg-gray-300 dark:bg-gray-700 rounded-lg my-2"></div>
	<p>
		{description}
	</p>
	{#if tags.length > 0}
		<div class="flex flex-row flex-wrap gap-2 mt-1">
			{#each tags as tag}
				<a href="/games?c={tag}">
					<div
						class="bg-orange-600 hover:bg-orange-800 dark:bg-black dark:hover:bg-gray-700 transition-colors rounded-lg px-2 py-1"
					>
						{tag}
					</div>
				</a>
			{/each}
		</div>
	{/if}
</div>
