<script lang="ts">
	import type { Game } from '@prisma/client';
	import type { PageData } from './$types';

	import Icon from '@iconify/svelte';

	export let data: PageData;

	let name: string;
	let id: string;
	let tags: string = '';
	let realTags: string[];
	$: realTags = tags.split(',') || [];
	let platform: string;
	let developer: string;
	let description: string;
	let image: string;
	let embedURL: string | null;
	let popular: boolean;
	let emulatorType: string | null;
	let emulatorFile: string | null;
	let emulatorCore: string | null;
	let views: number;

	function checkGame(game: Game) {
		// Check all values
		if (!game.id) {
			alert('Please enter an id.');
			return false;
		}
		if (!game.name) {
			alert('Please enter a name.');
			return false;
		}
		if (!game.tags) {
			alert('Please enter tags.');
			return false;
		}
		if (!game.platform) {
			alert('Please enter a platform.');
			return false;
		}
		if (!game.developer) {
			alert('Please enter a developer.');
			return false;
		}
		if (!game.description) {
			alert('Please enter a description.');
			return false;
		}
		if (!game.image) {
			alert('Please enter an image.');
			return false;
		}

		return true;
	}

	function createGame(game: Game) {
		if (!checkGame(game)) return;

		fetch(`/api/admin/games/create`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(game)
		});
	}

	let userSelectedGame: string;
	let selectedGame: Game;
	$: selectedGame = data.games.find((game: Game) => game.id === userSelectedGame);

	function updateGame(game: Game) {
		if (!checkGame(game)) return;

		fetch(`/api/admin/games/edit`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(game)
		});
	}

	function deleteGame(id: string) {
		fetch(`/api/admin/games/delete?id=${id}`, {
			method: 'DELETE'
		});
	}
</script>

<div class="prose lg:prose-lg">
	<h1>Manage Games</h1>
	<p>Manage games.</p>
</div>

<!-- id: string;
    name: string;
    tags: string[];
    platform: string;
    developer: string;
    description: string;
    image: string;
    embedURL: string | null;
    popular: boolean;
    errorMessage: string | null;
    emulatorType: string | null;
    emulatorFile: string | null;
    emulatorCore: string | null;
    views: number;
 -->
