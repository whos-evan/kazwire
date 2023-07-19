import { PUBLIC_API_BASE_URL } from '$env/static/public';
import type { App } from '@prisma/client';
import type { PageLoad } from './$types';

export const load = (async ({ url, fetch }) => {
	let searchQuery: string = url.searchParams.get('search') || '';
	// Get the games from the api
	const response: Response = await fetch(
		PUBLIC_API_BASE_URL + '/api/apps' + '?search=' + searchQuery
	);

	const apps: App[] = await response.json();

	return {
		// Return the game
		apps: apps
	};
}) satisfies PageLoad;
