<script lang="ts">
    export let title: string
    export let href: string
    export let image: string
    export let description: string
    export let color: string
</script>

<a class="partner py-10 px-2 max-w-fit" id={title} href={href}>
	<div
		class="background-game bg-white dark:bg-zinc-900 hover:cursor-pointer hover:shadow-xl w-full h-full mb-5 rounded-xl transition duration-100 hover:scale-[102.5%]"
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
			<p class="text-black dark:text-white break-words text-center">{description}</p>
		</div>
	</div>
</a>
