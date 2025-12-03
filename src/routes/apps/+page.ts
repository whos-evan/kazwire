import type { PageLoad } from './$types';
import type { App } from '@prisma/client';
import { PUBLIC_API_BASE_URL } from '$env/static/public';

// TODO: ALLOW PRERENDERING
export const prerender = false;

export const load = (async ({ fetch, url }) => {
	const searchParam = url.searchParams.get('search') || '';

	const response = await fetch(
		PUBLIC_API_BASE_URL + '/api/apps' + (searchParam ? '?search=' + searchParam : '')
	);
	const apps: App[] = await response.json();

	return { apps, searchParam };
}) satisfies PageLoad;
