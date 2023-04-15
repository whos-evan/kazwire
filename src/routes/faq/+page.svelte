<script lang="ts">
    import Nav from '$lib/components/nav.svelte';
    import Footer from '$lib/components/footer.svelte';

    import faqJSON from './faq.json';
</script>

<Nav />
<div class="ml-10 mr-10 min-h-[70vh]">
    <h1 class="text-4xl font-bold text-white">FAQ</h1>
    <p class="font-medium text-white">
        Here you can find all the frequently asked questions about the site.
    </p>
    <div class="grid grid-flow-rows auto-rows-auto gap-10 md:grid-cols-2 sm:grid-cols-1 mt-5">
        {#each faqJSON['faq'] as faq}
            <div class="bg-secondary rounded-md p-5">
                <h1 class="text-2xl font-bold text-white">{faq['question']}</h1>
                <p class="font-medium text-white break-words">{faq['answer']}</p>
            </div>
        {/each}
    </div>
</div>
<Footer />