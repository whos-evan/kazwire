import { PUBLIC_API_BASE_URL } from '$env/static/public';
import type { Game } from '@prisma/client';
import type { PageLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const prerender = false;

export const load = (async ({ params, fetch }) => {
	// Get the slug of the URL
	const slug: string = params.id;

	// Get the games from the api
	const response: Response = await fetch(PUBLIC_API_BASE_URL + '/api/games/' + slug);
	if (response.status === 404) {
		// Redirect to 404 page
		throw redirect(307, '/games/');
	}
	const game: Game = await response.json();
	if (game.emulatorType !== 'emulatorjs') {
		throw redirect(307, '/games/' + slug);
	}

	return {
		// Return the game
		game: game
	};
}) satisfies PageLoad;
