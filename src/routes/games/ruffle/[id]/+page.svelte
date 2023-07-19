<script lang="ts">
	// TODO: Dynamicly determine how to access the game:
	// 1. If the game is hosted locally just use the path
	// 2. If the game is hosted on another server use the proxied path
	// 3. If the game is emulated determine what emulator is required and use the required path (i.e. /emulators/super-mario-64, /ruffle/duck-life)

	import type { Game } from '@prisma/client';
	import { PUBLIC_API_BASE_URL } from '$env/static/public';

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
