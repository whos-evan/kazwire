<script lang="ts">
	import { enhance } from '$app/forms';
	import { config } from '$lib/config';

	export let form;
</script>

<svelte:head>
	<title>{config.branding.name} - Signup</title>
	<meta property="og:title" content="{config.branding.name} - Signup" />
	<meta name="description" content="Play and browse for free now on {config.branding.name}!" />
	<meta
		property="og:description"
		content="Play and browse for free now on {config.branding.name}!"
	/>
</svelte:head>

<h1 class="mb-2 text-3xl font-bold">Sign up</h1>
<form method="post" use:enhance>
	<div class="form-control w-full max-w-xs">
		<label class="label">
			<span class="label-text">Email</span>
		</label>
		<input name="email" id="email" class="input input-primary w-full max-w-xs" /><br />
	</div>

	<div class="form-control w-full max-w-xs">
		<label class="label">
			<span class="label-text">Display Name</span>
		</label>
		<input name="display_name" id="display_name" class="input input-primary w-full max-w-xs" /><br
		/>
	</div>

	<div class="form-control w-full max-w-xs">
		<label class="label">
			<span class="label-text">Password</span>
		</label>
		<input
			type="password"
			name="password"
			id="password"
			class="input input-primary w-full max-w-xs"
		/><br />
	</div>

	<!-- Legal -->
	<p class="mb-4 max-w-[30rem] text-sm text-gray-500">
		By signing up, you agree to our{' '}
		<a href="/legal/privacy-policy" class="text-blue-500"> Privacy Policy </a>
		and
		<a href="/legal/terms-of-service" class="text-blue-500"> Terms of Service </a>
		and that you are at least 13 years old.
	</p>
	<button type="submit" class="btn btn-primary"> Sign up </button>
</form>
<div class="form-control mt-4 w-full max-w-[14rem]">
	<label class="label">
		<span class="label-text">Have an account?</span>
	</label>
	<a href="/login" class="btn btn-secondary">Login</a>
</div>

{#if form?.message}
	<p style="color: red">{form?.message}</p>
{/if}
