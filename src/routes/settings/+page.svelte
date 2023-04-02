<script>
	import Nav from '$lib/components/nav.svelte';
	import Footer from '$lib/components/footer.svelte';

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

	import HorzAd from '$lib/components/horz-ad.svelte';
</script>

<Nav />
<div class="md:block sm:hidden">
	<HorzAd />
</div>
<div class="h-auto min-h-[65vh] w-full mt-10 text-center text-white">
	<h1 class="text-3xl">Settings</h1>
	<div class="grid grid-cols-1 gap-10 mt-5">
		<div class="row-start-1 col-start-1">
			Preset Cloaks:
			<select id="presetCloaks" class="text-black p-3 rounded-md mr-2" bind:value={presetCloaks}>
				<option value="/favicon.ico" selected>Kazwire</option>
				<option value="https://google.com/favicon.ico">Google</option>
				<option value="https://ssl.gstatic.com/classroom/ic_product_classroom_144.png"
					>Google Classroom</option
				>
				<option value="https://drive.google.com/favicon.ico">Google Drive</option>
				<option value="https://canvas.instructure.com/favicon.ico">Canvas</option>
			</select>
			<button
				class="btn-primary"
				on:click={changePresetCloaks}
			>
				Save
			</button>
		</div>
		<div class="row-start-2 col-start-1">
			Tab Cloak:
			<input
				id="title"
				type="text"
				class="text-black rounded-lg p-2 mr-2"
				placeholder="Enter title here..."
			/>
			<button
				class="btn-primary"
				on:click={changeTitle}
			>
				Save
			</button>
		</div>
		<div class="row-start-3 col-start-1">
			Custom Favicon:
			<input
				id="favicon"
				type="text"
				class="text-black rounded-lg p-2 w-[18rem] mr-2"
				placeholder="https://google.com/favicon.ico"
			/>
			<button
				class="btn-primary"
				on:click={changeFavicon}
			>
				Save
			</button>
		</div>
	</div>
</div>
<Footer />
