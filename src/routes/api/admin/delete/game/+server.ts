import prisma from '$lib/prisma';

import type { Game } from '@prisma/client';

interface Opts {
	request: Request;
}

// Post request
export async function POST({ request }: Opts): Promise<Response> {
	const data = await request.json();

	if (!data.id) {
		return new Response(JSON.stringify({ success: false }), {
			status: 400
		});
	}

	// find the game
	const game: Game = await prisma.game.findUnique({
		where: {
			id: data.id
		}
	});

	await prisma.game.delete({
		where: {
			id: data.id
		}
	});

	return new Response(JSON.stringify({ success: true }), {
		status: 200
	});
}
