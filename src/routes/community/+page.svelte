<script>
	import Nav from '$lib/components/nav.svelte';
	import Footer from '$lib/components/footer.svelte';

	import Box from './box.svelte';
	import { onMount } from 'svelte';

    let games = [];

    onMount(() =>{
        if(localStorage.getItem('localGames') != null){
            games = JSON.parse(localStorage.getItem('localGames'));
        }
    })
</script>

<Nav />
<main class="h-auto min-h-[70vh] m-10">
	<div class="whitespace-nowrap">
		<h1 class="text-4xl  inline font-bold text-secondary">Custom</h1>
		<h1 class="text-4xl inline font-bold text-white">Games!</h1>
	</div>
	<p class="font-medium text-white">
		Here you can find all the games that have been added to the directory. Currently this will only
		show games that you yourself have added.
	</p>
	<div
		class="grid grid-flow-rows lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 auto-rows-auto gap-10 mt-5"
	>
		<Box title={'Add a game!'} description={"You can add your own custom game that will appear here!"} id={'newgame'} href={"/community/new"} />
        {#each games as game}
            <Box title={game['name']} description={game['description']} id={game['id']} />
        {/each}
	</div>
</main>
<Footer />
