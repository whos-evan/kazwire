<script lang="ts">
	import { experiments } from '$lib/experiments';
	import { onMount } from 'svelte';

	import { isLoading, _ } from 'svelte-i18n';
</script>

{#if !$isLoading}
	<div class="rounded-3xl bg-tertiary p-8 text-black dark:bg-tertiaryDark dark:text-white">
		<h1 class="text-4xl font-bold">{$_('pages.faq.what_is_kazwire')}</h1>
		<div class="mt-4 text-xl">
			<p>
				{$_('pages.faq.p_1')}
			</p>
			<br />
			<p>
				{$_('pages.faq.p_2')}
			</p>
			<br />
			<p>
				{$_('pages.faq.p_3_part_1')} <a
					class="hover:cursor-pointer hover:underline"
					href="https://discord.gg/KRNy7EpXFD">Discord</a
				> {$_('pages.faq.p_3_part_2')}
			</p>
			<br />
			<p>
				{$_('pages.faq.p_4')} <a
					class="hover:cursor-pointer hover:underline"
					href="/legal/dmca">{$_('pages.faq.dmca_page')}</a
				>.
			</p>
		</div>
	</div>
{/if}
