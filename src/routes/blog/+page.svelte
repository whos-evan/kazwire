<script>
	import { config } from '$lib/config';
	import { onMount } from 'svelte';

	// Tech/web development blog articles
	const articles = [
		{
			title: 'The Future of Web Development: Trends to Watch in 2024',
			summary:
				'Explore the top web development trends to watch in 2024, including AI-powered tools, WebAssembly, and serverless architecture.',
			link: '/blog/one',
		},
		{
			title: 'Mastering Responsive Design with Tailwind CSS',
			summary:
				'Learn how to master responsive design using Tailwind CSS, including utility-first approaches, breakpoints, and responsive images.',
			link: '/blog/two',
		},
		{
			title: 'Building Scalable APIs with GraphQL',
			summary:
				'Discover why GraphQL is a powerful alternative to REST for building scalable APIs, with flexible queries and real-time data support.',
			link: '/blog/three',
		},
		{
			title: 'The Power of Serverless Computing in Modern Web Apps',
			summary:
				'Understand the benefits of serverless computing, including scalability, cost efficiency, and event-driven architecture.',
			link: '/blog/four',
		},
		{
			title: 'Why Svelte is the Future of Frontend Development',
			summary:
				'Learn why Svelte is revolutionizing frontend development with its no-virtual-DOM approach, reactivity, and smaller bundle sizes.',
			link: '/blog/five',
		},
	];

	// Carousel logic
	let carouselRef;
	let isCarouselPaused = false;
	let intervalId;

	const startCarousel = () => {
		intervalId = setInterval(() => {
			if (!isCarouselPaused && carouselRef) {
				carouselRef.scrollBy({ left: 1, behavior: 'smooth' });
				if (carouselRef.scrollLeft + carouselRef.clientWidth >= carouselRef.scrollWidth) {
					carouselRef.scrollTo({ left: 0, behavior: 'auto' });
				}
			}
		}, 50); // Adjust speed here
	};

	const toggleCarousel = () => {
		isCarouselPaused = !isCarouselPaused;
	};

	onMount(() => {
		startCarousel();
		return () => clearInterval(intervalId);
	});
</script>

<svelte:head>
	<title>{config.branding.name} - Blog</title>
	<meta property="og:title" content="{config.branding.name} - Blog" />
	<meta name="description" content="Read the latest articles and updates on {config.branding.name}!" />
	<meta
		property="og:description"
		content="Read the latest articles and updates on {config.branding.name}!"
	/>
</svelte:head>

<div class="container mx-auto px-4 py-8">
	<h1
		class="text-4xl font-bold mb-8"
		style="background: linear-gradient(to right, {config.styling.daisyUITheme.primary}, {config.styling.daisyUITheme.secondary}); -webkit-background-clip: text; color: transparent;"
	>
		Blog
	</h1>

	<!-- Carousel Section -->
	<div class="relative overflow-hidden mb-12">
		<div class="flex space-x-6 overflow-x-auto scrollbar-hide" bind:this={carouselRef}>
			{#each articles as article}
				<article class="flex-shrink-0 w-80 bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
					<!-- Tailwind Placeholder for Image -->
					<div class="w-full h-48 bg-gray-200 animate-pulse"></div>
					<div class="p-6">
						<h2
							class="text-xl font-semibold mb-2"
							style="background: linear-gradient(to right, {config.styling.daisyUITheme.primary}, {config.styling.daisyUITheme.secondary}); -webkit-background-clip: text; color: transparent;"
						>
							{article.title}
						</h2>
						<p class="text-gray-600">{article.summary}</p>
						<a href={article.link} class="mt-4 inline-block text-blue-500 hover:text-blue-700">Read more</a>
					</div>
				</article>
			{/each}
		</div>
		<button
			on:click={toggleCarousel}
			class="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-200"
		>
			{#if isCarouselPaused}
				<!-- Play Icon (Tailwind Icons) -->
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="w-6 h-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
					/>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
				</svg>
			{:else}
				<!-- Pause Icon (Tailwind Icons) -->
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="w-6 h-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
				</svg>
			{/if}
		</button>
	</div>

	<!-- Blog Articles Grid -->
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
		{#each articles as article}
			<article class="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
				<!-- Tailwind Placeholder for Image -->
				<div class="w-full h-48 bg-gray-200 animate-pulse"></div>
				<div class="p-6">
					<h2
						class="text-xl font-semibold mb-2"
						style="background: linear-gradient(to right, {config.styling.daisyUITheme.primary}, {config.styling.daisyUITheme.secondary}); -webkit-background-clip: text; color: transparent;"
					>
						{article.title}
					</h2>
					<p class="text-gray-600">{article.summary}</p>
					<a href={article.link} class="mt-4 inline-block text-blue-500 hover:text-blue-700">Read more</a>
				</div>
			</article>
		{/each}
	</div>
</div>

<style>
	.scrollbar-hide::-webkit-scrollbar {
		display: none;
	}

	.scrollbar-hide {
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */
	}
</style>