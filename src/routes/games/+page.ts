import { PUBLIC_API_BASE_URL } from '$env/static/public';
import type { Game } from '@prisma/client';
import type { PageLoad } from './$types';

export const load = (async ({ url, fetch }) => {


	let searchQuery: string = url.searchParams.get('search') || '';
	let tagQuery: string = url.searchParams.get('tag') || '';

	// Get the games from the api
	const response: Response = await fetch(PUBLIC_API_BASE_URL + '/api/games' + '?search=' + searchQuery + '&tag=' + tagQuery);

	const games: Game[] = await response.json();

	return {
        // Return the game
        games: games,
    };
}) satisfies PageLoad;
