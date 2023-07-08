<script lang="ts">
	import { onMount } from 'svelte';
	import type { App } from '@prisma/client';
	import { PUBLIC_API_BASE_URL } from '$env/static/public';

	// Fetch all the apps
	let apps: App[] = [];
	onMount(async () => {
		const res = await fetch(PUBLIC_API_BASE_URL + '/api/apps');
		apps = await res.json();
	});

	function deleteApp() {
		// POST /api/admin/delete/app
		fetch(PUBLIC_API_BASE_URL + '/api/admin/delete/app', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(selectedApp)
		})
			.then((res) => {
				if (res.status === 200) {
					alert('Successfully deleted app!');
				} else {
					alert('Failed to delete app!');
				}
			})
			.catch((err) => {
				alert('Failed to delete app!');
			});
	}

	function updateApp() {
		// POST /api/admin/edit/app
		fetch(PUBLIC_API_BASE_URL + '/api/admin/edit/app', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(selectedApp)
		})
			.then((res) => {
				if (res.status === 200) {
					alert('Successfully updated app!');
				} else {
					alert('Failed to update app!');
				}
			})
			.catch((err) => {
				alert('Failed to update app!');
			});
	}

	let selectedApp: App | null = null;
</script>

<div class="rounded-3xl bg-tertiary p-8 text-black dark:bg-tertiaryDark dark:text-white">
	<h1 class="text-left text-4xl font-bold">App Editor</h1>
	<div class="mt-2 text-xl">
		<p>
			You can edit apps as needed, but please be careful. If you are unsure of what you are doing,
			please ask for help.
		</p>
	</div>

	<div class="mt-10 grid grid-cols-1 gap-10">
		<div class="col-start-1 row-start-1">
			<h3 class="text-2xl font-bold">Apps</h3>
			<p class="text-sm text-gray-500">Select a app you wish to modify:</p>
			<select
				id="selectApp"
				class="mr-2 mt-2 w-full max-w-xs rounded-lg p-2 text-black sm:max-w-md"
				bind:value={selectedApp}
			>
				{#each apps as app}
					<option value={app}>{app.name}</option>
				{/each}
			</select>

			{#if selectedApp}
				<div class="mt-2 grid w-full align-middle">
					<div>
						<h3 class="text-2xl font-bold">App Details</h3>
						<p class="text-sm text-gray-500">Modify the app details:</p>
					</div>
					<div>
						<div class="flex flex-col gap-2">
							<div class="flex flex-col">
								<label for="name" class="text-sm text-gray-500"> Name </label>
								<input
									id="name"
									class="rounded-lg p-2 text-black"
									type="text"
									bind:value={selectedApp.name}
								/>
							</div>
							<div class="flex flex-col">
								<label for="description" class="text-sm text-gray-500"> Description </label>
								<textarea
									id="description"
									class="rounded-lg p-2 text-black"
									bind:value={selectedApp.description}
								/>
							</div>
							<div class="flex flex-col">
								<label for="developer" class="text-sm text-gray-500"> Developer(s) </label>
								<input
									id="developer"
									class="rounded-lg p-2 text-black"
									type="text"
									bind:value={selectedApp.developer}
								/>
							</div>
							<div class="flex flex-col">
								<label for="image" class="text-sm text-gray-500"> Image </label>
								<input
									id="image"
									class="rounded-lg p-2 text-black"
									type="text"
									bind:value={selectedApp.image}
								/>
							</div>
							<div class="flex flex-col">
								<label for="id" class="text-sm text-gray-500"> ID </label>
								<input
									id="id"
									class="rounded-lg p-2 text-black"
									type="text"
									bind:value={selectedApp.id}
								/>
							</div>
							<div class="flex flex-col">
								<label for="views" class="text-sm text-gray-500"> Views </label>
								<input
									id="views"
									class="rounded-lg p-2 text-black"
									type="number"
									bind:value={selectedApp.views}
								/>
							</div>
						</div>
					</div>
				</div>
				<button class="btn-lg mt-2" on:click={() => updateApp()}>Update App</button>
				<button class="btn-lg mt-2 bg-red-500" on:click={() => deleteApp()}>Delete Game</button>
			{/if}
		</div>
	</div>
</div>
