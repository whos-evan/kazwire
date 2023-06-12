<script lang="ts">
	import type { Changelog } from '$lib/types';

	// Fetches the first changelog from the API
	async function loadFirst() {
		const response = await fetch('/api/changelogs');
		const changelogs: Changelog[] = await response.json();	
		return changelogs[0];
	}
</script>

{#await loadFirst()}
	<div
		class="w-full animate-pulse rounded-3xl bg-tertiary p-8 text-black dark:bg-tertiaryDark dark:text-white"
	/>
{:then changelog}
	<div class="w-full rounded-3xl bg-tertiary p-8 text-black dark:bg-tertiaryDark dark:text-white">
		<h1 class="text-center text-4xl font-bold">Latest Change!</h1>
		<div class="mt-10 flex flex-row items-center justify-center">
			<h2 class="mr-2 text-center text-2xl font-bold">{changelog.title}</h2>
			<chip class="rounded-full bg-red-500 px-2 py-1 text-white">
				{changelog.version}
			</chip>
		</div>
		<div class="mt-4 text-xl">
			<p>
				{changelog.description}
			</p>
		</div>
	</div>
{:catch error}
	{error.message}
{/await}
