<script>
	import Box from '../routes/games/box.svelte';
	import gamesJson from '../routes/games/games.json';
	import { onMount } from 'svelte';

	let randomGame1 = gamesJson['games'][Math.floor(Math.random() * gamesJson['games'].length)];
	let randomGame2 = gamesJson['games'][Math.floor(Math.random() * gamesJson['games'].length)];
	// if they are the same game, reroll
	while (randomGame1['id'] == randomGame2['id']) {
		randomGame2 = gamesJson['games'][Math.floor(Math.random() * gamesJson['games'].length)];
	}

	let allGames = gamesJson['games'];
	let lovedIds = [];
	let lovedGames = [];

	onMount(() => {
		let loves = localStorage.getItem('loved') || '';
		lovedIds = loves.split(',').filter((item) => item !== '');
		lovedGames = allGames.filter((game) => lovedIds.includes(game['id']));
		lovedGames.sort((a, b) => a['id'] - b['id']);
	});
</script>

<div class="text-white w-full text-center">
	<h1 class="lg:text-5xl md:text-4xl sm:text-xl font-bold">
		{#if lovedGames.length > 1}
			Here are your loved games!
		{:else if lovedGames.length == 1}
			Here is your loved game!
		{:else}
			Here are two randomly generated games!
		{/if}
	</h1>
	<div
		class="grid grid-flow-rows lg:grid-cols-2 lg:grid-rows-none sm:grid-cols-1 sm:grid-rows-2 auto-rows-auto mt-10 gap-10"
	>
		{#if lovedGames.length == 0}
			<Box
				title={randomGame1['name']}
				image={randomGame1['image']}
				description={randomGame1['description']}
				id={randomGame1['id']}
				color="black"
			/>
			<Box
				title={randomGame2['name']}
				image={randomGame2['image']}
				description={randomGame2['description']}
				id={randomGame2['id']}
				color="black"
			/>
		{:else if lovedGames.length == 1}
			<Box
				title={lovedGames[0]['name']}
				image={lovedGames[0]['image']}
				description={lovedGames[0]['description']}
				id={lovedGames[0]['id']}
				category="Loved"
				color="red"
			/>
		{:else}
			<Box
				title={lovedGames[0]['name']}
				image={lovedGames[0]['image']}
				description={lovedGames[0]['description']}
				id={lovedGames[0]['id']}
				category="Loved"
				color="red"
			/>
			<Box
				title={lovedGames[1]['name']}
				image={lovedGames[1]['image']}
				description={lovedGames[1]['description']}
				id={lovedGames[1]['id']}
				category="Loved"
				color="red"
			/>
		{/if}
	</div>
</div>
