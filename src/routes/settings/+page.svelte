<script lang="ts">
	// TODO: Function to change title, favicon, and preset cloaks
	function changeTitle() {
		document.title = document.getElementById('title').value;
		localStorage.setItem('title', document.getElementById('title').value);
	}

	function changeFavicon() {
		var link = document.querySelector("link[rel~='icon']");
		if (!link) {
			link = document.createElement('link');
			link.rel = 'icon';
			document.getElementsByTagName('head')[0].appendChild(link);
		}
		link.href = document.getElementById('favicon').value;
		localStorage.setItem('favicon', document.getElementById('favicon').value);
	}

	let presetCloaks;

	function changePresetCloaks() {
		var link = document.querySelector("link[rel~='icon']");
		if (!link) {
			link = document.createElement('link');
			link.rel = 'icon';
			document.getElementsByTagName('head')[0].appendChild(link);
		}
		link.href = presetCloaks;
		localStorage.setItem('favicon', presetCloaks);

		document.title =
			document.getElementById('presetCloaks').options[
				document.getElementById('presetCloaks').selectedIndex
			].text;
		localStorage.setItem(
			'title',
			document.getElementById('presetCloaks').options[
				document.getElementById('presetCloaks').selectedIndex
			].text
		);
	}
</script>

<div class="mt-10 h-auto min-h-[65vh] w-full text-center text-white">
	<h1 class="text-3xl">Settings</h1>
	<div class="mt-5 grid grid-cols-1 gap-10">
		<div class="col-start-1 row-start-1">
			Preset Cloaks:
			<select id="presetCloaks" class="mr-2 rounded-md p-3 text-black" bind:value={presetCloaks}>
				<option value="/favicon.ico" selected>Kazwire</option>
				<option value="https://google.com/favicon.ico">Google</option>
				<option value="https://ssl.gstatic.com/classroom/ic_product_classroom_144.png"
					>Google Classroom</option
				>
				<option value="https://drive.google.com/favicon.ico">Google Drive</option>
				<option value="https://canvas.instructure.com/favicon.ico">Canvas</option>
			</select>
			<button class="rounded-xl bg-blue-600 px-4 py-2 font-bold text-white hover:bg-blue-700" on:click={changePresetCloaks}> Save </button>
		</div>
		<div class="col-start-1 row-start-2">
			Tab Cloak:
			<input
				id="title"
				type="text"
				class="mr-2 rounded-lg p-2 text-black"
				placeholder="Enter title here..."
			/>
			<button class="rounded-xl bg-blue-600 px-4 py-2 font-bold text-white hover:bg-blue-700" on:click={changeTitle}> Save </button>
		</div>
		<div class="col-start-1 row-start-3">
			Custom Favicon:
			<input
				id="favicon"
				type="text"
				class="mr-2 w-[18rem] rounded-lg p-2 text-black"
				placeholder="https://google.com/favicon.ico"
			/>
			<button class="rounded-xl bg-blue-600 px-4 py-2 font-bold text-white hover:bg-blue-700" on:click={changeFavicon}> Save </button>
		</div>
	</div>
</div>
