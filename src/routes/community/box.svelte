<script>
	export let title;
	export let description;
	export let id;

	export let category;

	export let popular;
	export let href;

	let shine;
</script>

{#if popular != undefined}
	<a class="game" id={title} href={'/community/games/' + id}>
		<div
			class="background-game bg-white shadow-lg hover:bg-gray-200 shadow-gray-200 dark:shadow-orange-300 hover:cursor-pointer w-full h-full mb-5 rounded-xl transition duration-100 hover:scale-[102.5%]"
		>
			<div class="pl-5 pr-5">
				<h1 class="pt-3 font-bold text-2xl">{title}</h1>
				<p class="text-black text-sm">Category: Popular</p>
				<p class="text-black">{description}</p>
			</div>
		</div>
	</a>
{:else}
	<a class="game" id={title} href={href ?? '/community/games/' + id}>
		<div
			class="background-game bg-white hover:bg-gray-200 hover:cursor-pointer hover:shadow-2xl h-full mb-5 rounded-xl transition duration-100 hover:scale-[102.5%]"
			style={`box-shadow: 0 10px 15px -3px ${shine};`}
		>
			<div class="pl-5 pr-5">
				<h1 class="pt-3 font-bold text-2xl">{title}</h1>
				{#if category != undefined}
					<p class="text-black text-sm">Category: {category}</p>
				{/if}
				<p class="text-black">{description}</p>
			</div>
		</div>
	</a>
{/if}
