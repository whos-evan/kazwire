<script lang="ts">
	import DefaultBox from '$lib/components/Box/DefaultBox.svelte';
	import DefaultBoxLoading from '$lib/components/Box/DefaultBoxLoading.svelte';

	import type { App } from '@prisma/client';

	import { PUBLIC_API_BASE_URL } from '$env/static/public';

	// Fetch all hearted apps from local storage
	import { appLike } from '$lib/likeContent';

	// Fetch the hearted apps from the api
	async function getHeartedApps() {
		let likedIds = appLike.fetchLikes();
		let apps: App[] = [];

		// fetch the apps from the api
		for (let i = 0; i < likedIds.length; i++) {
			const response = await fetch(PUBLIC_API_BASE_URL + '/api/apps/' + likedIds[i]);
			const app: App = await response.json();
			apps.push(app);
		}

		// randomly choose 2 apps from the list
		if (apps.length > 2) {
			let randomApps: App[] = [];
			for (let i = 0; i < 2; i++) {
				let randomIndex = Math.floor(Math.random() * apps.length);
				randomApps.push(apps[randomIndex]);
				apps.splice(randomIndex, 1);
			}
			apps = randomApps;
		}

		return apps;
	}
</script>

{#await getHeartedApps()}
	<!-- While loading it will show a template loading box. -->
	<DefaultBoxLoading />
{:then apps}
	{#each apps as app}
		<DefaultBox
			image={'/app/img/' + app.image}
			name={app.name}
			description={app.description}
			developer={app.developer}
			link={'/apps/' + app.id}
			tags={[]}
			popular={false}
			errorMessage={undefined}
			platformSupport={"PC"}
		/>
	{/each}
{:catch error}
	<p>{error.message}</p>
{/await}
