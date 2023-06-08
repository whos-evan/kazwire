import prisma from '$lib/prisma';

interface Opts {
	url: URL;
}

export async function GET({ url }: Opts): Promise<Response> {
	// get the slug from the URL
	const slug = url.pathname.split('/').pop();
	if (slug) {
		const game = await prisma.game.findUnique({
			where: {
				id: slug
			}
		});
		if (game) {
			return new Response(JSON.stringify(game), {
				headers: {
					'Content-Type': 'application/json',
					'Cache-Control': 'max-age=3600'
				}
			});
		}
	}
	return new Response(JSON.stringify({ error: 'Game not found' }), {
		status: 404,
		headers: {
			'Content-Type': 'application/json',
			'Cache-Control': 'max-age=3600'
		}
	});
}
