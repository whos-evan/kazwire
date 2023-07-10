<script lang="ts">
	import Icon from '@iconify/svelte';

	export let SCROLL_AMOUNT: number;
	let scrollableDiv: HTMLDivElement;

	let clientWidth: number = 1000;
	let scrollWidth: number = 1000;
	let scrollX: number = 0;
	let innerWidth: number;

	$: if (scrollableDiv !== undefined) {
		scrollWidth = scrollableDiv.scrollWidth;
		clientWidth = scrollableDiv.clientWidth;
		scrollX = scrollableDiv.scrollLeft;

		// You might ask why the fuck would you do this.
		// Simple answer: whenever the width of the window gets updated these
		// values get updated allowing for a smooth experience where the button
		// appears no matter what.
		innerWidth = innerWidth;
	}

	import { onMount } from 'svelte';
	onMount(() => {
		setTimeout(() => {
			scrollWidth = scrollableDiv.scrollWidth;
			clientWidth = scrollableDiv.clientWidth;
			scrollX = scrollableDiv.scrollLeft;
		}, 500);
	});
</script>

<svelte:window bind:innerWidth />

<div class="relative">
	<!-- Scrollable div for the small boxes -->
	<grid
		class="no-scrollbar col-span-6 grid grid-flow-col-dense justify-start gap-x-4 overflow-x-auto scroll-smooth"
		id="scrollableDiv"
		bind:this={scrollableDiv}
		on:scroll={() => (scrollX = scrollableDiv.scrollLeft)}
		on:scroll={() => {
			scrollWidth = scrollableDiv.scrollWidth;
			clientWidth = scrollableDiv.clientWidth;
		}}
	>
		<grid class="flex flex-row justify-start gap-x-4">
			<slot />
		</grid>
	</grid>

	<!-- Buttons overlaid on the carousel -->
	<div
		class="pointer-events-none absolute bottom-0 left-0 right-0 top-0 flex items-center justify-between"
	>
		<button
			class="pointer-events-auto block h-full opacity-0 transition-opacity"
			class:hover:opacity-100={scrollX > 0 && scrollWidth > 0 && clientWidth > 0}
			class:pointer-events-auto={scrollX > 0 && scrollWidth > 0 && clientWidth > 0}
			class:pointer-events-none={scrollX == 0 && scrollWidth > 0 && clientWidth > 0}
			aria-label="Scroll left"
			on:click={() => scrollableDiv.scrollBy(-SCROLL_AMOUNT, 0)}
		>
			<Icon icon="akar-icons:chevron-left" class="mr-2 h-8 w-8 text-white" />
		</button>

		<button
			class="block h-full opacity-0 transition-all"
			class:hover:opacity-100={scrollX < scrollWidth - clientWidth &&
				scrollWidth > 0 &&
				clientWidth > 0}
			class:pointer-events-auto={scrollX < scrollWidth - clientWidth &&
				scrollWidth > 0 &&
				clientWidth > 0}
			class:pointer-events-none={scrollX == scrollWidth - clientWidth &&
				scrollWidth > 0 &&
				clientWidth > 0}
			aria-label="Scroll right"
			on:click={() => scrollableDiv.scrollBy(SCROLL_AMOUNT, 0)}
		>
			<Icon icon="akar-icons:chevron-right" class="ml-2 h-8 w-8 text-white" />
		</button>
	</div>
</div>
