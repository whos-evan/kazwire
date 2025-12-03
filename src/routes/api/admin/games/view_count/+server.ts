import prisma from '$lib/prisma';
import type { Game } from '@prisma/client';

export const prerender = false;

export async function GET(): Promise<Response> {
	const games = await prisma.game.findMany({
		orderBy: {
			views: 'desc'
		}
	});

	if (games === null) {
		return new Response('Error getting games');
	}

	// Count the number of views for each game
	let totalViews = 0;
	for (let i = 0; i < games.length; i++) {
		const game = games[i];
		totalViews += game.views;
	}

	return new Response(JSON.stringify(totalViews));
}
