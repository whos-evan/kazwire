<script>
	import Box from './box.svelte';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	let loading = false;
	let reachedEnd = false;

	let lovedIds = [];
	let lovedApps = [];

	let filter;
	let search;

	// get the domain
	let domain = 'http://' + $page.url.host;

	onMount(() => {
		let loves = localStorage.getItem('lovedApps') || '';
		lovedIds = loves.split(',').filter((item) => item !== '');
		// call the api to get the apps
		for (let i = 0; i < lovedIds.length; i++) {
			// make a get request to the api
			// add the app to the lovedApps array
			fetch(domain + '/api/apps?id=' + lovedIds[i])
				.then((response) => response.json())
				.then((data) => {
					lovedApps.push(data);
				});
		}
	});

	let allApps = [];

	async function searchApps() {
		let results;
		// get search results
		if (filter === 'all') {
			results = await fetch(domain + '/api/apps?search=' + search)
				.then((response) => response.json())
				.then((data) => {
					return data;
				});
		} else {
			results = await fetch(domain + '/api/apps?search=' + search + '&category=' + filter)
				.then((response) => response.json())
				.then((data) => {
					return data;
				});
		}
		// set the apps to the results
		allApps = results;
		loadedApps = [];
		reachedEnd = false;
		loadMore();
		loadMore();
	}

	let loadedApps = [];

	async function loadMore() {
		if (loading || reachedEnd) {
			return;
		}
		loading = true;
		let apps;
		if (allApps.length === 0) {
			if (!filter || filter === 'all') {
				apps = await fetch(domain + '/api/apps')
					.then((response) => response.json())
					.then((data) => {
						return data;
					});
			} else {
				apps = await fetch(domain + '/api/apps?category=' + filter)
					.then((response) => response.json())
					.then((data) => {
						return data;
					});
			}
		} else {
			apps = allApps;
		}

		if (loadedApps.length + 8 >= apps.length) {
			// all apps have been loaded
			reachedEnd = true;
			loadedApps = loadedApps.concat(apps.slice(loadedApps.length));
		} else {
			loadedApps = loadedApps.concat(apps.slice(loadedApps.length, loadedApps.length + 4));
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
		placeholder="Search for a app..."
		autocomplete="off"
		bind:value={search}
		on:input={searchApps}
	/>
	<select id="filterSelect" class="rounded-lg text-black p-3" bind:value={filter}>
		<option value="all">All</option>
	</select>
	<div
		class="grid grid-flow-rows lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 auto-rows-auto gap-10"
	>

		{#await lovedApps}
			<div class="text-white text-2xl">Loading...</div>
		{:then lovedApps}
			{#each lovedApps as app}
				<Box
					title={app['name']}
					image={app['image']}
					description={app['description']}
					id={app['id']}
					color="#000000"
				/>
			{/each}
		{/await}
		{#await loadedApps}
			<div class="text-white text-2xl">Loading...</div>
		{:then apps}
			{#each apps as app}
				<Box
					title={app['name']}
					image={app['image']}
					description={app['description']}
					id={app['id']}
					color="#000000"
				/>
			{/each}
		{/await}
	</div>
</div>
