<script lang="ts">
	import { onMount } from 'svelte';

	onMount(() => {
		(window.adsbygoogle = window.adsbygoogle || []).push({});
	});
	import { isLoading, _ } from 'svelte-i18n';
</script>

{#if !$isLoading}
	<div class="items-center justify-center p-4 [text-align-last:center]">
		<h3
			class="min-w-[14rem] text-center text-xs uppercase tracking-widest text-gray-600 opacity-40 dark:text-gray-400"
		>
			{$_('pages.google.advertisement')}
		</h3>
		<ins
			class="adsbygoogle"
			style="display:block"
			data-ad-client="ca-pub-7648886706850999"
			data-ad-slot="6262246352"
			data-ad-format="auto"
			data-full-width-responsive="true"
		/>
	</div>
{/if}
