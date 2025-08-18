<script lang="ts">
	import { config } from '$lib/config';
	import { onMount } from 'svelte';

	let clickCount = 0;
	let isSpinning = false;
	let showWarning = false;

	function launchab() {
		const tab = window.open('about:blank', '_blank');
		if (tab) {
			const iframe = tab.document.createElement('iframe');
			const stl = iframe.style;
			stl.border = stl.outline = 'none';
			stl.width = '100vw';
			stl.height = '100vh';
			stl.position = 'fixed';
			stl.left = stl.right = stl.top = stl.bottom = '0';
			iframe.src = self.location.href;
			tab.document.body.appendChild(iframe);
			window.parent.window.location.replace(
				localStorage.getItem('panicLink') || 'https://google.com/'
			);
		}
	}

	function handleLogoClick() {
		clickCount++;

		if (clickCount >= 2) {
			isSpinning = true;
		}

		if (clickCount >= 4) {
			setTimeout(() => {
				launchab();
				// Reset after launch
				clickCount = 0;
				isSpinning = false;
			}, 1000); // Wait for spin animation
		}

		// Reset click count after 5 seconds of inactivity
		setTimeout(() => {
			if (clickCount < 4) {
				clickCount = 0;
				isSpinning = false;
			}
		}, 5000);
	}
</script>

<div class="hero mb-10 min-h-fit bg-base-100 font-heading">
	<div class="hero-content flex-col lg:flex-row">
		<div class="relative overflow-visible">
			<button
				type="button"
				class="cursor-pointer transition-all duration-300 {isSpinning
					? 'animate-spin'
					: ''} border-none bg-transparent p-0 hover:scale-105 active:scale-95 relative overflow-visible"
				style={isSpinning ? 'animation-duration: 0.3s;' : ''}
				on:click={handleLogoClick}
			>
				<img
					src="/logo.png"
					alt="{config.branding.name} Logo"
					class="w-full max-w-sm rounded-lg drop-shadow-2xl transition-all duration-300 {clickCount >= 2 ? 'brightness-105 saturate-110' : ''}"
				/>
				{#if clickCount >= 2}
					<div class="absolute -inset-4 rounded-xl bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 animate-pulse blur-sm"></div>
				{/if}
			</button>
		</div>
		<div>
			<h1 class="text-5xl font-bold">{config.branding.name}</h1>
			<p class="py-6">{config.branding.description}</p>
			<div class="flex flex-col gap-2 md:flex-row">
				<a href="/games">
					<button class="btn btn-primary w-full">Play Now</button>
				</a>
				<a href="/apps">
					<button class="btn btn-primary w-full">Browse Now</button>
				</a>
			</div>
		</div>
	</div>
</div>
