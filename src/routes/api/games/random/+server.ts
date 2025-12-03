import prisma from '$lib/prisma';

interface Opts {
	url: URL;
}

export async function GET({ url }: Opts): Promise<Response> {
	// Fetch a random game from the database
	const game = await prisma.game.findFirst({
		orderBy: {
			name: 'asc'
		},
		skip: Math.floor(Math.random() * (await prisma.game.count()))
	});

	// Return the game as JSON
	return new Response(JSON.stringify(game), {
		headers: {
			'Content-Type': 'application/json'
		}
	});
}
