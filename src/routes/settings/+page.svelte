<script lang="ts">
	import { onMount } from 'svelte';
	import { experiments } from '$lib/experiments';
	import { _, isLoading } from 'svelte-i18n';

	interface Experiment {
		endDate: string;
		description: string;
		percentage: number;
		enabled: boolean;
		forceEnable: boolean;
	}

	let experimentData: Experiment[] = [];

	let presetCloaks: string = '';
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

	function getPresetCloak() {
		const storedPresetCloak: string = localStorage.getItem('presetCloak') || '';
		if (storedPresetCloak == 'Kazwire') {
			title = '';
			favicon = '';
			changeTitle();
			changeFavicon();
		} else if (storedPresetCloak) {
			presetCloaks = storedPresetCloak;
			const options = document.getElementById('presetCloaks') as HTMLSelectElement;
			title = options.selectedOptions[0].innerText;
			favicon = options.value;
			changeTitle();
			changeFavicon();
		} else {
			presetCloaks = '';
		}
	}

	function changePresetCloaks() {
		const options = document.getElementById('presetCloaks') as HTMLSelectElement;
		presetCloaks = options.selectedOptions[0].innerText;
		if (presetCloaks === '') {
			localStorage.removeItem('presetCloak');
		} else {
			localStorage.setItem('presetCloak', presetCloaks);
		}
		getPresetCloak();
	}

	function disableExperimentAnalytics(experiment: string) {
		console.log('Sending analytics for experiment: ' + experiment);
		gtag('event', 'experiment_disable', {
			event_category: 'experiment_disable',
			event_label: experiment
		});
	}

	function enableExperimentAnalytics(experiment: string) {
		console.log('Sending analytics for experiment: ' + experiment);
		gtag('event', 'experiment_enable', {
			event_category: 'experiment_enable',
			event_label: experiment
		});
	}

	let locale: string = 'en';

	function changeLocale() {
		localStorage.setItem('locale', locale);
		window.location.reload();
	}

	onMount(() => {
		getTitle();
		getFavicon();

		locale = localStorage.getItem('locale') || 'en';

		experimentData = experiments.getExperiments();
	});

	import Horz from '$lib/components/Google/Horz.svelte';
</script>

<svelte:head>
	<title>Kazwire - Settings</title>
	<meta name="description" content="just settings for Kazwire!" />
	<meta property="og:description" content="just settings for Kazwire!" />
</svelte:head>

