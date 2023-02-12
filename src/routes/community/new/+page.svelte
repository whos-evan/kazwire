<script lang="ts">
	import Nav from '$lib/components/nav.svelte';
	import Footer from '$lib/components/footer.svelte';

	let gameName: string, gameDescription: string, gameURL: string;

	function checkValues() {
		// make sure that gameName is not empty and doesn't have more than 40 characters
		if (gameName.length > 40 || gameName.length == 0) {
			return false;
		}
		if (gameDescription.length > 175 || gameURL.length == 0) {
			return false;
		}
		if (gameURL.length > 100 || gameURL.length == 0) {
			return false;
		}
		return true;
	}

	function submitGame() {
		checkValues();
		let game = {
			name: gameName,
			description: gameDescription,
			url: gameURL,
			id: Math.floor(Math.random() * 10000000)
		};
		// check if user already has games added
		if (localStorage.getItem('localGames') == null) {
			// if not, create a new array and add the game
			let games = [];
			games.push(game);
			localStorage.setItem('localGames', JSON.stringify(games));
		} else {
			// if so, get the array and add the game
			let games = JSON.parse(localStorage.getItem('localGames'));
			games.push(game);
			localStorage.setItem('localGames', JSON.stringify(games));
		}
		window.location.href = '/community/games/' + game.id;
	}
</script>

<Nav />
<main class="min-h-[65vh] h-auto m-10 text-white">
	<div class="whitespace-nowrap">
		<h1 class="text-4xl  inline font-bold text-secondary">Add your own</h1>
		<h1 class="text-4xl inline font-bold text-white">{gameName ?? 'custom game'}!</h1>
	</div>
	<p>
		<span class="text-secondary font-bold">Note:</span> You must be logged in to add a game.
		<!-- description -->
		<br />
		<span class="text-secondary font-bold">Description:</span> You can add your own custom game to
		the game directory. If it's a popular game, it will be added to the main directory. If it's not,
		it will be left in the custom directory.
		<!-- rules -->
		<br />
		<span class="text-secondary font-bold">Rules:</span> You must be logged in to add a game. Games must
		have a name, description, and a URL to proxy. Games must be appropriate for all ages. Games must
		not be offensive or inappropriate.
	</p>
	<div class="grid grid-flow-row gap-10 mt-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
		<div class="bg-slate-800 p-4 rounded-lg">
			<h1 class="text-2xl font-bold text-white pb-1">Game Name:</h1>
			<input
				bind:value={gameName}
				type="text"
				maxlength="40"
				class="h-10 rounded-md bg-secondary text-white placeholder:text-gray-200 p-2 w-full"
				placeholder="Enter your game name"
			/>
		</div>
		<div class="bg-slate-800 p-4 rounded-lg">
			<h1 class="text-2xl font-bold text-white pb-1">Game Description:</h1>
			<textarea
				bind:value={gameDescription}
				maxlength="175"
				class="h-[10rem] rounded-md bg-secondary text-white placeholder:text-gray-200 p-2 w-full"
				placeholder="Enter the game description"
			/>
		</div>
		<div class="bg-slate-800 p-4 rounded-lg">
			<h1 class="text-2xl font-bold text-white pb-1">Game URL:</h1>
			<input
				bind:value={gameURL}
				maxlength="100"
				class="h-10 rounded-md bg-secondary text-white placeholder:text-gray-200 p-2 w-full"
				placeholder="Enter the game's url"
			/>
		</div>
	</div>
	<button
		class="bg-secondaryLight dark:bg-secondaryDark hover:bg-sky-700 dark:hover:bg-sky-700 font-bold transition ease-in-out duration-300 hover:drop-shadow-none drop-shadow-[5px_5px_0_rgba(1,55,84,1)] pr-5 pl-5 pt-3 pb-3 mt-5 mr-5 rounded-lg text-lg hover:scale-[105%]"
		on:click={submitGame}
	>
		Submit (Locally)
	</button>
</main>
<Footer />