<!-- svelte-ignore a11y-label-has-associated-control -->
<div class="card p-6">
	<div class="flex items-center gap-8">
		<div class="flex w-full flex-col gap-4">
			<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
				<div class="form-control w-full">
					<label class="label">
						<span class="label-text">Name</span>
					</label>
					<input type="text" placeholder="Name" class="input input-bordered" bind:value={name} />
				</div>
				<div class="form-control w-full">
					<label class="label">
						<span class="label-text">ID</span>
					</label>
					<input type="text" placeholder="ID" class="input input-bordered" bind:value={id} />
				</div>
			</div>
			<div class="form-control w-full">
				<label class="label">
					<span class="label-text">Tags (comma-separated)</span>
				</label>
				<label class="label">
					<span class="label-text label-text-alt">Used Tags: {data.gameTags}</span>
				</label>
				<input
					type="text"
					placeholder="Tags (comma-separated)"
					class="input input-bordered"
					bind:value={tags}
				/>
				<input
					type="text"
					placeholder="Tags (array)"
					class="input input-disabled mt-2"
					disabled
					bind:value={realTags}
				/>
			</div>
			<div class="form-control w-full">
				<label class="label">
					<span class="label-text">Platform (PC or Mobile)</span>
				</label>
				<select class="select select-bordered w-full" bind:value={platform}>
					<option value="PC">PC</option>
					<option value="Mobile">Mobile</option>
				</select>
			</div>
			<div class="form-control w-full">
				<label class="label">
					<span class="label-text">Developer</span>
				</label>
				<input
					type="text"
					placeholder="Developer"
					class="input input-bordered"
					bind:value={developer}
				/>
			</div>
			<div class="form-control w-full">
				<label class="label">
					<span class="label-text">Description</span>
				</label>
				<input
					type="text"
					placeholder="Description"
					class="input input-bordered"
					bind:value={description}
				/>
			</div>
			<div class="form-control w-full">
				<label class="label">
					<span class="label-text">Image</span>
				</label>
				<input type="text" placeholder="Image" class="input input-bordered" bind:value={image} />
			</div>
			<div class="form-control w-full">
				<label class="label">
					<span class="label-text">Embed URL</span>
				</label>
				<input
					type="text"
					placeholder="Embed URL"
					class="input input-bordered"
					bind:value={embedURL}
				/>
				<button class="btn btn-primary mt-2 max-w-xs" on:click={() => (embedURL = null)}>
					Remove Embed URL
				</button>
			</div>

			<div class="flex flex-row flex-wrap items-center gap-4">
				<label class="label">
					<input type="checkbox" class="checkbox-primary checkbox" bind:checked={popular} />
					<span class="label label-text ml-1">Popular</span>
				</label>
				<div class="form-control">
					<label class="label">
						<span class="label-text">Emulator Type</span>
					</label>
					<input
						type="text"
						placeholder="Emulator Type"
						class="input input-bordered"
						bind:value={emulatorType}
					/>
					<button class="btn btn-primary mt-2 max-w-xs" on:click={() => (emulatorType = null)}>
						Remove Emulator Type
					</button>
				</div>
				<div class="form-control">
					<label class="label">
						<span class="label-text">Emulator File</span>
					</label>
					<input
						type="text"
						placeholder="Emulator File"
						class="input input-bordered"
						bind:value={emulatorFile}
					/>
					<button class="btn btn-primary mt-2 max-w-xs" on:click={() => (emulatorFile = null)}>
						Remove Emulator File
					</button>
				</div>
				<div class="form-control">
					<label class="label">
						<span class="label-text">Emulator Core</span>
					</label>
					<input
						type="text"
						placeholder="Emulator Core"
						class="input input-bordered"
						bind:value={emulatorCore}
					/>
					<button class="btn btn-primary mt-2 max-w-xs" on:click={() => (emulatorCore = null)}>
						Remove Emulator Core
					</button>
				</div>
				<div class="form-control">
					<label class="label">
						<span class="label-text">Views</span>
					</label>
					<input
						type="number"
						placeholder="Views"
						class="input input-bordered"
						bind:value={views}
					/>
				</div>
			</div>

			<button
				class="btn btn-primary mt-4 max-w-[10rem]"
				on:click={() =>
					createGame({
						id,
						name,
						tags: realTags,
						platform,
						developer,
						description,
						image,
						embedURL,
						popular,
						emulatorType,
						emulatorFile,
						emulatorCore,
						views,
						errorMessage: null
					})}
			>
				Create Game
			</button>
		</div>
	</div>
</div>

<div class="prose">
	<h2>Edit Game</h2>
	<p>Edit an existing game.</p>
