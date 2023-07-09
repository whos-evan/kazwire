<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	// import Showoff from '$lib/components/Showoff.svelte';
	import Faq from '$lib/components/Faq.svelte';
	import Partners from '$lib/components/Partners.svelte';

	// import FinalGrade from '$lib/components/FinalGrade.svelte';

	// import Changelog from '$lib/components/Changelog.svelte';

	// import RandomGame from '$lib/components/RandomGame.svelte';
	// import LovedGame from '$lib/components/LovedGame.svelte';
	// import LovedApp from '$lib/components/LovedApp.svelte';
	import SmallBox from '$lib/components/Box/SmallBox.svelte';
	import type { Game, App } from '@prisma/client';
	import { PUBLIC_API_BASE_URL } from '$env/static/public';

	let innerWidth: number;

	import Horz from '$lib/components/Google/Horz.svelte';
	let likedGames: string[] = [];
	let likedApps: string[] = [];

	let games: Game[] = [];
	let apps: App[] = [];
	let tags: string[] = [];

	import { appLike, gameLike } from '$lib/likeContent';
	import { onMount } from 'svelte';

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
				console.log(tags);
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
		<Hero />
	</grid>
	<grid class="row-start-2">
		<grid class="grid grid-cols-6 gap-x-4">
			{#each tags as tag}
				<!-- Header for tag -->
				<grid class="col-span-6 my-4">
					{#if tag.length > 3}
						<h2 class="text-xl font-bold capitalize text-black dark:text-white">{tag} Games</h2>
					{:else}
						<h2 class="text-xl font-bold text-black dark:text-white">{tag.toUpperCase()} Games</h2>
					{/if}
				</grid>
				<!-- Scrollable div for the small boxes -->
				<grid class="col-span-6 grid grid-flow-col-dense justify-start gap-x-4 overflow-x-auto">
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
				</grid>
			{/each}
		</grid>
	</grid>
	<grid class="row-start-3">
		<!-- Games header -->
		<h1 class="mb-4 text-xl font-bold text-black dark:text-white">Apps</h1>
		<grid class="grid grid-cols-6 gap-x-4">
			<!-- Scrollable div for the small boxes -->
			<grid class="col-span-6 grid grid-flow-col-dense justify-start gap-x-4 overflow-x-auto">
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
			</grid>
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
