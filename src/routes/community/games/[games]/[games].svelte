<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	let gameName, gameDescription, gameURL;
	let loading = true;

	let slug = $page.url.pathname.substr($page.url.pathname.lastIndexOf('/') + 1);

	onMount(() => {
		function getGame() {
			let game = JSON.parse(localStorage.getItem('localGames'));
			if (game == null) {
				return null;
			}
			for (let i = 0; i < game.length; i++) {
				if (game[i]['id'] == slug) {
					return game[i];
				}
			}
			return null;
		}

		if (getGame() == null) {
			alert('Game not found.');
			console.error('Game not found.');
		} else {
			gameName = getGame()['name'];
			gameDescription = getGame()['description'];
			gameURL = getGame()['url'];
			loading = false;
		}
	});

	import Embed from '$lib/components/embed.svelte';
	import VertAd from '$lib/components/vert-ad.svelte';
</script>

<div class="flex flex-row relative justify-center">
	<div
		class="flex h-[calc(100vh-132px)] xl:w-full lg:w-[1000px] md:w-[820px] sm:w-full float-left pl-5 pr-5 pb-5"
	>
		{#if loading}
			Loading...
		{:else}
			<Embed title={gameName} description={gameDescription} developer={'you :)'} embedURL={gameURL} loadHeart={false} />
		{/if}
	</div>
	<div
		class="w-full max-w-[280px] hidden xl:flex flex-col justify-center items-center gap-y-2 px-3 bg-opacity-50 backdrop-blur-md"
		align="middle"
	>
		<VertAd />
	</div>
</div>
