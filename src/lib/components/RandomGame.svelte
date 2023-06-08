<script lang="ts">
	import DefaultBox from '$lib/components/Box/DefaultBox.svelte';
	import DefaultBoxLoading from '$lib/components/Box/DefaultBoxLoading.svelte';

	import type { Game } from '@prisma/client';

	// Fetch the random game from the api
	async function getRandomGame() {
		const response = await fetch('/api/games/random');
		const game: Game = await response.json();
		return game;
	}
</script>

{#await getRandomGame()}
	<!-- While loading it will show a template loading box. -->
	<DefaultBoxLoading />
{:then game}
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
{:catch error}
	<p>{error.message}</p>
{/await}
