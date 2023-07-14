<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import Icon from '@iconify/svelte';
	// import Showoff from '$lib/components/Showoff.svelte';
	import Faq from '$lib/components/Faq.svelte';
	import Partners from '$lib/components/Partners.svelte';

	// import FinalGrade from '$lib/components/FinalGrade.svelte';
	import SchoolRescue from '$lib/components/SchoolRescue.svelte';
	import { neverShowSchoolRescue } from '$lib/stores';

	// import Changelog from '$lib/components/Changelog.svelte';

	// import RandomGame from '$lib/components/RandomGame.svelte';
	// import LovedGame from '$lib/components/LovedGame.svelte';
	// import LovedApp from '$lib/components/LovedApp.svelte';
	import SmallBox from '$lib/components/Box/SmallBox.svelte';
	import type { Game, App } from '@prisma/client';
	import { PUBLIC_API_BASE_URL } from '$env/static/public';

	import Horz from '$lib/components/Google/Horz.svelte';

	import Carousel from '$lib/components/Carousel.svelte';

	import { suggest } from '$lib/gameAlgorithm';

	import { appLike, gameLike } from '$lib/likeContent';
	import { onMount } from 'svelte';

	let innerWidth: number;

	let likedGames: string[] = [];
	let likedApps: string[] = [];

	let games: Game[] = [];
	let popularGames: Game[] = [];
	let apps: App[] = [];
	let tags: string[] = [];

	const SCROLL_AMOUNT: number = 256 * 3;

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

	onMount(() => {
		likedApps = appLike.fetchLikes();
		likedGames = gameLike.fetchLikes();

		fetch(PUBLIC_API_BASE_URL + '/api/games')
			.then((res) => res.json())
			.then((res) => {
				games = res;
				// scramble the games
				games.sort(() => Math.random() - 0.5);
			})
			.then(() => {
				// find all unique tags from games
				for (const game of games) {
					for (const tag of game.tags) {
						if (!tags.includes(tag)) {
							tags = [...tags, tag];
						}
					}
				}
			})
			.then(() => {
				// see if the game is popular
				for (const game of games) {
					if (game.popular) {
						popularGames = [...popularGames, game];
					}
				}
				// sort games by views
				games.sort((a, b) => b.views - a.views);
				// then add more based on the top 12 most viewed games
				for (const game of games) {
					if (popularGames.length >= 12) {
						break;
					}
					if (!popularGames.includes(game)) {
						popularGames = [...popularGames, game];
					}
				}
			});

		fetch(PUBLIC_API_BASE_URL + '/api/apps')
			.then((res) => res.json())
			.then((res) => {
				apps = res;
				// sort the apps by views
				apps.sort((a, b) => b.views - a.views);
			});
	});
</script>

<svelte:window bind:innerWidth />

<head>
	<title>Kazwire</title>
</head>

<div class="grid-rows-auto grid max-w-max grid-cols-1 gap-8">
	<grid class="row-start-1">
		<grid class="flex gap-8">
			<Hero />
			{#if innerWidth > 1000}
				{#if checkIfShowSchoolRescue() && !$neverShowSchoolRescue}
					<SchoolRescue />
				{/if}
			{/if}
		</grid>
	</grid>
	<grid class="row-start-2 rounded-3xl bg-tertiary p-8 dark:bg-tertiaryDark">
		<!-- Games header -->
		<h1 class="mb-4 text-3xl font-bold text-black dark:text-white">Apps</h1>
		<!-- Buttons to scroll the div on the left and right-->
		<Carousel {SCROLL_AMOUNT}>
			{#each apps as app}
				<SmallBox
					image={'/app/img/' + app.image}
					name={app.name}
					developer={app.developer}
					link={'/apps/' + app.id}
					popular={false}
					errorMessage={undefined}
					platformSupport={undefined}
				/>
			{/each}
		</Carousel>
	</grid>
	<grid class="row-start-3 rounded-3xl bg-tertiary p-8 dark:bg-tertiaryDark">
		<grid class="flex flex-col gap-2">
			{#await suggest.Games() then suggestedGames}
				{#if suggestedGames.length > 0}
					<grid class="mb-4 flex flex-row justify-start">
						<h1 class="text-3xl font-bold text-black dark:text-white">Suggested Games</h1>
						<Icon
							icon="mdi:controller"
							class="ml-1 mt-1 text-3xl text-green-500 transition hover:text-blue-500"
						/>
					</grid>
					<Carousel {SCROLL_AMOUNT}>
						{#each suggestedGames as game}
							<SmallBox
								image={'/game/img/' + game.image}
								name={game.name}
								developer={game.developer}
								link={'/games/' + game.id}
								popular={game.popular || false}
								errorMessage={game.errorMessage || undefined}
								platformSupport={game.platform}
							/>
						{/each}
					</Carousel>
				{/if}
			{/await}

			<grid class="mb-4 flex flex-row justify-start">
				<h1 class="text-3xl font-bold text-black dark:text-white">Popular Games</h1>
				<Icon
					icon="mdi:fire"
					class="ml-1 mt-1 text-3xl text-red-500 transition hover:text-orange-500"
				/>
			</grid>
			<Carousel {SCROLL_AMOUNT}>
				{#each popularGames as game}
					<SmallBox
						image={'/game/img/' + game.image}
						name={game.name}
						developer={game.developer}
						link={'/games/' + game.id}
						popular={game.popular || false}
						errorMessage={game.errorMessage || undefined}
						platformSupport={game.platform}
					/>
				{/each}
			</Carousel>

			{#each tags as tag}
				<!-- Header for tag -->
				{#if tag.length > 3}
					<h2 class="mt-2 text-xl font-bold capitalize text-black dark:text-white">{tag} Games</h2>
				{:else}
					<h2 class="text-xl font-bold text-black dark:text-white">
						{tag.toUpperCase()} Games
					</h2>
				{/if}
				<!-- Scrollable div for the small boxes -->
				<Carousel {SCROLL_AMOUNT}>
					{#each games as game}
						{#if game.tags.includes(tag)}
							<SmallBox
								image={'/game/img/' + game.image}
								name={game.name}
								developer={game.developer}
								link={'/games/' + game.id}
								popular={game.popular || false}
								errorMessage={game.errorMessage || undefined}
								platformSupport={game.platform}
							/>
						{/if}
					{/each}
				</Carousel>
			{/each}
		</grid>
	</grid>

	<grid class="row-start-4">
		<Faq />
	</grid>
	<grid class="row-start-5">
		<Horz />
	</grid>
	<grid class="row-start-6 max-w-full">
		<Partners />
	</grid>
</div>
