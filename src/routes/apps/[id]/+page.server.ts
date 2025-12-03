import type { Actions, PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';
import prisma from '$lib/prisma';

import { auth } from '$lib/server/lucia';

export const load = (async ({ locals }) => {
	const session = await locals.auth.validate();
	if (!session) return;
	return {
		loved_apps: session.user.loved_apps,
		played_apps: session.user.played_apps
	};
}) satisfies PageServerLoad;

export const actions: Actions = {
	love: async ({ request, locals }) => {
		// Fetch the app id from the slug
		const url = await request.url.split('/');
		let app_id: string = url[url.length - 2];
		// remove the question mark from the end of the app id
		app_id = app_id.slice(0, -1);

		// Get the session
		const session = await locals.auth.validate();
		// redirect to login if not logged in
		if (!session) throw redirect(302, '/login');

		// Get the user
		const user = await auth.getUser(session.user.userId);
		// redirect to login if not logged in
		if (!user) throw redirect(302, '/login');

		// +-1 from the app's loved count
		const app = await prisma.app.findUnique({
			where: {
				id: app_id
			}
		});

		if (user.loved_apps.includes(app_id)) {
			// Remove the app from the user's loved apps
			user.loved_apps.splice(user.loved_apps.indexOf(app_id), 1);

			if (app) {
				await prisma.app.update({
					where: {
						id: app_id
					},
					data: {
						loves: app.loves - 1
					}
				});
			}
		} else {
			// Add the app to the user's loved apps
			user.loved_apps.push(app_id);

			if (app) {
				await prisma.app.update({
					where: {
						id: app_id
					},
					data: {
						loves: app.loves + 1
					}
				});
			}
		}

		// Update the user
		// remove the userId from the user object
		await auth.updateUserAttributes(session.user.userId, {
			loved_apps: user.loved_apps
		});

		return {
			loved_apps: user.loved_apps,
			played_apps: user.played_apps
		};
	}
};
