<script lang="ts">
	import { config } from '$lib/config';
</script>

<svelte:head>
	<title>{config.branding.name} - Why Svelte is the Future of Frontend Development</title>
	<meta name="description" content="Learn why Svelte is revolutionizing frontend development." />
</svelte:head>

<main class="min-h-screen bg-base-100 dark:bg-base-900 p-6">
	<div class="container mx-auto max-w-3xl">
		<article class="bg-base-200 dark:bg-base-800 p-8 rounded-box shadow-lg">
			<!-- Back Button -->
			<a
				href="/blog"
				class="mb-6 text-sm text-primary hover:text-secondary flex items-center"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-4 w-4 mr-2"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M10 19l-7-7m0 0l7-7m-7 7h18"
					/>
				</svg>
				Back to Blog
			</a>

			<!-- Title -->
			<h1 class="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
				Why Svelte is the Future of Frontend Development
			</h1>

			<!-- Author and Date -->
			<div class="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-8">
				<span>By Zachary</span>
				<span class="mx-2">•</span>
				<span>1/22/2025</span>
			</div>

			<!-- Content -->
			<p class="text-xl mb-8 text-gray-700 dark:text-gray-200">
				Svelte is revolutionizing frontend development with its unique approach. Here's why it stands out:
			</p>
			<div class="prose dark:prose-invert">
				<h2>1. No Virtual DOM</h2>
				<p>Svelte compiles components into highly efficient vanilla JavaScript, eliminating the need for a virtual DOM.</p>

				<h2>2. Reactive State Management</h2>
				<p>Svelte's built-in reactivity makes state management simple and intuitive.</p>

				<h2>3. Smaller Bundle Sizes</h2>
				<p>Svelte apps have smaller bundle sizes compared to frameworks like React or Vue.</p>

				<h2>4. Ease of Learning</h2>
				<p>Svelte's syntax is straightforward, making it easy for beginners to pick up.</p>

				<h2>5. Growing Ecosystem</h2>
				<p>The Svelte ecosystem is rapidly expanding, with tools like SvelteKit for full-stack development.</p>

				<p>Svelte is a game-changer for frontend developers.</p>
			</div>
		</article>
	</div>
</main>