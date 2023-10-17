<script lang="ts">
	import { onMount } from 'svelte';

	let showAlternate: boolean = false;

	onMount(() => {
		(window.adsbygoogle = window.adsbygoogle || []).push({});

		// Show alternative message if the ad isn't loaded
		setTimeout(() => {
			for (const element of document.querySelectorAll('ins.adsbygoogle')) {
				if (element.childElementCount == 0) {
					showAlternate = true;
				}

				// if data-ad-status="unfilled" then show alternate
				if (element.getAttribute('data-ad-status') == 'unfilled') {
					showAlternate = true;
				}
			}
		}, 2000);
	});
</script>

<div class="items-center justify-center p-4 [text-align-last:center]">
	<h3
		class="min-w-[14rem] text-center text-xs uppercase tracking-widest text-gray-600 opacity-40 dark:text-gray-400"
	>
		Advertisement
	</h3>

	<ins
		class="adsbygoogle"
		style="display:block"
		data-ad-client="ca-pub-7648886706850999"
		data-ad-slot="4414262154"
		data-ad-format="auto"
		data-full-width-responsive="true"
	/>
	{#if showAlternate}
		<a href="/discord" target="_blank">
			<img
				src="/assets/discord-vert.png"
				style="height: 500px; margin: auto;"
				alt="Discord promo"
			/>
		</a>
	{/if}
</div>
