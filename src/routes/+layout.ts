import type { PageLoad } from './$types';
import type { Game } from '@prisma/client';
import { PUBLIC_API_BASE_URL } from '$env/static/public';

export const load = (async ({ fetch, data }) => {
	const responseGames = await fetch(PUBLIC_API_BASE_URL + '/api/games');
	const games: Game[] = await responseGames.json();
	// go through each game to find the tags
	let gameTags: string[] = [];
	for (let i = 0; i < games.length; i++) {
		const game = games[i];
		if (game.tags) {
			gameTags = gameTags.concat(game.tags);
		}
	}
	// remove duplicates
	gameTags = [...new Set(gameTags)];
	// sort alphabetically
	gameTags.sort((a, b) => a.localeCompare(b));

	const responseApps = await fetch(PUBLIC_API_BASE_URL + '/api/apps');
	const apps: Game[] = await responseApps.json();
	// go through each app to find the tags
	let appTags: string[] = [];
	for (let i = 0; i < apps.length; i++) {
		const app = apps[i];
		if (app.tags) {
			appTags = appTags.concat(app.tags);
		}
	}

	return { ...data, games, apps, gameTags };
}) satisfies PageLoad;
