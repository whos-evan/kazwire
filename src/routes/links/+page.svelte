<script lang="ts">
	import { config } from '$lib/config';
</script>

<svelte:head>
	<title>{config.branding.name} - More Links</title>
	<meta property="og:title" content="{config.branding.name} - About" />
	<meta name="description" content="Play and browse for free now on {config.branding.name}!" />
	<meta
		property="og:description"
		content="Play and browse for free now on {config.branding.name}!"
	/>
</svelte:head>

<main class="min-h-screen bg-base-100 flex items-center justify-center p-1">
	<div class="card w-full max-w-2xl bg-base-200 shadow-2xl hover:shadow-3xl transition-shadow duration-300 rounded-box">
		<div class="card-body text-center p-8">
			<h1 class="text-5xl font-bold mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
				Get More {config.branding.name} Links
			</h1>
			<p class="text-xl mb-8 leading-relaxed">
				We distribute more links in our Discord server. Please join on a personal device like your phone instead of using {config.branding.name}, though, because Discord won't let you use our server from our proxy.
			</p>
			<div class="space-y-6">
				<a
					href="https://joinkaz.com/"
					target="_blank"
					rel="noopener noreferrer"
					class="btn btn-primary btn-lg w-full max-w-xs mx-auto transform hover:scale-105 transition-transform duration-300 rounded-btn"
				>
				{config.branding.name} Discord
				</a>
				<p class="text-sm">
					Not on your personal device? Visit
					<a
						href="https://joinkaz.com"
						class="text-primary hover:text-primary-focus underline transition-colors duration-300"
					>
						joinkaz.com
					</a>
					on your phone to easily join our server.
				</p>
			</div>
		</div>
	</div>
</main>