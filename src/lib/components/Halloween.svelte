<script lang="ts">
	import { neverShowHalloween } from '$lib/stores';

	function neverShowAgain() {
		localStorage.setItem('neverShowHalloween', 'true');
		neverShowHalloween.set(true);
	}
</script>

<div
	class="flex w-full items-center justify-center rounded-3xl bg-tertiary p-8 text-black dark:bg-tertiaryDark dark:text-white"
>
	<!-- Happy Halloween! -->
	<div class="flex flex-col items-start justify-center">
		<h1 class="text-4xl font-bold">Happy Halloween!</h1>
		<div class="flex flex-row gap-4">
			<a href="/discord" target="_blank">
				<button class="btn mt-4 bg-purple-600">
					<span class="flex items-center">
						<span>Join the Discord!</span>
					</span>
				</button>
			</a>
			<button class="btn mt-4 bg-primary" on:click={neverShowAgain}>
				<span class="flex items-center">
					<span>Don't show again</span>
				</span>
			</button>
		</div>
	</div>
	<img
		src="/assets/pumpkin.png"
		class="w-[20rem]"
		alt="Pumpkin with a carving saying Kazwire on it"
	/>
</div>
