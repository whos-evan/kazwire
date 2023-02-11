<script>
	import Box from './box.svelte';
	import appsJson from './apps.json';

	export let apps = appsJson['apps'].sort((a, b) => {
		if (a['id'] < b['id']) {
			return -1;
		}
		if (a['id'] > b['id']) {
			return 1;
		}
		return 0;
	});

	export function searchApps() {
		let input = document.getElementById('search');
		let filter = input.value.toUpperCase();
		let apps = document.getElementsByClassName('app');
		var ul, li, a, i, txtValue;

		for (i = 0; i < apps.length; i++) {
			a = apps[i].id;
			txtValue = a;
			if (txtValue.toUpperCase().indexOf(filter) > -1) {
				apps[i].style.display = '';
			} else {
				apps[i].style.display = 'none';
			}
		}
	}

	let filter;

	import HorzAd from '$lib/components/horz-ad.svelte';
</script>
<div class="md:block sm:hidden">
	<HorzAd />
</div>
<div class="text-white w-full pl-10 pr-10 pt-5 text-center">
	<input
		id="search"
		type="text"
		class="md:w-[35vw] sm:w-[70vw] h-10 p-6 rounded-lg mb-5 text-black placeholder:text-gray-500"
		placeholder="Search for an app..."
		autocomplete="off"
		on:input={searchApps}
	/>
	<div
		class="grid grid-flow-rows lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 auto-rows-auto gap-10"
	>
		{#each apps as app}
			<Box
				title={app['name']}
				image={app['image']}
				description={app['description']}
				id={app['id']}
				color="#000000"
			/>
		{/each}
	</div>
</div>
