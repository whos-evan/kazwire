<script lang="ts">
	import { config } from '$lib/config';

	import { page } from '$app/stores';

	import Carousel from '../Carousel.svelte';
	import DefaultBox from '../Box/DefaultBox.svelte';

	import Icon from '@iconify/svelte';

	let innerWidth: number = 0;

	$: sortedApps = $page.data.apps?.sort((a, b) => b.views - a.views) || [];
</script>

<svelte:window bind:innerWidth />

<div class="justify-left mb-10 flex flex-col">
	{#if $page.data.loved_apps !== undefined && $page.data.loved_apps.length > 0}
		<div class="flex flex-col gap-4">
			<!-- Display the apps -->
			<!-- limit the width to the max size of the container -->
			<div class="max-w-[calc(100vw-2rem)]">
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
								id={'loved-' + app.id}
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
	<div class="flex flex-col gap-4">
		<!-- Display the apps -->
		<!-- limit the width to the max size of the container -->
		<div class="max-w-[calc(100vw-2rem)]">
			<h1 class="mb-1 flex text-2xl font-bold capitalize">
				Apps
				<!-- center the text vertically -->
				<a
					href="/apps"
					class="my-auto ml-2 rounded-full bg-accent px-2 py-1 text-sm text-accent-content transition-colors hover:bg-accent-focus"
				>
					View more
				</a>
			</h1>
			<Carousel SCROLL_AMOUNT={640}>
				{#each sortedApps as app}
					<DefaultBox
						name={app.name}
						id={'app-' + app.id}
						image={'/cdn/app/img/' + app.image}
						developer={app.developer}
						link={'/apps/' + app.id}
					/>
				{/each}
			</Carousel>
		</div>
	</div>
</div>

<div class="justify-left mb-10 flex flex-col">
	{#if $page.data.loved_games !== undefined && $page.data.loved_games.length > 0}
		<div class="flex flex-col gap-4">
			<!-- Display the apps -->
			<!-- limit the width to the max size of the container -->
			<div class="max-w-[calc(100vw-2rem)]">
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
								id={'loved-' + game.id}
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

	{#if $page.data.suggested_games !== undefined && $page.data.suggested_games.length > 0}
		<div class="mb-10 flex flex-col gap-4">
			<!-- Display the apps -->
			<!-- limit the width to the max size of the container -->
			<div class="max-w-[calc(100vw-2rem)]">
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
							id={'suggested-' + game.id}
							image={'/cdn/game/img/' + game.image}
							developer={game.developer}
							link={'/games/' + game.id}
						/>
					{/each}
				</Carousel>
			</div>
		</div>
	{:else if innerWidth > 524 && $page.data.user !== null}
		<div class="mb-10 flex flex-col gap-4">
			<!-- Display the apps -->
			<!-- limit the width to the max size of the container -->
			<div class="max-w-[calc(100vw-2rem)]">
				<h1 class="mb-1 flex text-2xl font-bold capitalize">
					Suggested Games
					<Icon icon="material-symbols:recommend" class="my-auto ml-2 text-xl text-green-500" />
					<!-- center the text vertically -->
					<a
						href="/signup"
						class="my-auto ml-2 rounded-full bg-accent px-2 py-1 text-sm text-accent-content transition-colors hover:bg-accent-focus"
					>
						View more
					</a>
				</h1>

				<div class="relative">
					<!-- Element on top telling the user to sign up to see suggested games -->
					<div
						class="absolute left-0 top-0 z-[1000] flex h-full w-full items-center justify-center"
					>
						<div class="max-w-md rounded-lg bg-primary-content bg-opacity-50 p-4">
							<h1 class="mb-1 text-2xl font-bold">Sign up to see suggested games</h1>
							<p class="mb-2 text-sm">
								Sign up to see games that we think you will like based on your favorite games and
								previously played games.
							</p>
							<a href="/signup" class="btn btn-primary btn-sm"> Sign up </a>
						</div>
					</div>
					<div class="pointer-events-none overflow-hidden blur-lg">
						<Carousel SCROLL_AMOUNT={640}>
							{#each $page.data.games.sort(() => Math.random() - 0.5).slice(0, 10) as game}
								<!-- if the app.id is in the loved apps show it -->
								<DefaultBox
									name={game.name}
									id={'suggested-' + game.id}
									image={'/cdn/game/img/' + game.image}
									developer={game.developer}
									link={'/games/' + game.id}
								/>
							{/each}
						</Carousel>
					</div>
				</div>
			</div>
		</div>
	{/if}

	<div class="flex flex-col gap-4">
		<!-- Display the games -->
		{#each $page.data.gameTags as tag}
			<!-- limit the width to the max size of the container -->
			<div class="max-w-[calc(100vw-2rem)]">
				<h1 class="mb-1 flex text-2xl font-bold capitalize">
					{#if tag.length > 3}
						{tag}
					{:else}
						{tag.toUpperCase()}
					{/if}
					<!-- center the text vertically -->
					<a
						href="/games?tag={tag}"
						class="my-auto ml-2 rounded-full bg-accent px-2 py-1 text-sm text-accent-content transition-colors hover:bg-accent-focus"
					>
						View more
					</a>
				</h1>
				<Carousel SCROLL_AMOUNT={640}>
					{#each $page.data.games as game}
						{#if game.tags.includes(tag)}
							<DefaultBox
								name={game.name}
								id={tag + '-' + game.id}
								image={'/cdn/game/img/' + game.image}
								developer={game.developer}
								link={'/games/' + game.id}
							/>
						{/if}
					{/each}
				</Carousel>
			</div>
		{/each}
	</div>
</div>
