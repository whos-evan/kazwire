<script>
	import Box from './box.svelte';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	let lovedIds = [];
	let lovedGames = [];

	let filter;

	// get the domain
	let domain = 'http://' + $page.url.host;

	let allGames = fetch(domain + '/api/games')
		.then((response) => response.json())
		.then((data) => {
			return data;
		});

	let loadedGames = [];

	let popularGames = fetch(domain + '/api/games?category=popular')
		.then((response) => response.json())
		.then((data) => {
			return data;
		});

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

	// call the api to get the game

	function searchGames() {
		let input = document.getElementById('search');
		let search = input.value.toUpperCase();
		let results;
		// get search results
		if (filter === 'all') {
			results = fetch(domain + '/api/games?search=' + search)
				.then((response) => response.json())
				.then((data) => {
					return data;
				});
		} else {
			results = fetch(domain + '/api/games?search=' + search + '&category=' + filter)
				.then((response) => response.json())
				.then((data) => {
					return data;
				});
		}
		// set the games to the results
		allGames = results;
		loadMore();
		loadMore();
	}

	if (filter === 'all') {
		allGames = fetch(domain + '/api/games')
			.then((response) => response.json())
			.then((data) => {
				return data;
			});
		loadMore();
		loadMore();
	} else {
		allGames = fetch(domain + '/api/games?category=' + filter)
			.then((response) => response.json())
			.then((data) => {
				return data;
			});
		loadMore();
		loadMore();
	}

	let loading = false;
	let reachedEnd = false;

	async function loadMore() {
		if (!loadedGames || loading || reachedEnd) {
			return;
		}
		const games = await allGames;
		loadedGames = loadedGames.concat(games.slice(loadedGames.length, loadedGames.length + 4));
	}

	function handleScroll(event) {
		if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
			loadMore();
		}
	}

	import HorzAd from '../../components/horz-ad.svelte';

	loadMore();
	loadMore();
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
				/>
			{/each}
		{/await}
	</div>
</div>
