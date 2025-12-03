import { auth } from '$lib/server/lucia';
import { fail, redirect } from '@sveltejs/kit';

import { config } from '$lib/config';

import type { Actions, PageServerLoad } from './$types';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import prisma from '$lib/prisma';

export const actions: Actions = {
	default: async ({ request, locals }) => {
		if (!config.features.accountCreation) {
			return fail(400, {
				message: 'Account creation is disabled'
			});
		}

		const formData = await request.formData();
		const email = formData.get('email');
		const display_name = formData.get('display_name');
		const password = formData.get('password');

		// check if email is valid
		const isValidEmail = (maybeEmail: unknown): maybeEmail is string => {
			if (typeof maybeEmail !== 'string') return false;
			if (maybeEmail.length > 255) return false;
			const emailRegexp = /^.+@.+$/; // [one or more character]@[one or more character]
			return emailRegexp.test(maybeEmail);
		};

		if (!isValidEmail(email)) {
			return fail(400, {
				message: 'Invalid email'
			});
		}

		const isValidDisplayName = (maybeDisplayName: unknown): maybeDisplayName is string => {
			if (typeof maybeDisplayName !== 'string') return false;
			if (maybeDisplayName.length > 45) return false;

			return true;
		};

		if (!isValidDisplayName(display_name)) {
			return fail(400, {
				message: 'Invalid display name'
			});
		}

		// basic check
		if (typeof password !== 'string' || password.length < 6 || password.length > 255) {
			return fail(400, {
				message: 'Invalid password'
			});
		}
		try {
			// check if they are the first user to sign up
			const userCount = await prisma.user.count();
			const user = await auth.createUser({
				key: {
					providerId: 'email', // auth method
					providerUserId: email.toLowerCase(), // unique id when using "username" auth method
					password // hashed by Lucia,
				},
				attributes: {
					email: email.toLowerCase(),
					// for now we will set the email as verified
					email_verified: true,
					display_name: display_name ?? email,
					role: userCount === 0 ? 'admin' : 'user'
				}
			});
			const session = await auth.createSession({
				userId: user.userId,
				attributes: {}
			});
			locals.auth.setSession(session); // set session cookie
		} catch (e) {
			// this part depends on the database you're using
			// check for unique constraint error in user table
			if (e instanceof PrismaClientKnownRequestError) {
				return fail(400, {
					message: 'Account already exists with that email'
				});
			}
			return fail(500, {
				message: 'An unknown error occurred'
			});
		}
		// redirect to
		// make sure you don't throw inside a try/catch block!
		throw redirect(302, '/profile');
	}
};

export const load: PageServerLoad = async ({ locals }) => {
	const session = await locals.auth.validate();
	if (session) throw redirect(302, '/profile');
	return {};
};
