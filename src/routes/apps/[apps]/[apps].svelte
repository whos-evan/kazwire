<script>
	// get game files based off slug from games directory
	import { page } from '$app/stores';

	import appsJson from '../apps.json';

	let slug = $page.url.pathname.substr($page.url.pathname.lastIndexOf('/') + 1);

	function getApp() {
		// for loop to find the game in the json file
		for (let i = 0; i < appsJson['apps'].length; i++) {
			if (appsJson['apps'][i]['id'] == slug) {
				return appsJson['apps'][i];
			}
		}
	}

	let title = getApp()['name'];
	let description = getApp()['description'];
	let developer = getApp()['developer'];
	let embedURL = getApp()['embedURL'];
	let appId = getApp()['id'];

	import Embed from '$lib/components/embed.svelte';
	import VertAd from '$lib/components/vert-ad.svelte';
</script>

<div class="flex flex-row relative justify-center">
	<div
		class="flex h-[calc(100vh-132px)] xl:w-full lg:w-[1000px] md:w-[820px] sm:w-full float-left pl-5 pr-5 pb-5"
	>
		<Embed title={title} description={description} developer={developer} embedURL={embedURL} appId={appId} />
	</div>
	<div
		class="w-full max-w-[280px] hidden xl:flex flex-col justify-center items-center gap-y-2 px-3 bg-opacity-50 backdrop-blur-md"
		align="middle"
	>
		<VertAd />
	</div>
</div>
