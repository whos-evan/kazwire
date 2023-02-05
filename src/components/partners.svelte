<script>
	import Box from './box.svelte';
	import { onMount, onDestroy } from 'svelte';

	import Carousel from 'svelte-carousel';
	import { browser } from '$app/environment';

	let carousel; // for calling methods of the carousel instance
	var outerWidth = 0;
</script>

<svelte:window bind:innerWidth={outerWidth}/>
<div class="Partners w-full sm:pl-0 sm:pr-0 pl-10 pr-10">
	<h1 class="text-4xl text-white font-bold text-center mb-5">Partners</h1>
	{#if browser}
		<div class="pl-14 pr-14 sm:pr-4 sm:pl-4">
			<Carousel
				bind:this={carousel}
				particlesToShow= {outerWidth > 768 ? 3 : 1}
				particlesToScroll={1}
				autoplay
				autoplayDuration={2500}
				pauseOnFocus
				let:showPrevPage
				let:showNextPage
			>
				<button class="m-auto" slot="prev" on:click={showPrevPage}>
					<svg xmlns="http://www.w3.org/2000/svg" class="h-10 fill-white" viewBox="0 0 256 512"
						><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path
							d="M9.4 278.6c-12.5-12.5-12.5-32.8 0-45.3l128-128c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 256c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-128-128z"
						/></svg
					>
				</button>
				<button class="m-auto" slot="next" on:click={showNextPage}>
					<svg xmlns="http://www.w3.org/2000/svg" class="h-10 fill-white" viewBox="0 0 256 512"
						><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path
							d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z"
						/></svg
					>
				</button>
				<Box
					title="WebLFG"
					image="weblfg.png"
					description="From internet classics to present-day favorites, it's online entertainment right at your fingertips."
					href="https://weblfg.com"
					color="#e77e7e"
				/>
				<Box
					title="Bigfoot's Game Shack"
					image="bigfoot.png"
					description="Built for real gamers. 100+ Games, Apps (Discord, etc), Tab Cloaking, and Game Cloaking!"
					href="https://bgs.pages.dev/"
					color="#774e24"
				/>
				<Box
					title="3kh0"
					image="3kh0.png"
					description="The better unblocked games site, clean and user friendly."
					href="https://3kh0.github.io/"
					color="#3a0f1c"
				/>
				<Box
					title="Partner with us!"
					image="kazwire.png"
					description="We would love to partner with you and have you showcased here! Click the box to join our Discord server!"
					href="https://discord.gg/kazwire"
					color="#f49724"
				/>
			</Carousel>
		</div>
	{/if}
</div>
