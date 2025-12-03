import prisma from '$lib/prisma';

export const prerender = false;

export async function GET(): Promise<Response> {
	const numOfUsers = await prisma.user.count();

	if (numOfUsers === null) {
		return new Response('Error getting number of users');
	}

	return new Response(JSON.stringify(numOfUsers));
}
