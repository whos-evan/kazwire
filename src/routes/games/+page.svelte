<script lang="ts">
	import type { Game } from '@prisma/client';

	import { page } from '$app/stores';

	import DefaultBox from '$lib/components/Box/DefaultBox.svelte';
	import DefaultBoxLoading from '$lib/components/Box/DefaultBoxLoading.svelte';

	let searchQuery: string = $page.url.searchParams.get('search') || '';
	let tagQuery: string = $page.url.searchParams.get('tag') || '';
	async function getGames() {
		const response: Response = await fetch('/api/games?search=' + searchQuery + '&tag=' + tagQuery);
		const games: Game[] = await response.json();
		return games;
	}
</script>

<svelte:head>
	<title>Kazwire - Play Freely</title>
	<meta name="description" content="Play freely with Kazwire!" />
	<meta property="og:description" content="Play freely with Kazwire!" />
</svelte:head>

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
			class="focus:shadow-outline h-10 rounded-lg bg-blue-600 px-5 text-white transition-colors duration-150 hover:bg-blue-700"
			type="submit"
			on:click={() => location.href = '/games?search=' + searchQuery}
		>
			Search
		</button>
	</form>
</div>

<div class="grid-flow-rows grid auto-rows-auto gap-10 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
	{#await getGames()}
		<!-- While loading it will show 12 template loading boxes. -->
		{#each Array(12) as _}
			<DefaultBoxLoading />
		{/each}
	{:then games}
		{#each games as game}
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
		{/each}
	{:catch error}
		<p>{error.message}</p>
	{/await}
</div>
