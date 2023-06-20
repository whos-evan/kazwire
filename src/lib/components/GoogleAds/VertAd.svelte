<script lang="ts">
	import { onMount } from 'svelte';
	onMount(() => {
		(window.adsbygoogle = window.adsbygoogle || []).push({});
	});

	const AD_SLOT_ID = '8673868840';

	import AdvertSlot from './AdvertSlot.svelte';
</script>

<AdvertSlot>
	<ins
		class="adsbygoogle"
		style="display:block"
		data-ad-client="ca-pub-7648886706850999"
		data-ad-slot={AD_SLOT_ID}
		data-ad-format="auto"
		data-full-width-responsive="true"
	/>
</AdvertSlot>
