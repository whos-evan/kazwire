<script lang="ts">
	import { onMount } from 'svelte';

	onMount(() => {
		(window.adsbygoogle = window.adsbygoogle || []).push({});
	});
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
		style="display:inline-block;width:728px;height:90px"
		data-ad-client="ca-pub-7648886706850999"
		data-ad-slot="4023379916"
	/>
</div>
