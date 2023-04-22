<script>
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	import randomThings from './randomThings.json';

	function newRandomThing() {
		randomThing = randomThings[Math.floor(Math.random() * randomThings.length)];
	}

	let randomThing = 'Loading...';
	onMount(() => {
		randomThing = randomThings[Math.floor(Math.random() * randomThings.length)];
	});

	const hostname = $page.url.hostname;
	const protocol = $page.url.protocol;

	async function getPremium() {
		try {
			const res = await fetch(protocol + '//' + hostname + '/premium/');
			if (res.status >= 400) {
				return false;
			} else {
				return true;
			}
		} catch (err) {
			return false;
		}
	}
</script>

<div class="Promo sm:pt-14 md:pt-0">
	<div class="text-white">
		<div
			class="grid lg:grid-cols-2 lg:grid-rows-none sm:grid-cols-none sm:grid-rows-2 gap-5 items-center justify-center justify-items-center align-middle
        w-full h-[35rem] pl-16 pr-16"
		>
			<div class="lg:col-start-1 lg:row-start-1">
				<div class="font-bold lg:text-7xl md:text-5xl sm:text-3xl">
					<h1>
						<span class="pb-1 block">Your favorites</span>
						<span class="text-secondaryLight dark:text-secondaryDark">all in one place!</span>
					</h1>
				</div>
				<div class="mt-2 lg:text-2xl sm:text-md wrap break-normal md:w-[32vw] sm:w-full">
					{#await getPremium()}
						<button class="text-left" on:click={newRandomThing}>
							<p>
								{randomThing}
							</p>
						</button>
					{:then premium}
						{#if premium === false}
							<button class="text-left" on:click={newRandomThing}>
								<p>
									{randomThing}
								</p>
							</button>
						{:else}
							<p>
								Looks like you are accessing this site with a premium domain. You can boost the
								<a class="hover:underline" href="/discord">Kazwire Discord server</a> to get access to
								all premium domains.
							</p>
						{/if}
					{/await}
				</div>
				<a href="/search">
					<button
						class="btn-primary mr-4"
						>Start Browsing</button
					>
				</a>
				<a href="/games">
					<button
						class="btn-primary"
						>Start Playing</button
					>
				</a>
			</div>
			<div
				id="yt-video"
				class="lg:col-start-2 lg:row-start-1 sm:row-start-2 relative w-full pb-[56.25%]"
			>
				<img
					src="showoff.gif"
					class="absolute w-full h-full shadow-lg shadow-black dark:shadow-white"
				/>
			</div>
		</div>
	</div>
</div>
