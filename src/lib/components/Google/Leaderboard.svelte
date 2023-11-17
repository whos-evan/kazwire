<script lang="ts">
	import { onMount } from 'svelte';

	let showAlternate: boolean = false;
	let imgURLs = ['discord-lb.png'];
	let imgURL = imgURLs[Math.floor(Math.random() * imgURLs.length)];

	onMount(() => {
		(window.adsbygoogle = window.adsbygoogle || []).push({});

		// Show alternative message if the ad isn't loaded
		setTimeout(() => {
			let element: HTMLElement | null = document.getElementById('Vert');
			if (element.childElementCount == 0) {
				showAlternate = true;
				element.remove();
			}

			// if data-ad-status="unfilled" then show alternate
			if (element.getAttribute('data-ad-status') == 'unfilled') {
				showAlternate = true;
				element.remove();
			}
		}, 4000);
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
		style="display:inline-block;width:728px;height:90px"
		data-ad-client="ca-pub-7648886706850999"
		data-ad-slot="4023379916"
	/>

	{#if showAlternate}
		<a href="/discord" target="_blank">
			<img src={'/assets/' + imgURL} style="height: 90; margin: auto;" alt="Discord promo" />
		</a>
	{/if}
</div>
