<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import Showoff from '$lib/components/Showoff.svelte';
	import Faq from '$lib/components/Faq.svelte';
	import Partners from '$lib/components/Partners.svelte';

	// import FinalGrade from '$lib/components/FinalGrade.svelte';

	import Changelog from '$lib/components/Changelog.svelte';

	import RandomGame from '$lib/components/RandomGame.svelte';
	import LovedGame from '$lib/components/LovedGame.svelte';
	import LovedApp from '$lib/components/LovedApp.svelte';

	let innerWidth: number;

	import Horz from '$lib/components/Google/Horz.svelte';
	let likedGames: string[] = [];
	let likedApps: string[] = [];
	import { appLike, gameLike } from '$lib/likeContent';
	import { onMount } from 'svelte';

	onMount(() => {
		likedApps = appLike.fetchLikes();
		likedGames = gameLike.fetchLikes();
	});
</script>

<svelte:window bind:innerWidth />

<head>
	<title>Kazwire</title>
</head>

<div class="grid max-w-max grid-flow-col gap-8">
	<grid class="col-span-2 flex gap-8">
		<Hero />
		{#if innerWidth > 1000}
			<Showoff />
		{/if}
	</grid>
	<grid class="col-span-2 row-start-2 flex gap-8">
		<div class="grid w-full grid-cols-1 space-y-8 lg:grid-cols-3 lg:gap-8 lg:space-y-0">
			<div class="col-span-2">
				{#if likedGames.length > 0}
					<h1 class="pb-8 text-center text-4xl font-bold text-secondary dark:text-white">Loved Games!</h1>
					<div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
						<LovedGame />
					</div>
				{:else if likedApps.length > 0}
					<h1 class="pb-8 text-center text-4xl font-bold text-secondary dark:text-white">Loved Apps!</h1>
					<div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
						<LovedApp />
					</div>
				{:else}
					<h1 class="pb-8 text-center text-4xl font-bold text-secondary dark:text-white">Random Games!</h1>
					<div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
						{#each [1, 2] as _}
							<RandomGame />
						{/each}
					</div>
				{/if}
			</div>
			<Changelog />
		</div>
	</grid>
	<grid class="col-span-2 row-start-3">
		<Faq />
	</grid>
	<grid class="col-span-2 row-start-4">
		<Horz />
	</grid>
	<grid class="col-span-2 row-start-5 max-w-full">
		<Partners />
	</grid>
</div>
