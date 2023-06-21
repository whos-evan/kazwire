<script lang="ts">
	import Footer from '$lib/components/footer.svelte';
	import Nav from '$lib/components/nav.svelte';
	import Calc from '$lib/components/calc.svelte';
</script>

<Nav />
<main class="min-h-[65vh] text-white" style="padding: 20px">
	<div class="flex flex-row justify-center pb-6" style="margin:0">
		<div class="border-2 p-2 text-2xl" style="">
			<h1 class="text-5xl">Final Grade Calculator</h1>
			<p>
				This is a tool from us that can calculate<br /> what you would need to score on the final to
				get your desired grade
			</p>
		</div>
	</div>
	<Calc />
</main>
<Footer />
