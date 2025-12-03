<script lang="ts">
	import { onMount } from 'svelte';
	import { config } from '$lib/config';
	import Icon from '@iconify/svelte';

	let showPopup = false;

	onMount(() => {
		// Check if popup has been shown before
		const hasSeenCareerPopup = localStorage.getItem('career-popup-shown');
		
		if (!hasSeenCareerPopup) {
			// 30% chance to show popup
			const shouldShow = Math.random() < 0.3;
			
			if (shouldShow) {
				// Small delay to ensure page is loaded
				setTimeout(() => {
					showPopup = true;
				}, 2000);
			}
		}
	});

	function closePopup() {
		showPopup = false;
		// Mark popup as shown in localStorage
		localStorage.setItem('career-popup-shown', 'true');
	}

	function goToCareers() {
        localStorage.setItem('career-popup-shown', 'true');
		window.location.href = '/careers';
	}
</script>

{#if showPopup}
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div 
		class="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-50 p-4"
		on:click={closePopup}
	>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div 
			class="relative max-w-md rounded-lg bg-base-100 p-6 shadow-xl"
			on:click|stopPropagation
		>
			<!-- Close button -->
			<button 
				class="btn btn-circle btn-ghost btn-sm absolute right-2 top-2"
				on:click={closePopup}
			>
				<svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
				</svg>
			</button>

			<!-- Content -->
			<div class="text-center">
				<div class="mb-4">
					<div class="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
						<Icon class="h-8 w-8 text-primary" icon="mdi:briefcase-outline" />
					</div>
				</div>

				<h3 class="mb-2 text-xl font-bold">Earn Money with {config.branding.name}!</h3>
				
				<p class="mb-4 text-sm text-base-content/70">
					Make TikToks for us for a guaranteed minimum <strong>$50</strong> a month.
				</p>

				<div class="flex flex-col gap-2 sm:flex-row">
					<button 
						class="btn btn-primary btn-sm flex-1"
						on:click={goToCareers}
					>
						Learn More
					</button>
					<button 
						class="btn btn-ghost btn-sm flex-1"
						on:click={closePopup}
					>
						Maybe Later
					</button>
				</div>

				<p class="mt-3 text-xs text-base-content/50">
					This message won't show again
				</p>
			</div>
		</div>
	</div>
{/if}