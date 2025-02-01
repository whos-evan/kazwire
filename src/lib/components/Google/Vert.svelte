<script lang="ts">
	import { onMount } from 'svelte';
	import { config } from '$lib/config';
	let showAlternate = false;

	onMount(() => {
		(window.adsbygoogle = window.adsbygoogle || []).push({});

		setTimeout(() => {
			let element: HTMLElement | null = document.getElementById('Vert');
			if (element.childElementCount == 0) {
				showAlternate = true;
				element.remove();
			}

			// if data-ad-status="unfilled" then show alternate
			if (element.getAttribute('data-ad-status') == 'unfilled') {
				showAlternate = true;
				element.remove();
			}
		}, 4000);
	});
</script>

<div class="items-center justify-center p-4 [text-align-last:center]">
	<h3
		class="min-w-[14rem] text-center text-xs uppercase tracking-widest text-gray-600 opacity-40 dark:text-gray-400"
	>
		Advertisement
	</h3>

	{#if showAlternate && typeof config.social.discord == 'string'}
		<div
			class="flex h-full min-h-[600px] w-[224px] flex-col items-center justify-center bg-base-300 p-4"
		>
			<h1 class="mb-6 text-center text-4xl font-black text-base-content">JOIN OUR DISCORD</h1>

			<div class="text-center text-base-content">
				<p class="text-lg">
					Join our Discord server to get more links in case this one gets blocked.
				</p>

				<a
					href={config.social.discord}
					target="_blank"
					rel="noopener noreferrer"
					class="btn btn-accent mt-4"
				>
					Join Discord
				</a>
			</div>
		</div>
	{/if}

	{#if config.analytics.exoclickEnabled}
		<iframe
			src="//a.magsrv.com/iframe.php?idzone=5528776&size=160x600"
			width="160"
			height="600"
			scrolling="no"
			marginwidth="0"
			marginheight="0"
			frameborder="0"
		/>
	{:else}
		<ins
			id="Vert"
			class="adsbygoogle"
			style="display:block"
			data-ad-client="ca-pub-7648886706850999"
			data-ad-slot="8673868840"
			data-ad-format="auto"
			data-full-width-responsive="true"
		/>
	{/if}
</div>
