import type { PageLoad } from './$types';
import { config } from '$lib/config';

export const prerender = false;

export const load = (async ({ fetch }) => {
	const res = await fetch('/api/admin/user');

	if (res.ok) {
		return {
			users: await res.json(),
			config: config
		};
	}

	return {};
}) satisfies PageLoad;
