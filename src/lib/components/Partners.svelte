<script lang="ts">
	import Box from '$lib/components/Box/PartnerBox.svelte';

	import Carousel from 'svelte-carousel';
    import Icon from '@iconify/svelte';
	import { browser } from '$app/environment';

	let carousel; // for calling methods of the carousel instance
	var outerWidth: number = 0;
</script>

<svelte:window bind:innerWidth={outerWidth} />

<div class="rounded-3xl bg-tertiary p-8 text-black dark:bg-tertiaryDark dark:text-white max-w-[calc(100vw-5rem)]">
	<h1 class="text-4xl font-bold text-center">Partners</h1>
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
					<Icon icon="pixelarticons:arrow-left" class="h-8 w-8" />
				</button>
				<button class="m-auto" slot="next" on:click={showNextPage}>
					<Icon icon="pixelarticons:arrow-right" class="h-8 w-8" />
				</button>
				<Box
					title="WebLFG"
					image="weblfg.png"
					description="From internet classics to present-day favorites, it's online entertainment right at your fingertips."
					href="https://weblfg.com"
					color="#e77e7e"
				/>
				<Box
					title="Moonlight"
					image="moonlight.png"
					description="Browse tons of fun games for free with Moonlight. The cure to boredom at your fingertips."
					href="https://moonlight.silvereen.net/"
					color="#0011b3"
				/>
				<Box
					title="Phantom Games"
					image="phantom.png"
					description="Where simplicity and unblocked fun collide!"
					href="https://phantom.delusionz.xyz/"
					color="#2c7ffc"
				/>
				<Box
					title="Titanium Network"
					image="TN.png"
					description="Titanium Network is an organization dedicated to providing services related to bypassing internet censorship."
					href="https://titaniumnetwork.org/"
					color="#7e0040"
				/>
				<Box
					title="Totally Science"
					image="ts.png"
					description="Totally Science - your one-stop destination for free online games and unblocked content! Youtube, multiplayer games, Minecraft, and more."
					href="https://totallyscience.co/"
					color="#f75dfc"
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