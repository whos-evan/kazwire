import { PUBLIC_API_BASE_URL } from '$env/static/public';
import type { Game } from '@prisma/client';
import type { PageLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const prerender = false;

export const load = (async ({ params, fetch, data }) => {
	// Get the slug of the URL
	const slug: string = params.id;

	// Get the games from the api
	const response: Response = await fetch(PUBLIC_API_BASE_URL + '/api/games/' + slug);
	if (response.status === 404) {
		// Redirect to game page
		throw redirect(307, '/games/');
	}

	const game: Game = await response.json();

	return {
		...data,
		// Return the game
		game: game
	};
}) satisfies PageLoad;
