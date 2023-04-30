<script>
	import Box from './partnerBox.svelte';
	import { onMount, onDestroy } from 'svelte';

	import Carousel from 'svelte-carousel';
	import { browser } from '$app/environment';

	let carousel; // for calling methods of the carousel instance
	var outerWidth = 0;
</script>

<svelte:window bind:innerWidth={outerWidth} />
<div class="Partners w-full sm:pl-0 sm:pr-0 pl-10 pr-10">
	<h1 class="text-4xl text-white font-bold text-center mb-5">Partners</h1>
	{#if browser}
		<div class="pl-14 pr-14 sm:pr-4 sm:pl-4">
			<Carousel
				bind:this={carousel}
				particlesToShow={outerWidth > 768 ? 3 : 1}
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
					title="Goofy Games"
					image="goofygames.png"
					description="Goofy Games profides you exellent games and more, play some of the most Goofy Games on the planet."
					href="https://sites.google.com/mypisd.net/baldisgames/"
					color="#e77e7e"
				/>
				<Box
					title="Unblocked Games 121"
					image="unblockedgames121.png"
					description="Browse tons of fun games for free with Unblocked Games 121, Get unlimited links to mostly any proxy and watch lots of entertaining movies. The cure to boredom at your paws."
					href="https://sites.google.com/mypisd.net/unblockedgames121/"
					color="#0011b3"
				/>
				<Box
					title="Ninja Games"
					image="ninjagames.png"
					description="Browse tons of fun games for free with Ninja Games, and get links to mostly any proxy."
					href="https://sites.google.com/mypisd.net/ninjagames/"
					color="#00000"
				/>
				<Box
					title="Titanium Network"
					image="TN.png"
					description="Titanium Network is an organization dedicated to providing services related to bypassing internet censorship."
					href="https://titaniumnetwork.org/"
					color="#7e0040"
				/>
				<Box
					title="Partner with us!"
					image="meowflow.png"
					description="We would love to partner with you and have you showcased here! Click the box to join our Discord server!"
					href="https://forms.gle/BbmSd6EbLkBBUpKs5"
					color="#f49724"
				/>
			</Carousel>
		</div>
	{/if}
</div>
