import type { Actions, PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';
import prisma from '$lib/prisma';

import { auth } from '$lib/server/lucia';

export const load = (async ({ locals }) => {
	const session = await locals.auth.validate();
	if (!session) return;
	return {
		loved_games: session.user.loved_games,
		played_games: session.user.played_games
	};
}) satisfies PageServerLoad;

export const actions: Actions = {
	love: async ({ request, locals }) => {
		// Fetch the game id from the slug
		const url = await request.url.split('/');
		let game_id: string = url[url.length - 2];
		// remove the question mark from the end of the game id
		game_id = game_id.slice(0, -1);

		// Get the session
		const session = await locals.auth.validate();
		// redirect to login if not logged in
		if (!session) throw redirect(302, '/login');

		// Get the user
		const user = await auth.getUser(session.user.userId);
		// redirect to login if not logged in
		if (!user) throw redirect(302, '/login');

		// +-1 from the game's loved count
		const game = await prisma.game.findUnique({
			where: {
				id: game_id
			}
		});

		if (user.loved_games.includes(game_id)) {
			// Remove the game from the user's loved games
			user.loved_games.splice(user.loved_games.indexOf(game_id), 1);

			if (game) {
				await prisma.game.update({
					where: {
						id: game_id
					},
					data: {
						loves: game.loves - 1
					}
				});
			}
		} else {
			// Add the game to the user's loved games
			user.loved_games.push(game_id);

			if (game) {
				await prisma.game.update({
					where: {
						id: game_id
					},
					data: {
						loves: game.loves + 1
					}
				});
			}
		}

		// Update the user
		// remove the userId from the user object
		await auth.updateUserAttributes(session.user.userId, {
			loved_games: user.loved_games
		});

		return {
			loved_games: user.loved_games,
			played_games: user.played_games
		};
	}
};
