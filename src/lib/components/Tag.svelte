<script lang="ts">
	import { experiments } from '$lib/experiments';
	import { onMount } from 'svelte';

	let showColor: boolean;

	onMount(() => {
		experiments.fetchOrCreateExperimentData(
			'tagColor',
			'2023-07-05',
			'Changes the color of the tags.',
			10,
			true
		);
		showColor = experiments.shouldShow('tagColor');
	});

	export let tag: string;
</script>

{#if showColor}
	<a href="/games?tag={tag}" data-sveltekit-reload>
		<div
			class="my-1 inline-block w-min rounded-lg bg-blue-500 px-2 py-1 text-sm text-white transition-colors hover:bg-orange-800 dark:bg-black dark:hover:bg-gray-700"
		>
			{tag}
		</div>
	</a>
{:else}
	<a href="/games?tag={tag}" data-sveltekit-reload>
		<div
			class="my-1 inline-block w-min rounded-lg bg-orange-600 px-2 py-1 text-sm text-white transition-colors hover:bg-orange-800 dark:bg-black dark:hover:bg-gray-700"
		>
			{tag}
		</div>
	</a>
{/if}
