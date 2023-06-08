import prisma from '$lib/prisma';

interface Opts {
	url: URL;
}

export async function GET({ url }: Opts): Promise<Response> {
	// get the slug from the URL
	const slug = url.pathname.split('/').pop();
	if (slug) {
		const app = await prisma.app.findUnique({
			where: {
				id: slug
			}
		});
		if (app) {
			return new Response(JSON.stringify(app), {
				headers: {
					'Content-Type': 'application/json',
					'Cache-Control': 'max-age=3600'
				}
			});
		}
	}
	return new Response(JSON.stringify({ error: 'App not found' }), {
		status: 404,
		headers: {
			'Content-Type': 'application/json',
			'Cache-Control': 'max-age=3600'
		}
	});
}
