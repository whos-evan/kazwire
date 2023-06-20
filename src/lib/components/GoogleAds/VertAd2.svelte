<script lang="ts">
	import { onMount } from 'svelte';
	onMount(() => {
		(window.adsbygoogle = window.adsbygoogle || []).push({});
	});

	const AD_SLOT_ID = '4414262154';
</script>

<svelte:head>
	<script
		async
		src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7648886706850999"
		crossorigin="anonymous"
	></script>
</svelte:head>

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
		data-ad-slot="{AD_SLOT_ID}"
		data-ad-format="auto"
		data-full-width-responsive="true"
	/>
</div>
