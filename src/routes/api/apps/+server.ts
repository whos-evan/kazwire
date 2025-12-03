import prisma from '$lib/prisma';

interface Opts {
	url: URL;
}

export async function GET({ url }: Opts): Promise<Response> {
	// See if the user is searching for a specific game
	const search = url.searchParams.get('search') || '';

	if (search) {
		const app = await prisma.app.findMany({
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
		return new Response(JSON.stringify(app), {
			headers: {
				'Content-Type': 'application/json',
				'Cache-Control': 'max-age=3600'
			}
		});
	} else {
		const app = await prisma.app.findMany({
			orderBy: {
				name: 'asc'
			}
		});
		return new Response(JSON.stringify(app), {
			headers: {
				'Content-Type': 'application/json',
				'Cache-Control': 'max-age=3600'
			}
		});
	}
}
