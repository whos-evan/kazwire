// Add a view to a game given the game id
import prisma from '$lib/prisma';

import { auth } from '$lib/server/lucia';

interface Opts {
	url: URL;
}

// Post request
export async function POST({ url, locals }: Opts): Promise<Response> {
	// Get the id from the slug
	const id = url.pathname.split('/')[3];

	if (id) {
		const game = await prisma.game.findUnique({
			where: {
				id: id
			}
		});

		if (!game) {
			return new Response(JSON.stringify({ error: 'Game not found' }), {
				status: 404
			});
		}

		await prisma.game.update({
			where: {
				id: id
			},
			data: {
				views: game.views + 1
			}
		});

		// check if the user is logged in
		const session = await locals.auth.validate();
		if (session) {
			// Get the user
			const user = await auth.getUser(session.user.userId);
			// redirect to login if not logged in
			if (!user) return new Response(JSON.stringify({ error: 'User not found' }), { status: 404 });

			// Add the game to the user's played games
			user.played_games = [...user.played_games, id];

			// if over 100 games, remove the first game
			if (user.played_games.length > 100) {
				user.played_games.shift();
			}

			auth.updateUserAttributes(session.user.userId, {
				played_games: user.played_games
			});
		}

		return new Response('ok');
	} else {
		return new Response(JSON.stringify({ error: 'No id provided' }), {
			status: 404
		});
	}
}
