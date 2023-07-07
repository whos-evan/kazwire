<script lang="ts">
	import faqJSON from './faq.json';

	import Horz from '$lib/components/Google/Horz.svelte';
</script>

<svelte:head>
	<title>Kazwire - FAQ</title>
	<meta name="description" content="Frequently asked questions about Kazwire." />
	<meta property="og:description" content="Frequently asked questions about Kazwire!" />
</svelte:head>

<Horz />

<div class="min-h-[70vh]">
	<h1 class="text-4xl font-bold text-white">FAQ</h1>
	<p class="font-medium text-white">
		Here you can find all the frequently asked questions about the site.
	</p>
	<div class="grid-flow-rows mt-5 grid auto-rows-auto gap-10 sm:grid-cols-1 md:grid-cols-2">
		{#each faqJSON['faq'] as faq}
			<div class="rounded-md bg-secondary p-5">
				<h1 class="text-2xl font-bold text-white">{faq['question']}</h1>
				<p class="break-words font-medium text-white">{faq['answer']}</p>
			</div>
		{/each}
	</div>
</div>
