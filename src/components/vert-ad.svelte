<script>
	import { onMount } from 'svelte';
	onMount(() => {
		var isAdsenseNotLoaded =
			typeof adsbygoogle === 'undefined' || typeof adsbygoogle.loaded === 'undefined';
		if (isAdsenseNotLoaded) {
			document.getElementById('GoogleAds').style.cssText =
				'display:block !important; padding: 20px !important;';
			document.getElementById('GoogleAds').innerHTML =
				'<img src="/logo.png" width="75"/><p class="text-2xl text-white">Please disable your ad blocker to help support the site and keep it lightning fast!</p>';
		} else {
			(adsbygoogle = window.adsbygoogle || []).push({});
		}
		setTimeout(() => {
			// We are targeting the first banner ad of AdSense
			var ad = document.querySelector('ins.adsbygoogle');
			// If the ad contains no innerHTML, ad blockers are at work
			// if its unfilled then don't show anything

			if (ad && ad.innerHTML.replace(/\s/g, '').length == 0) {
				document.getElementById('GoogleAds').style.cssText =
					'display:block !important; padding: 20px !important;';
				document.getElementById('GoogleAds').innerHTML =
					'<img src="/logo.png" width="75"/><p class="text-2xl text-white">Please disable your ad blocker to help support the site and keep it lightning fast!</p>';
			}
		}, 3000);
	});
</script>

<div class="Vert w-full h-full">
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
</div>
