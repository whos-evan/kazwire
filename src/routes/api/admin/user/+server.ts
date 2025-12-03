import prisma from '$lib/prisma';

interface Opts {
	url: URL;
	request: Request;
}

import { LuciaError } from 'lucia';
import { auth } from '$lib/server/lucia';

export const prerender = false;

// searchParams.get("user") is the username of the user to get
// searchParams.get("page") is the page number to get

export async function GET({ url }: Opts): Promise<Response> {
	const NUM_TO_SHOW = 100;

	// Find the user the request is for
	const userQuery = url.searchParams.get('user');
	if (!userQuery) {
		const pageNumber = url.searchParams.get('page');
		if (pageNumber) {
			const page = parseInt(pageNumber);
			if (isNaN(page)) {
				return new Response('Invalid page number');
			}

			const users = await prisma.user.findMany({
				skip: (page - 1) * NUM_TO_SHOW,
				take: NUM_TO_SHOW,
				orderBy: {
					email: 'asc'
				}
			});

			return new Response(JSON.stringify(users));
		} else {
			const users = await prisma.user.findMany({
				take: NUM_TO_SHOW,
				orderBy: {
					email: 'asc'
				}
			});

			return new Response(JSON.stringify(users));
		}
	}

	const user = await prisma.user.findUnique({
		where: {
			email: userQuery
		}
	});

	if (!user) {
		return new Response('User not found');
	}

	return new Response(JSON.stringify(user), {
		headers: {
			'Content-Type': 'application/json'
		}
	});
}

// Update the user given in the request body
// method PUT
export async function POST({ url, request }: Opts): Promise<Response> {
	const userIdQuery = url.searchParams.get('id') || '';

	const body = await request.json();
	const { display_name, role, email } = body;

	try {
		const user = await auth.updateUserAttributes(userIdQuery, {
			display_name: display_name,
			role: role,
			email: email
		});
	} catch (e) {
		if (e instanceof LuciaError && e.message === `AUTH_INVALID_USER_ID`) {
			return new Response('User not found');
		}
	}

	return new Response('User updated');
}

// method DELETE
export async function DELETE({ url }: Opts): Promise<Response> {
	const userIdQuery = url.searchParams.get('id');
	if (!userIdQuery) {
		return new Response('User not found');
	}

	await prisma.user.delete({
		where: {
			id: userIdQuery
		}
	});

	return new Response('User deleted');
}
