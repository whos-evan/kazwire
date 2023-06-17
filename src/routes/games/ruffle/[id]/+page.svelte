<script lang="ts">
	// TODO: Dynamicly determine how to access the game:
	// 1. If the game is hosted locally just use the path
	// 2. If the game is hosted on another server use the proxied path
	// 3. If the game is emulated determine what emulator is required and use the required path (i.e. /emulators/super-mario-64, /ruffle/duck-life)

	import type { Game } from '@prisma/client';
	import { PUBLIC_API_BASE_URL } from '$env/static/public';

	import { page } from '$app/stores';

	// Get the slug of the URL
	const slug: string = $page.params.id;
	
	// Get the games from the api
	async function getGame(id: string) {
		const response: Response = await fetch(PUBLIC_API_BASE_URL + '/api/games/' + id);
		if (response.status === 404) {
			// Redirect to 404 page
			window.location.href = '/games/';
		}
		const game: Game = await response.json();

        if (game.emulatorType != 'ruffle') {
            console.error('Game is not a ruffle game')
            // Redirect to 404 page
            window.location.href = '/games/';
        }

		return game;
	}
</script>

{#await getGame(slug) then game}
	{#if game.emulatorType == 'ruffle'}
		<head>
			<title>Kazwire - {game.name}</title>
			<meta name="description" content="Play {game.name} for free now on Kazwire!" />
			<meta property="og:description" content="Play {game.name} for free now on Kazwire!" />
			<script src="/game/ruffle/ruffle/ruffle.js"></script>
		</head>

		<embed src="/game/ruffle/{game.id}/{game.id}.swf" class="absolute h-[100vh] w-[100vw]"/>
	{/if}
{:catch error}
	{error.message}
{/await}