</div>
<!-- Edit existing games -->
<select bind:value={userSelectedGame} class="select select-bordered w-full max-w-xs">
	<option>Select a game</option>
	{#each data.games as game}
		<option value={game.id}>{game.name}</option>
	{/each}
</select>

{#if selectedGame}
	<!-- Show same menus as above -->
	<!-- svelte-ignore a11y-label-has-associated-control -->
	<div class="flex items-center gap-8">
		<div class="flex w-full flex-col gap-4">
			<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
				<div class="form-control w-full">
					<label class="label">
						<span class="label-text">Name</span>
					</label>
					<input
						type="text"
						placeholder="Name"
						class="input input-bordered"
						bind:value={selectedGame.name}
					/>
				</div>
				<div class="form-control w-full">
					<label class="label">
						<span class="label-text">ID</span>
					</label>
					<input
						type="text"
						placeholder="ID"
						class="input input-bordered"
						bind:value={selectedGame.id}
					/>
				</div>
			</div>
			<div class="form-control w-full">
				<label class="label">
					<span class="label-text">Tags (comma-separated)</span>
				</label>
				<input
					type="text"
					placeholder="Tags (comma-separated)"
					class="input input-bordered"
					bind:value={selectedGame.tags}
					on:change={() => (selectedGame.tags = selectedGame.tags.split(','))}
				/>
			</div>
			<div class="form-control w-full">
				<label class="label">
					<span class="label-text">Platform (PC or Mobile)</span>
				</label>
				<select class="select select-bordered w-full" bind:value={selectedGame.platform}>
					<option value="PC">PC</option>
					<option value="Mobile">Mobile</option>
				</select>
			</div>
			<div class="form-control w-full">
				<label class="label">
					<span class="label-text">Developer</span>
				</label>
				<input
					type="text"
					placeholder="Developer"
					class="input input-bordered"
					bind:value={selectedGame.developer}
				/>
			</div>
			<div class="form-control w-full">
				<label class="label">
					<span class="label-text">Description</span>
				</label>
				<input
					type="text"
					placeholder="Description"
					class="input input-bordered"
					bind:value={selectedGame.description}
				/>
			</div>
			<div class="form-control w-full">
				<label class="label">
					<span class="label-text">Image</span>
				</label>
				<input
					type="text"
					placeholder="Image"
					class="input input-bordered"
					bind:value={selectedGame.image}
				/>
			</div>
			<div class="form-control w-full">
				<label class="label">
					<span class="label-text">Embed URL</span>
				</label>
				<input
					type="text"
					placeholder="Embed URL"
					class="input input-bordered"
					bind:value={selectedGame.embedURL}
				/>
				<button
					class="btn btn-primary mt-2 max-w-xs"
					on:click={() => (selectedGame.embedURL = null)}
				>
					Remove Embed URL
				</button>
			</div>

			<div class="flex flex-row flex-wrap items-center gap-4">
				<label class="label">
					<input
						type="checkbox"
						class="checkbox-primary checkbox"
						bind:checked={selectedGame.popular}
					/>
					<span class="label label-text ml-1">Popular</span>
				</label>
				<div class="form-control">
					<label class="label">
						<span class="label-text">Emulator Type</span>
					</label>
					<input
						type="text"
						placeholder="Emulator Type"
						class="input input-bordered"
						bind:value={selectedGame.emulatorType}
					/>
					<button
						class="btn btn-primary mt-2 max-w-xs"
						on:click={() => (selectedGame.emulatorType = null)}
					>
						Remove Emulator Type
					</button>
				</div>
				<div class="form-control">
					<label class="label">
						<span class="label-text">Emulator File</span>
					</label>
					<input
						type="text"
						placeholder="Emulator File"
						class="input input-bordered"
						bind:value={selectedGame.emulatorFile}
					/>
					<button
						class="btn btn-primary mt-2 max-w-xs"
						on:click={() => (selectedGame.emulatorFile = null)}
					>
						Remove Emulator File
					</button>
				</div>
				<div class="form-control">
					<label class="label">
						<span class="label-text">Emulator Core</span>
					</label>
					<input
						type="text"
						placeholder="Emulator Core"
						class="input input-bordered"
						bind:value={selectedGame.emulatorCore}
					/>
					<button
						class="btn btn-primary mt-2 max-w-xs"
						on:click={() => (selectedGame.emulatorCore = null)}
					>
						Remove Emulator Core
					</button>
				</div>
				<div class="form-control">
					<label class="label">
						<span class="label-text">Views</span>
					</label>
					<input
						type="number"
						placeholder="Views"
						class="input input-bordered"
						bind:value={selectedGame.views}
					/>
				</div>
			</div>
		</div>
	</div>

	<button class="btn btn-secondary mt-4" on:click={() => updateGame(selectedGame)}>
		Update Game
	</button>
	<button class="btn btn-error mt-4" on:click={() => deleteGame(selectedGame.id)}>
		Delete Game
	</button>
{/if}
