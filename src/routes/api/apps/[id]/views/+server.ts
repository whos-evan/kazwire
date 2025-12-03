// Add a view to a app given the app id
import prisma from '$lib/prisma';

import { auth } from '$lib/server/lucia';

interface Opts {
	url: URL;
}

// Post request
export async function POST({ url, locals }: Opts): Promise<Response> {
	// Get the id from the slug
	const id = url.pathname.split('/')[3];

	if (id) {
		const app = await prisma.app.findUnique({
			where: {
				id: id
			}
		});

		if (!app) {
			return new Response(JSON.stringify({ error: 'App not found' }), {
				status: 404
			});
		}

		await prisma.app.update({
			where: {
				id: id
			},
			data: {
				views: app.views + 1
			}
		});

		// check if the user is logged in
		const session = await locals.auth.validate();
		if (session) {
			// Get the user
			const user = await auth.getUser(session.user.userId);
			// redirect to login if not logged in
			if (!user) return;

			// Add the app to the user's played apps
			user.played_apps = [...user.played_apps, id];

			// if over 100 apps, remove the first app
			if (user.played_apps.length > 100) {
				user.played_apps.shift();
			}

			auth.updateUserAttributes(session.user.userId, {
				played_apps: user.played_apps
			});
		}

		return new Response('ok');
	} else {
		return new Response(JSON.stringify({ error: 'No id provided' }), {
			status: 404
		});
	}
}
