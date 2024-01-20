<script lang="ts">
	import Icon from '@iconify/svelte';

	import { neverShowSchoolRescue } from '$lib/stores';

	let title: string = '';
	let favicon: string = '';

	function getTitle() {
		const storedTitle = localStorage.getItem('title');
		if (storedTitle) {
			document.title = storedTitle;
			title = storedTitle;
		}
	}

	function changeTitle() {
		if (title === '') {
			localStorage.removeItem('title');
		} else {
			localStorage.setItem('title', title);
		}
		getTitle();
	}

	function getFavicon() {
		const storedFavicon: string = localStorage.getItem('favicon') || '';
		if (storedFavicon) {
			// Change favicon by creating a new link element
			let link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
			if (!link) {
				link = document.createElement('link');
				link.rel = 'icon';
				link.type = 'image/x-icon';
				link.href = storedFavicon;
				document.getElementsByTagName('head')[0].appendChild(link);
			} else {
				link.href = storedFavicon;
			}
			favicon = storedFavicon;
		} else {
			favicon = '';
		}
	}

	function changeFavicon() {
		if (favicon === '') {
			localStorage.removeItem('favicon');
		} else {
			localStorage.setItem('favicon', favicon);
		}
		getFavicon();
	}

	function quickSet() {
		localStorage.setItem('title', 'Google');
		localStorage.setItem('favicon', 'https://www.google.com/favicon.ico');
		getTitle();
		getFavicon();
	}

	function neverShowAgain() {
		localStorage.setItem('neverShowSchoolRescue', 'true');
		neverShowSchoolRescue.set(true);
	}

	import { isLoading, _ } from 'svelte-i18n';
</script>

{#if !$isLoading}
	<div
		class="flex w-full items-center justify-center rounded-3xl bg-tertiary p-8 text-black dark:bg-tertiaryDark dark:text-white"
	>
		<!-- Ask if the user would like to set their tab cloak -->
		<div class="flex flex-col items-start justify-center">
			<div class="flex flex-row place-items-center gap-2">
				<h1 class="text-5xl font-bold leading-snug">{$_('pages.school_rescue.hey')}</h1>
				<Icon icon="mdi:school" class="text-5xl text-yellow-600" />
			</div>
			<h3>
				{$_('pages.school_rescue.description')}
			</h3>
			<br />
			<h3>
				{$_('pages.school_rescue.tip_part_1')} <code>Control + Shift + I</code> {$_('pages.school_rescue.tip_part_2')}
			</h3>
			<div class="mt-4 flex flex-row gap-4">
				<a href="/settings">
					<button class="btn-lg"> {$_('pages.school_rescue.set_tab_cloak')} </button>
				</a>
				<button class="btn-lg bg-green-500" on:click={() => quickSet()}> {$_('pages.school_rescue.quick_set')} </button>
				<button class="btn-lg bg-red-500" on:click={() => neverShowAgain()}>
					{$_('pages.school_rescue.dont_show_again')}
				</button>
			</div>
		</div>
	</div>
{/if}
