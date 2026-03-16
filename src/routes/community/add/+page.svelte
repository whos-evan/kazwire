<script lang="ts">
	import { PUBLIC_API_BASE_URL } from '$env/static/public';

	// Fetch all the games

	let selectedGame: any = {
		name: '',
		description: '',
		embedURL: ''
	};

	function updateGame() {
		// POST /api/admin/edit/game
		fetch('/api/community', {
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
					alert('Failed to add game! Remember to use https and to not use bad words!');
				}
			})
			.catch((err) => {
				alert('Failed to add game!');
			});
	}
</script>

<div class="rounded-3xl bg-tertiary p-8 text-black dark:bg-tertiaryDark dark:text-white">
	<h1 class="text-left text-4xl font-bold">Community Game Adder</h1>
	<div class="mt-2 text-xl">
		<p>
			You can add games as needed, but please be careful. If you are unsure of what you are doing,
			please ask for help.
		</p>
	</div>

	<div class="mt-10 grid grid-cols-1 gap-10">
		<div class="col-start-1 row-start-1">
			<h3 class="text-2xl font-bold">Game</h3>
			<p class="text-sm text-gray-500">Input the vital information for the game you wish to add:</p>
			<div class="mt-2 grid w-full gap-4 align-middle">
				<div class="row-start-2 sm:row-start-1">
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
							<label for="embedURL" class="text-sm text-gray-500"> embedURL </label>
							<input
								id="embedURL"
								class="rounded-lg p-2 text-black"
								type="text"
								bind:value={selectedGame.embedURL}
							/>
						</div>
					</div>
				</div>
			</div>
			<button class="btn-lg mt-2" on:click={() => updateGame()}>Add Game</button>
		</div>
	</div>
</div>
