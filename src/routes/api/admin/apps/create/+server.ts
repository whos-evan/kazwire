// POST request to create a new app
// Request body should contain everything needed to create a app
import prisma from '$lib/prisma';
import type { App } from '@prisma/client';

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

	let app: App;

	try {
		app = await prisma.app.create({
			data: {
				id,
				name,
				developer,
				description,
				image,
				embedURL,
				views
			}
		});
	} catch (e) {
		console.log(e);
		return new Response('Error creating app');
	}

	return new Response(JSON.stringify(app), {
		headers: {
			'Content-Type': 'application/json'
		}
	});
}
