<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	import { config } from '$lib/config';

	import DefaultBox from '$lib/components/Box/DefaultBox.svelte';
	import Icon from '@iconify/svelte';

	let searchQuery = data.searchParam;
	let tagQuery = data.tagParam || 'all';

	function search() {
		if (searchQuery === '') {
			window.location.href = '/games';
		} else {
			window.location.href = '/games?search=' + searchQuery;
		}
	}
</script>

<svelte:head>
	<title>{config.branding.name} - Games</title>
	<meta name="description" content="Play for free now on {config.branding.name}!" />
	<meta property="og:description" content="Play for free now on {config.branding.name}!" />
</svelte:head>

<div class="mb-6 flex justify-center">
	<form class="flex flex-col gap-2 sm:flex-row" on:submit={() => search()}>
		<input
			type="text"
			placeholder="Type here"
			class="input input-bordered w-full max-w-md"
			bind:value={searchQuery}
		/>
		<select
			class="select select-bordered w-full min-w-[6rem] max-w-xs capitalize"
			bind:value={tagQuery}
			on:change={() => {
				if (tagQuery === 'all') {
					window.location.href = '/games';
				} else {
					window.location.href = '/games?tag=' + tagQuery;
				}
			}}
		>
			<option value="all" selected>All</option>
			{#each data.tags as tag}
				<option value={tag} class="capitalize">
					{#if tag.length > 3}
						{tag}
					{:else}
						{tag.toUpperCase()}
					{/if}
				</option>
			{/each}
		</select>
		<button class="btn btn-primary rounded-full">
			<Icon icon="mdi:magnify" class="text-xl" />
		</button>
	</form>
</div>

<!-- fill the entire screen with games without having excess space using flex -->
<grid class="flex flex-wrap justify-center gap-4">
	{#if data.games.length === 0}
		<div class="flex flex-col items-center justify-center">
			<h1 class="text-center text-3xl font-bold">No games found</h1>
			<p class="text-center">Try searching for something else</p>
		</div>
	{/if}
	{#each data.games as game}
		<DefaultBox
			name={game.name}
			id={'gamePage-' + game.id}
			developer={game.developer}
			image="/cdn/game/img/{game.image}"
			link={'/games/' + game.id}
		/>
	{/each}
</grid>
