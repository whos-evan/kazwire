<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<svelte:head>
	<title>Kazwire - {data.game.name}</title>
	<meta name="description" content="Play {data.game.name} for free now on Kazwire!" />
	<meta property="og:description" content="Play {data.game.name} for free now on Kazwire!" />
	<script src="/game/ruffle/ruffle/ruffle.js"></script>
</svelte:head>

{#if data.game.emulatorType == 'ruffle'}
	<embed
		src="/game/ruffle/{data.game.id}/{data.game.id}.swf"
		class="absolute h-[100vh] w-[100vw]"
	/>
{/if}
