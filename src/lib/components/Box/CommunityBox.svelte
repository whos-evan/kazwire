<script lang="ts">
	export let name: string;
	export let description: string;
	export let link: string;

	let maxLength = 50;

	// Truncate the description to the nearest sentence ending if it exceeds maxLength
	function truncateDescription(description: string): string {
		if (description.length <= maxLength) return description;

		const endPunctuationIndex =
			[
				description.indexOf('?', maxLength),
				description.indexOf('.', maxLength),
				description.indexOf('!', maxLength)
			]
				.filter((index) => index !== -1)
				.sort((a, b) => a - b)[0] ?? Infinity;

		return endPunctuationIndex !== Infinity
			? description.substring(0, endPunctuationIndex + 1)
			: description.substring(0, maxLength);
	}

	description = truncateDescription(description);
</script>

<a id={name} href={link} data-sveltekit-reload>
	<div
		class="dark:bg-tertiaryDark'dark:shadow-white relative mb-5 inline-flex h-[80px] rounded-xl bg-tertiary p-2 shadow-gray-200 transition-all duration-100 shadow-lg hover:scale-110 hover:cursor-pointer"
	>
		<div class="pl-5 pr-5">
			<div class="flex">
				<h1 class="text-4xl font-bold text-black dark:text-white">{name}</h1>
			</div>

			<p class="text-black dark:text-white">{description}</p>
		</div>
	</div>
</a>
