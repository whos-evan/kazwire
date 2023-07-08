<script lang="ts">
	import { onMount } from 'svelte';
	import type { Game } from '@prisma/client';
	import { PUBLIC_API_BASE_URL } from '$env/static/public';

	// Fetch all the games
	let games: Game[] = [];
	let selectedGame: Game = null;
	onMount(async () => {
		const res = await fetch(PUBLIC_API_BASE_URL + '/api/games');
		games = await res.json();
		selectedGame = games[0];

		// Remove all values from the selected game
		for (const key in selectedGame) {
			if (Object.prototype.hasOwnProperty.call(selectedGame, key)) {
				// Replace based on the type
                switch (typeof selectedGame[key]) {
                    case 'string':
                        selectedGame[key] = '';
                        break;
                    case 'number':
                        selectedGame[key] = 0;
                        break;
                    case 'boolean':
                        selectedGame[key] = false;
                        break;
                    case 'object':
                        selectedGame[key] = [];
                        break;
                    default:
                        selectedGame[key] = null;
                        break;
                }
			}
		}
	});

	function updateGame() {
		// POST /api/admin/edit/game
		fetch(PUBLIC_API_BASE_URL + '/api/admin/add/game', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(selectedGame)
		})
			.then((res) => {
				if (res.status === 200) {
					alert('Successfully added game!');
				} else {
					alert('Failed to add game!');
				}
			})
			.catch((err) => {
				alert('Failed to add game!');
			});
	}
</script>

<div class="rounded-3xl bg-tertiary p-8 text-black dark:bg-tertiaryDark dark:text-white">
	<h1 class="text-left text-4xl font-bold">Game Adder</h1>
	<div class="mt-2 text-xl">
		<p>
			You can add games as needed, but please be careful. If you are unsure of what you are doing,
			please ask for help.
		</p>
	</div>

	<div class="mt-10 grid grid-cols-1 gap-10">
		<div class="col-start-1 row-start-1">
			<h3 class="text-2xl font-bold">Games</h3>
			<p class="text-sm text-gray-500">Input the vital information for the game you wish to add:</p>
			<div class="mt-2 grid w-full align-middle gap-4">
				{#if selectedGame}
					<div class="sm:row-start-1 row-start-2">
						<div class="flex flex-col gap-2">
							<div class="flex flex-col">
								<label for="name" class="text-sm text-gray-500"> Name </label>
								<input
									id="name"
									class="rounded-lg p-2 text-black"
									type="text"
									bind:value={selectedGame.name}
								/>
							</div>
							<div class="flex flex-col">
								<label for="description" class="text-sm text-gray-500"> Description </label>
								<textarea
									id="description"
									class="rounded-lg p-2 text-black"
									bind:value={selectedGame.description}
								/>
							</div>
							<div class="flex flex-col">
								<label for="developer" class="text-sm text-gray-500"> Developer(s) </label>
								<input
									id="developer"
									class="rounded-lg p-2 text-black"
									type="text"
									bind:value={selectedGame.developer}
								/>
							</div>
							<div class="flex flex-col">
								<label for="developer" class="text-sm text-gray-500"> Platform </label>
								<select
									id="platform"
									class="rounded-lg p-2 text-black"
									bind:value={selectedGame.platform}
								>
									<option value="PC">PC</option>
									<option value="Mobile">Mobile</option>
								</select>
							</div>
							<div class="flex flex-col">
								<label for="image" class="text-sm text-gray-500"> Image </label>
								<input
									id="image"
									class="rounded-lg p-2 text-black"
									type="text"
									bind:value={selectedGame.image}
								/>
							</div>
							<div class="flex flex-col">
								<label for="id" class="text-sm text-gray-500"> ID </label>
								<input
									id="id"
									class="rounded-lg p-2 text-black"
									type="text"
									bind:value={selectedGame.id}
								/>
							</div>
							<div class="flex flex-col">
								<label for="views" class="text-sm text-gray-500"> Views </label>
								<input
									id="views"
									class="rounded-lg p-2 text-black"
									type="number"
									bind:value={selectedGame.views}
								/>
							</div>
							<div class="flex flex-col">
								<label for="tags" class="text-sm text-gray-500"> Tags </label>
								<p class="text-xs text-gray-500">
									Separate tags with a comma<br />Accepted tags are:
									<span class="font-bold"
										>action, adventure, casual, indie, multiplayer, puzzle, racing, rpg, simulation,
										sports, strategy</span
									>
								</p>
								<select
                                    id="tags"
                                    class="rounded-lg p-2 text-black"
                                    bind:value={selectedGame.tags}
                                    multiple
                                >
                                    <option value="action">Action</option>
                                    <option value="adventure">Adventure</option>
                                    <option value="casual">Casual</option>
                                    <option value="indie">Indie</option>
                                    <option value="multiplayer">Multiplayer</option>
                                    <option value="puzzle">Puzzle</option>
                                    <option value="racing">Racing</option>
                                    <option value="rpg">RPG</option>
                                    <option value="simulation">Simulation</option>
                                    <option value="sports">Sports</option>
                                    <option value="strategy">Strategy</option>
                                </select>
							</div>
							<div class="flex flex-col">
								<label for="tags" class="text-sm text-gray-500"> Popular </label>
								<p class="text-xs text-gray-500">Is this game popular?</p>
								<input
									id="popular"
									class="rounded-lg p-2 text-black"
									type="checkbox"
									bind:checked={selectedGame.popular}
								/>
							</div>
							<div class="flex flex-col">
								<label for="tags" class="text-sm text-gray-500"> emulatorType </label>
								<input
									id="emulatorType"
									class="rounded-lg p-2 text-black"
									type="text"
									bind:value={selectedGame.emulatorType}
								/>
							</div>
							<div class="flex flex-col">
								<label for="tags" class="text-sm text-gray-500"> emulatorFile </label>
								<input
									id="emulatorFile"
									class="rounded-lg p-2 text-black"
									type="text"
									bind:value={selectedGame.emulatorFile}
								/>
							</div>
							<div class="flex flex-col">
								<label for="tags" class="text-sm text-gray-500"> emulatorCore </label>
								<input
									id="emulatorCore"
									class="rounded-lg p-2 text-black"
									type="text"
									bind:value={selectedGame.emulatorCore}
								/>
							</div>
						</div>
					</div>
				{/if}
			</div>
			<button class="btn-lg mt-2" on:click={() => updateGame()}>Add Game</button>
		</div>
	</div>
</div>
