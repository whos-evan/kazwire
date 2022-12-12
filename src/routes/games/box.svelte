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
</script>

<a class="game" id={title} href="/game/{id}">
	<div
		class="bg-white hover:bg-gray-200 hover:cursor-pointer text-black w-full h-full mb-5 rounded-xl"
	>
		<div class="p-5 w-full justify-center flex">
			<img src="./game/img/{image}" class="bg-black w-auto h-[10rem]" alt={description} />
		</div>
		<div class="pl-5 pr-5">
			<h1 class="font-bold text-2xl">{title}</h1>
			<p>{description}</p>
		</div>
	</div>
</a>
