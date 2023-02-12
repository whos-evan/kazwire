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
	export let href;

	/**
	 * @type {string}
	 */
	export var color;

	import { onMount } from 'svelte';
	import ColorThief from './color-thief.mjs';
	var shine;
	onMount(() => {
		const colorThief = new ColorThief();
		const img = new Image();
		img.src = `./assets/partners/${image}`;
		img.addEventListener('load', function () {
			colorThief.getColor(img);
			shine = `rgb(${colorThief.getColor(img)})`;
		});
	});
</script>

<a class="partner p-10" id={title} href={href}>
	<div
		class="background-game bg-white dark:bg-zinc-900 hover:bg-gray-200 hover:cursor-pointer hover:shadow-2xl w-full h-full mb-5 rounded-xl transition duration-100 hover:scale-[102.5%]"
		style="box-shadow: 5px 5px 20px 0px {shine};"
	>
		<div class="p-5 w-full justify-center flex">
			<img
				src="./assets/partners/{image}"
				class="img w-auto max-h-[5rem]"
				alt={description}
			/>
		</div>
		<div class="pl-5 pr-5">
			<h1 class="font-bold text-2xl text-center break-words" style="color: {color};">{title}</h1>
			<p class="text-black dark:text-white break-words">{description}</p>
		</div>
	</div>
</a>

