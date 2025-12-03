<script lang="ts">
	import { onMount } from 'svelte';
	import { themeChange } from 'theme-change';
	import { browser } from '$app/environment';

	let searchQuery: string = '';
	let contentTitle: string = 'Nothing yet...';

	import { config } from '$lib/config';

	// NOTE: the element that is using one of the theme attributes must be in the DOM on mount
	let theme = '';
	onMount(() => {
		themeChange(false);
		// 👆 false parameter is required for svelte

		// check if theme is set in system preferences
		if (localStorage.getItem('theme') != null) {
			theme = localStorage.getItem('theme') || 'light';
		} else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
			theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
		} else {
			theme = 'light';
		}

		if (browser) {
			let panicKey = localStorage.getItem('panicKey');
			let panicLink = localStorage.getItem('panicLink');
			let tabName = localStorage.getItem('tabName');
			let tabIcon = localStorage.getItem('tabIcon');

			let panicKeyEle = document.getElementById('panicKey') as HTMLInputElement;
			let panicLinkEle = document.getElementById('panicLink') as HTMLInputElement;
			let tabNameEle = document.getElementById('tabName') as HTMLInputElement;
			let tabIconEle = document.getElementById('tabIcon') as HTMLInputElement;
			let tabCloakSelectEle = document.getElementById('tabCloakSelect') as HTMLSelectElement;

			panicKeyEle.value = panicKey || '';
			panicLinkEle.value = panicLink || '';

			if (
				tabName == 'Google Classroom' ||
				tabName == 'Google Docs' ||
				tabName == 'Google' ||
				tabName == 'Canvas' ||
				tabName == 'Calculator' ||
				tabName == 'Wikipedia'
			) {
				tabCloakSelectEle.value = tabName.toLowerCase().replaceAll(' ', '-');
			} else if (!tabName && !tabIcon) {
				tabCloakSelectEle.value = 'none';
				(document.getElementById('customTab') as HTMLSpanElement).style.display = 'none';
			} else {
				(document.getElementById('customTab') as HTMLSpanElement).style.display = '';
				tabCloakSelectEle.value = 'custom';
				tabNameEle.value = tabName || '';
				tabIconEle.value = tabIcon || '';
			}
		}
	});

	function savePanicSettings(e: any) {
		const key = e.target.parentNode.children[0].value;
		const link = e.target.parentNode.children[1].value;

		localStorage.setItem('panicKey', key);
		localStorage.setItem('panicLink', link);
	}

	function openAboutBlank() {
		let url = location.toString();
		let maskedWindow = window.open() as Window;

		const doc = maskedWindow.document;
		doc.title = '';

		let embed = doc.createElement('embed');

		embed.src = url;
		embed.width = '100%';
		embed.height = '100%';
		embed.style.position = 'fixed';
		embed.style.top = '0';
		embed.style.left = '0';

		let script = document.createElement('script');

		script.innerHTML = `
			window.onbeforeunload = function() {
				return "reloading the site will end the aboutblank session. Are you sure you want to continue?";
			};
		`;

		doc.body.appendChild(embed);
		doc.body.appendChild(script);
	}

	function tabCloakSelected(e: any) {
		let customTab = document.getElementById('customTab') as HTMLSpanElement;
		let selected = e.target.value;

		if (selected == 'custom') {
			(customTab as HTMLSpanElement).style.display = '';
		} else if (selected == 'google-classroom') {
			(customTab as HTMLSpanElement).style.display = 'none';

			// ele at index 0 is name and ele at index 1 is icon
			(customTab.children[0] as HTMLInputElement).value = 'Google Classroom';
			(customTab.children[1] as HTMLInputElement).value = 'cdn/cloak/img/google-classroom.png';
		} else if (selected == 'google-docs') {
			(customTab as HTMLSpanElement).style.display = 'none';

			// ele at index 0 is name and ele at index 1 is icon
			(customTab.children[0] as HTMLInputElement).value = 'Google Docs';
			(customTab.children[1] as HTMLInputElement).value = 'cdn/cloak/img/google-docs.png';
		} else if (selected == 'google') {
			(customTab as HTMLSpanElement).style.display = 'none';

			// ele at index 0 is name and ele at index 1 is icon
			(customTab.children[0] as HTMLInputElement).value = 'Google';
			(customTab.children[1] as HTMLInputElement).value = 'cdn/cloak/img/google.png';
		} else if (selected == 'canvas') {
			(customTab as HTMLSpanElement).style.display = 'none';

			// ele at index 0 is name and ele at index 1 is icon
			(customTab.children[0] as HTMLInputElement).value = 'Dashboard';
			(customTab.children[1] as HTMLInputElement).value = 'cdn/cloak/img/canvas.jpg';
		} else if (selected == 'calculator') {
			(customTab as HTMLSpanElement).style.display = 'none';

			// ele at index 0 is name and ele at index 1 is icon
			(customTab.children[0] as HTMLInputElement).value = 'Calculator';
			(customTab.children[1] as HTMLInputElement).value = 'cdn/cloak/img/calculator.png';
		} else if (selected == 'wikipedia') {
			(customTab as HTMLSpanElement).style.display = 'none';

			// ele at index 0 is name and ele at index 1 is icon
			(customTab.children[0] as HTMLInputElement).value = 'Wikipedia';
			(customTab.children[1] as HTMLInputElement).value = 'cdn/cloak/img/wikipedia.png';
		} else {
			(customTab as HTMLSpanElement).style.display = 'none';

			(customTab.children[0] as HTMLInputElement).value = '';
			(customTab.children[1] as HTMLInputElement).value = '';
		}
	}

	function saveTabCloakSettings(e: any) {
		const tabName = e.target.parentNode.children[1].children[0].value;
		const tabIcon = e.target.parentNode.children[1].children[1].value;

		localStorage.setItem('tabName', tabName);
		localStorage.setItem('tabIcon', tabIcon);

		if (!tabName && !tabIcon) {
			localStorage.removeItem('tabName');
			localStorage.removeItem('tabIcon');
		}
	}

	let innerWidth: number = 0;
