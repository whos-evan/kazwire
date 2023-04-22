<script>
	import { onMount } from 'svelte';

	let dataAdSlots = [9769993248, 5020229448, 3093490980, 8154245977, 5528082635];

	onMount(() => {
		var isAdsenseNotLoaded =
			typeof adsbygoogle === 'undefined' || typeof adsbygoogle.loaded === 'undefined';
		if (isAdsenseNotLoaded) {
			// show for all GoogleAds divs
			document.querySelectorAll('#GoogleAds').forEach((el) => {
				el.style.cssText = 'display:block !important; padding: 20px !important;';
				el.innerHTML =
					'<img src="/logo.png" width="75"/><p class="text-2xl text-white">Please disable your ad blocker to help support the site and keep it lightning fast!</p>';
			});
		} else {
			(adsbygoogle = window.adsbygoogle || []).push({});
		}
		setTimeout(() => {
			// We are targeting the first banner ad of AdSense
			var ad = document.querySelector('ins.adsbygoogle');
			// If the ad contains no innerHTML, ad blockers are at work
			if (ad && ad.innerHTML.replace(/\s/g, '').length == 0) {
				// show for all GoogleAds divs
				document.querySelectorAll('#GoogleAds').forEach((el) => {
					el.style.cssText = 'display:block !important; padding: 20px !important;';
					el.innerHTML =
						'<img src="/logo.png" width="75"/><p class="text-2xl text-white">Please disable your ad blocker to help support the site and keep it lightning fast!</p>';
				});
			}
		}, 3000);
	});
</script>

<div class="Square w-full h-full align-center">
	<div id="GoogleAds" align="center" class="w-full h-full">
		<ins
			class="adsbygoogle"
			style="display:block"
			data-ad-client="ca-pub-7648886706850999"
			data-ad-slot="{dataAdSlots[Math.floor(Math.random() * dataAdSlots.length)]}"
			data-ad-format="auto"
			data-full-width-responsive="true"
		/>
	</div>
</div>