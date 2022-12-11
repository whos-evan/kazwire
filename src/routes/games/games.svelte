<script>
	import Box from './box.svelte';
	import gamesJson from './games.json';

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
</script>

<div class="text-white w-full pl-10 pr-10 pt-5 text-center">
	<div class="mb-5">
		<h1 class="font-bold text-5xl">Games</h1>
		<p class="text-lg">Search or scroll for your favorites!</p>
	</div>
	<input
		id="search"
		type="text"
		class="w-[35vw] h-10 p-6 rounded-lg mb-5 text-black placeholder:text-gray-500"
		placeholder="Search for a game..."
        autocomplete="off"
        on:input={searchGames}
	/>
	<div
		class="grid grid-flow-rows lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 auto-rows-auto gap-10"
	>
		{#each gamesJson['games'] as game}
			<Box
				title={game['name']}
				image={game['image']}
				description={game['description']}
				id={game['id']}
			/>
		{/each}
	</div>
</div>
