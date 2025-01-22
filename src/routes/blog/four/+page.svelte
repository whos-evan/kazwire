<script lang="ts">
	import { config } from '$lib/config';
</script>

<svelte:head>
	<title>{config.branding.name} - The Power of Serverless Computing</title>
	<meta name="description" content="Discover the benefits of serverless computing for modern web apps." />
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
				The Power of Serverless Computing in Modern Web Apps
			</h1>

			<!-- Author and Date -->
			<div class="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-8">
				<span>By Zachary</span>
				<span class="mx-2">•</span>
				<span>1/22/2025</span>
			</div>

			<!-- Content -->
			<p class="text-xl mb-8 text-gray-700 dark:text-gray-200">
				Serverless computing is transforming how we build web applications. Here's why it's so powerful:
			</p>
			<div class="prose dark:prose-invert">
				<h2>1. No Server Management</h2>
				<p>Developers can focus on writing code without worrying about infrastructure.</p>

				<h2>2. Scalability</h2>
				<p>Serverless platforms automatically scale with demand.</p>

				<h2>3. Cost Efficiency</h2>
				<p>Pay only for the compute time you use.</p>

				<h2>4. Event-Driven Architecture</h2>
				<p>Serverless functions are triggered by events, making them ideal for real-time applications.</p>

				<h2>5. Popular Platforms</h2>
				<p>AWS Lambda, Google Cloud Functions, and Azure Functions are leading the way.</p>

				<p>Serverless computing is a must-know for modern web developers.</p>
			</div>
		</article>
	</div>
</main>