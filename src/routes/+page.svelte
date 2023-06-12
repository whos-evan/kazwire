<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import Showoff from '$lib/components/Showoff.svelte';
	import Faq from '$lib/components/Faq.svelte';
	import Partners from '$lib/components/Partners.svelte';

	import Changelog from '$lib/components/Changelog.svelte';
	import RandomGame from '$lib/components/RandomGame.svelte';

	let innerWidth: number;

	import GoogleAds from '$lib/components/GoogleAds.svelte';
</script>

<svelte:window bind:innerWidth />

<head>
	<title>Kazwire</title>
</head>

<div class="grid max-w-max grid-flow-col gap-8">
	<grid class="col-span-2 flex gap-8">
		<Hero />
		{#if innerWidth > 1000}
			<Showoff />
		{/if}
	</grid>
	<grid class="col-span-2 row-start-2 flex gap-8">
		<div class="grid grid-cols-1 space-y-8 lg:space-y-0 lg:grid-cols-3 lg:gap-8">
			<div class="col-span-2">
				<h1 class="pb-8 text-center text-4xl font-bold text-white">Random Games!</h1>
				<div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
					{#each Array(2) as _}
						<RandomGame />
					{/each}
				</div>
			</div>
			<Changelog />
		</div>
	</grid>
	<grid class="col-span-2 row-start-3">
		<Faq />
	</grid>
	<grid class="col-span-2 row-start-4">
		<GoogleAds slot="6262246352" />
	</grid>
	<grid class="col-span-2 row-start-5 max-w-full">
		<Partners />
	</grid>
</div>
