<script lang="ts">
	import Icon from '@iconify/svelte';

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
</script>

<a
	id={name}
	class="w-[15rem] justify-self-start pb-4"
	on:click={sendEvent}
	href={link}
	data-sveltekit-reload
>
	<div
		class="relative h-full w-[15rem] border-collapse rounded-xl bg-tertiaryDark shadow-gray-200 duration-100 inner-border-secondary shadow-sm hover:cursor-pointer hover:inner-border-4 hover:shadow-md {popular ===
		true
			? 'dark:shadow-orange-300'
			: 'dark:shadow-white'}"
	>
		<div class="absolute right-0 m-4 h-6 w-6 opacity-50 transition-opacity hover:opacity-100">
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
		<img class="h-40 w-full rounded-xl bg-white object-cover opacity-50" src={image} alt={name} />
		<!-- Name overlayed on the bottom left -->
		<div class="absolute bottom-0 left-0 max-h-24 w-4/5 p-2">
			<h1 class="truncate text-xl font-bold text-white">{name}</h1>
			<!-- developer -->
			<p class="truncate text-sm text-white">{developer}</p>
		</div>
	</div>
</a>
