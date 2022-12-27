import appsJson from '../apps.json';
import {promises as fs} from 'fs'

const apps = appsJson.apps.sort((a, b) => {
	return a.name.localeCompare(b.name);
});

export const GET = async ({ request, url }) => {
	// get the id from the url
	const id = url.searchParams.get('id');

	// if the id is present in the json file then return the image
	if (id) {
		const app = apps.find((app) => {
			return app.id === id;
		});

		const imageURL = `/api/apps/img/${app.image}`;
		const asset = await fs.readFile(`./api/apps/img/${app.image}`); // read the image

		// return the image


		return new Response(imageURL, {
			headers: {
				'Content-Type': 'image/png',
			}});
	}
}
