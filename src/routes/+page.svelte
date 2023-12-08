<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import Icon from '@iconify/svelte';

	import Faq from '$lib/components/Faq.svelte';
	import Partners from '$lib/components/Partners.svelte';

	// import FinalGrade from '$lib/components/FinalGrade.svelte';
	import SchoolRescue from '$lib/components/SchoolRescue.svelte';
	import Halloween from '$lib/components/Halloween.svelte';
	import Thanksgiving from '$lib/components/Thanksgiving.svelte';
	import Fortnite from '$lib/components/Fortnite.svelte';
	import { neverShowSchoolRescue, neverShowHalloween, neverShowThanksgiving, neverShowFortnite, neverShowMidterms } from '$lib/stores';

	import SmallBox from '$lib/components/Box/SmallBox.svelte';
	import type { Game, App } from '@prisma/client';
	import { PUBLIC_API_BASE_URL } from '$env/static/public';

	import Horz from '$lib/components/Google/Horz.svelte';

	import Carousel from '$lib/components/Carousel.svelte';

	import { suggest } from '$lib/gameAlgorithm';

	import { _, isLoading } from 'svelte-i18n';

	import { appLike, gameLike } from '$lib/likeContent';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import Leaderboard from '$lib/components/Google/Leaderboard.svelte';
	import FinalGrade from '$lib/components/FinalGrade.svelte';

	let innerWidth: number;

	let likedGamesIds: string[] = [];
	let likedGames: Game[] = [];
	let likedAppsIds: string[] = [];
	let likedApps: App[] = [];

	let games: Game[] = [];
	let popularGames: Game[] = [];
	let apps: App[] = [];
	let tags: string[] = [];

	const SCROLL_AMOUNT: number = 256 * 3;

	function checkIfShowSchoolRescue() {
		const date = new Date();
		const day = date.getDay();

		// if it is a weekday
		if (day !== 0 && day !== 6) {
			// if it is between 8am and 3pm
			if (date.getHours() >= 8 && date.getHours() <= 15) {
				return true;
			}
		}

		return false;
	}

	// max 12 days before haloween
	function checkIfShowHalloween() {
		const date = new Date();
		const day = date.getDate();
		const month = date.getMonth();

		if (month === 9 && day >= 19 && day <= 31) {
			return true;
		}

		return false;
	}

	// dec 7th to jan 7th
	function checkIfMidterms() {
		const date = new Date();
		const day = date.getDate();
		const month = date.getMonth();

		if (month === 11 && day >= 7 && day <= 31) {
			return true;
		}

		return false;
	}

	let random: number = Math.random();
	// Between nov 1, and nov 30
	function checkIfThanksgiving() {
		const date = new Date();
		const day = date.getDate();
		const month = date.getMonth();

		if (month === 10 && day >= 1 && day <= 30) {
			if (random < 0.4) {
				return true;
			} else {
				return false;
			}
		}

		return false;
	}

	// Between nov, 3, 2023 and nov, 6, 2023
	function checkIfFortniteSeason() {
		const date = new Date();
		const day = date.getDate();
		const month = date.getMonth();
		const year = date.getFullYear();

		if (year === 2023 && month === 10 && day >= 3 && day <= 6) {
			return true;
		}

		return false;
	}

	onMount(() => {
		likedAppsIds = appLike.fetchLikes();
		likedGamesIds = gameLike.fetchLikes();

		fetch(PUBLIC_API_BASE_URL + '/api/games')
			.then((res) => res.json())
			.then((res) => {
				games = res;
				// remove the entire game if it has an error message
				games = games.filter((game) => !game.errorMessage);

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
			})
			.then(() => {
				// go through each likedgameid and find the game with that id
				for (const id of likedGamesIds) {
					for (const game of games) {
						if (game.id === id) {
							likedGames = [...likedGames, game];
						}
					}
				}
			});

		fetch(PUBLIC_API_BASE_URL + '/api/apps')
			.then((res) => res.json())
			.then((res) => {
				apps = res;
				// sort the apps by views
				apps.sort((a, b) => b.views - a.views);
			})
			.then(() => {
				// go through each likedappid and find the app with that id
				for (const id of likedAppsIds) {
					for (const app of apps) {
						if (app.id === id) {
							likedApps = [...likedApps, app];
						}
					}
				}
			});
	});
</script>

<svelte:window bind:innerWidth />

<svelte:head>
	<title>Kazwire</title>

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://kazwire.com/" />
	<meta property="og:title" content="Kazwire" />
	<meta
		property="og:description"
		content="Play and search for all your favorite games and sites!"
	/>
	<meta property="og:image" content="/assets/background.png" />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://kazwire.com/" />
	<meta property="twitter:title" content="Kazwire" />
	<meta
		property="twitter:description"
		content="Play and search for all your favorite games and sites!"
	/>
	<meta property="twitter:image" content="/assets/background.png" />
</svelte:head>

