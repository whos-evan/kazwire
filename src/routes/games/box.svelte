<script>
	/**
	 * @type {string}
	 */
	export let image;
	/**
	 * @type {string}
	 */
	export let title;
	/**
	 * @type {string}
	 */
	export let description;
	/**
	 * @type {string}
	 */
	export let id;

	/**
	 * @type {string}
	 */
	export let color;

	/**
	 * @type {string}
	 * @default undefined
	 */
	export let category;
</script>

<a class="game" id={title} href="/games/{id}">
	<div
		class="bg-white hover:bg-gray-200 hover:cursor-pointer w-full h-full mb-5 rounded-xl"
	>
		<div class="p-5 w-full justify-center flex">
			<img loading="lazy" src="./game/img/{image}" class="bg-black w-auto h-[10rem]" alt={description} />
		</div>
		<div class="pl-5 pr-5">
			<h1 class="font-bold text-2xl" style="color: {color};">{title}</h1>
			{#if category != undefined}
				<p class="text-black text-sm">Category: {category}</p>
			{/if}
			<p class="text-black">{description}</p>
		</div>
	</div>
</a>
