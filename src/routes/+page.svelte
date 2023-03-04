<script>
	import Nav from '$lib/components/nav.svelte';
	import Promo from '$lib/components/promo.svelte';
	import RandomBox from '$lib/components/randomBox.svelte';
	import Faq from '$lib/components/faq.svelte';
	import Partners from '$lib/components/partners.svelte';
	import Credits from '$lib/components/credits.svelte';
	import ChangeLog from '$lib/components/changelog/changelog.svelte';
	import Footer from '$lib/components/footer.svelte';

	import HorzAd from '$lib/components/horz-ad.svelte';
</script>

<Nav />
<Promo />
<div
	class="grid lg:grid-cols-3 lg:grid-rows-none sm:grid-cols-1 sm:grid-rows-3 w-full pt-5 pb-5 pl-10 pr-10"
>
	<div class="grid lg:col-start-1 lg:col-span-2 lg:row-start-1 sm:row-span-2 sm:row-start-1">
		<RandomBox />
	</div>
	<div class="grid lg:col-start-3 lg:row-start-1 sm:row-start-3 sm:row-span-1 justify-center sm:mt-10">
		<ChangeLog />
	</div>
</div>
<HorzAd />

<Faq />

<Partners />

<Credits />

<Footer />
