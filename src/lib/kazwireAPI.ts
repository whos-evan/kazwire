import type { Game } from "@prisma/client";
import { PUBLIC_API_BASE_URL } from "$env/static/public";

// Must be intiialized on the client side
class KazwireAPI {
	fetchGame(id: string): Promise<Game> {
		// Uses api to fetch the game and return it
		let game = fetch(PUBLIC_API_BASE_URL + "/api/games/" + id).then((res) => res.json());
		if (game == null) {
			throw new Error("Game not found");
		}

		return game;
	}

	fetchGames(): Promise<Game[]> {
		// Uses api to fetch the game and return it
		let games = fetch(PUBLIC_API_BASE_URL + "/api/games").then((res) => res.json());
		if (games == null) {
			throw new Error("Games not found");
		}

		return games;
	}

	fetchFilteredGames(tag: string | null, search: string | null): Promise<Game[]> {
		// Uses api to fetch the game and return it
		let games = fetch(PUBLIC_API_BASE_URL + "/api/games?tag=" + tag + "&search=" + search).then((res) => res.json());
		if (games == null) {
			throw new Error("Games not found");
		}

		return games;
	}

	fetchGameTags(): Promise<string[]> {
		// Uses api to fetch the game and return it
		let games = fetch(PUBLIC_API_BASE_URL + "/api/games").then((res) => res.json());
		// Find all tags from the games
		let tags: string[] = [];
		for (let i = 0; i < games.length; i++) {
			let game: Game[] = games[i];
			for (let j = 0; j < game.tags.length; j++) {
				let tag = game.tags[j];
				if (!tags.includes(tag)) {
					tags.push(tag);
				}
			}
		}

		return tags;
	}
}

export const kazwireAPI = new KazwireAPI();
