<script lang="ts">
	import { enhance } from '$app/forms';

	export let form: any;
</script>

<svelte:head>
	<title>Sign in</title>
	<meta name="description" content="Sign in to your account" />
	<meta name="robots" content="noindex" />
</svelte:head>

<h1 class="mb-2 text-3xl font-bold">Sign in</h1>
<form method="post" use:enhance>
	<div class="form-control w-full max-w-xs">
		<label class="label">
			<span class="label-text">Email</span>
		</label>
		<input
			name="email"
			id="email"
			type="email"
			autocomplete="off"
			class="input input-primary w-full max-w-xs"
		/><br />
	</div>

	<div class="form-control w-full max-w-xs">
		<label class="label">
			<span class="label-text">Password</span>
		</label>
		<input
			type="password"
			name="password"
			id="password"
			autocomplete="off"
			class="input input-primary w-full max-w-xs"
		/><br />
	</div>
	<input type="submit" class="btn btn-primary" />
</form>
<div class="form-control mt-4 w-full max-w-[14rem]">
	<label class="label">
		<span class="label-text">Don't have an account?</span>
	</label>
	<a href="/signup" class="btn btn-secondary">Create an account</a>
</div>

{#if form?.message}
	<p style="color: red">{form?.message}</p>
{/if}
