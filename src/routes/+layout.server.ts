import { auth } from '$lib/server/lucia';
import type { LayoutServerLoad } from './$types';
import { suggestionAlgorithm } from '$lib/server/suggestionAlgorithm';

export const load = (async ({ locals }) => {
	// Fetch user
	const session = await locals.auth.validate();
	if (!session) return;
	// Get the user
	const user = await auth.getUser(session.user.userId);

	if (user) {
		return {
			user: user,
			loved_games: user.loved_games,
			played_games: user.played_games,
			loved_apps: user.loved_apps,
			played_apps: user.played_apps,
			suggested_games: await suggestionAlgorithm(user.loved_games, user.played_games)
		};
	}

	return {
		user: null,
		loved_games: [],
		played_games: [],
		loved_apps: [],
		played_apps: [],
		suggested_games: []
	};
}) satisfies LayoutServerLoad;
