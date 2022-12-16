<script>
	import Nav from '../components/nav.svelte';
	import Promo from '../components/promo.svelte';
	import RandomBox from '../components/randomBox.svelte';
	import News from '../components/news/news.svelte';
	import Footer from '../components/footer.svelte';
</script>

<Nav />
<Promo />
<div class="grid lg:grid-cols-3 lg:grid-rows-none sm:grid-cols-1 sm:grid-rows-2 w-full pt-5 pl-10 pr-10">
	<div class="grid lg:col-start-1 lg:col-span-2 lg:row-start-1 sm:row-start-1">
		<RandomBox />
	</div>
	<div class="grid lg:col-start-3 lg:row-start-1 sm:row-start-2 sm:mt-10">
		<News />
	</div>
</div>
<Footer />