<Horz />
{#if !$isLoading}
	<div class="rounded-3xl bg-tertiary p-8 text-black dark:bg-tertiaryDark dark:text-white">
		<h1 class="text-left text-4xl font-bold">{$_('pages.settings.settings')}</h1>
		<div class="mt-2 text-xl">
			<p>
				{$_('pages.settings.description')}
			</p>
		</div>
		<div class="mt-10 grid grid-cols-1 gap-10">
			<div class="col-start-1 row-start-1">
				<h3 class="text-2xl font-bold">{$_('pages.settings.preset_cloaks')}</h3>
				<p class="text-sm text-gray-500">{$_('pages.settings.select_preset_cloaks')}</p>
				<select
					id="presetCloaks"
					class="mr-2 w-full max-w-xs rounded-lg p-2 text-black sm:max-w-md"
				>
					<option value="/favicon.ico" selected>Kazwire</option>
					<option value="https://google.com/favicon.ico">Google</option>
					<option value="https://ssl.gstatic.com/classroom/ic_product_classroom_144.png"
						>Google Classroom</option
					>
					<option value="https://drive.google.com/favicon.ico">Google Drive</option>
					<option value="https://canvas.instructure.com/favicon.ico">Canvas</option>
				</select>
				<button class="btn" on:click={changePresetCloaks}>{$_('pages.settings.save')}</button>
			</div>
			<div class="col-start-1 row-start-2">
				<h3 class="text-2xl font-bold">{$_('pages.settings.tab_cloak')}</h3>
				<p class="text-sm text-gray-500">{$_('pages.settings.enter_title')}</p>
				<input
					id="title"
					type="text"
					class="mr-2 w-full max-w-xs rounded-lg p-2 text-black sm:max-w-md"
					placeholder="Enter title here..."
					bind:value={title}
				/>
				<button class="btn" on:click={changeTitle}>{$_('pages.settings.save')}</button>
			</div>
			<div class="col-start-1 row-start-3">
				<h3 class="text-2xl font-bold">{$_('pages.settings.custom_favicon')}</h3>
				<p class="text-sm text-gray-500">{$_('pages.settings.enter_custom_favicon')}</p>
				<input
					id="favicon"
					type="text"
					class="mr-2 w-full max-w-xs rounded-lg p-2 text-black sm:max-w-md"
					placeholder="https://google.com/favicon.ico"
					bind:value={favicon}
				/>
				<button class="btn" on:click={changeFavicon}>{$_('pages.settings.save')}</button>
			</div>
			<!-- Line break -->
			<div class="col-start-1 row-start-4">
				<hr class="border-gray-300 dark:border-gray-700" />
			</div>

			<div class="col-start-1 row-start-5">
				<h3 class="text-2xl font-bold">{$_('pages.settings.change_locale')}</h3>
				<p class="text-sm text-gray-500">{$_('pages.settings.set_language')}</p>
				<select
					id="locale"
					class="mr-2 w-full max-w-xs rounded-lg p-2 text-black sm:max-w-md"
					bind:value={locale}
				>
					<option value="en">English</option>
					<option value="es">Español</option>
					<option value="fr">Français</option>
					<option value="de">Deutsch</option>
					<option value="ja">日本語</option>
				</select>
				<button class="btn" on:click={changeLocale}>{$_('pages.settings.save')}</button>
			</div>

			<!-- Line break -->
			<div class="col-start-1 row-start-6">
				<hr class="border-gray-300 dark:border-gray-700" />
			</div>

			<!-- View experiments -->
			<div class="col-start-1 row-start-7">
				<h3 class="text-2xl font-bold">{$_('pages.settings.experiments')}</h3>
				<p class="text-md text-gray-500">
					You may come across some experiments while visiting the site. If you do manage to come
					across an experiment then it will appear here with some options for you to manage it.
					<br />
					You may have to refresh the page for the experiment to appear here or for the changes to take
					effect.
				</p>
				<!-- Go through each one -->
				{#each Object.keys(experimentData) as experiment}
					<div class="mt-4 flex max-w-sm flex-col gap-2">
						<div class="flex flex-col">
							<h4 class="font-mono text-xl font-bold">{experiment}</h4>
							<!-- Status -->
							{#if experiments.shouldShow(experiment)}
								<p class="text-sm font-bold text-green-500">{$_('pages.settings.enabled')}</p>
							{:else}
								<p class="text-sm font-bold text-red-500">{$_('pages.settings.disabled')}</p>
							{/if}
						</div>
						<p class="text-sm text-gray-500">{experimentData[experiment].description}</p>
						<p class="text-sm text-black dark:text-white">
							End Date: {experimentData[experiment].endDate}
						</p>

						<button
							class="btn bg-green-500"
							on:click={() => experiments.forceEnableToggle(experiment)}
							on:click={() => enableExperimentAnalytics(experiment)}
						>
						{$_('pages.settings.force_enable')}
						</button>
						<button
							class="btn bg-red-500"
							on:click={() => experiments.forceDisableToggle(experiment)}
							on:click={() => disableExperimentAnalytics(experiment)}
						>
						{$_('pages.settings.force_disable')}
						</button>
						<button
							class="btn bg-red-400"
							on:click={() => experiments.removeExperiment(experiment)}
							on:click={() => disableExperimentAnalytics(experiment)}
						>
						{$_('pages.settings.remove_experiment')}
						</button>
					</div>
				{/each}
				<!-- Reset cookie -->
				<div class="w-full text-center">
					<button class="btn-lg mt-4 self-center" on:click={() => experiments.resetAllCookies()}>
						{$_('pages.settings.reset_experiment_cookies')}
					</button>
				</div>
			</div>
		</div>
	</div>
{/if}
