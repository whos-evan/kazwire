import prisma from '$lib/prisma';
import type { App } from '@prisma/client';

export const prerender = false;

export async function GET(): Promise<Response> {
	const apps = await prisma.app.findMany({
		orderBy: {
			views: 'desc'
		}
	});

	if (apps === null) {
		return new Response('Error getting apps');
	}

	// Count the number of views for each game
	let totalViews = 0;
	for (let i = 0; i < apps.length; i++) {
		const app = apps[i];
		totalViews += app.views;
	}

	return new Response(JSON.stringify(totalViews));
}
