<script lang="ts">
	import { page } from '$app/stores';
	import Icon from '@iconify/svelte';

	import DefaultBox from '$lib/components/Box/DefaultBox.svelte';

	import type { PageData } from './$types';
	export let data: PageData;

	let searchQuery: string = $page.url.searchParams.get('search') || '';
	let tagQuery: string = $page.url.searchParams.get('tag') || '';

	import Horz from '$lib/components/Google/Horz.svelte';
</script>

<svelte:head>
	<title>Kazwire - Play Freely</title>
	<meta name="description" content="Play freely with Kazwire!" />
	<meta property="og:description" content="Play freely with Kazwire!" />
</svelte:head>

<Horz />

<!-- Search bar -->
<div class="mb-6 flex justify-center">
	<form
		class="flex flex w-full max-w-[32rem] flex-col justify-center space-y-2 rounded-lg bg-none md:flex-row md:space-y-0 md:bg-white"
		on:submit|preventDefault={() => (location.href = '/games?search=' + searchQuery)}
	>
		<img src="/logo.png" alt="Logo" class="my-auto ml-4 hidden h-6 w-6 md:block" />
		<input
			class="h-12 w-full rounded-lg px-3 text-base placeholder-gray-600 focus:outline-none md:rounded-r-none"
			type="text"
			placeholder="Search for your favorites..."
			bind:value={searchQuery}
		/>

		<select
			class="focus:shadow-outline h-12 rounded-lg px-3 text-base placeholder-gray-600 mr-2"
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

		<button class="btn rounded-lg md:rounded-l-none" type="submit">
			<Icon class="mx-auto h-6 w-6" icon="ic:baseline-search" />
		</button>
	</form>
</div>

<div class="grid-flow-rows grid auto-rows-auto gap-10 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
	{#if data.games.length === 0}
		<!-- If there are no games it will display a message -->
		<h1 class="col-span-12 text-center text-3xl text-white">No results found.</h1>
	{:else}
		{#each data.games as game}
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
		{#each data.games as game}
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
</div>
