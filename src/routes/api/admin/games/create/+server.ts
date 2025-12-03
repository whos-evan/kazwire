// POST request to create a new game
// Request body should contain everything needed to create a game
import prisma from '$lib/prisma';
import type { Game } from '@prisma/client';

interface Opts {
	request: Request;
}

// method POST
export async function POST({ request }: Opts): Promise<Response> {
	const body = await request.json();

	// id: string;
	// name: string;
	// tags: string[];
	// platform: string;
	// developer: string;
	// description: string;
	// image: string;
	// embedURL: string | null;
	// popular: boolean;
	// errorMessage: string | null;
	// emulatorType: string | null;
	// emulatorFile: string | null;
	// emulatorCore: string | null;
	// views: number;

	const {
		id,
		name,
		tags,
		platform,
		developer,
		description,
		image,
		embedURL,
		popular,
		errorMessage,
		emulatorType,
		emulatorFile,
		emulatorCore,
		views
	} = body;

	let game: Game;

	try {
		game = await prisma.game.create({
			data: {
				id,
				name,
				tags,
				platform,
				developer,
				description,
				image,
				embedURL,
				popular,
				errorMessage,
				emulatorType,
				emulatorFile,
				emulatorCore,
				views
			}
		});
	} catch (e) {
		console.log(e);
		return new Response('Error creating game');
	}

	return new Response(JSON.stringify(game), {
		headers: {
			'Content-Type': 'application/json'
		}
	});
}
