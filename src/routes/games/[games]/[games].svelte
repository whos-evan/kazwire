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

	import VertAd from '$lib/components/vert-ad.svelte';
	import Embed from '$lib/components/embed.svelte';
</script>

<div class="flex flex-row relative justify-center">
	<div
		class="flex h-[calc(100vh-132px)] xl:w-full lg:w-[1000px] md:w-[820px] sm:w-full float-left pl-5 pr-5 pb-5"
	>
		<Embed gameId={gameId} title={title} description={description} developer={developer} />
	</div>
	<div
		class="w-full max-w-[280px] hidden xl:flex flex-col justify-center items-center gap-y-2 px-3 bg-opacity-50 backdrop-blur-md"
		align="middle"
	>
		<VertAd />
	</div>
</div>
