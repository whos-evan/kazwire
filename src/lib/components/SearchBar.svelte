<script lang="ts">
	import { page } from '$app/stores';
	import { fade } from 'svelte/transition';

	let search: string = '';
</script>

<!-- div in the middle of the screen overtop other content-->
<div class="flex w-full max-w-lg flex-col gap-2">
	<div class="input input-bordered input-lg flex h-20 flex-row">
		<input
			type="text"
			placeholder="Type here"
			class="input input-ghost input-lg my-auto w-full max-w-md focus:border-none focus:shadow-none focus:outline-none"
			bind:value={search}
		/>
		<div class="m-auto hidden min-w-fit sm:block">
			<kbd class="kbd">ctrl</kbd>
			+
			<kbd class="kbd">k</kbd>
		</div>
	</div>
	{#if search.length >= 3}
		<!-- dont move, if too big then show a scrollbar -->
		<div class="w-full max-w-lg overflow-y-auto">
			<div class="mt-2 flex flex-col gap-2">
				{#each $page.data.apps as app}
					{#if app.name.toLowerCase().includes(search.toLowerCase())}
						<div class="flex w-full flex-col">
							<a
								href="/apps/{app.id}"
								data-sveltekit-reload
								class="btn btn-primary w-full justify-between"
							>
								<!-- img -->
								<img
									src={'/cdn/app/img/' + app.image}
									alt={app.name}
									class="w-30 h-10 rounded-lg object-cover"
								/>
								<p class="text-lg font-bold">{app.name}</p>
							</a>
						</div>
					{/if}
				{/each}
				{#each $page.data.games as game}
					{#if game.name.toLowerCase().includes(search.toLowerCase())}
						<div class="flex w-full flex-col">
							<a
								href="/games/{game.id}"
								data-sveltekit-reload
								class="btn btn-primary w-full justify-between"
							>
								<!-- img -->
								<img
									src={'/cdn/game/img/' + game.image}
									alt={game.name}
									class="w-30 h-10 rounded-lg object-cover"
								/>
								<p class="max-w-[14rem] truncate text-ellipsis text-lg font-bold">
									{game.name}
								</p>
							</a>
						</div>
					{/if}
				{/each}
				<div class="flex w-full flex-col">
					<a href="/search?q={search}" data-sveltekit-reload class="btn btn-primary w-full">
						<div class="flex flex-col">
							<p class="text-lg font-bold leading-tight">Couldn't find it?</p>
							<p class="text-xs leading-tight">Search for "{search}"</p>
						</div>
					</a>
				</div>
			</div>
		</div>
	{/if}
</div>
