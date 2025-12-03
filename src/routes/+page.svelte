<script lang="ts">
	import { config } from '$lib/config';

	import Hero from '$lib/components/Hero/Hero.svelte';
	import Hero2 from '$lib/components/Hero/Hero2.svelte';
	// import Hero3 from '$lib/components/Hero/Hero3.svelte';
	import Main from '$lib/components/Main/Main.svelte';
	import Faq from '$lib/components/Faq/Faq.svelte';
</script>

<svelte:head>
	<title>{config.branding.name}</title>
	<meta property="og:title" content={config.branding.name} />
	<meta name="description" content="Play and browse for free now on {config.branding.name}!" />
	<meta
		property="og:description"
		content="Play and browse for free now on {config.branding.name}!"
	/>
</svelte:head>

<!-- Sort the elements based on their order in config.layoutOrder -->
{#each config.homeLayoutOrder as layout}
	{#if layout === 'hero'}
		<Hero />
	{/if}
	{#if layout === 'hero2'}
		<Hero2 />
	{/if}
	<!-- {#if layout === 'hero3'}
		<Hero3 />
	{/if} -->
	{#if layout === 'faq'}
		<Faq />
	{/if}
	{#if layout === 'main'}
		<Main />
	{/if}
{/each}
