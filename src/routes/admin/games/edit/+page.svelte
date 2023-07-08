<script lang="ts">
	import { onMount } from 'svelte';
	import type { Game } from '@prisma/client';
	import { PUBLIC_API_BASE_URL } from '$env/static/public';

	// Fetch all the games
	let games: Game[] = [];
	onMount(async () => {
		const res = await fetch(PUBLIC_API_BASE_URL + '/api/games');
		games = await res.json();
	});

	function deleteGame() {
		// POST /api/admin/delete/game
		fetch(PUBLIC_API_BASE_URL + '/api/admin/delete/game', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(selectedGame)
		})
			.then((res) => {
				if (res.status === 200) {
					alert('Successfully deleted game!');
				} else {
					alert('Failed to delete game!');
				}
			})
			.catch((err) => {
				alert('Failed to delete game!');
			});
	}

	function updateGame() {
		// POST /api/admin/edit/game
		fetch(PUBLIC_API_BASE_URL + '/api/admin/edit/game', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(selectedGame)
		})
			.then((res) => {
				if (res.status === 200) {
					alert('Successfully updated game!');
				} else {
					alert('Failed to update game!');
				}
			})
			.catch((err) => {
				alert('Failed to update game!');
			});
	}

	function setNull(key: string) {
		selectedGame[key] = null;
	}

	let selectedGame: Game | null = null;
</script>

<div class="rounded-3xl bg-tertiary p-8 text-black dark:bg-tertiaryDark dark:text-white">
	<h1 class="text-left text-4xl font-bold">Game Editor</h1>
	<div class="mt-2 text-xl">
		<p>
			You can edit games as needed, but please be careful. If you are unsure of what you are doing,
			please ask for help.
		</p>
	</div>

	<div class="mt-10 grid grid-cols-1 gap-10">
		<div class="mt-2 grid w-full gap-4 align-middle">
			<div>
				<h3 class="text-2xl font-bold">Game Selector</h3>
				<p class="text-sm text-gray-500">Select the game you wish to edit:</p>
				<select
					id="selectGame"
					class="mr-2 mt-2 w-full max-w-xs rounded-lg p-2 text-black sm:max-w-md"
					bind:value={selectedGame}
				>
					{#each games as game}
						<option value={game}>{game.name}</option>
					{/each}
				</select>
			</div>

			{#if selectedGame}
				<div class="">
					<div>
						<h3 class="text-2xl font-bold">Game Details</h3>
						<p class="text-sm text-gray-500">Modify the game details:</p>
					</div>
					<div>
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
								<label for="embedURL" class="text-sm text-gray-500"> embedURL </label>
								<input
									id="embedURL"
									type="text"
									class="rounded-lg p-2 text-black"
									bind:value={selectedGame.embedURL}
								/>
								<!-- Checkmark to set null -->
								<button class="btn" on:click={() => setNull('embedURL')}>
									Null embedURL
								</button>
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
								<label for="tags" class="text-sm text-gray-500"> errorMessage </label>
								<input
									id="errorMessage"
									class="rounded-lg p-2 text-black"
									type="text"
									bind:value={selectedGame.errorMessage}
								/>
								<button class="btn" on:click={() => setNull('errorMessage')}>
									Null errorMessage
								</button>
							</div>
							<div class="flex flex-col">
								<label for="tags" class="text-sm text-gray-500"> emulatorType </label>
								<input
									id="emulatorType"
									class="rounded-lg p-2 text-black"
									type="text"
									bind:value={selectedGame.emulatorType}
								/>
								<button class="btn" on:click={() => setNull('emulatorType')}>
									Null emulatorType
								</button>
							</div>
							<div class="flex flex-col">
								<label for="tags" class="text-sm text-gray-500"> emulatorFile </label>
								<input
									id="emulatorFile"
									class="rounded-lg p-2 text-black"
									type="text"
									bind:value={selectedGame.emulatorFile}
								/>
								<button class="btn" on:click={() => setNull('emulatorFile')}>
									Null emulatorFile
								</button>
							</div>
							<div class="flex flex-col">
								<label for="tags" class="text-sm text-gray-500"> emulatorCore </label>
								<input
									id="emulatorCore"
									class="rounded-lg p-2 text-black"
									type="text"
									bind:value={selectedGame.emulatorCore}
								/>
								<button class="btn" on:click={() => setNull('emulatorCore')}>
									Null emulatorCore
								</button>
							</div>
						</div>
					</div>
				</div>
				<button class="btn-lg mt-2" on:click={() => updateGame()}>Update Game</button>
				<button class="btn-lg mt-2 bg-red-500" on:click={() => deleteGame()}>Delete Game</button>
			{/if}
		</div>
	</div>
</div>
