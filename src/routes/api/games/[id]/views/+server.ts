// Add a view to a game given the game id
import prisma from '$lib/prisma';

interface Opts {
	url: URL;
}

// Post request
export async function POST({ url }: Opts): Promise<Response> {
	// Get the id from the slug
	const id = url.pathname.split('/')[3];
	console.log(id)

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

		return new Response('ok');
	} else {
		return new Response(JSON.stringify({ error: 'No id provided' }), {
			status: 404
		});
	}
}
