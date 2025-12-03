import prisma from '$lib/prisma';

interface Opts {
	url: URL;
}

export async function GET({ url }: Opts): Promise<Response> {
	// Fetch a random game from the database
	const app = await prisma.app.findFirst({
		orderBy: {
			name: 'asc'
		},
		skip: Math.floor(Math.random() * (await prisma.app.count()))
	});

	// Return the game as JSON
	return new Response(JSON.stringify(app), {
		headers: {
			'Content-Type': 'application/json'
		}
	});
}
