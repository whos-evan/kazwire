import prisma from '$lib/prisma';

import type { App } from '@prisma/client';

interface Opts {
	request: Request;
}

// Post request
export async function POST({ request }: Opts): Promise<Response> {
	// Edit the game given the new data sent as a json object which provides the id and all the new data
	const data: App = await request.json();

	if (data.id) {
		const game = await prisma.game.findUnique({
			where: {
				id: data.id
			}
		});

		if (!game) {
			return new Response(JSON.stringify({ error: 'Game not found' }), {
				status: 404
			});
		}

		// Run input validation on all the data given
		// Ensure that the name, id, description, image, developer, embedURL, emulatorCore, emulatorFile, emulatorType, errorMessage, platform, and tags are all strings
		if (
			typeof data.name !== 'string' ||
			typeof data.id !== 'string' ||
			typeof data.description !== 'string' ||
			typeof data.image !== 'string' ||
			typeof data.developer !== 'string'
		) {
			console.log(data.name, data.id, data.description, data.image, data.developer, data.embedURL);
			return new Response(JSON.stringify({ error: 'Invalid input strings' }), {
				status: 400
			});
		}

		if (data.embedURL != null && typeof data.embedURL !== 'string') {
			return new Response(JSON.stringify({ error: 'Invalid input strings' }), {
				status: 400
			});
		}

		// Ensure that the views are numbers
		if (typeof data.views !== 'number') {
			return new Response(JSON.stringify({ error: 'Invalid input number' }), {
				status: 400
			});
		}

		await prisma.game.update({
			where: {
				id: data.id
			},
			data: {
				name: data.name,
				description: data.description,
				image: data.image,
				id: data.id,
				views: data.views,
				developer: data.developer,
				embedURL: data.embedURL,
			}
		});
	} else {
		return new Response(JSON.stringify({ error: 'No id provided' }), {
			status: 404
		});
	}

	return new Response(JSON.stringify({ success: true }), {
		status: 200
	});
}
