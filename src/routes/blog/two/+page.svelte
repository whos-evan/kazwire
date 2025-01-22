<script lang="ts">
	import { config } from '$lib/config';
</script>

<svelte:head>
	<title>{config.branding.name} - Mastering Responsive Design with Tailwind CSS</title>
	<meta name="description" content="Learn how to master responsive design using Tailwind CSS." />
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
				Mastering Responsive Design with Tailwind CSS
			</h1>

			<!-- Author and Date -->
			<div class="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-8">
				<span>By Zachary</span>
				<span class="mx-2">•</span>
				<span>1/22/2025</span>
			</div>

			<!-- Content -->
			<p class="text-xl mb-8 text-gray-700 dark:text-gray-200">
				Responsive design is crucial for modern web development, and Tailwind CSS makes it easier than ever. Here's how to master it:
			</p>
			<div class="prose dark:prose-invert">
				<h2>1. Utility-First Approach</h2>
				<p>Tailwind's utility classes allow you to build responsive layouts directly in your HTML.</p>

				<h2>2. Breakpoints</h2>
				<p>Use Tailwind's built-in breakpoints (`sm`, `md`, `lg`, `xl`, `2xl`) to create responsive designs.</p>

				<h2>3. Flexbox and Grid</h2>
				<p>Combine Tailwind's flexbox and grid utilities for powerful layout options.</p>

				<h2>4. Customizing Breakpoints</h2>
				<p>Tailwind allows you to customize breakpoints in the `tailwind.config.js` file.</p>

				<h2>5. Responsive Images</h2>
				<p>Use the `srcset` attribute and Tailwind's responsive utilities to serve optimized images.</p>

				<p>With Tailwind CSS, you can create beautiful, responsive designs with minimal effort.</p>
			</div>
		</article>
	</div>
</main>