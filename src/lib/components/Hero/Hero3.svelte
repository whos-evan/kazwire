<script lang="ts">
	import { config } from '$lib/config';

	import { Canvas } from '@threlte/core';
	import Scene from '$lib/components/3DAnimation/Scene.svelte';

	let innerWidth: number;
</script>

<svelte:window bind:innerWidth={innerWidth} />

<div class="hero mb-10 min-h-fit bg-base-100 font-heading">
	<div class="hero-content flex-col lg:flex-row">
		{#if innerWidth < 700}
			<img
				src="/logo.png"
				alt="{config.branding.name} Logo"
				class="w-full max-w-sm rounded-lg drop-shadow-2xl"
			/>
		{:else}
			<div
				class="pointer-events-none bg-zinc-900 bg-opacity-50"
				class:box-rounded={config.styling.contentBoxStyleType === 'rounded'}
			>
				<Canvas size={{ width: 590, height: 300 }}>
					<Scene />
				</Canvas>

				<!-- Credit -->
				<p class="pointer-events-auto bg-transparent text-center text-xs text-gray-300">
					Credit to <a href={config.threeDemModel.credit[1]}>{config.threeDemModel.credit[0]}</a>
					for the {config.threeDemModel.credit[2]}.
				</p>
			</div>
		{/if}

		<div>
			<h1 class="text-5xl font-bold">{config.branding.name}</h1>
			<p class="py-6">{config.branding.description}</p>
			<div class="flex flex-col gap-2 md:flex-row">
				<a href="/games">
					<button class="btn btn-primary w-full">Play Now!</button>
				</a>
				<a href="/apps">
					<button class="btn btn-primary w-full">Browse Now!</button>
				</a>
			</div>
		</div>
	</div>
</div>
