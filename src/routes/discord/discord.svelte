<script>
	import Embed from "../../components/embed.svelte";

	let embedURL = "https://discord.gg/ryAmV8ATNh"
	let title = "Kazwire Discord"
	let description = "Kazwire Discord (Do NOT join if you are under 13. Please don't go on any forum site, especially Discord, if you are under 13."
	let developer = "Kazwire"
</script>

<div class="flex h-[calc(100vh-132px)] max-w-full pl-5 pr-5 pb-5">
	<Embed embedURL={embedURL} title={title} description={description} developer={developer} />
</div>
