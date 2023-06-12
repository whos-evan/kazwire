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
    <h3 class="text-xs tracking-widest uppercase text-center text-gray-500 opacity-40">Advertizement</h3>
	<ins
		class="adsbygoogle"
		style="display:block"
		data-ad-client="ca-pub-7648886706850999"
		data-ad-slot={slot}
		data-ad-format="auto"
		data-full-width-responsive="true"
	/>
</div>
