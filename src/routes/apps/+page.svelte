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
			window.location.href = '/apps';
		} else {
			window.location.href = '/apps?search=' + searchQuery;
		}
	}
</script>

<svelte:head>
	<title>{config.branding.name} - Apps</title>
	<meta name="description" content="Browse for free now on {config.branding.name}!" />
	<meta property="og:description" content="Browse for free now on {config.branding.name}!" />
</svelte:head>

<div class="mb-6 flex justify-center">
	<form class="flex flex-col gap-2 sm:flex-row" on:submit={() => search()}>
		<input
			type="text"
			placeholder="Type here"
			class="input input-bordered w-full max-w-md"
			bind:value={searchQuery}
		/>
		<button class="btn btn-primary rounded-full">
			<Icon icon="mdi:magnify" class="text-xl" />
		</button>
	</form>
</div>

<!-- fill the entire screen with apps without having excess space using flex -->
<grid class="flex flex-wrap justify-center gap-4">
	{#if data.apps.length === 0}
		<div class="flex flex-col items-center justify-center">
			<h1 class="text-center text-3xl font-bold">No apps found</h1>
			<p class="text-center">Try searching for something else</p>
		</div>
	{/if}
	{#each data.apps as app}
		<DefaultBox
			name={app.name}
			developer={app.developer}
			id={'appPage-' + app.id}
			image="/cdn/app/img/{app.image}"
			link={'/apps/' + app.id}
		/>
	{/each}
</grid>
