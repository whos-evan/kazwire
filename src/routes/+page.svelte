<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import Showoff from '$lib/components/Showoff.svelte';
	import Faq from '$lib/components/Faq.svelte';
	import Partners from '$lib/components/Partners.svelte';

	// import FinalGrade from '$lib/components/FinalGrade.svelte';
	import SchoolRescue from '$lib/components/SchoolRescue.svelte';
	import { neverShowSchoolRescue } from '$lib/stores';

	function checkIfShowSchoolRescue() {
		const date = new Date();
		const month = date.getMonth();
		const day = date.getDate();

		// if it's july 15th or later, or august 15th or earlier, show the school rescue
		// ensure that the time is in school hours
		if (month >= 6 && month <= 7 && day >= 15 && day <= 15) {
			if (date.getHours() >= 8 && date.getHours() <= 15) {
				return true;
			}
		}

		return false;
	}

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

	import { experiments } from '$lib/experiments';
	import AlternateHome from '$lib/components/AlternateHome.svelte';
	let alternateHome: boolean = false;

	onMount(() => {
		likedApps = appLike.fetchLikes();
		likedGames = gameLike.fetchLikes();

		experiments.fetchOrCreateExperimentData(
			'alternateHome',
			'2023-08-01',
			'Alternate home page for Kazwire.',
			50,
			true
		);

		alternateHome = experiments.shouldShow('alternateHome');
	});
</script>

<svelte:window bind:innerWidth />

<head>
	<title>Kazwire</title>
</head>

{#if !alternateHome}
	<div class="grid max-w-max grid-flow-col gap-8">
		<grid class="col-span-2 flex gap-8">
			<Hero />
			{#if innerWidth > 1000}
				{#if checkIfShowSchoolRescue() && !$neverShowSchoolRescue}
					<SchoolRescue />
				{:else}
					<Showoff />
				{/if}
			{/if}
		</grid>
		<grid class="col-span-2 row-start-2 flex gap-8">
			<div class="grid w-full grid-cols-1 space-y-8 lg:grid-cols-3 lg:gap-8 lg:space-y-0">
				<div class="col-span-2">
					{#if likedGames.length > 0}
						<h1 class="pb-8 text-center text-4xl font-bold text-secondary dark:text-white">
							Loved Games!
						</h1>
						<div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
							<LovedGame />
						</div>
					{:else if likedApps.length > 0}
						<h1 class="pb-8 text-center text-4xl font-bold text-secondary dark:text-white">
							Loved Apps!
						</h1>
						<div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
							<LovedApp />
						</div>
					{:else}
						<h1 class="pb-8 text-center text-4xl font-bold text-secondary dark:text-white">
							Random Games!
						</h1>
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
{:else}
	<AlternateHome />
{/if}
