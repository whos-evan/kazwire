<script>
	import Box from './box.svelte';
	import { onMount } from 'svelte';
<<<<<<< Updated upstream
	import { page } from '$app/stores';
=======

	let allGames = gamesJson['games'];
	let lovedIds = [];

	onMount(() => {
		let loves = localStorage.getItem('loved') || '';
		lovedIds = loves.split(',').filter((item) => item !== '');
		// call the api to get the games
		for (let i = 0; i < lovedIds.length; i++) {
			// make a get request to the api
			// add the game to the lovedGames array
			fetch(domain + '/api/games?id=' + lovedIds[i])
				.then((response) => response.json())
				.then((data) => {
					lovedGames.push(data);
				});
		}
	});

	export let popularGames = allGames
		.filter((game) => game['popular'] === true)
		.sort((a, b) => a['id'] - b['id']);

	let games = [];
	let filter = 'all';

	function applyFilter(games, filter) {
		if (filter === 'all') {
			// sort alphabetically
			return games.sort((a, b) => a['name'].localeCompare(b['name']));
		} else if (filter === 'static') {
			return games
				.filter((game) => game['embedURL'] === undefined && game['emulator'] === undefined)
				.sort((a, b) => a['name'].localeCompare(b['name']));
		} else if (filter === 'emulated') {
			return games
				.filter((game) => game['embedURL'] === undefined && game['emulator'] !== undefined)
				.sort((a, b) => a['name'].localeCompare(b['name']));
		} else if (filter === 'embeded') {
			return games
				.filter((game) => game['embedURL'] !== undefined)
				.sort((a, b) => a['name'].localeCompare(b['name']));
		}
	}

	$: {
		games = [];
		allGames = applyFilter(gamesJson['games'], filter);
		loadMore();
		loadMore();
	}

	let popularGames = fetch(domain + '/api/games?category=popular')
		.then((response) => response.json())
		.then((data) => {
			return data;
		});

	let loadedGames = [];

	async function loadMore() {
		if (loading || reachedEnd) {
			return;
		}
		loading = true;
		let games;
		if (allGames.length === 0) {
			if (!filter || filter === 'all') {
				games = await fetch(domain + '/api/games')
					.then((response) => response.json())
					.then((data) => {
						return data;
					});
			} else {
			return 'Static';
		}
	}
>>>>>>> Stashed changes

	let loading = false;
	let reachedEnd = false;

	let lovedIds = [];
	let lovedGames = [];

	let filter;
	let search;

	// get the domain
	let domain = 'http://' + $page.url.host;

	onMount(() => {
		let loves = localStorage.getItem('loved') || '';
		lovedIds = loves.split(',').filter((item) => item !== '');
		// call the api to get the games
		for (let i = 0; i < lovedIds.length; i++) {
			// make a get request to the api
			// add the game to the lovedGames array
			fetch(domain + '/api/games?id=' + lovedIds[i])
				.then((response) => response.json())
				.then((data) => {
					lovedGames.push(data);
				});
		}
	});

	let allGames = [];

	async function searchGames() {
		let results;
		// get search results
		if (filter === 'all') {
			results = await fetch(domain + '/api/games?search=' + search)
				.then((response) => response.json())
				.then((data) => {
					return data;
				});
		} else {
			results = await fetch(domain + '/api/games?search=' + search + '&category=' + filter)
				.then((response) => response.json())
				.then((data) => {
					return data;
				});
		}
		// set the games to the results
		allGames = results;
		loadedGames = [];
		reachedEnd = false;
		loadMore();
		loadMore();
	}

	let popularGames = fetch(domain + '/api/games?category=popular')
		.then((response) => response.json())
		.then((data) => {
			return data;
		});

	let loadedGames = [];

	async function loadMore() {
		if (loading || reachedEnd) {
			return;
		}
		loading = true;
		let games;
		if (allGames.length === 0) {
			if (!filter || filter === 'all') {
				games = await fetch(domain + '/api/games')
					.then((response) => response.json())
					.then((data) => {
						return data;
					});
			} else {
				games = await fetch(domain + '/api/games?category=' + filter)
					.then((response) => response.json())
					.then((data) => {
						return data;
					});
			}
		} else {
			games = allGames;
		}

		if (loadedGames.length + 4 >= games.length) {
			// all games have been loaded
			reachedEnd = true;
			loadedGames = loadedGames.concat(games.slice(loadedGames.length));
		} else {
			loadedGames = loadedGames.concat(games.slice(loadedGames.length, loadedGames.length + 4));
		}
		loading = false;
	}

	loadMore();
	loadMore();

	function handleScroll(event) {
		if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
			loadMore();
		}
	}

	import HorzAd from '../../components/horz-ad.svelte';
</script>

<svelte:window on:scroll={handleScroll} />
<div class="md:block sm:hidden">
	<HorzAd />
</div>
<div class="text-white w-full pl-10 pr-10 pt-5 text-center">
	<input
		id="search"
		type="text"
		class="w-[35vw] h-10 p-6 rounded-lg mb-5 text-black placeholder:text-gray-500"
		placeholder="Search for a game..."
		autocomplete="off"
		bind:value={search}
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

		{#await popularGames}
			<div class="text-white text-2xl">Loading...</div>
		{:then popularGames}
			{#each popularGames as game}
				<Box
					title={game['name']}
					image={game['image']}
					description={game['description']}
					id={game['id']}
					color="#000000"
					category="Popular"
					popular="true"
				/>
			{/each}
		{/await}

		{#await loadedGames}
			<div class="text-white text-2xl">Loading...</div>
		{:then games}
			{#each games as game}
				<Box
					title={game['name']}
					image={game['image']}
					description={game['description']}
					id={game['id']}
					color="#000000"
					category={game['category']}
					popular="false"
				/>
			{/each}
		{/await}
	</div>
</div>
