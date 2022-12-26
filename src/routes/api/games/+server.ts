import gamesJson from './games.json';

const games = gamesJson.games.sort((a, b) => {
    return a.name.localeCompare(b.name);
});

export const GET = async ({ request, url }) => {
	// get the searchQuery from the url
    const searchQuery = url.searchParams.get('search');
    const category = url.searchParams.get('category');
    const id = url.searchParams.get('id');

    if (id) {
        const game = games.find((game) => {
            return game.id === id;
        });

        return new Response(JSON.stringify(game), { status: 200 });
    }
    
    // filter the games based on the category
    let filteredGames = games;
    if (category === 'popular') {
        // if the game is popular then return popular games
        // go through all the games and check if the game is popular
        filteredGames = games.filter((game) => game.popular);
    } else if (category === 'embeded') {
        // if the game is embeded then return embeded games
        // go through all the games and check if the game is embeded
        filteredGames = games.filter((game) => game.embedURL);
    } else if (category === 'emulated') {
        // if the game is emulated then return emulated games
        // go through all the games and check if the game is emulated
        filteredGames = games.filter((game) => game.emulator);
    } else if (category === 'static') {
        // if the game is not embeded or emulated then return static games
        // go through all the games and check if the game is static
        filteredGames = games.filter((game) => !game.embedURL && !game.emulator);
    }

    if (searchQuery && category) {
        const searchedGames = filteredGames.filter((game) => {
            return game.name.toLowerCase().includes(searchQuery.toLowerCase());
        });

		return new Response(JSON.stringify(searchedGames), { status: 200 });
	} else if (searchQuery && !category) {
        const searchedGames = games.filter((game) => {
            return game.name.toLowerCase().includes(searchQuery.toLowerCase());
        });

        return new Response(JSON.stringify(searchedGames), { status: 200 });
    } else if (!searchQuery && category) {
        return new Response(JSON.stringify(filteredGames), { status: 200 });
    } else {
		return new Response(JSON.stringify(games), { status: 201 });
	}
};
