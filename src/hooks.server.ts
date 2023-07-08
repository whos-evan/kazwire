import type { Handle } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';
import { sequence } from '@sveltejs/kit/hooks';

const admin: Handle = async ({ event, resolve }) => {
	// Apply basic login for admin route
	if (event.url.pathname.startsWith('/admin')) {
		const adminAuth = env.ADMIN_AUTH || 'admin:admin';

		const basicAuth = event.request.headers.get('Authorization');
		if (basicAuth !== `Basic ${btoa(adminAuth)}`) {
			return new Response('Not authorized', {
				status: 401,
				headers: {
					'WWW-Authenticate': 'Basic realm="User Visible Realm", charset="UTF-8"'
				}
			});
		}
	}

	const response = await resolve(event);
	return response;
};

export const api: Handle = async ({ resolve, event }) => {
	// Apply CORS header for API routes
	if (event.url.pathname.startsWith('/api')) {
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

	if (event.url.pathname.startsWith('/api/admin')) {
		const adminAuth = env.ADMIN_AUTH || 'admin:admin';

		const basicAuth = event.request.headers.get('Authorization');
		if (basicAuth !== `Basic ${btoa(adminAuth)}`) {
			return new Response('Not authorized', {
				status: 401,
				headers: {
					'WWW-Authenticate': 'Basic realm="User Visible Realm", charset="UTF-8"'
				}
			});
		}
	}

	const response = await resolve(event);
	if (event.url.pathname.startsWith('/api')) {
		response.headers.append('Access-Control-Allow-Origin', `*`);
	}
	return response;
};

export const handle: Handle = sequence(admin, api);
