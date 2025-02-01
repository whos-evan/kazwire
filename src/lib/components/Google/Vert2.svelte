<script lang="ts">
	import { onMount } from 'svelte';
	import { config } from '$lib/config';
	let showAlternate = false;

	onMount(() => {
		(window.adsbygoogle = window.adsbygoogle || []).push({});

		setTimeout(() => {
			let element: HTMLElement | null = document.getElementById('Vert2');
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
		<script async type="application/javascript" src="https://a.magsrv.com/ad-provider.js"></script>
		<ins class="eas6a97888e2" data-zoneid="5528776" />
		<script>
			(AdProvider = window.AdProvider || []).push({ serve: {} });
		</script>
	{:else}
		<ins
			id="Vert2"
			class="adsbygoogle"
			style="display:block"
			data-ad-client="ca-pub-7648886706850999"
			data-ad-slot="4414262154"
			data-ad-format="auto"
			data-full-width-responsive="true"
		/>
	{/if}
</div>
