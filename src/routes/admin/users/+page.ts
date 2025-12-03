import type { PageLoad } from './$types';
import { config } from '$lib/config';

export const prerender = false;

export const load = (async ({ fetch, url }) => {
	const pageNumber = parseInt(url.searchParams.get('page') || '1', 10);
	const res = await fetch('/api/admin/user' + (pageNumber > 1 ? '?page=' + pageNumber : ''));

	if (res.ok) {
		return {
			users: await res.json(),
			pageNumber,
			config: config
		};
	}

	return {};
}) satisfies PageLoad;
