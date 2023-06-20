<script lang="ts">
	import Icon from '@iconify/svelte';
	import Tag from '$lib/components/Tag.svelte';

	export let image: string;
	export let name: string;
	export let description: string;
	export let developer: string;
	export let tags: string[];
	export let popular: boolean;
	export let link: string;

	// Optional platformSupport prop
	export let platformSupport: string | undefined = undefined;
	
	// Optional errorMessage prop
	export let errorMessage: string | undefined = undefined;
</script>

<a id={name} href={link} data-sveltekit-reload>
	<div
		class="relative mb-5 h-full rounded-xl bg-tertiary shadow-lg shadow-gray-200 transition duration-100 hover:scale-[102.5%] hover:cursor-pointer hover:shadow-xl dark:bg-tertiaryDark {popular ===
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
		<div class="flex w-full justify-center p-5">
			<img loading="lazy" src={image} class="img max-h-[10rem] w-auto bg-white" alt={description} />
		</div>
		<div class="pl-5 pr-5">
			<div class="flex">
				<h1 class="text-2xl font-bold text-black dark:text-white">{name}</h1>
				{#if popular}
					<span title="{name} is popular!" class="m-auto ml-2">
						<Icon
							icon="mdi:fire"
							class="m-auto h-6 w-6 text-red-500 transition hover:text-orange-500"
						/>
					</span>
				{/if}
			</div>
			<p class="text-sm text-black dark:text-white">{developer}</p>
			<div class="flex flex-row flex-wrap gap-2">
				{#if tags.length > 0}
					{#each tags as tag}
						<Tag {tag} />
					{/each}
				{/if}
			</div>
			<p class="text-black dark:text-white">{description}</p>
		</div>
	</div>
</a>
