<script lang="ts">
	import { config } from '$lib/config';

	export let name: string;
	export let developer: string;
	export let image: string;
	export let link: string;
	export let id: string = '';
</script>

<!-- Why have both box-rounded and box-boxy classes? -->
<!-- This is because Tailwind will not include it in the CSS file if we do not have it and it will not render correctly. -->
<!-- To ensure that it renders correctly we will include every variation inside of it and then the class at the end of it will take precedence. -->
<!-- We only need to have this appear one time throughout the rendered page, but to ensure that it works across all pages it must be placed throughout the codebase. -->
<a
	class="block h-40 w-[18rem] text-left transition-all duration-150 hover:scale-95 hover:cursor-pointer hover:shadow-lg hover:shadow-accent"
	class:box-rounded={config.styling.contentBoxStyleType === 'rounded'}
	href={link}
	id={id}
	data-sveltekit-reload
>
	<div
		class="relative h-full w-full bg-black"
		class:box-rounded={config.styling.contentBoxStyleType === 'rounded'}
	>
		<img
			class="absolute h-full w-full bg-white object-cover opacity-50"
			class:box-rounded={config.styling.contentBoxStyleType === 'rounded'}
			loading="lazy"
			src={image}
			alt={name}
		/>
		<div class="absolute bottom-0 left-0 p-2">
			<h2 class="text-xl font-bold text-white">
				{name}
			</h2>
			<p class="text-md text-white">
				{developer}
			</p>
		</div>
	</div>
</a>
