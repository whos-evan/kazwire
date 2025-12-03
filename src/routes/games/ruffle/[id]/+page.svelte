<script lang="ts">
	import { config } from '$lib/config';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<svelte:head>
	<title>{config.branding.name} - {data.game.name}</title>
	<meta
		name="description"
		content="Play {data.game.name} for free now on {config.branding.name}!"
	/>
	<meta
		property="og:description"
		content="Play {data.game.name} for free now on {config.branding.name}!"
	/>
	<script src="/cdn/game/ruffle/ruffle/ruffle.js"></script>
</svelte:head>

{#if data.game.emulatorType == 'ruffle'}
	<embed
		src="/cdn/game/ruffle/{data.game.id}/{data.game.id}.swf"
		class="absolute h-[100vh] w-[100vw]"
	/>
{/if}
