<script>
	import Footer from '$lib/components/footer.svelte';
	import Nav from '$lib/components/nav.svelte';
</script>

<Nav />
<div id="home" class="h-[80vh] w-full pl-10 pt-10 pr-10 text-white">
	<h1 class="text-3xl font-bold">About the Developers</h1>
	<br />
	<p class="text-xl">
		evan#9000 - Chief Developer | He launched the Kazwire site as it's known today and has many
		years of experience in developing web projects. His other sites and works can be found on <a
			class="hover:cursor-pointer hover:underline"
			href="https://github.com/whos-evan"
			target="_blank">his GitHub</a
		>
		or his personal site at
		<a
			class="hover:cursor-pointer hover:underline"
			href="https://3van.dev"
			target="_blank">3van.dev</a
		>.
	</p>
	<br />
	<p class="text-xl">
		harmthebees#4148 - Chief Marketing Officer | Founded the Kazwire brand and manages the brand and
		its image as a whole as well as makes smaller contributions to development. His YouTube channel
		can be found at <a
			class="hover:cursor-pointer hover:underline"
			href="https://www.youtube.com/channel/UCWjGQfoEddPru_KC9zYfLig"
			target="_blank">Kazwire</a
		>.
	</p>
	<br />
	<p class="text-xl">
		If you would like to join our team you can apply on our <a
			class="hover:cursor-pointer hover:underline"
			href="https://discord.gg/FEkFSWRFM9"
			target="_blank">Discord server</a
		>!
	</p>
</div>

<Footer />
