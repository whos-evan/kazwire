<script lang="ts">
	import { enhance } from '$app/forms';

	import type { PageData } from './$types';

	import { config } from '$lib/config';

	export let data: PageData;
	import Carousel from '$lib/components/Carousel.svelte';
	import DefaultBox from '$lib/components/Box/DefaultBox.svelte';
	import Icon from '@iconify/svelte';
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>Profile</title>
	<meta name="description" content="View your profile" />
	<meta name="robots" content="noindex" />
</svelte:head>

<h1 class="mb-2 text-3xl font-bold">Profile</h1>
<div class="flex flex-row items-center gap-20">
	<div class="avatar placeholder">
		<div class="w-24 rounded-full bg-neutral-focus text-neutral-content">
			<span class="text-3xl">{data.display_name[0]}</span>
		</div>
	</div>
	<div>
		<p>User id: {data.userId}</p>
		<p>
			Email: {data.email}
			{#if data.email_verified}
				<span class="rounded-full bg-success px-2 py-1 text-success-content"> Verified </span>
			{:else}
				<span class="rounded-full bg-error px-2 py-1 text-error-content"> Not verified </span>
			{/if}
		</p>
		<p>Display Name: {data.display_name}</p>
		<p>Role: {data.role}</p>
	</div>
</div>

{#if $page.data.suggested_games !== undefined && $page.data.suggested_games.length > 0}
	<div class="mt-4 flex flex-col gap-4">
		<!-- Display the apps -->
		<!-- limit the width to the max size of the container -->
		<div class="max-w-[calc(100vw-6rem)]">
			<h1 class="mb-1 flex text-2xl font-bold capitalize">
				Suggested Games
				<Icon icon="material-symbols:recommend" class="my-auto ml-2 text-xl text-green-500" />
				<!-- center the text vertically -->
				<a
					href="/profile"
					class="my-auto ml-2 rounded-full bg-accent px-2 py-1 text-sm text-accent-content transition-colors hover:bg-accent-focus"
				>
					View more
				</a>
			</h1>
			<Carousel SCROLL_AMOUNT={640}>
				{#each $page.data.suggested_games as game}
					<!-- if the app.id is in the loved apps show it -->
					<DefaultBox
						name={game.name}
						image={'/cdn/game/img/' + game.image}
						developer={game.developer}
						link={'/games/' + game.id}
					/>
				{/each}
			</Carousel>
		</div>
	</div>
{/if}

{#if $page.data.loved_games !== undefined && $page.data.loved_games.length > 0}
	<div class="mt-4 flex flex-col gap-4">
		<!-- Display the apps -->
		<!-- limit the width to the max size of the container -->
		<div class="max-w-[calc(100vw-6rem)]">
			<h1 class="mb-1 flex text-2xl font-bold capitalize">
				Loved Games
				<Icon icon="mdi:heart" class="my-auto ml-2 text-xl text-red-500" />
				<!-- center the text vertically -->
				<a
					href="/profile"
					class="my-auto ml-2 rounded-full bg-accent px-2 py-1 text-sm text-accent-content transition-colors hover:bg-accent-focus"
				>
					View more
				</a>
			</h1>
			<Carousel SCROLL_AMOUNT={640}>
				{#each $page.data.games as game}
					<!-- if the app.id is in the loved apps show it -->
					{#if $page.data.loved_games.includes(game.id)}
						<DefaultBox
							name={game.name}
							image={'/cdn/game/img/' + game.image}
							developer={game.developer}
							link={'/games/' + game.id}
						/>
					{/if}
				{/each}
			</Carousel>
		</div>
	</div>
{/if}

{#if $page.data.loved_apps !== undefined && $page.data.loved_apps.length > 0}
	<div class="mt-4 flex flex-col gap-4">
		<!-- Display the apps -->
		<!-- limit the width to the max size of the container -->
		<div class="max-w-[calc(100vw-6rem)]">
			<h1 class="mb-1 flex text-2xl font-bold capitalize">
				Loved Apps
				<Icon icon="mdi:heart" class="my-auto ml-2 text-xl text-red-500" />
				<!-- center the text vertically -->
				<a
					href="/profile"
					class="my-auto ml-2 rounded-full bg-accent px-2 py-1 text-sm text-accent-content transition-colors hover:bg-accent-focus"
				>
					View more
				</a>
			</h1>
			<Carousel SCROLL_AMOUNT={640}>
				{#each $page.data.apps as app}
					<!-- if the app.id is in the loved apps show it -->
					{#if $page.data.loved_apps.includes(app.id)}
						<DefaultBox
							name={app.name}
							image={'/cdn/app/img/' + app.image}
							developer={app.developer}
							link={'/apps/' + app.id}
						/>
					{/if}
				{/each}
			</Carousel>
		</div>
	</div>
{/if}

<div class="flex flex-row gap-2">
	<form method="post" action="?/logout" use:enhance>
		<input type="submit" value="Sign out" class="btn btn-primary mt-6" />
	</form>
	{#if data.role === 'admin'}
		<a href="/admin" class="btn btn-primary mt-6"> Admin Page </a>
	{/if}
</div>
