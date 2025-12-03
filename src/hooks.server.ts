import { auth } from '$lib/server/lucia';
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	// we can pass `event` because we used the SvelteKit middleware
	event.locals.auth = auth.handleRequest(event);

	if (event.url.pathname.startsWith('/api/admin') || event.url.pathname.startsWith('/admin')) {
		const session = await event.locals.auth.validate();
		if (!session) {
			return new Response('Unauthorized');
		}
		if (session.user.role !== 'admin') {
			return new Response('Unauthorized');
		}
	}

	// Apply CORS header for API routes
	if (event.url.pathname.startsWith('/api/games') || event.url.pathname.startsWith('/api/apps')) {
		// Required for CORS to work
		if (event.request.method === 'OPTIONS') {
			return new Response(null, {
				headers: {
					'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
					'Access-Control-Allow-Origin': '*',
					'Access-Control-Allow-Headers': '*'
				}
			});
		}
	}

	// Service-Worker-Allowed HTTP header for service workers
	await event.setHeaders({
		'Service-Worker-Allowed': '/'
	});


	return await resolve(event);
};
