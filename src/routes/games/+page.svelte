<script lang="ts">
	import type { Game } from '@prisma/client';
	import { PUBLIC_API_BASE_URL } from '$env/static/public';

	import { page } from '$app/stores';

	import DefaultBox from '$lib/components/Box/DefaultBox.svelte';
	import DefaultBoxLoading from '$lib/components/Box/DefaultBoxLoading.svelte';

	let searchQuery: string = $page.url.searchParams.get('search') || '';
	let tagQuery: string = $page.url.searchParams.get('tag') || '';

	// Fetch all games based on the search query and tag query
	async function getGames() {
		const response: Response = await fetch(PUBLIC_API_BASE_URL + '/api/games?search=' + searchQuery + '&tag=' + tagQuery);
		const games: Game[] = await response.json();
		return games;
	}

	import HorzAd from '$lib/components/GoogleAds/HorzAd.svelte';
</script>

<svelte:head>
	<title>Kazwire - Play Freely</title>
	<meta name="description" content="Play freely with Kazwire!" />
	<meta property="og:description" content="Play freely with Kazwire!" />
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
			on:click={() => (location.href = '/games?search=' + searchQuery)}
		>
			Search
		</button>

		<select
			class="focus:shadow-outline h-10 rounded-lg border px-3 text-base placeholder-gray-600"
			bind:value={tagQuery}
			on:change={() => (location.href = '/games?tag=' + tagQuery)}
		>
			<option value="">All</option>
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
	</form>
</div>

<div class="grid-flow-rows grid auto-rows-auto gap-10 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
	{#await getGames()}
		<!-- While loading it will show 12 template loading boxes. -->
		{#each Array(12) as _}
			<DefaultBoxLoading />
		{/each}
	{:then games}
		{#if games.length === 0}
			<!-- If there are no games it will display a message -->
			<h1 class="col-span-12 text-center text-3xl text-white">No results found.</h1>
		{:else}
			{#each games as game}
				{#if game.popular}
					<DefaultBox
						image={'/game/img/' + game.image}
						name={game.name}
						description={game.description}
						developer={game.developer}
						link={'/games/' + game.id}
						tags={game.tags || []}
						popular={game.popular || false}
						errorMessage={game.errorMessage || undefined}
						platformSupport={game.platform}
					/>
				{/if}
			{/each}
			{#each games as game}
				{#if !game.popular}
					<DefaultBox
						image={'/game/img/' + game.image}
						name={game.name}
						description={game.description}
						developer={game.developer}
						link={'/games/' + game.id}
						tags={game.tags || []}
						popular={game.popular || false}
						errorMessage={game.errorMessage || undefined}
						platformSupport={game.platform}
					/>
				{/if}
			{/each}
		{/if}
	{:catch error}
		<p>{error.message}</p>
	{/await}
</div>
