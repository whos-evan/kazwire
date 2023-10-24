import { PUBLIC_API_BASE_URL } from '$env/static/public';
import type { Game } from '@prisma/client';
import type { PageLoad } from './$types';

export const load = (async ({ url, fetch }) => {


	let searchQuery: string = url.searchParams.get('search') || '';
	let tagQuery: string = url.searchParams.get('tag') || '';

	// Get the games from the api
	const response: Response = await fetch(PUBLIC_API_BASE_URL + '/api/games' + '?search=' + searchQuery + '&tag=' + tagQuery);

	const games: Game[] = await response.json();

	// Remove all games completely if they have a an errorMessage that isn't null
	games.forEach((game: Game, index: number) => {
		if (game.errorMessage !== null) {
			games.splice(index, 1);
		}
	});

	return {
        // Return the game
        games: games,
    };
}) satisfies PageLoad;
