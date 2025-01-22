<script lang="ts">
	import { config } from '$lib/config';
</script>

<svelte:head>
	<title>{config.branding.name} - Building Scalable APIs with GraphQL</title>
	<meta name="description" content="Learn how to build scalable APIs using GraphQL." />
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
				Building Scalable APIs with GraphQL
			</h1>

			<!-- Author and Date -->
			<div class="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-8">
				<span>By Zachary</span>
				<span class="mx-2">•</span>
				<span>1/22/2025</span>
			</div>

			<!-- Content -->
			<p class="text-xl mb-8 text-gray-700 dark:text-gray-200">
				GraphQL is a powerful alternative to REST for building APIs. Here's why you should consider it:
			</p>
			<div class="prose dark:prose-invert">
				<h2>1. Flexible Queries</h2>
				<p>GraphQL allows clients to request exactly the data they need, reducing over-fetching and under-fetching.</p>

				<h2>2. Strongly Typed Schema</h2>
				<p>GraphQL schemas are strongly typed, making it easier to maintain and document APIs.</p>

				<h2>3. Real-Time Data with Subscriptions</h2>
				<p>GraphQL supports real-time updates through subscriptions.</p>

				<h2>4. Tooling and Ecosystem</h2>
				<p>Tools like Apollo Server and GraphiQL make it easy to build and test GraphQL APIs.</p>

				<h2>5. Performance Optimization</h2>
				<p>Use features like batching and caching to optimize API performance.</p>

				<p>GraphQL is a game-changer for modern API development.</p>
			</div>
		</article>
	</div>
</main>