{#if !$isLoading}
	<div class="grid-rows-auto grid max-w-max grid-cols-1 gap-8">
		<grid class="row-start-1">
			<grid class="flex gap-8">
				<Hero />
				{#if innerWidth > 1000}
					{#if checkIfMidterms() && !$neverShowMidterms}
						<FinalGrade />
					{:else if checkIfShowSchoolRescue() && !$neverShowSchoolRescue}
						<SchoolRescue />
					{:else if checkIfFortniteSeason() && !$neverShowFortnite}
						<Fortnite />
					{:else if checkIfThanksgiving() && !$neverShowThanksgiving && innerWidth > 1224}
						<Thanksgiving />
					{:else if checkIfShowHalloween() && !$neverShowHalloween}
						<Halloween />
					{/if}
				{/if}
			</grid>
		</grid>
		<grid class="row-start-2 rounded-3xl bg-tertiary p-8 dark:bg-tertiaryDark">
			{#if innerWidth > 1000}
				<Leaderboard />
			{/if}
			<grid class="flex flex-col gap-2">
				{#if browser}
					{#await suggest.Games() then suggestedGames}
						{#if suggestedGames.length > 0}
							<grid class="mb-4 flex flex-row justify-start">
								<h1 class="text-3xl font-bold text-black dark:text-white">
									{$_('suggested_games')}
								</h1>
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
										GA_EVENT="click_suggested_game"
									/>
								{/each}
							</Carousel>
						{/if}
					{/await}
				{/if}

				{#if likedGames.length > 0}
					<grid class="mb-4 mt-2 flex flex-row justify-start">
						<h1 class="text-3xl font-bold text-black dark:text-white">{$_('loved_games')}</h1>
						<Icon
							icon="mdi:heart"
							class="ml-1 mt-1 text-3xl text-red-500 transition hover:text-pink-500"
						/>
					</grid>
					<Carousel {SCROLL_AMOUNT}>
						{#each likedGames as game}
							<SmallBox
								image={'/game/img/' + game.image}
								name={game.name}
								developer={game.developer}
								link={'/games/' + game.id}
								popular={game.popular || false}
								errorMessage={game.errorMessage || undefined}
								platformSupport={game.platform}
								GA_EVENT="click_popular_games"
							/>
						{/each}
					</Carousel>
				{/if}

				<grid class="mb-4 mt-2 flex flex-row justify-start">
					<h1 class="text-3xl font-bold text-black dark:text-white">{$_('popular_games')}</h1>
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
							GA_EVENT="click_popular_games"
						/>
					{/each}
				</Carousel>

				{#each tags as tag}
					<!-- Header for tag -->
					<div class="flex flex-col">
						{#if tag.length > 3}
							<h2 class="mt-2 text-xl font-bold capitalize text-black dark:text-white">
								{tag}
								{$_('games')}
							</h2>
						{:else}
							<h2 class="text-xl font-bold text-black dark:text-white">
								{tag.toUpperCase()}
								{$_('games')}
							</h2>
						{/if}

						<!-- See more -->
						<a
							href={'/games?tag=' + tag}
							class="w-fit text-sm text-gray-500 transition hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
						>
							{$_('see_more')}
						</a>
					</div>
					<!-- Scrollable div for the small boxes -->
					<Carousel {SCROLL_AMOUNT}>
						<!-- randomly sort games -->
						{#each games.sort(() => Math.random() - 0.5) as game}
							{#if game.tags.includes(tag)}
								<SmallBox
									image={'/game/img/' + game.image}
									name={game.name}
									developer={game.developer}
									link={'/games/' + game.id}
									popular={game.popular || false}
									errorMessage={game.errorMessage || undefined}
									platformSupport={game.platform}
									GA_EVENT={'click_tag_' + tag.toLowerCase()}
								/>
							{/if}
						{/each}
					</Carousel>
				{/each}
			</grid>
		</grid>

		<grid class="row-start-3 rounded-3xl bg-tertiary p-8 dark:bg-tertiaryDark">
			<div class="mb-4 flex flex-col">
				<!-- Games header -->
				<h1 class="text-3xl font-bold text-black dark:text-white">{$_('apps')}</h1>
				<!-- See more -->
				<a
					href="/apps"
					class="w-fit text-sm text-gray-500 transition hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
				>
					{$_('see_more')}
				</a>
			</div>

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

			{#if likedApps.length > 0}
				<grid class="mb-4 mt-2 flex flex-row justify-start">
					<h1 class="text-3xl font-bold text-black dark:text-white">{$_('loved_apps')}</h1>
					<Icon
						icon="mdi:heart"
						class="ml-1 mt-1 text-3xl text-red-500 transition hover:text-pink-500"
					/>
				</grid>

				<Carousel {SCROLL_AMOUNT}>
					{#each likedApps as app}
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
			{/if}
		</grid>

		<grid class="row-start-4">
			<Faq />
		</grid>
		<grid class="row-start-5">
			<Horz />
		</grid>
		<grid class="row-start-6 max-w-full" dir="ltr">
			<Partners />
		</grid>
	</div>
{/if}
