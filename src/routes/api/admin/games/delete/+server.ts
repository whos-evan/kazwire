// DELETE request to create a delete game
import prisma from '$lib/prisma';
import type { Game } from '@prisma/client';

interface Opts {
	url: URL;
}

// method DELETE
export async function DELETE({ url }: Opts): Promise<Response> {
	const id = url.searchParams.get('id');
	if (!id) return new Response('No id provided', { status: 400 });

	let game: Game;

	try {
		game = await prisma.game.delete({
			where: {
				id
			}
		});
	} catch (err) {
		return new Response(err);
	}

	return new Response(JSON.stringify(game));
}
