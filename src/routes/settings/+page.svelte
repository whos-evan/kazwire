<script lang="ts">
	import { onMount } from 'svelte';
	import { experiments } from '$lib/experiments';

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
		console.log(storedFavicon);
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

	onMount(() => {
		getTitle();
		getFavicon();

		experimentData = experiments.getExperiments();
	});

	import HorzAd from '$lib/components/GoogleAds/HorzAd.svelte';
</script>

<svelte:head>
	<title>Kazwire - Settings</title>
	<meta name="description" content="Adjust settings for Kazwire!" />
	<meta property="og:description" content="Adjust settings for Kazwire!" />
</svelte:head>

<HorzAd />
<div class="rounded-3xl bg-tertiary p-8 text-black dark:bg-tertiaryDark dark:text-white">
	<h1 class="text-left text-4xl font-bold">Settings</h1>
	<div class="mt-2 text-xl">
		<p>
			Adjust settings on Kazwire as you see fit. These settings are stored in your browser's local
			storage, so they will persist across sessions.
		</p>
	</div>
	<div class="mt-10 grid grid-cols-1 gap-10">
		<div class="col-start-1 row-start-1">
			<h3 class="text-2xl font-bold">Preset Cloaks</h3>
			<p class="text-sm text-gray-500">Select a preset cloak:</p>
			<select id="presetCloaks" class="mr-2 w-full max-w-xs rounded-lg p-2 text-black sm:max-w-md">
				<option value="/favicon.ico" selected>Kazwire</option>
				<option value="https://google.com/favicon.ico">Google</option>
				<option value="https://ssl.gstatic.com/classroom/ic_product_classroom_144.png"
					>Google Classroom</option
				>
				<option value="https://drive.google.com/favicon.ico">Google Drive</option>
				<option value="https://canvas.instructure.com/favicon.ico">Canvas</option>
			</select>
			<button class="btn" on:click={changePresetCloaks}>Save</button>
		</div>
		<div class="col-start-1 row-start-2">
			<h3 class="text-2xl font-bold">Tab Cloak</h3>
			<p class="text-sm text-gray-500">Enter a title:</p>
			<input
				id="title"
				type="text"
				class="mr-2 w-full max-w-xs rounded-lg p-2 text-black sm:max-w-md"
				placeholder="Enter title here..."
				bind:value={title}
			/>
			<button class="btn" on:click={changeTitle}>Save</button>
		</div>
		<div class="col-start-1 row-start-3">
			<h3 class="text-2xl font-bold">Custom Favicon</h3>
			<p class="text-sm text-gray-500">Enter a custom favicon URL:</p>
			<input
				id="favicon"
				type="text"
				class="mr-2 w-full max-w-xs rounded-lg p-2 text-black sm:max-w-md"
				placeholder="https://google.com/favicon.ico"
				bind:value={favicon}
			/>
			<button class="btn" on:click={changeFavicon}>Save</button>
		</div>
		<!-- Line break -->
		<div class="col-start-1 row-start-4">
			<hr class="border-gray-300 dark:border-gray-700" />
		</div>

		<!-- View experiments -->
		<div class="col-start-1 row-start-5">
			<h3 class="text-2xl font-bold">Experiments</h3>
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
							<p class="text-sm font-bold text-green-500">Enabled</p>
						{:else}
							<p class="text-sm font-bold text-red-500">Disabled</p>
						{/if}
					</div>
					<p class="text-sm text-gray-500">{experimentData[experiment].description}</p>
					<p class="text-sm text-black dark:text-white">
						End Date: {experimentData[experiment].endDate}
					</p>

					<button
						class="btn bg-green-500"
						on:click={() => experiments.forceEnableToggle(experiment)}
					>
						Force Enable
					</button>
					<button
						class="btn bg-red-500"
						on:click={() => experiments.forceDisableToggle(experiment)}
					>
						Force Disable
					</button>
					<button class="btn bg-red-400" on:click={() => experiments.removeExperiment(experiment)}>
						Remove Experiment
					</button>
				</div>
			{/each}
			<!-- Reset cookie -->
			<div class="w-full text-center">
				<button class="btn-lg mt-4 self-center" on:click={() => experiments.setCookie()}>
					Reset Experiment Cookie
				</button>
			</div>
		</div>
	</div>
</div>
