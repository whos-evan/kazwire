<script lang="ts">
	import { neverShowHalloween } from '$lib/stores';

	function neverShowAgain() {
		localStorage.setItem('neverShowHalloween', 'true');
		neverShowHalloween.set(true);
	}

	let filler = ' ';
	// If it's not Halloween day
	if (new Date().getMonth() != 9 || new Date().getDate() != 31) {
		filler = ' Almost ';
	}

	function spawnRandomPumpkin() {
		const pumpkin: HTMLImageElement = document.createElement('img');
		pumpkin.src = '/assets/pumpkin.png';
		pumpkin.style.position = 'absolute';
		pumpkin.style.top = `${Math.random() * 80 + 10}%`;
		pumpkin.style.left = `${Math.random() * 80 + 10}%`;
		pumpkin.style.width = '10rem';
		pumpkin.style.transition = 'all 0.5s ease-in-out';
		pumpkin.style.transform = `translate(-50%, -50%) rotate(${Math.random() * 360}deg)`;
		pumpkin.style.zIndex = '9999';
		pumpkin.style.pointerEvents = 'none';
		document.body.appendChild(pumpkin);
		setTimeout(() => {
			pumpkin.style.opacity = '0';
			pumpkin.style.transform = 'translate(-50%, -50%) scale(0.5)';
		}, 100);
		setTimeout(() => {
			pumpkin.remove();
		}, 600);
	}
</script>

<div
	class="flex w-full items-center justify-center rounded-3xl bg-tertiary p-8 text-black dark:bg-tertiaryDark dark:text-white"
>
	<!-- Happy Halloween! -->
	<div class="flex flex-col items-start justify-center">
		<h1 class="text-4xl font-bold">Happy{filler}Halloween!</h1>
		<div class="flex flex-row gap-4">
			<a href="/discord" target="_blank">
				<button class="btn mt-4 bg-purple-600">
					<span class="flex items-center">
						<span>Join the Discord!</span>
					</span>
				</button>
			</a>
			<button class="btn mt-4 bg-primary" on:click={neverShowAgain}>
				<span class="flex items-center">
					<span>Don't show again</span>
				</span>
			</button>
		</div>
	</div>
	<!-- Spawn a pumpkin when clicked -->
	<button
		class="hover:cursor-default"
		on:click={() => {
			for (let i = 0; i < 5; i++) {
				// Spawn a pumpkin every 0.5s
				setTimeout(() => {
					spawnRandomPumpkin();
				}, i * 250);
			}
		}}
	>
		<img
			src="/assets/pumpkin.png"
			class="w-[20rem]"
			alt="Pumpkin with a carving saying Kazwire on it"
		/>
	</button>
</div>
