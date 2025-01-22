<script lang="ts">
	import { config } from '$lib/config';
</script>

<svelte:head>
	<title>{config.branding.name} - The Future of Web Development</title>
	<meta name="description" content="Explore the top web development trends to watch in 2024." />
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
				The Future of Web Development: Trends to Watch in 2024
			</h1>

			<!-- Author and Date -->
			<div class="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-8">
				<span>By Zachary</span>
				<span class="mx-2">•</span>
				<span>1/22/2025</span>
			</div>

			<!-- Content -->
			<p class="text-xl mb-8 text-gray-700 dark:text-gray-200">
				Web development is evolving at a rapid pace, and 2024 promises to bring exciting new trends. Here are some key areas to watch:
			</p>
			<div class="prose dark:prose-invert">
				<h2>1. AI-Powered Development Tools</h2>
				<p>AI is revolutionizing how developers write code, with tools like GitHub Copilot and ChatGPT assisting in code generation and debugging.</p>

				<h2>2. WebAssembly (Wasm)</h2>
				<p>WebAssembly is gaining traction for high-performance web applications, enabling developers to run code at near-native speed.</p>

				<h2>3. Progressive Web Apps (PWAs)</h2>
				<p>PWAs continue to grow, offering app-like experiences directly in the browser.</p>

				<h2>4. Serverless Architecture</h2>
				<p>Serverless computing is becoming more popular, allowing developers to focus on code without managing infrastructure.</p>

				<h2>5. Web3 and Decentralized Apps (dApps)</h2>
				<p>Blockchain technology is making its way into web development, enabling decentralized applications.</p>

				<p>Stay ahead of the curve by exploring these trends and incorporating them into your projects!</p>
			</div>
		</article>
	</div>
</main>