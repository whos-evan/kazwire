<script lang="ts">
	import { config } from '$lib/config';
	import Icon from '@iconify/svelte';

	let searchQuery: string = '';

	let width: number = 0;
</script>

<svelte:window bind:innerWidth={width} />

<div class="base-content navbar bg-base-300">
	{#if width > 860}
		<div class="flex-1 font-heading">
			<a class="btn btn-ghost text-2xl normal-case gap-2" href="/">
				<img src="/logo.png" alt="{config.branding.name} Logo" class="h-full rounded-md" />
				{config.branding.name}
			</a>
		</div>
	{:else}
		<div class="flex-1">
			<a
				class="btn btn-ghost tooltip tooltip-right normal-case"
				data-tip={config.branding.name}
				href="/"
			>
				<img src="/logo.png" alt="{config.branding.name} Logo" class="h-full rounded-md" />
			</a>
		</div>
	{/if}
	<div class="flex-none">
		<ul class="menu menu-horizontal gap-2 px-1">
			<li class="form-control hidden sm:block">
				<form on:submit={() => (window.location.href = '/search?q=' + searchQuery)}>
					{#if config.features.searchBar}
						<div class="input input-bordered input-sm flex h-14 flex-row">
							<input
								type="text"
								placeholder="Search here"
								class="input input-ghost input-sm my-auto w-full max-w-md focus:border-none focus:shadow-none focus:outline-none"
								bind:value={searchQuery}
							/>
							<div class="m-auto hidden min-w-fit md:block">
								<kbd class="kbd">ctrl</kbd>
								+
								<kbd class="kbd">k</kbd>
							</div>
						</div>
					{:else}
						<input
							type="text"
							placeholder="Search"
							class="input input-bordered w-24 md:w-auto"
							bind:value={searchQuery}
						/>
					{/if}
				</form>
			</li>
			<!-- Add the "More Links" icon button here -->
			<li class="place-content-center">
				<a class="tooltip tooltip-bottom" data-tip="More Links" href="/links">
					<Icon icon="ri:links-fill" class="text-2xl" />
				</a>
			</li>
			<li class="place-content-center">
				<a class="tooltip tooltip-bottom" data-tip="Games" href="/games">
					<Icon icon="mdi:gamepad-variant" class="text-2xl" />
				</a>
			</li>
			<li class="place-content-center">
				<a class="tooltip tooltip-bottom" data-tip="Apps" href="/apps">
					<Icon icon="ri:app-store-fill" class="text-2xl" />
				</a>
			</li>
			{#if config.features.accountCreation}
				<li class="place-content-center">
					<a class="tooltip tooltip-bottom" data-tip="Account" href="/profile">
						<Icon icon="ri:account-circle-fill" class="text-2xl" />
					</a>
				</li>
			{/if}
			<li class="place-content-center">
				<a class="tooltip tooltip-bottom" data-tip="Settings" href="/settings">
					<Icon icon="ri:settings-5-fill" class="text-2xl" />
				</a>
			</li>
		</ul>
	</div>
</div>