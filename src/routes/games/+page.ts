import type { PageLoad } from './$types';
import type { Game } from '@prisma/client';
import { PUBLIC_API_BASE_URL } from '$env/static/public';

// TODO: ALLOW PRERENDERING
export const prerender = false;

export const load = (async ({ fetch, url }) => {
	const searchParam = url.searchParams.get('search') || '';
	const tagParam = url.searchParams.get('tag') || '';

	const response = await fetch(
		PUBLIC_API_BASE_URL +
			'/api/games' +
			(searchParam ? '?search=' + searchParam : '') +
			(tagParam ? '?tag=' + tagParam : '')
	);
	const games: Game[] = await response.json();

	// go through every game to find all tags
	const allGames = await fetch(PUBLIC_API_BASE_URL + '/api/games');
	const allGamesJson: Game[] = await allGames.json();
	let tags: string[] = [];
	for (let i = 0; i < allGamesJson.length; i++) {
		for (let j = 0; j < allGamesJson[i].tags.length; j++) {
			if (!tags.includes(allGamesJson[i].tags[j])) {
				tags.push(allGamesJson[i].tags[j]);
			}
		}
	}

	return { games, tags, searchParam, tagParam };
}) satisfies PageLoad;
