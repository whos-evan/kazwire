<script>
	import Box from '../routes/games/box.svelte';
	import gamesJson from '../routes/games/games.json';

	let randomGame1 = gamesJson['games'][Math.floor(Math.random() * gamesJson['games'].length)];
	let randomGame2 = gamesJson['games'][Math.floor(Math.random() * gamesJson['games'].length)];
	// if they are the same game, reroll
	while (randomGame1['id'] == randomGame2['id']) {
		randomGame2 = gamesJson['games'][Math.floor(Math.random() * gamesJson['games'].length)];
	}
</script>

<div class="text-white w-full text-center">
	<h1 class="lg:text-5xl md:text-4xl sm:text-xl font-bold">
		Here are two recommended games!
	</h1>
	<div
		class="grid grid-flow-rows lg:grid-cols-2 lg:grid-rows-none sm:grid-cols-1 sm:grid-rows-2 auto-rows-auto mt-10 gap-10"
	>
		<Box
			title={randomGame1['name']}
			image={randomGame1['image']}
			description={randomGame1['description']}
			id={randomGame1['id']}
			color='black'
		/>
		<Box
			title={randomGame2['name']}
			image={randomGame2['image']}
			description={randomGame2['description']}
			id={randomGame2['id']}
			color='black'
		/>
	</div>
</div>
