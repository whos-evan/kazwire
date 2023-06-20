// Add a view to a app given the app id
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
		const app = await prisma.app.findUnique({
			where: {
				id: id
			}
		});

		if (!app) {
			return new Response(JSON.stringify({ error: 'App not found' }), {
				status: 404
			});
		}

		await prisma.app.update({
			where: {
				id: id
			},
			data: {
				views: app.views + 1
			}
		});

		return new Response('ok');
	} else {
		return new Response(JSON.stringify({ error: 'No id provided' }), {
			status: 404
		});
	}
}
