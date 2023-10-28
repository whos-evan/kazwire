<script lang="ts">
	import Icon from '@iconify/svelte';

	import { experiments } from '$lib/experiments';
	import { onMount } from 'svelte';

	export let image: string;
	export let name: string;
	export let developer: string;
	export let popular: boolean;
	export let link: string;

	export let height: String = '144px';
	export let width: String = '240px';

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
</script>

<a
	id={name}
	class="justify-self-start pb-4"
	style="height: {height}; width: {width};"
	on:click={sendEvent}
	href={link}
	data-sveltekit-reload
>
	<div
		class="group relative border-collapse rounded-xl bg-tertiaryDark shadow-gray-200 duration-100 inner-border-secondary shadow-sm hover:cursor-pointer hover:inner-border-4 hover:shadow-md {popular ===
		true
			? 'dark:shadow-orange-300'
			: 'dark:shadow-white'}"
		style="height: {height}; width: {width};"
	>
		<div class="absolute right-0 z-20 m-4 h-6 w-6 opacity-50 transition-opacity hover:opacity-100">
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
			class="rounded-xl bg-white object-cover opacity-90 transition-opacity group-hover:opacity-50"
			style="height: {height}; width: {width};"
			src={image}
			alt={name}
		/>
		<!-- Name overlayed on the bottom left -->
		<div
			class="absolute bottom-0 left-0 hidden max-h-24 w-4/5 p-2 transition-transform group-hover:block"
		>
			<h1 class="truncate text-sm font-bold text-white">{name}</h1>
			<!-- developer -->
			<p class="truncate text-xs text-white">{developer}</p>
		</div>
	</div>
</a>
