<script lang="ts">
	import type { Changelog } from '$lib/types';

	import Icon from '@iconify/svelte';

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
	<div
		class="flex w-full flex-col rounded-3xl bg-tertiary p-8 text-black dark:bg-tertiaryDark dark:text-white"
	>
		<div>
			<h1 class="text-left text-4xl font-bold">Latest Change!</h1>
			<div class="mt-4 flex flex-row text-center">
				<h2 class="mr-2 text-2xl font-bold">{changelog.title}</h2>
				<chip class="rounded-full bg-red-500 px-2 py-1 text-white">
					{changelog.version}
				</chip>
			</div>
			<div class="mt-4 text-xl">
				<p>{changelog.description}</p>
			</div>
		</div>
		<div class="mt-10 flex h-full flex-col items-center justify-end">
			<a
				href="/changelog/{changelog.slug}"
				target="_blank"
				rel="noopener noreferrer"
				class="group flex flex-row items-center justify-center btn-lg"
			>
				<Icon icon="akar-icons:arrow-right" class="mr-2 inline-block group-hover:animate-bounce" />
				Read more
			</a>
		</div>
	</div>
{:catch error}
	{error.message}
{/await}
