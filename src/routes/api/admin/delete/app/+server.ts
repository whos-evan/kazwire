import prisma from '$lib/prisma';

import type { App } from '@prisma/client';

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

	// find the app
	const app: App = await prisma.app.findUnique({
		where: {
			id: data.id
		}
	});

	await prisma.app.delete({
		where: {
			id: data.id
		}
	});

	return new Response(JSON.stringify({ success: true }), {
		status: 200
	});
}
