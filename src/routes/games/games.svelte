<script>
	import Box from './box.svelte';
	import gamesJson from './games.json';
	import { onMount } from 'svelte';

	var allGames = gamesJson['games']

	// get loved games
	var lovedIds = [];
	var lovedGames = [];
	onMount(() => {
		let loves = localStorage.getItem('loved') || '';
		loves.split(',').forEach((item) => {
			if (item != '') {
				lovedIds.push(item);
			}
		});
		gamesJson['games'].forEach((game) => {
			if (lovedIds.includes(game['id'])) {
				lovedGames.push(game);
			}
		});
		lovedGames.sort((a, b) => {
			if (a['id'] < b['id']) {
				return -1;
			}
			if (a['id'] > b['id']) {
				return 1;
			}
			return 0;
		});
	});

	export let popularGames = gamesJson['games']
		.filter((game) => game['popular'] === true)
		.sort((a, b) => {
			if (a['id'] < b['id']) {
				return -1;
			}
			if (a['id'] > b['id']) {
				return 1;
			}
			return 0;
		});
	// if filter changes then update the games
	$: {
		if (filter === 'all') {
			games = [];
			allGames = gamesJson['games']
				.sort((a, b) => {
					if (a['id'] < b['id']) {
						return -1;
					}
					if (a['id'] > b['id']) {
						return 1;
					}
					return 0;
				});
			loadMore();
			loadMore();
		} else if (filter === 'static') {
			staticGames();
			loadMore();
			loadMore();
		} else if (filter === 'emulated') {
			emulatedGames();
			loadMore();
			loadMore();
		} else if (filter === 'embeded') {
			embededGames();
			loadMore();
			loadMore();
		}
	}

	function staticGames() {
		games = [];
		allGames = gamesJson['games']
			.filter(
				(game) =>
					game['embedURL'] === undefined &&
					game['emulator'] === undefined
			)
			.sort((a, b) => {
				if (a['id'] < b['id']) {
					return -1;
				}
				if (a['id'] > b['id']) {
					return 1;
				}
				return 0;
			});
	}
	function emulatedGames() {
		games = [];
		allGames = gamesJson['games']
		.filter(
			(game) =>
				game['embedURL'] === undefined &&
				game['emulator'] != undefined
		)
		.sort((a, b) => {
			if (a['id'] < b['id']) {
				return -1;
			}
			if (a['id'] > b['id']) {
				return 1;
			}
			return 0;
		});
	}

	function embededGames() {
		games = [];
		allGames = gamesJson['games']
			.filter((game) => game['embedURL'] !== undefined)
			.sort((a, b) => {
				if (a['id'] < b['id']) {
					return -1;
				}
				if (a['id'] > b['id']) {
					return 1;
				}
				return 0;
			});
	}

	function searchGames() {
		let input = document.getElementById('search');
		let search = input.value.toUpperCase();
		games = [];
		allGames = gamesJson['games']
			.filter((game) => game['name'].toUpperCase().indexOf(search) > -1)
			.sort((a, b) => {
				if (a['id'] < b['id']) {
					return -1;
				}
				if (a['id'] > b['id']) {
					return 1;
				}
				return 0;
			});
		loadMore();
	}

	function getCategory(game) {
		if (game['embedURL'] !== undefined) {
			return 'Embeded';
		} else if (game['emulator'] !== undefined) {
			return 'Emulated';
		} else {
			return 'Static';
		}
	}

	let filter;


	let games = [];
	let loading = false;
	let reachedEnd = false;

	function loadMore() {
		if (!loading && !reachedEnd) {
			games = games.concat(allGames.slice(games.length, games.length + 4));

		}
	}

	function handleScroll(event) {
		if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
			loadMore();
		}
	}
</script>

<svelte:window on:scroll={handleScroll} />

<div class="text-white w-full pl-10 pr-10 pt-5 text-center">
	<input
		id="search"
		type="text"
		class="w-[35vw] h-10 p-6 rounded-lg mb-5 text-black placeholder:text-gray-500"
		placeholder="Search for a game..."
		autocomplete="off"
		on:input={searchGames}
	/>
	<select id="filterSelect" class="rounded-lg text-black p-3" bind:value={filter}>
		<option value="all">All</option>
		<option value="static">Static</option>
		<option value="emulated">Emulated</option>
		<option value="embeded">Embeded</option>
	</select>
	<div
		class="grid grid-flow-rows lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 auto-rows-auto gap-10"
	>
		{#if filter === 'all'}
			{#if lovedGames.length !== 0}
				{#each lovedGames as game}
					<Box
						title={game['name']}
						image={game['image']}
						description={game['description']}
						id={game['id']}
						color='#FF0000'
						category="Loved"
					/>
				{/each}
			{:else}
				{#each popularGames as game}
					<Box
						title={game['name']}
						image={game['image']}
						description={game['description']}
						id={game['id']}
						color='#d4af37'
						category="Popular"
						popular='true'
					/>
				{/each}
			{/if}
		{/if}
		{#each games as game}
			<Box
				title={game['name']}
				image={game['image']}
				description={game['description']}
				id={game['id']}
				color='#000000'
				category={getCategory(game)}
			/>
		{/each}
	</div>
</div>
