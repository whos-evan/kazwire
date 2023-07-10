<script lang="ts">
	import { _ } from 'svelte-i18n';
	import { isLoading } from 'svelte-i18n';
</script>

{#if !$isLoading}
	<div
		class="flex h-full w-full flex-col justify-center rounded-3xl bg-tertiary p-8 text-black dark:bg-tertiaryDark dark:text-white"
	>
		<div class="text-5xl font-bold tracking-tighter md:text-7xl">
			<h1>
				<span class="block pb-1">{$_('hero_part_1')}</span>
				<span class="text-secondary">{$_('hero_part_2')}</span>
			</h1>
		</div>
		<p class="text-md pt-2 tracking-tight md:text-3xl">
			{$_('description')}
		</p>
		<div class="flex flex-col gap-3 pt-8 text-center sm:flex-row sm:text-left">
			<a href="/search" class="btn-lg">{$_('start_browsing_button')}</a>
			<a href="/games" class="btn-lg">{$_('start_playing_button')}</a>
		</div>
	</div>
{/if}
