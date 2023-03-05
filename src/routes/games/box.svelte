<script>
	export let image;

	export let title;
	export let description;
	export let id;

	export let color;

	export let tags;
	export let category;

	export let popular;

	export let platformSupport;
	export let gameError;

	import { onMount } from 'svelte';
	import ColorThief from '$lib/components/color-thief.mjs';

	let shine;

	onMount(async () => {
		async function waitUntilImageChange() {
			while (image == 'loading') {
				await new Promise((resolve) => setTimeout(resolve, 100));
			}
			const colorThief = new ColorThief();
			const img = new Image();
			img.src = `./game/img/${image}`;
			img.addEventListener('load', function () {
				shine = `rgb(${colorThief.getColor(img)})`;
			});
		}
		await waitUntilImageChange();
	});
</script>

{#if popular != undefined}
	<a class="game" id={title} href={'/games/' + id}>
		<div
			class="background-game bg-white dark:bg-zinc-900 shadow-lg hover:bg-gray-200 shadow-gray-200 dark:shadow-orange-300 relative hover:cursor-pointer hover:shadow-2xl h-full mb-5 rounded-xl transition duration-100 hover:scale-[102.5%]"
		>
			<div class="absolute opacity-50 hover:opacity-100 transition-opacity h-6 w-6 right-0 m-4">
				{#if gameError != undefined}
					<span title={gameError}>
						<svg class="fill-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
							><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
								d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"
							/></svg
						>
					</span>
				{:else if platformSupport == 'Mobile'}
					<span title="This game is supported on mobile and PC devices.">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							version="1.0"
							class="fill-green-500"
							viewBox="0 0 312.000000 359.000000"
							preserveAspectRatio="xMidYMid meet"
						>
							<g transform="translate(0.000000,359.000000) scale(0.100000,-0.100000)" stroke="none">
								<path
									d="M823 3290 c-99 -20 -209 -101 -248 -184 -45 -95 -45 -80 -45 -1246 0 -1159 0 -1140 43 -1242 21 -51 101 -128 162 -158 l50 -25 735 0 735 0 51 27 c107 56 179 161 195 285 11 87 11 2124 0 2221 -19 161 -118 275 -276 316 -51 14 -152 16 -710 15 -357 -1 -669 -5 -692 -9z m1392 -286 l25 -27 0 -1117 0 -1117 -25 -27 -24 -26 -666 0 c-458 0 -673 3 -687 11 -49 26 -48 2 -48 1159 0 1150 -1 1131 47 1159 12 7 230 10 686 11 l668 0 24 -26z"
								/>
								<path
									d="M1301 1032 c-59 -29 -63 -109 -7 -143 27 -17 52 -19 217 -19 239 0 269 10 269 90 0 80 -30 90 -264 90 -152 0 -186 -3 -215 -18z"
								/>
							</g>
						</svg>
					</span>
				{:else}
					<span title="This game is only supported on PC devices.">
						<svg class="fill-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
							><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
								d="M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64H240l-10.7 32H160c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H346.7L336 416H512c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64zM512 64V288H64V64H512z"
							/></svg
						>
					</span>
				{/if}
			</div>
			<div class="p-5 w-full justify-center flex">
				<img
					loading="lazy"
					src={'/game/img/' + image}
					class="img bg-white w-auto max-h-[10rem]"
					alt={description}
				/>
			</div>
			<div class="pl-5 pr-5">
				<h1 class="font-bold text-2xl" style="color: {color};">{title}</h1>
				<p class="text-black dark:text-white text-sm">Category: Popular</p>
				{#if tags.length > 0}
					{#each tags as tag}
						<a href="/games?c={tag}" data-sveltekit-reload>
							<div
								class="bg-orange-600 hover:bg-orange-800 dark:bg-black dark:hover:bg-gray-700 transition-colors rounded-lg px-2 py-1 m-1 w-min inline-block text-white text-sm"
							>
								{tag}
							</div>
						</a>
					{/each}
				{/if}
				<p class="text-black dark:text-white">{description}</p>
			</div>
		</div>
	</a>
{:else}
	<a class="game" id={title} href={'/games/' + id}>
		<div
			class="background-game relative bg-white dark:bg-zinc-900 hover:bg-gray-200 hover:cursor-pointer hover:shadow-2xl h-full mb-5 rounded-xl transition duration-100 hover:scale-[102.5%]"
			style={`box-shadow: 0 10px 15px -3px ${shine}`}
		>
			<div class="absolute opacity-50 hover:opacity-100 transition-opacity h-6 w-6 right-0 m-4">
				{#if gameError != undefined}
					<span title={gameError}>
						<svg class="fill-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
							><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
								d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"
							/></svg
						>
					</span>
				{:else if platformSupport == 'Mobile'}
					<span title="This game is supported on mobile and PC devices.">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							version="1.0"
							class="fill-green-500"
							viewBox="0 0 312.000000 359.000000"
							preserveAspectRatio="xMidYMid meet"
						>
							<g transform="translate(0.000000,359.000000) scale(0.100000,-0.100000)" stroke="none">
								<path
									d="M823 3290 c-99 -20 -209 -101 -248 -184 -45 -95 -45 -80 -45 -1246 0 -1159 0 -1140 43 -1242 21 -51 101 -128 162 -158 l50 -25 735 0 735 0 51 27 c107 56 179 161 195 285 11 87 11 2124 0 2221 -19 161 -118 275 -276 316 -51 14 -152 16 -710 15 -357 -1 -669 -5 -692 -9z m1392 -286 l25 -27 0 -1117 0 -1117 -25 -27 -24 -26 -666 0 c-458 0 -673 3 -687 11 -49 26 -48 2 -48 1159 0 1150 -1 1131 47 1159 12 7 230 10 686 11 l668 0 24 -26z"
								/>
								<path
									d="M1301 1032 c-59 -29 -63 -109 -7 -143 27 -17 52 -19 217 -19 239 0 269 10 269 90 0 80 -30 90 -264 90 -152 0 -186 -3 -215 -18z"
								/>
							</g>
						</svg>
					</span>
				{:else}
					<span title="This game is only supported on PC devices.">
						<svg class="fill-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
							><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
								d="M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64H240l-10.7 32H160c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H346.7L336 416H512c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64zM512 64V288H64V64H512z"
							/></svg
						>
					</span>
				{/if}
			</div>
			<div class="p-5 w-full justify-center flex">
				<img
					loading="lazy"
					src={'/game/img/' + image}
					class="img w-auto max-h-[10rem]"
					alt={description}
				/>
			</div>
			<div class="pl-5 pr-5">
				<h1 class="font-bold text-2xl text-black dark:text-white" style="color: {color};">
					{title}
				</h1>
				{#if category != undefined}
					<p class="text-black text-sm dark:text-white">Category: {category}</p>
				{/if}
				{#if tags.length > 0}
					{#each tags as tag}
						<a href="/games?c={tag}" data-sveltekit-reload>
							<div
								class="bg-orange-600 hover:bg-orange-800 dark:bg-black dark:hover:bg-gray-700 transition-colors rounded-lg px-2 py-1 m-1 w-min inline-block text-white text-sm"
							>
								{tag}
							</div>
						</a>
					{/each}
				{/if}
				<p class="text-black dark:text-white">{description}</p>
			</div>
		</div>
	</a>
{/if}
