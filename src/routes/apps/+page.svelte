<script lang="ts">
	import { page } from '$app/stores';

	import DefaultBox from '$lib/components/Box/DefaultBox.svelte';

	import type { PageData } from './$types';
	export let data: PageData;

	let searchQuery: string = $page.url.searchParams.get('search') || '';

	import Horz from '$lib/components/Google/Horz.svelte';
</script>

<svelte:head>
	<title>Kazwire - Search Freely</title>
	<meta name="description" content="Search freely with Kazwire!" />
	<meta property="og:description" content="Search freely with Kazwire!" />
</svelte:head>

<Horz />

<!-- Search bar -->
<div class="mb-6 flex justify-center">
	<form
		class="flex flex-col justify-center space-x-0 space-y-2 md:flex-row md:space-x-2 md:space-y-0"
		on:submit|preventDefault={() => (location.href = '/apps?search=' + searchQuery)}
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
		>
			Search
		</button>
	</form>
</div>

<div class="grid-flow-rows grid auto-rows-auto gap-10 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
	{#if data.apps.length === 0}
		<!-- If there are no games it will display a message -->
		<h1 class="col-span-12 text-center text-3xl text-white">No results found.</h1>
	{:else}
		{#each data.apps as game}
			<DefaultBox
				image={'/app/img/' + game.image}
				name={game.name}
				description={game.description}
				developer={game.developer}
				link={'/apps/' + game.id}
				tags={[]}
				popular={false}
				errorMessage={undefined}
				platformSupport={undefined}
			/>
		{/each}
	{/if}
</div>
