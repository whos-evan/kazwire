<script>
	import Embed from "$lib/components/embed.svelte";

	let embedURL = "https://discord.com/servers/kazchat-785577600219086881"
	let title = "Kazwire Discord"
	let description = "Kazwire Discord"
	let developer = "Kazwire (⚠️ Must be 13 years or older to join)"
</script>

<div class="flex h-[calc(100vh-132px)] max-w-full pl-5 pr-5 pb-5">
	<Embed embedURL={embedURL} title={title} description={description} developer={developer} loadHeart={false} />
</div>
