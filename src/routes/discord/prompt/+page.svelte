<script lang="ts">
	import { isLoading, _ } from 'svelte-i18n';
</script>

<svelte:head>
	<title>Kazwire - Discord</title>
</svelte:head>

{#if !$isLoading}
	<grid class="flex flex-col gap-1 rounded-3xl bg-tertiary p-8 dark:bg-tertiaryDark">
		<h1 class="text-left text-4xl font-bold text-black dark:text-white">Discord</h1>
		<p class="text-md text-black dark:text-white">
			{$_('pages.discord.instructions')}
		</p>
		<div class="mt-4 flex flex-col gap-4 sm:flex-row">
			<a href="/discord/browser" data-sveltekit-reload>
				<button class="btn-lg"> {$_('pages.discord.access_through_kazwire')} </button>
			</a>
			<a href="/discord/link">
				<button class="btn-lg"> {$_('pages.discord.access_directly')} </button>
			</a>
		</div>
	</grid>
{/if}
