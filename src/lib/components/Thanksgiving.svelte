<script lang="ts">
	import { neverShowHalloween } from '$lib/stores';

	function neverShowAgain() {
		localStorage.setItem('neverShowHalloween', 'true');
		neverShowHalloween.set(true);
	}

	let text: string = '';
	// If thanksgiving day is today, show the thanksgiving message
	if (new Date().getMonth() === 10 && new Date().getDate() === 25) {
		text = 'Happy Thanksgiving!';
	} else {
		text = 'Happy Fall!';
	}
</script>

<div
	class="flex w-full items-center justify-center rounded-3xl bg-tertiary p-8 text-black dark:bg-tertiaryDark dark:text-white"
>
	<!-- iframe all i want for christmas is you -->
	<iframe
		class="pr-4"
		width="560"
		height="315"
		src="https://www.youtube.com/embed/aAkMkVFwAoo?autoplay=0&mute=0&loop=1"
		title="YouTube video player"
		frameborder="0"
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
		allowfullscreen
	/>
	<div class="items-left justify-left flex flex-col">
		<h1 class="text-left text-4xl font-bold">{text}</h1>
		<div class="flex flex-col">
			<a href="/discord" target="_blank">
				<button class="btn mt-4 w-full bg-purple-500"> Join the celebration </button>
			</a>
			<button class="btn mt-4 w-full bg-primary" on:click={neverShowAgain}>
				Never show again
			</button>
		</div>
	</div>
</div>
