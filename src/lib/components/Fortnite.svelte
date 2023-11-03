<script lang="ts">
	import { neverShowFortnite } from '$lib/stores';

	function neverShowAgain() {
		localStorage.setItem('neverShowFortnite', 'true');
		neverShowFortnite.set(true);
	}
</script>

<div
	class="flex w-full items-center justify-center rounded-3xl bg-tertiary p-8 text-black dark:bg-tertiaryDark dark:text-white"
>
	<img
		src="/game/img/fortnite.png"
		alt="Fortnite"
		class="w-1/3 rounded-md mr-8"
	/>
	<div class="items-left justify-left flex flex-col">
		<h1 class="text-left text-4xl font-bold">New Fortnite Season</h1>
		<div class="flex flex-col">
			<a href="/games/fortnite" target="_blank">
				<button class="btn mt-4 w-full bg-blue-500"> Play now! </button>
			</a>
			<button class="btn mt-4 w-full bg-primary" on:click={neverShowAgain}>
				Never show again
			</button>
		</div>
	</div>
</div>
