<script lang="ts">
	export let slot: string;
</script>

<svelte:head>
	<script
		async
		src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7648886706850999"
		crossorigin="anonymous"
	></script>
	<script>
		(adsbygoogle = window.adsbygoogle || []).push({});
	</script>
</svelte:head>

<div class="p-4">
	<h3 class="min-w-[14rem] text-center text-xs uppercase tracking-widest dark:text-gray-400 text-gray-600 opacity-40">
		Advertisement
	</h3>
	<ins
		class="adsbygoogle"
		style="display:block"
		data-ad-client="ca-pub-7648886706850999"
		data-ad-slot={slot}
		data-ad-format="auto"
		data-full-width-responsive="true"
	/>
</div>
