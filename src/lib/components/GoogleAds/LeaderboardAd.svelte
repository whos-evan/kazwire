<script lang="ts">
	import { onMount } from 'svelte';
	onMount(() => {
		(window.adsbygoogle = window.adsbygoogle || []).push({});
	});

	const AD_SLOT_ID = '6262246352';

	import AdvertSlot from './AdvertSlot.svelte';
</script>

<AdvertSlot>
	<ins
		class="adsbygoogle"
		style="display:inline-block;width:728px;height:90px"
		data-ad-client="ca-pub-7648886706850999"
		data-ad-slot="{AD_SLOT_ID}"
	/>
</AdvertSlot>
