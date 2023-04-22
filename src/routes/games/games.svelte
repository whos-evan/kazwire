<script>
	import Box from './box.svelte';
	import SmallBox from './smallBox.svelte';
	import gamesJson from './games.json';
	import { onMount } from 'svelte';
	import { auth, db } from '$lib/firebase';

	let smallGames = false;
	let allGames = gamesJson['games'];
	let lovedIds = [];
	let lovedGames = [];
	let loadingHearts = true;

	let query;

	onMount(async () => {
		// get the url and check if the user has ?c=category or ?s=search expect both at the same time
		let url = new URL(window.location.href);
		let category = url.searchParams.get('c');
		let search = url.searchParams.get('s');
		if (category) {
			filter = category;
		} else if (search) {
			query = search;
			searchGames();
		} else {
			games = allGames;
		}

		// check if the user minimized
		let minimized = localStorage.getItem('smallGames') === 'true';
		if (minimized) {
			smallGames = true;
		} else {
			smallGames = false;
		}

		// console.log all the games in a list
		// Check if the user is logged in
		auth.onAuthStateChanged(async (user) => {
			if (user) {
				loadingHearts = true;
				// Fetch the user's data from Firestore
				const userData = await db.collection('users').doc(user.uid).get();
				lovedIds = userData.data()?.lovedGames;
				if (lovedIds == undefined) {
					loadingHearts = false;
					return;
				}
			} else {
				// Fetch the loved games from local storage
				let loves = localStorage.getItem('lovedGames') || '[]';
				lovedIds = JSON.parse(loves);
			}
			lovedGames = allGames.filter((game) => lovedIds.includes(game['id']));
			lovedGames.sort((a, b) => a['id'] - b['id']);
			loadingHearts = false;
		});
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
		} else if (filter === 'action') {
			return games
				.filter((game) => game['tags'].includes('action'))
				.sort((a, b) => a['name'].localeCompare(b['name']));
		} else if (filter === 'adventure') {
			return games
				.filter((game) => game['tags'].includes('adventure'))
				.sort((a, b) => a['name'].localeCompare(b['name']));
		} else if (filter === 'indie') {
			return games
				.filter((game) => game['tags'].includes('indie'))
				.sort((a, b) => a['name'].localeCompare(b['name']));
		} else if (filter === 'casual') {
			return games
				.filter((game) => game['tags'].includes('casual'))
				.sort((a, b) => a['name'].localeCompare(b['name']));
		} else if (filter === 'multiplayer') {
			return games
				.filter((game) => game['tags'].includes('multiplayer'))
				.sort((a, b) => a['name'].localeCompare(b['name']));
		} else if (filter === 'racing') {
			return games
				.filter((game) => game['tags'].includes('racing'))
				.sort((a, b) => a['name'].localeCompare(b['name']));
		} else if (filter === 'rpg') {
			return games
				.filter((game) => game['tags'].includes('rpg'))
				.sort((a, b) => a['name'].localeCompare(b['name']));
		} else if (filter === 'simulation') {
			return games
				.filter((game) => game['tags'].includes('simulation'))
				.sort((a, b) => a['name'].localeCompare(b['name']));
		} else if (filter === 'sports') {
			return games
				.filter((game) => game['tags'].includes('sports'))
				.sort((a, b) => a['name'].localeCompare(b['name']));
		} else if (filter === 'strategy') {
			return games
				.filter((game) => game['tags'].includes('strategy'))
				.sort((a, b) => a['name'].localeCompare(b['name']));
		} else {
			return games.sort((a, b) => a['name'].localeCompare(b['name']));
		}
	}

	$: {
		games = [];
		allGames = applyFilter(gamesJson['games'], filter);
		loadMore();
		loadMore();
	}

	function searchGames() {
		console.log(query)
		let queryUpper = query.toUpperCase();
		games = [];
		allGames = gamesJson['games']
			.filter((game) => game['name'].toUpperCase().indexOf(queryUpper) > -1)
			.sort((a, b) => a['id'] - b['id']);
		loadMore();
		loadMore();

		if (query === '') {
			popularGames = allGames
				.filter((game) => game['popular'] === true)
				.sort((a, b) => a['id'] - b['id']);
		} else {
			popularGames = [];
		}
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

	let loading = false;
	let reachedEnd = false;

	function loadMore() {
		if (!games || loading || reachedEnd) {
			return;
		}
		games = games.concat(allGames.slice(games.length, games.length + 4));
	}

	function handleScroll(event) {
		// if the user has scrolled to the bottom of the page
		if (
			window.innerHeight + window.scrollY >=
			document.body.offsetHeight - document.body.offsetHeight / 10
		) {
			loadMore();
		}
	}

	import HorzAd from '$lib/components/horz-ad.svelte';
	import SquareAd from '$lib/components/square-ad.svelte';

	loadMore();
	loadMore();
</script>

<svelte:window on:scroll={handleScroll} />
<div class="md:block sm:hidden">
	<HorzAd />
</div>
<div class="text-white w-full pl-10 pr-10 pt-5 text-center">
	<div
		class="text-white w-full h-18 pt-5 text-center mb-0 sm:mb-4 gap-4
	lg:pr-40 lg:pl-40 md:pr-20 md:pl-20 sm:pr-0 sm:pl-0
	grid md:grid-rows-1 sm:grid-rows-2 grid-cols-10"
	>
		<input
			id="search"
			type="text"
			class="md:col-span-7 sm:col-span-7 h-12 p-6 rounded-lg mb-5 text-black placeholder:text-gray-500"
			placeholder="Search for a game..."
			autocomplete="off"
			bind:value={query}
			on:input={searchGames}
		/>
		<select
			id="filterSelect"
			class="rounded-lg text-black p-3 h-12 md:col-span-2 sm:col-span-3"
			bind:value={filter}
		>
			<option value="all">All</option>
			<option value="static">Static</option>
			<option value="emulated">Emulated</option>
			<option value="embeded">Embeded</option>
			<option value="action">Action</option>
			<option value="adventure">Adventure</option>
			<option value="casual">Casual</option>
			<option value="indie">Indie</option>
			<option value="multiplayer">Multiplayer</option>
			<option value="racing">Racing</option>
			<option value="rpg">RPG</option>
			<option value="simulation">Simulation</option>
			<option value="sports">Sports</option>
			<option value="strategy">Strategy</option>
		</select>
		{#if smallGames == false}
			<button
				class="md:col-start-10 md:row-start-1 col-span-2
				sm:col-start-5 sm:row-start-2 md:mr-auto md:ml-0 sm:ml-auto sm:mr-auto
				p-3 h-12 w-12 text-lg font-extrabold bg-secondary rounded-lg text-white"
				id="minimize"
				on:click={() => (smallGames = true) && localStorage.setItem('smallGames', 'true')}
			>
				<!-- pitch in -->
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 512 512"
					class="h-6 w-6"
					fill="white"
					stroke="currentColor"
					><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path
						d="M473 7c-9.4-9.4-24.6-9.4-33.9 0l-87 87L313 55c-6.9-6.9-17.2-8.9-26.2-5.2S272 62.3 272 72V216c0 13.3 10.7 24 24 24H440c9.7 0 18.5-5.8 22.2-14.8s1.7-19.3-5.2-26.2l-39-39 87-87c9.4-9.4 9.4-24.6 0-33.9L473 7zM216 272H72c-9.7 0-18.5 5.8-22.2 14.8s-1.7 19.3 5.2 26.2l39 39L7 439c-9.4 9.4-9.4 24.6 0 33.9l32 32c9.4 9.4 24.6 9.4 33.9 0l87-87 39 39c6.9 6.9 17.2 8.9 26.2 5.2s14.8-12.5 14.8-22.2V296c0-13.3-10.7-24-24-24z"
					/></svg
				>
			</button>
		{:else}
			<button
				class="md:col-start-10 md:row-start-1 col-span-2
				sm:col-start-5 sm:row-start-2 ml:ml-0 md:mr-auto md:ml-0 sm:ml-auto sm:mr-auto
				p-3 h-12 w-12 text-lg font-extrabold bg-secondary rounded-lg text-white"
				id="mazimize"
				on:click={() => {
					smallGames = !smallGames;
					localStorage.setItem('smallGames', JSON.stringify(smallGames));
				}}
			>
				<!-- pitch in -->
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 741.75 741.71"
					class="h-6 w-6"
					fill="white"
					stroke="currentColor"
				>
					<path
						class="cls-1"
						d="M94.13,583.41c-2.07-4.08-3.11-5.18-3.12-6.29-.25-21.93-.26-43.86-.55-65.79-.36-26.65-17.29-44.74-42.49-45.69-25.96-.97-46.84,16.58-47.26,43.25-.98,63.22-.89,126.47-.1,189.69,.32,25.35,18.38,42.63,43.3,42.82,63.23,.48,126.47,.32,189.7,.1,17.65-.06,30.96-8.31,38.54-24.49,14.84-31.71-5.44-64.63-40.86-65.7-23.47-.71-46.98-.13-74.95-.13,5.94-6.53,8.23-9.3,10.78-11.82,45.84-45.37,91.82-90.61,137.54-136.1,22.11-22,24.53-52.15,6.28-70.98-17.98-18.56-49.17-16.56-70.88,5.18-43.77,43.81-87.25,87.92-130.89,131.86-4.42,4.45-9.15,8.59-15.03,14.1ZM648.52,161.52c.99,1.41,2.32,2.43,2.34,3.47,.49,22.55,.67,45.1,1.24,67.65,.67,26.44,18.07,44.41,43.15,44.97,25.46,.56,45.85-18.17,46.1-44.53,.57-62.6,.52-125.21,.03-187.82-.2-25.2-16.9-43.89-42.04-44.3-63.88-1.06-127.82-1.58-191.66,.25-33.52,.96-51.72,34.47-38.18,64.61,9.34,20.8,27.77,25.51,48.02,25.93,20.86,.43,41.74,.09,62.6,.09,1.13,2.2,2.25,4.4,3.38,6.6-7.66,6.52-15.76,12.6-22.91,19.64-41.85,41.2-83.72,82.38-125.06,124.09-20.18,20.36-21.5,50.24-4.36,67.94,17.97,18.55,45.57,18.14,67.89-1.59,8.68-7.67,16.28-16.56,24.56-24.69,41.35-40.57,82.77-81.07,124.91-122.32Z"
					/>
					<path
						d="M94.13,583.41c5.88-5.5,10.61-9.65,15.03-14.1,43.64-43.94,87.12-88.05,130.89-131.86,21.72-21.74,52.9-23.74,70.88-5.18,18.24,18.83,15.83,48.99-6.28,70.98-45.72,45.49-91.7,90.73-137.54,136.1-2.54,2.52-4.84,5.29-10.78,11.82,27.97,0,51.48-.57,74.95,.13,35.42,1.07,55.71,33.99,40.86,65.7-7.58,16.18-20.89,24.43-38.54,24.49-63.23,.22-126.47,.38-189.7-.1-24.91-.19-42.98-17.47-43.3-42.82-.79-63.22-.88-126.47,.1-189.69,.41-26.67,21.3-44.22,47.26-43.25,25.2,.94,42.13,19.03,42.49,45.69,.3,21.93,.31,43.86,.55,65.79,.01,1.11,1.05,2.21,3.12,6.29Z"
					/>
					<path
						d="M648.52,161.52c-42.14,41.25-83.56,81.75-124.91,122.32-8.29,8.13-15.88,17.02-24.56,24.69-22.31,19.73-49.92,20.14-67.89,1.59-17.15-17.7-15.82-47.58,4.36-67.94,41.34-41.71,83.21-82.89,125.06-124.09,7.15-7.04,15.25-13.12,22.91-19.64-1.13-2.2-2.25-4.4-3.38-6.6-20.87,0-41.74,.33-62.6-.09-20.26-.41-38.68-5.13-48.02-25.93-13.54-30.14,4.66-63.65,38.18-64.61,63.84-1.83,127.79-1.31,191.66-.25,25.13,.42,41.84,19.1,42.04,44.3,.49,62.6,.55,125.22-.03,187.82-.24,26.37-20.64,45.1-46.1,44.53-25.08-.56-42.48-18.53-43.15-44.97-.57-22.55-.75-45.1-1.24-67.65-.02-1.05-1.35-2.06-2.34-3.47Z"
					/>
				</svg>
			</button>
		{/if}
	</div>

	{#if smallGames == false}
		<div
			class="grid grid-flow-rows lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 auto-rows-auto gap-10"
		>
			{#if filter === 'all'}
				{#if loadingHearts}
					Loading...
				{:else if lovedGames.length !== 0}
					{#each lovedGames as game}
						<Box
							title={game['name']}
							image={game['image']}
							description={game['description']}
							id={game['id']}
							color="#FF0000"
							category="Loved"
							tags={game['tags']}
						/>
					{/each}
				{:else}
					{#each popularGames as game}
						<Box
							title={game['name']}
							image={game['image']}
							description={game['description']}
							id={game['id']}
							color="#d4af37"
							category="Popular"
							popular="true"
							tags={game['tags']}
						/>
					{/each}
				{/if}
			{/if}
			{#each games as game}
				<!-- randomly show an ad -->
				{#if Math.random() > 0.98}
					<SquareAd />
				{/if}
				<Box
					title={game['name']}
					image={game['image']}
					description={game['description']}
					id={game['id']}
					platformSupport={game['platform']}
					gameError={game['error']}
					category={getCategory(game)}
					tags={game['tags']}
				/>
			{/each}
		</div>
	{:else}
		<div
			class="grid grid-flow-rows lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1 auto-rows-auto gap-10"
		>
			{#if filter === 'all'}
				{#if loadingHearts}
					Loading...
				{:else if lovedGames.length !== 0}
					{#each lovedGames as game}
						<SmallBox
							title={game['name']}
							image={game['image']}
							id={game['id']}
							category="Loved"
							color="red"
						/>
					{/each}
				{:else}
					{#each popularGames as game}
						<SmallBox
							title={game['name']}
							image={game['image']}
							id={game['id']}
							color="#d4af37"
							category="Popular"
							popular="true"
						/>
					{/each}
				{/if}
			{/if}
			{#each games as game}
				<SmallBox
					title={game['name']}
					image={game['image']}
					id={game['id']}
					category={getCategory(game)}
				/>
			{/each}
		</div>
	{/if}
</div>
