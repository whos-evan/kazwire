<script lang="ts">
	import DefaultBox from '$lib/components/Box/DefaultBox.svelte';
	import DefaultBoxLoading from '$lib/components/Box/DefaultBoxLoading.svelte';

	import type { Game } from '@prisma/client';

	import { PUBLIC_API_BASE_URL } from '$env/static/public';

	// Fetch all hearted games from local storage
	import { gameLike } from '$lib/likeContent';

	// Fetch the hearted games from the api
	async function getHeartedGames() {
		let likedIds = gameLike.fetchLikes();
		let games: Game[] = [];

		// fetch the games from the api
		for (let i = 0; i < likedIds.length; i++) {
			const response = await fetch(PUBLIC_API_BASE_URL + '/api/games/' + likedIds[i]);
			const game: Game = await response.json();
			games.push(game);
		}

		// randomly choose 2 games from the list
		if (games.length > 2) {
			let randomGames: Game[] = [];
			for (let i = 0; i < 2; i++) {
				let randomIndex = Math.floor(Math.random() * games.length);
				randomGames.push(games[randomIndex]);
				games.splice(randomIndex, 1);
			}
			games = randomGames;
		}

		return games;
	}
</script>

{#await getHeartedGames()}
	<!-- While loading it will show a template loading box. -->
	<DefaultBoxLoading />
{:then games}
	{#each games as game}
		<DefaultBox
			image={'/game/img/' + game.image}
			name={game.name}
			description={game.description}
			developer={game.developer}
			link={'/games/' + game.id}
			tags={game.tags || []}
			popular={game.popular || false}
			errorMessage={game.errorMessage || undefined}
			platformSupport={game.platform}
		/>
	{/each}
{:catch error}
	<p>{error.message}</p>
{/await}
