<script>
	export let image;

	export let title;
	export let id;

	export let color;

	export let category;

	export let popular;

	import { onMount } from 'svelte';
	import ColorThief from '$lib/components/color-thief.mjs';

	let shine;

	onMount(async () => {
		async function waitUntilImageChange() {
			while (image == 'loading') {
				await new Promise((resolve) => setTimeout(resolve, 100));
			}
			const colorThief = new ColorThief();
			const img = new Image();
			img.src = `./game/img/${image}`;
			img.addEventListener('load', function () {
				shine = `rgb(${colorThief.getColor(img)})`;
			});
		}
		await waitUntilImageChange();
	});
</script>

{#if popular != undefined}
	<a class="game w-[12rem] h-[12rem] m-auto" id={title} href={'/games/' + id}>
		<!-- have the background have a gradient over the image based on the shine rgb value that is dark enough to be read over white text  -->
		<div
			class="background-game hover:cursor-pointer w-[12rem] h-[12rem] mb-5 rounded-xl transition duration-100 hover:scale-[102.5%]"
			style="background: linear-gradient(rgba(255, 215, 0, 0.2), rgba(0, 0, 0, 0.5)), url('/game/img/{image}'); background-size: cover; background-position: center;"
		>
			<div class="flex flex-col justify-center h-full p-2">
				<div class="flex justify-center">
					<h1 class="font-bold text-2xl break-words" style="color: {color};">{title}</h1>
				</div>
			</div>
		</div>
	</a>
{:else}
	<a class="game w-[12rem] h-[12rem] m-auto" id={title} href={'/games/' + id}>
		<!-- have the background have a gradient over the image based on the shine rgb value that is dark enough to be read over white text  -->
		<div
			class="background-game hover:cursor-pointer w-[12rem] h-[12rem] mb-5 rounded-xl transition duration-100 hover:scale-[102.5%]"
			style="background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/game/img/{image}'); background-size: cover; background-position: center;"
		>
			<div class="flex flex-col justify-center h-full p-2">
				<div class="flex justify-center">
					<h1 class="font-bold text-2xl break-words" style="color: {color};">{title}</h1>
				</div>
			</div>
		</div>
	</a>
{/if}
