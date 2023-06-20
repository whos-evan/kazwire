<script lang="ts">
	import type { Game } from '@prisma/client';
	import { PUBLIC_API_BASE_URL } from '$env/static/public';

	import { page } from '$app/stores';

	import DefaultBox from '$lib/components/Box/DefaultBox.svelte';
	import DefaultBoxLoading from '$lib/components/Box/DefaultBoxLoading.svelte';
	import HorzAd from '$lib/components/GoogleAds/HorzAd.svelte';

	let searchQuery: string = $page.url.searchParams.get('search') || '';
	// Fetch all apps based on the search query
	async function getApps() {
		const response: Response = await fetch(PUBLIC_API_BASE_URL + '/api/apps?search=' + searchQuery);
		const apps: Game[] = await response.json();
		return apps;
	}
</script>

<svelte:head>
	<title>Kazwire - Apps</title>
	<meta name="description" content="Search freely with Kazwire!" />
	<meta property="og:description" content="Search freely with Kazwire!" />
</svelte:head>

<HorzAd />

<!-- Search bar -->
<div class="mb-6 flex justify-center">
	<form
		class="flex flex-col justify-center space-x-0 space-y-2 md:flex-row md:space-x-2 md:space-y-0"
	>
		<input
			class="focus:shadow-outline h-10 rounded-lg border px-3 text-base placeholder-gray-600"
			type="text"
			placeholder="Search for your favorites..."
			bind:value={searchQuery}
		/>
		<button
			class="btn"
			type="submit"
			on:click={() => (location.href = '/apps?search=' + searchQuery)}
		>
			Search
		</button>
	</form>
</div>

<div class="grid-flow-rows grid auto-rows-auto gap-10 min-h-[50vh] sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
	{#await getApps()}
		<!-- While loading it will show 12 template loading boxes. -->
		{#each Array(12) as _}
			<DefaultBoxLoading />
		{/each}
	{:then apps}
		{#if apps.length === 0}
			<!-- If there are no games it will display a message -->
			<h1 class="col-span-12 text-center text-3xl text-white">No results found.</h1>
		{:else}
			{#each apps as app}
				<!-- After loading it will display each game in a box -->
				<DefaultBox
					image={'/app/img/' + app.image}
					name={app.name}
					description={app.description}
					developer={app.developer}
					link={'/apps/' + app.id}
					tags={[]}
					popular={false}
					errorMessage={undefined}
					platformSupport={undefined}
				/>
			{/each}
		{/if}
	{:catch error}
		<p>{error.message}</p>
	{/await}
</div>
