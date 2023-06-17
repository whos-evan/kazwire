<script lang="ts">
	// TODO: Dynamicly determine how to access the game:
	// 1. If the game is hosted locally just use the path
	// 2. If the game is hosted on another server use the proxied path
	// 3. If the game is emulated determine what emulator is required and use the required path (i.e. /emulators/super-mario-64, /ruffle/duck-life)

	import type { Game } from '@prisma/client';
	import { PUBLIC_API_BASE_URL } from '$env/static/public';

	import { page } from '$app/stores';
	import { onMount } from 'svelte';

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

		if (game.emulatorType != 'emulatorjs') {
			console.error('Game is not a emulatorjs game');
			// Redirect to 404 page
			window.location.href = '/games/';
		}

		return game;
	}

	onMount(async () => {
        // Get the game
        const game: Game = await getGame(slug);

		// Create another script tag for the variables
		const script2: HTMLScriptElement = document.createElement('script');
        // Set the type
        script2.type = 'text/javascript';
		// Set the varaibles
		script2.innerHTML = `
            EJS_player = '#game';
            EJS_gameUrl = '/game/emulated/${game.emulatorFile}'; // Url to Game rom
            EJS_pathtodata = '/game/emulated/emulatorJS/';
            EJS_core = '${game.emulatorCore}';
        `;
        // Append the script tag to the body
        document.body.appendChild(script2);

		// Make a script tag
		const script: HTMLScriptElement = document.createElement('script');
		// Set the src to the game's loader
		script.src = '/game/emulated/emulatorJS/loader.js';
		// Append the script tag
        document.body.appendChild(script);
	});
</script>

{#await getGame(slug) then game}
	{#if game.emulatorType == 'emulatorjs'}
		<head>
			<title>Kazwire - {game.name}</title>
			<meta name="description" content="Play {game.name} for free now on Kazwire!" />
			<meta property="og:description" content="Play {game.name} for free now on Kazwire!" />
		</head>

		<div class="flex min-h-screen min-w-screen items-center justify-center text-center">
			<div class="min-h-screen min-w-screen" id="game" />
		</div>
	{/if}
{:catch error}
	{error.message}
{/await}
