<script lang="ts">
	import { onMount } from 'svelte';

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
			title = ''
			favicon = ''
			changeTitle()
			changeFavicon()
		} else if (storedPresetCloak) {
			presetCloaks = storedPresetCloak;
			const options = document.getElementById('presetCloaks') as HTMLSelectElement;
			title = options.selectedOptions[0].innerText;
			favicon = options.value;
			changeTitle()
			changeFavicon()
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
	});
</script>

<div class="mt-10 h-auto min-h-[65vh] w-full text-center text-white">
	<h1 class="text-3xl">Settings</h1>
	<div class="mt-5 grid grid-cols-1 gap-10">
		<div class="col-start-1 row-start-1">
			Preset Cloaks:
			<select id="presetCloaks" class="mr-2 rounded-md p-3 text-black">
				<option value="/favicon.ico" selected>Kazwire</option>
				<option value="https://google.com/favicon.ico">Google</option>
				<option value="https://ssl.gstatic.com/classroom/ic_product_classroom_144.png"
					>Google Classroom</option
				>
				<option value="https://drive.google.com/favicon.ico">Google Drive</option>
				<option value="https://canvas.instructure.com/favicon.ico">Canvas</option>
			</select>
			<button
				class="rounded-xl bg-blue-600 px-4 py-2 font-bold text-white hover:bg-blue-700"
				on:click={changePresetCloaks}
			>
				Save
			</button>
		</div>
		<div class="col-start-1 row-start-2">
			Tab Cloak:
			<input
				id="title"
				type="text"
				class="mr-2 rounded-lg p-2 text-black"
				placeholder="Enter title here..."
				bind:value={title}
			/>
			<button
				class="rounded-xl bg-blue-600 px-4 py-2 font-bold text-white hover:bg-blue-700"
				on:click={changeTitle}
			>
				Save
			</button>
		</div>
		<div class="col-start-1 row-start-3">
			Custom Favicon:
			<input
				id="favicon"
				type="text"
				class="mr-2 w-[18rem] rounded-lg p-2 text-black"
				placeholder="https://google.com/favicon.ico"
				bind:value={favicon}
			/>
			<button
				class="rounded-xl bg-blue-600 px-4 py-2 font-bold text-white hover:bg-blue-700"
				on:click={changeFavicon}
			>
				Save
			</button>
		</div>
	</div>
</div>
