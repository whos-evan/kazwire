import { PUBLIC_API_BASE_URL } from '$env/static/public';
import type { App } from '@prisma/client';
import type { PageLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const prerender = false;

export const load = (async ({ params, fetch, data }) => {
	// Get the slug of the URL
	const slug: string = params.id;

	// Get the apps from the api
	const response: Response = await fetch(PUBLIC_API_BASE_URL + '/api/apps/' + slug);
	if (response.status === 404) {
		// Redirect to app page
		throw redirect(307, '/apps/');
	}

	const app: App = await response.json();

	return {
		...data,
		// Return the app
		app: app
	};
}) satisfies PageLoad;
