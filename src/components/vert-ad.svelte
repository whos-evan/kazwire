<script>
	import { onMount } from 'svelte';
	let adblock = false;

	onMount(() => {
		var isAdsenseNotLoaded =
			typeof adsbygoogle === 'undefined' || typeof adsbygoogle.loaded === 'undefined';
		if (isAdsenseNotLoaded) {
			adblock = true;
		} else {
			(adsbygoogle = window.adsbygoogle || []).push({});
		}
		setTimeout(() => {
			// We are targeting the first banner ad of AdSense
			var ad = document.querySelector('ins.adsbygoogle');
			// If the ad contains no innerHTML, ad blockers are at work
			if (ad && ad.innerHTML.replace(/\s/g, '').length == 0) {
				adblock = true;
			}
		}, 3000);
	});
</script>

<div class="Vert w-full h-full mt-10">
	{#if adblock == false}
		<div id="GoogleAds" align="center" class="w-full h-full">
			<ins
				class="adsbygoogle"
				style="display:block"
				data-ad-client="ca-pub-7648886706850999"
				data-ad-slot="8673868840"
				data-ad-format="vertical"
				data-full-width-responsive="true"
			/>
		</div>
	{:else}
		<div id="AlternativeAd" align="center" class="w-full h-full">
			<img src="/logo.png" width="75" />
			<p class="text-2xl text-white">
				Please disable your ad blocker to help support the site and keep it lightning fast!
			</p>
		</div>
	{/if}
</div>
