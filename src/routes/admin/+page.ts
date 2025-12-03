import type { PageLoad } from './$types';
import { config } from '$lib/config';

// Disable prerendering
export const prerender = false;

export const load = (async ({ fetch }) => {
	const resUser = await fetch('/api/admin/user');
	const resUserCount = await fetch('/api/admin/user/count');
	const resGameViewCount = await fetch('/api/admin/games/view_count');
	const resAppViewCount = await fetch('/api/admin/apps/view_count');

	if (resUser.ok && resUserCount.ok) {
		return {
			users: await resUser.json(),
			userCount: await resUserCount.json(),
			gameViewCount: await resGameViewCount.json(),
			appViewCount: await resAppViewCount.json(),
			config: config
		};
	}

	return {};
}) satisfies PageLoad;
