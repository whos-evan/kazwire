<script lang="ts">
	import { page } from '$app/stores';
	import { experiments } from '$lib/experiments';
	import { onMount } from 'svelte';

	$: {
		if (typeof gtag !== 'undefined') {
			gtag('config', 'G-FLBJ64LGWV', {
				page_title: document.title,
				page_path: $page.url.pathname
			});
		}
	}

	onMount(() => {
		const experimentData = experiments.getExperiments();
		// Go through each experiment and check if it is active
		// If it is active, then run an event to track it

		// For loop through the objects
		for (const [key, value] of Object.entries(experimentData)) {
			// If the experiment is active, then run the event
			if (experiments.shouldShow(key)) {
				console.log('Experiment is active', key);
				const test = gtag('event', 'experiment', {
					event_category: 'experiment',
					event_label: key
				});
			}
		}
	});
</script>

<svelte:head>
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-FLBJ64LGWV">
	</script>
	<script>
		window.dataLayer = window.dataLayer || [];

		function gtag() {
			dataLayer.push(arguments);
		}

		gtag('js', new Date());
		gtag('config', 'G-FLBJ64LGWV');

		
	</script>

	<link rel="dns-prefetch" href="https://universal.wgplayer.com" /><script
		type="text/javascript"
		async
	>
		!(function (e, t) {
			(a = e.createElement('script')),
				(m = e.getElementsByTagName('script')[0]),
				(a.async = 1),
				(a.src = t),
				(a.fetchPriority = 'high'),
				m.parentNode.insertBefore(a, m);
		})(
			document,
			'https://universal.wgplayer.com/tag/?lh=' +
				window.location.hostname +
				'&wp=' +
				window.location.pathname +
				'&ws=' +
				window.location.search
		);
	</script>

	<script>
		// wait 2 seconds before loading ads
		setTimeout(function () {
			(adsbygoogle = window.adsbygoogle || []).push({});
		}, 2000);
	</script>
</svelte:head>
