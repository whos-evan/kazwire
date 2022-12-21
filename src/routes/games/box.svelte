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
	export var color;

	/**
	 * @type {string}
	 * @default undefined
	 */
	export let category;

	/**
	 * @type {string}
	 * @default undefined
	 */
	export let shine;

	import ColorThief from './color-thief.mjs';
	const colorThief = new ColorThief();
	const img = new Image();
	var shine2;
	img.src = `./game/img/${image}`;
	img.addEventListener('load', function() {
		colorThief.getColor(img);
		shine2 = `rgb(${colorThief.getColor(img)})`;
	});
	
</script>
{#if shine != undefined}
<a class="game" id={title} href="/games/{id}">
	<div
		class="background-game bg-white shadow-lg hover:bg-gray-200 shadow-gray-200 dark:shadow-orange-300 hover:cursor-pointer w-full h-full mb-5 rounded-xl"
	>
		<div class="p-5 w-full justify-center flex">
			<img loading="lazy" src="./game/img/{image}" class="img bg-black w-auto max-h-[10rem]" alt={description} />
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
{:else}
<a class="game" id={title} href="/games/{id}">
	<div
		class="background-game bg-white hover:bg-gray-200 hover:cursor-pointer hover:shadow-2xl w-full h-full mb-5 rounded-xl"
		style="box-shadow: 0 10px 15px -3px {shine2};"
	>
		<div class="p-5 w-full justify-center flex">
			<img loading="lazy" src="./game/img/{image}" class="img bg-black w-auto max-h-[10rem]" alt={description} />
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
{/if}