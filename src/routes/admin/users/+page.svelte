<script lang="ts">
	import type { PageData } from './$types';
	import type { User } from '@prisma/client';

	export let data: PageData;

	let users = data.users;

	let searchEmail = '';
	let searchDisplayName = '';

	$: filteredUsers = users.filter((user: User) => {
		return (
			user.email.toLowerCase().includes(searchEmail.toLowerCase()) &&
			user.display_name.toLowerCase().includes(searchDisplayName.toLowerCase())
		);
	});

	function deleteUser(id: string) {
		fetch(`/api/admin/user?id=${id}`, {
			method: 'DELETE'
		});
	}

	function editUser(id: string, email: string, display_name: string, role: string) {
		console.log(
			JSON.stringify({
				email: email,
				display_name: display_name,
				role: role
			})
		);
		fetch(`/api/admin/user?id=${id}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				email: email,
				display_name: display_name,
				role: role
			})
		});
	}
</script>

<div class="prose lg:prose-lg">
	<h1>Manage Users</h1>
	<p>Manage users.</p>
</div>
<!-- /api/admin/user POST request to modify user -->
<!-- /api/admin/user DELETE request to delete user -->

<!-- input field to sort users by email-->
<input
	type="text"
	placeholder="Search by email"
	class="input input-bordered mb-6"
	bind:value={searchEmail}
/>
<input
	type="text"
	placeholder="Search by display name"
	class="input input-bordered mb-6"
	bind:value={searchDisplayName}
/>

<!-- Page numbers selector -->
<div class="join">
	<button
		class="btn join-item"
		on:click={() => (window.location.href = '/admin/users?page=' + (data.pageNumber - 1))}>«</button
	>
	<button class="btn join-item">Page {data.pageNumber}</button>
	<button
		class="btn join-item"
		on:click={() => (window.location.href = '/admin/users?page=' + (data.pageNumber + 1))}>»</button
	>
</div>

{#each filteredUsers as user}
	<div class="card">
		<div class="card-body">
			<div class="flex flex-row items-center gap-20">
				<div class="avatar placeholder">
					<div class="w-24 rounded-full bg-neutral-focus text-neutral-content">
						<span class="text-3xl">{user.email[0]}</span>
					</div>
				</div>
				<div>
					<p>User id:</p>
					<input type="text" class="input input-disabled" bind:value={user.id} readonly />
					<p>Display Name:</p>
					<input type="text" class="input input-bordered" bind:value={user.display_name} />
					<p>Email:</p>
					<input type="text" class="input input-bordered" bind:value={user.email} />
					<p>Role:</p>
					<input type="text" class="input input-bordered" bind:value={user.role} />
				</div>
				<button
					class="btn btn-secondary mt-6"
					on:click={() => editUser(user.id, user.email, user.display_name, user.role)}>Edit</button
				>
				<button class="btn btn-error mt-6" on:click={() => deleteUser(user.id)}>Delete</button>
			</div>
		</div>
	</div>
{/each}
