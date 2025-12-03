import { lucia } from 'lucia';
import { sveltekit } from 'lucia/middleware';
import { dev } from '$app/environment';
import { prisma } from '@lucia-auth/adapter-prisma';
import { PrismaClient } from '@prisma/client';

const client = new PrismaClient();

export const auth = lucia({
	env: dev ? 'DEV' : 'PROD',
	middleware: sveltekit(),
	adapter: prisma(client, {
		user: 'user', // model User {}
		key: 'key', // model Key {}
		session: 'session' // model Session {}
	}),

	getUserAttributes: (data) => {
		return {
			email: data.email,
			email_verified: data.email_verified, // `Boolean(data.email_verified)` if stored as an integer,
			display_name: data.display_name,
			role: data.role,

			// custom attributes
			loved_games: data.loved_games,
			played_games: data.played_games,
			loved_apps: data.loved_apps,
			played_apps: data.played_apps
		};
	}
});

export type Auth = typeof auth;
