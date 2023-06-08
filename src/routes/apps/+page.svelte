<script lang="ts">
	import type { Game } from '@prisma/client';

	import { page } from '$app/stores';

	import DefaultBox from '$lib/components/Box/DefaultBox.svelte';
	import DefaultBoxLoading from '$lib/components/Box/DefaultBoxLoading.svelte';

	let searchQuery: string = $page.url.searchParams.get('search') || '';
	// Fetch all apps based on the search query
	async function getApps() {
		const response: Response = await fetch('/api/apps?search=' + searchQuery);
		const apps: Game[] = await response.json();
		console.log(apps[0].image);
		return apps;
	}
</script>

<svelte:head>
	<title>Kazwire - Apps</title>
	<meta name="description" content="Search freely with Kazwire!" />
	<meta property="og:description" content="Search freely with Kazwire!" />
</svelte:head>

<!-- Search bar -->
<div class="mb-6 flex justify-center">
	<form class="flex justify-center" action="/apps" method="get">
		<input
			class="focus:shadow-outline h-10 w-96 rounded-lg border px-3 text-base placeholder-gray-600"
			type="text"
			name="search"
			placeholder="Search for a app..."
			bind:value={searchQuery}
		/>
		<button
			class="focus:shadow-outline ml-2 h-10 rounded-lg bg-blue-600 px-5 text-white transition-colors duration-150 hover:bg-blue-700"
			type="submit"
			on:click={() => (window.location.href = '/apps?search=' + searchQuery)}
		>
			Search
		</button>
	</form>
</div>

<div class="grid-flow-rows grid auto-rows-auto gap-10 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
	{#await getApps()}
		<!-- While loading it will show 12 template loading boxes. -->
		{#each Array(12) as _}
			<DefaultBoxLoading />
		{/each}
	{:then apps}
		{#each apps as app}
			<!-- After loading it will display each game in a box -->
			<DefaultBox
				image={'/app/img/' + app.image}
				name={app.name}
				description={app.description}
				developer={app.developer}
				link={'/apps/' + app.id}
				tags={app.tags || []}
				popular={app.popular || false}
				errorMessage={app.errorMessage || undefined}
				platformSupport={app.platform}
			/>
		{/each}
	{:catch error}
		<p>{error.message}</p>
	{/await}
</div>
