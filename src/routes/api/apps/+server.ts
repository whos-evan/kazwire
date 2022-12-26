import appsJson from './apps.json';

const apps = appsJson.apps.sort((a, b) => {
    return a.name.localeCompare(b.name);
});

export const GET = async ({ request, url }) => {
	// get the searchQuery from the url
    const searchQuery = url.searchParams.get('search');
    const category = url.searchParams.get('category');
    const id = url.searchParams.get('id');

    if (id) {
        const app = apps.find((app) => {
            return app.id === id;
        });

        return new Response(JSON.stringify(app), { status: 200 });
    }
    
    // filter the apps based on the category
    let filteredApps = apps;
    if (category === 'popular') {
        // if the app is popular then return popular apps
        // go through all the apps and check if the app is popular
        filteredApps = apps.filter((app) => app.popular);
    } else if (category === 'embeded') {
        // if the app is embeded then return embeded apps
        // go through all the apps and check if the app is embeded
        filteredApps = apps.filter((app) => app.embedURL);
    } else if (category === 'emulated') {
        // if the app is emulated then return emulated apps
        // go through all the apps and check if the app is emulated
        filteredApps = apps.filter((app) => app.emulator);
    } else if (category === 'static') {
        // if the app is not embeded or emulated then return static apps
        // go through all the apps and check if the app is static
        filteredApps = apps.filter((app) => !app.embedURL && !app.emulator);
    }

    if (searchQuery && category) {
        const searchedApps = filteredApps.filter((app) => {
            return app.name.toLowerCase().includes(searchQuery.toLowerCase());
        });

		return new Response(JSON.stringify(searchedApps), { status: 200 });
	} else if (searchQuery && !category) {
        const searchedApps = apps.filter((app) => {
            return app.name.toLowerCase().includes(searchQuery.toLowerCase());
        });

        return new Response(JSON.stringify(searchedApps), { status: 200 });
    } else if (!searchQuery && category) {
        return new Response(JSON.stringify(filteredApps), { status: 200 });
    } else {
		return new Response(JSON.stringify(apps), { status: 201 });
	}
};
