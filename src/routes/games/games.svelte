<script>
	import Box from './box.svelte';
	import gamesJson from './games.json';

	// get all static games without embedURL or emulator set
	export let staticGames = gamesJson['games'].filter(
		(game) => game['embedURL'] === undefined && game['emulator'] === undefined
	);
	export let emulatedGames = gamesJson['games'].filter(
		(game) => game['embedURL'] === undefined && game['emulator'] !== undefined
	);
	export let embedGames = gamesJson['games'].filter(
		(game) => game['embedURL'] !== undefined
	);

    export function searchGames() {
        let input = document.getElementById('search');
        let filter = input.value.toUpperCase();
        let games = document.getElementsByClassName('game');
        var ul, li, a, i, txtValue;

        for (i = 0; i < games.length; i++) {
                a = games[i].id
                txtValue = a;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    games[i].style.display = "";
                } else {
                    games[i].style.display = "none";
                }
            }
        }
	
	let filter;
</script>

<div class="text-white w-full pl-10 pr-10 pt-5 text-center">
	<input
		id="search"
		type="text"
		class="w-[35vw] h-10 p-6 rounded-lg mb-5 text-black placeholder:text-gray-500"
		placeholder="Search for a game..."
        autocomplete="off"
        on:input={searchGames}
	/>
	<select id="filterSelect" class="rounded-lg text-black p-3" bind:value={filter}>
		<option value="all">All</option>
		<option value="static">Static</option>
		<option value="emulated">Emulated</option>
		<option value="embeded">Embeded</option>
	</select>
	<div
		class="grid grid-flow-rows lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 auto-rows-auto gap-10"
	>
	{#if filter == "all"}
		{#each staticGames as game}
			<Box
				title={game['name']}
				image={game['image']}
				description={game['description']}
				id={game['id']}
				color='black'
				category='Static'
			/>
		{/each}
		{#each emulatedGames as game}
			<Box
				title={game['name']}
				image={game['image']}
				description={game['description']}
				id={game['id']}
				color='#37528c'
				category='Emulated'
			/>
		{/each}
		{#each embedGames as game}
			<Box
				title={game['name']}
				image={game['image']}
				description={game['description']}
				id={game['id']}
				color='#c81a00'
				category='Embeded'
			/>
		{/each}
	{:else if filter == "static"}
		{#each staticGames as game}
			<Box
				title={game['name']}
				image={game['image']}
				description={game['description']}
				id={game['id']}
				color='black'
				category='Static'
			/>
		{/each}
	{:else if filter == "emulated"}
		{#each emulatedGames as game}
			<Box
				title={game['name']}
				image={game['image']}
				description={game['description']}
				id={game['id']}
				color='#37528c'
				category='Emulated'
			/>
		{/each}
	{:else if filter == "embeded"}
		{#each embedGames as game}
			<Box
				title={game['name']}
				image={game['image']}
				description={game['description']}
				id={game['id']}
				color='#c81a00'
				category='Embeded'
			/>
		{/each}
	{/if}
	</div>
</div>
