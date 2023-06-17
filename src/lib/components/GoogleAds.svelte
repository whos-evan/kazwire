<script lang="ts">
	export let slot: string;

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

<div class="p-4">
	<h3
		class="min-w-[14rem] text-center text-xs uppercase tracking-widest text-gray-600 opacity-40 dark:text-gray-400"
	>
		Advertisement
	</h3>
	<div class="flex h-full items-center justify-center">
		<ins
			class="adsbygoogle"
			style="display:block"
			data-ad-client="ca-pub-7648886706850999"
			data-ad-slot={slot}
			data-ad-format="auto"
			data-full-width-responsive="true"
		/>
	</div>
</div>
