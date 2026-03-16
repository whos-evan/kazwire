import prisma from '$lib/prisma';

interface Opts {
	request: Request;
}

interface Game {
	name: string;
	description: string;
	embedURL: string;
}
// Post request
export async function POST({ request }: Opts): Promise<Response> {
	// Edit the game given the new data sent as a json object which provides the id and all the new data
	const data: Game = await request.json();

	try {
		const response = await fetch('https://vector.profanity.dev', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ message: data.description })
		});

		const json = await response.json();

		// Log the response for debugging

		// Check if the response indicates the presence of profanity
		if (json.isProfanity) {
			return new Response(JSON.stringify({ error: 'Bad Words 😢' }), {
				status: 400
			});
		}

		// Return nothing if there is no profanity
	} catch (error) {
		// Handle any errors that may occur during the request
		console.error('Error during fetch:', error);
		return new Response(JSON.stringify({ error: 'Error checking profanity' }), {
			status: 500
		});
	}

	try {
		const response = await fetch('https://vector.profanity.dev', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ message: data.name })
		});

		const json = await response.json();

		// Log the response for debugging

		// Check if the response indicates the presence of profanity
		if (json.isProfanity) {
			return new Response(JSON.stringify({ error: 'Bad Words 😢' }), {
				status: 400
			});
		}

		// Return nothing if there is no profanity
	} catch (error) {
		// Handle any errors that may occur during the request
		console.error('Error during fetch:', error);
		return new Response(JSON.stringify({ error: 'Error checking profanity' }), {
			status: 500
		});
	}
	// Run inp
	// Run input validation on all the data given
	// Ensure that the name, id, description, image, developer, embedURL, emulatorCore, emulatorFile, emulatorType, errorMessage, platform, and tags are all strings

	function isValidHttpUrl(url: string | null): boolean {
		if (!url) return false; // Return false if the URL is null or empty

		try {
			// Attempt to create a URL object from the provided URL
			const parsedUrl = new URL(url);

			// Check if the protocol is either 'http:' or 'https:'
			return parsedUrl.protocol === 'http:' || parsedUrl.protocol === 'https:';
		} catch (e) {
			// If an error occurs during parsing, the URL is invalid
			return false;
		}
	}

	// Assuming you are inside a function that handles the data:
	if (data.embedURL != null && typeof data.embedURL !== 'string') {
		return new Response(JSON.stringify({ error: 'Invalid input strings' }), {
			status: 400
		});
	}

	// Add the URL validation condition
	if (data.embedURL && !isValidHttpUrl(data.embedURL)) {
		return new Response(
			JSON.stringify({ error: 'Invalid URL format. URL must be HTTP or HTTPS.' }),
			{
				status: 400
			}
		);
	}

	try {
		await prisma.community.create({
			data: {
				name: data.name,
				description: data.description,
				embedURL: data.embedURL
			}
		});
	} catch (error) {
		// Return an error response
		return new Response(JSON.stringify({ error: 'Database error' }), {
			status: 500
		});
	}

	return new Response(JSON.stringify({ success: true }), {
		status: 200
	});
}