</script>

<svelte:window bind:innerWidth={innerWidth} />

<svelte:head>
	<title>{config.branding.name} - Search Freely</title>
	<meta property="og:title" content="{config.branding.name} - Search Freely" />
	<meta name="description" content="Search freely with {config.branding.name}!" />
	<meta property="og:description" content="Search freely with {config.branding.name}!" />
</svelte:head>

<div class="flex flex-row flex-wrap justify-center gap-8">
	<div class="card w-96 bg-base-300 shadow-xl">
		<div class="card-body">
			<h2 class="card-title justify-center">Theme</h2>

			<div class="card-actions mt-3 justify-center">
				<select class="select min-w-[6rem] max-w-xs" data-choose-theme>
					<option value="light" class="bg-base-100" selected={theme == 'light'}>Light</option>
					<option value="dark" class="bg-base-100" selected={theme == 'dark'}>Dark</option>
				</select>
			</div>
		</div>
	</div>

	<div class="card w-96 bg-base-300 shadow-xl">
		<div class="card-body">
			<h2 class="card-title justify-center">About Blank</h2>

			<div class="card-actions mt-3 justify-center">
				<button on:click={openAboutBlank} class="btn btn-neutral">Open</button>
			</div>
		</div>
	</div>

	<div class="card w-96 bg-base-300 shadow-xl">
		<div class="card-body">
			<h2 class="card-title justify-center">Panic Key</h2>

			<div class="card-actions mt-3 justify-center">
				<input
					id="panicKey"
					maxlength="1"
					type="text"
					placeholder="Key"
					class="input input-bordered w-full max-w-xs"
				/>
				<input
					id="panicLink"
					type="text"
					placeholder="Link"
					class="input input-bordered w-full max-w-xs"
				/>
				<button on:click={savePanicSettings} class="btn btn-neutral">Save</button>
			</div>
		</div>
	</div>

	<div class="card w-96 bg-base-300 shadow-xl">
		<div class="card-body">
			<h2 class="card-title justify-center">Tab Cloaker</h2>

			<div class="card-actions mt-3 justify-center">
				<select id="tabCloakSelect" class="select w-full min-w-[6rem]" on:change={tabCloakSelected}>
					<option value="none" class="bg-base-100" selected>None</option>
					<option value="google-classroom" class="bg-base-100" selected>Google Classroom</option>
					<option value="google-docs" class="bg-base-100" selected>Google Docs</option>
					<option value="google" class="bg-base-100" selected>Google</option>
					<option value="canvas" class="bg-base-100" selected>Canvas</option>
					<option value="calculator" class="bg-base-100" selected>Calculator</option>
					<option value="wikipedia" class="bg-base-100" selected>Wikipedia</option>
					<option value="custom" class="bg-base-100">Custom</option>
				</select>

				<span id="customTab" style="display: none; text-align: center;">
					or
					<input
						id="tabName"
						type="text"
						placeholder="Custom Name"
						class="input input-bordered mt-1 w-full max-w-xs"
					/>
					<input
						id="tabIcon"
						type="text"
						placeholder="Custom Icon"
						class="input input-bordered mt-1 w-full max-w-xs"
					/>
				</span>

				<button on:click={saveTabCloakSettings} class="btn btn-neutral">Save</button>
			</div>
		</div>
	</div>
</div>
