<script lang="ts">
	import type { App } from '@prisma/client';
	import type { PageData } from './$types';

	import Icon from '@iconify/svelte';

	export let data: PageData;

	let name: string;
	let id: string;
	let developer: string;
	let description: string;
	let image: string;
	let embedURL: string | null;
	let views: number;

	function checkApp(app: App) {
		if (!app.id) {
			alert('Please enter an app id.');
			return false;
		}
		if (!app.name) {
			alert('Please enter an app name.');
			return false;
		}
		if (!app.developer) {
			alert('Please enter an app developer.');
			return false;
		}
		if (!app.description) {
			alert('Please enter an app description.');
			return false;
		}
		if (!app.image) {
			alert('Please enter an app image.');
			return false;
		}
		return true;
	}

	function createApp(app: App) {
		if (!checkApp(app)) return;

		fetch(`/api/admin/apps/create`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(app)
		});
	}

	let userSelectedApp: string;
	let selectedApp: App;
	$: selectedApp = data.apps.find((app: App) => app.id === userSelectedApp);

	function updateApp(app: App) {
		if (!checkApp(app)) return;

		fetch(`/api/admin/apps/edit`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(app)
		});
	}

	function deleteApp(id: string) {
		fetch(`/api/admin/apps/delete?id=${id}`, {
			method: 'DELETE'
		});
	}
</script>

<div class="prose lg:prose-lg">
	<h1>Manage Apps</h1>
	<p>Manage apps.</p>
</div>

<!-- id: string;
    name: string;
    developer: string;
    description: string;
    image: string;
    embedURL: string | null;
    views: number;
 -->
<!-- svelte-ignore a11y-label-has-associated-control -->
<div class="card p-6">
	<div class="flex items-center gap-8">
		<div class="flex w-full flex-col gap-4">
			<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
				<div class="form-control w-full">
					<label class="label">
						<span class="label-text">Name</span>
					</label>
					<input type="text" placeholder="Name" class="input input-bordered" bind:value={name} />
				</div>
				<div class="form-control w-full">
					<label class="label">
						<span class="label-text">ID</span>
					</label>
					<input type="text" placeholder="ID" class="input input-bordered" bind:value={id} />
				</div>
			</div>
			<div class="form-control w-full">
				<label class="label">
					<span class="label-text">Developer</span>
				</label>
				<input
					type="text"
					placeholder="Developer"
					class="input input-bordered"
					bind:value={developer}
				/>
			</div>
			<div class="form-control w-full">
				<label class="label">
					<span class="label-text">Description</span>
				</label>
				<input
					type="text"
					placeholder="Description"
					class="input input-bordered"
					bind:value={description}
				/>
			</div>
			<div class="form-control w-full">
				<label class="label">
					<span class="label-text">Image</span>
				</label>
				<input type="text" placeholder="Image" class="input input-bordered" bind:value={image} />
			</div>
			<div class="form-control w-full">
				<label class="label">
					<span class="label-text">Embed URL</span>
				</label>
				<input
					type="text"
					placeholder="Embed URL"
					class="input input-bordered"
					bind:value={embedURL}
				/>
				<button class="btn btn-primary mt-2 max-w-xs" on:click={() => (embedURL = null)}>
					Remove Embed URL
				</button>
			</div>

			<div class="form-control">
				<label class="label">
					<span class="label-text">Views</span>
				</label>
				<input type="number" placeholder="Views" class="input input-bordered" bind:value={views} />
			</div>

			<button
				class="btn btn-primary mt-4 max-w-[10rem]"
				on:click={() =>
					createApp({
						id,
						name,
						developer,
						description,
						image,
						embedURL,
						views
					})}
			>
				Create App
			</button>
		</div>
	</div>
</div>

<div class="prose">
	<h2>Edit App</h2>
	<p>Edit an existing app.</p>
</div>
<!-- Edit existing apps -->
<select bind:value={userSelectedApp} class="select select-bordered w-full max-w-xs">
	<option>Select a app</option>
	{#each data.apps as app}
		<option value={app.id}>{app.name}</option>
	{/each}
</select>

{#if selectedApp}
	<!-- Show same menus as above -->
	<!-- svelte-ignore a11y-label-has-associated-control -->
	<div class="flex items-center gap-8">
		<div class="flex w-full flex-col gap-4">
			<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
				<div class="form-control w-full">
					<label class="label">
						<span class="label-text">Name</span>
					</label>
					<input
						type="text"
						placeholder="Name"
						class="input input-bordered"
						bind:value={selectedApp.name}
					/>
				</div>
				<div class="form-control w-full">
					<label class="label">
						<span class="label-text">ID</span>
					</label>
					<input
						type="text"
						placeholder="ID"
						class="input input-bordered"
						bind:value={selectedApp.id}
					/>
				</div>
			</div>
			<div class="form-control w-full">
				<label class="label">
					<span class="label-text">Developer</span>
				</label>
				<input
					type="text"
					placeholder="Developer"
					class="input input-bordered"
					bind:value={selectedApp.developer}
				/>
			</div>
			<div class="form-control w-full">
				<label class="label">
					<span class="label-text">Description</span>
				</label>
				<input
					type="text"
					placeholder="Description"
					class="input input-bordered"
					bind:value={selectedApp.description}
				/>
			</div>
			<div class="form-control w-full">
				<label class="label">
					<span class="label-text">Image</span>
				</label>
				<input
					type="text"
					placeholder="Image"
					class="input input-bordered"
					bind:value={selectedApp.image}
				/>
			</div>
			<div class="form-control w-full">
				<label class="label">
					<span class="label-text">Embed URL</span>
				</label>
				<input
					type="text"
					placeholder="Embed URL"
					class="input input-bordered"
					bind:value={selectedApp.embedURL}
				/>
				<button
					class="btn btn-primary mt-2 max-w-xs"
					on:click={() => (selectedApp.embedURL = null)}
				>
					Remove Embed URL
				</button>
			</div>

			<div class="form-control">
				<label class="label">
					<span class="label-text">Views</span>
				</label>
				<input
					type="number"
					placeholder="Views"
					class="input input-bordered"
					bind:value={selectedApp.views}
				/>
			</div>
		</div>
	</div>

	<button class="btn btn-secondary mt-4" on:click={() => updateApp(selectedApp)}>
		Update App
	</button>
	<button class="btn btn-error mt-4" on:click={() => deleteApp(selectedApp.id)}>
		Delete App
	</button>
{/if}
