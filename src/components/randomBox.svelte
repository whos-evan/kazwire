<script>
	import Box from '../routes/games/box.svelte';
	import gamesJson from '../routes/games/games.json';
	import { onMount } from 'svelte';
	import { auth, db } from '../firebase';
 
	let randomGame1 = { name: 'Loading...', image: 'loading', description: '', id: '' };
	let randomGame2 = { name: 'Loading...', image: 'loading', description: '', id: '' };
	let lovedIds = [];
	let lovedGames = [];
 
	onMount(() => {
		let allGames = gamesJson['games'];
 
		randomGame1 = allGames[Math.floor(Math.random() * allGames.length)];
		randomGame2 = allGames[Math.floor(Math.random() * allGames.length)];
		// if they are the same game, reroll
		while (randomGame1['id'] == randomGame2['id']) {
			randomGame2 = allGames[Math.floor(Math.random() * allGames.length)];
		}
 
		const user = auth.currentUser;
		if (user) {
			db.collection('users')
				.doc(user.uid)
				.get()
				.then((doc) => {
					if (doc.exists) {
						lovedIds = doc.data().lovedGames;
						lovedGames = allGames.filter((game) => lovedIds.includes(game['id']));
						lovedGames.sort((a, b) => a['id'] - b['id']);
					} else {
						let loves = localStorage.getItem('loved') || '';
						lovedIds = loves.split(',').filter((item) => item !== '');
						lovedGames = allGames.filter((game) => lovedIds.includes(game['id']));
						lovedGames.sort((a, b) => a['id'] - b['id']);
					}
				});
		} else {
			let loves = localStorage.getItem('loved') || '';
			lovedIds = loves.split(',').filter((item) => item !== '');
			lovedGames = allGames.filter((game) => lovedIds.includes(game['id']));
			lovedGames.sort((a, b) => a['id'] - b['id']);
		}
	});
</script>
<div class="text-white w-full text-center">
	<h1 class="lg:text-5xl md:text-4xl sm:text-xl font-bold">
		{#if lovedGames.length > 1}
		Here are your loved games!
		{:else if lovedGames.length == 1}
		Here is your loved game!
		{:else}
		Here are two random games!
		{/if}
	</h1>
	<button on:click={() => {
		let allGames = gamesJson['games'];
 
		randomGame1 = allGames[Math.floor(Math.random() * allGames.length)];
		randomGame2 = allGames[Math.floor(Math.random() * allGames.length)];
		// if they are the same game, reroll
		while (randomGame1['id'] == randomGame2['id']) {
			randomGame2 = allGames[Math.floor(Math.random() * allGames.length)];
		}
	  }} class="bg-secondaryLight dark:bg-secondaryDark hover:bg-sky-700 dark:hover:bg-sky-700 font-bold pr-5 pl-5 pt-3 pb-3 mt-5 rounded-lg text-lg transition ease-in-out duration-300 hover:drop-shadow-none drop-shadow-[5px_5px_0_rgba(1,55,84,1)] hover:scale-[105%]">Reroll</button>
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
</div>
</div>