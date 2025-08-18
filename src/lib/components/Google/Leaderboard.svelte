<script lang="ts">
	import { onMount } from 'svelte';
	import { config } from '$lib/config';
	let showAlternate = false;

	onMount(() => {
		(window.adsbygoogle = window.adsbygoogle || []).push({});

		setTimeout(() => {
			let element: HTMLElement | null = document.getElementById('Vert2');
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

	{#if showAlternate && typeof config.social.discord == 'string'}
		<a
			href="/links"
			target="_blank"
			rel="noopener noreferrer"
			class="mx-auto flex h-[90px] w-[728px] flex-col items-center justify-center bg-base-300 p-4"
		>
			<h1 class="text-center text-4xl font-black text-base-content">JOIN OUR DISCORD</h1>
		</a>
	{/if}

	<ins
		id="Vert2"
		class="adsbygoogle"
		style="display:inline-block;width:728px;height:90px"
		data-ad-client="ca-pub-7648886706850999"
		data-ad-slot="4023379916"
	/>
</div>
