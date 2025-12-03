import prisma from '$lib/prisma';

interface Opts {
	url: URL;
}

export async function GET({ url }: Opts): Promise<Response> {
	// See if the user is searching for a specific game
	const search = url.searchParams.get('search') || '';
	const tag = url.searchParams.get('tag') || '';

	if (tag && search) {
		const games = await prisma.game.findMany({
			where: {
				tags: {
					has: tag
				},
				name: {
					contains: search,
					mode: 'insensitive'
				}
			},
			orderBy: {
				name: 'asc'
			}
		});
		return new Response(JSON.stringify(games), {
			headers: {
				'Content-Type': 'application/json',
				'Cache-Control': 'max-age=3600'
			}
		});
	} else if (tag) {
		const games = await prisma.game.findMany({
			where: {
				tags: {
					has: tag
				}
			},
			orderBy: {
				name: 'asc'
			}
		});
		return new Response(JSON.stringify(games), {
			headers: {
				'Content-Type': 'application/json',
				'Cache-Control': 'max-age=3600'
			}
		});
	} else if (search) {
		const games = await prisma.game.findMany({
			where: {
				name: {
					contains: search,
					mode: 'insensitive'
				}
			},
			orderBy: {
				name: 'asc'
			}
		});
		return new Response(JSON.stringify(games), {
			headers: {
				'Content-Type': 'application/json',
				'Cache-Control': 'max-age=3600'
			}
		});
	} else {
		const games = await prisma.game.findMany({
			orderBy: {
				name: 'asc'
			}
		});
		return new Response(JSON.stringify(games), {
			headers: {
				'Content-Type': 'application/json',
				'Cache-Control': 'max-age=3600'
			}
		});
	}
}
