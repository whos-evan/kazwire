<script lang="ts">
	import Icon from '@iconify/svelte';

	import { experiments } from '$lib/experiments';
	import { onMount } from 'svelte';

	export let image: string;
	export let name: string;
	export let developer: string;
	export let popular: boolean;
	export let link: string;

	// Optional platformSupport prop
	export let platformSupport: string | undefined = undefined;

	// Optional errorMessage prop
	export let errorMessage: string | undefined = undefined;

	export let GA_EVENT: string | undefined = undefined;

	function sendEvent() {
		if (GA_EVENT != undefined) {
			console.log('Sending event: ' + GA_EVENT);
			gtag('event', GA_EVENT, {
				event_label: name
			});
		}
	}

	let showUpdated = false;
	onMount(() => {
		experiments.fetchOrCreateExperimentData(
			'updatedSmallBox',
			'2023-09-01',
			'Changes the small box to have a blur.',
			50,
			true
		);
		showUpdated = experiments.shouldShow('updatedSmallBox');
	});
</script>

{#if !showUpdated}
	<a
		id={name}
		class="w-[15rem] justify-self-start pb-4"
		on:click={sendEvent}
		href={link}
		data-sveltekit-reload
	>
		<div
			class="group relative h-full w-[15rem] border-collapse rounded-xl bg-tertiaryDark shadow-gray-200 duration-100 inner-border-secondary shadow-sm hover:cursor-pointer hover:inner-border-4 hover:shadow-md {popular ===
			true
				? 'dark:shadow-orange-300'
				: 'dark:shadow-white'}"
		>
			<div
				class="absolute right-0 z-20 m-4 h-6 w-6 opacity-50 transition-opacity hover:opacity-100"
			>
				{#if errorMessage != undefined}
					<span title={errorMessage}>
						<Icon icon="mdi:alert-circle" class="h-6 w-6 text-red-500" />
					</span>
				{:else if platformSupport == 'Mobile'}
					<span title="This game is supported on mobile and PC devices.">
						<Icon icon="mdi:cellphone" class="h-6 w-6 text-green-500" />
					</span>
				{:else if platformSupport == 'PC'}
					<span title="This game is only supported on PC devices.">
						<Icon icon="mdi:desktop-classic" class="h-6 w-6 text-blue-500" />
					</span>
				{/if}
			</div>
			<img
				class="h-36 w-full rounded-xl bg-white opacity-90 object-cover transition-opacity group-hover:opacity-50"
				src={image}
				alt={name}
			/>
			<!-- Name overlayed on the bottom left -->
			<div
				class="absolute bottom-0 left-0 hidden max-h-24 w-4/5 p-2 transition-transform group-hover:block"
			>
				<h1 class="truncate text-xl font-bold text-white">{name}</h1>
				<!-- developer -->
				<p class="truncate text-sm text-white">{developer}</p>
			</div>
		</div>
	</a>
{:else}
	<a
		id={name}
		class="w-[15rem] justify-self-start pb-4"
		on:click={sendEvent}
		href={link}
		data-sveltekit-reload
	>
		<div
			class="group relative h-full w-[15rem] border-collapse rounded-xl bg-tertiaryDark shadow-gray-200 duration-100 inner-border-secondary/100 shadow-sm hover:cursor-pointer hover:inner-border-4 hover:shadow-md {popular ===
			true
				? 'dark:shadow-orange-300'
				: 'dark:shadow-white'}"
		>
			<div
				class="absolute right-0 z-50 m-4 h-6 w-6 opacity-50 transition-opacity hover:opacity-100"
			>
				{#if errorMessage != undefined}
					<span title={errorMessage}>
						<Icon icon="mdi:alert-circle" class="h-6 w-6 text-red-500" />
					</span>
				{:else if platformSupport == 'Mobile'}
					<span title="This game is supported on mobile and PC devices.">
						<Icon icon="mdi:cellphone" class="h-6 w-6 text-green-500" />
					</span>
				{:else if platformSupport == 'PC'}
					<span title="This game is only supported on PC devices.">
						<Icon icon="mdi:desktop-classic" class="h-6 w-6 text-blue-500" />
					</span>
				{/if}
			</div>
			<div class="relative h-40 overflow-hidden rounded-xl">
				<img
					class="absolute z-20 h-40 w-full object-contain opacity-90 transition-opacity group-hover:opacity-20"
					src={image}
					alt={name}
				/>
				<img
					class="absolute h-40 w-full bg-white bg-opacity-100 object-cover blur-md transition-opacity group-hover:opacity-20"
					src={image}
					alt={name}
				/>
			</div>
			<!-- Name overlayed on the bottom left -->
			<div
				class="absolute bottom-0 left-0 z-40 hidden max-h-24 w-4/5 p-2 transition-transform group-hover:block"
			>
				<h1 class="truncate text-xl font-bold text-white">{name}</h1>
				<!-- developer -->
				<p class="truncate text-sm text-white">{developer}</p>
			</div>
		</div>
	</a>
{/if}
