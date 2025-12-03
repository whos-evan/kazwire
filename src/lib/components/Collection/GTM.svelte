<script lang="ts">
	// Import Svelte module and required types
	import { onMount } from 'svelte';

	// Define the type for custom data point object
	type CustomDataPoint = { [key: string]: string };

	/** gtmId - GTM ID 'GTM-F00BARS'. */
	export let gtmId: string = '';

	/** [gtmDataPoints=[]] - Array or single object of custom data points for dataLayer.
	 * [gtmDataPoints[]] - Custom data point Object.
	 * [gtmDataPoints[][]] - Custom data point property. */
	export let gtmDataPoints: CustomDataPoint | CustomDataPoint[] = [];

	/** [timeout] - The number of milliseconds to timeout initiating loading the GTM script from Google */
	export let timeout: number = 0;

	/** [dev=false] - Set to true to give errors */
	export let dev: boolean = false;

	let scriptSrc: string | undefined;

	/** getFunctionScriptElementFromInitGtm - Sets global dataLayer on Window Object.
	 * [customDataPoints=[]] - Array or single object of custom data points for dataLayer.
	 * [customDataPoints[]] - Custom data point Object.
	 * [customDataPoints[][]] - Custom data point property.
	 *  [globalObject=window] – E.g. a reference to the Window Object (window). */
	const getScriptSrcFromInitGtm = (
		customDataPoints: CustomDataPoint | CustomDataPoint[] = [],
		globalObject: Window = window
	) => {
		const requiredDataPoint = {
			'gtm.start': new Date().getTime(),
			event: 'gtm.js'
		};

		const getScriptSrcForGtm = (gtmId: string) => {
			if (!dev && (typeof gtmId !== 'string' || !gtmId.length)) {
				return;
			} else if (typeof gtmId !== 'string' || !gtmId.length) {
				console.error('Google Tag Manager.', 'Missing/wrong `gtmId`.');
			} else {
				return `https://www.googletagmanager.com/gtm.js?id=${gtmId}`;
			}
		};

		try {
			const dataLayer = [requiredDataPoint].concat(customDataPoints);
			/* Get/set global dataLayer on global Object (e.g., `window`).
			 * Custom data points should be set before GTM script loads. */
			globalObject['dataLayer'] = globalObject['dataLayer']
				? [...globalObject['dataLayer'], ...dataLayer]
				: dataLayer;
		} catch (error) {
			if (!dev) console.error('Google Tag Manager.', error);
		} finally {
			return getScriptSrcForGtm; // no matter what, for no error.
		}
	};

	onMount(() => {
		if (!timeout) {
			scriptSrc = getScriptSrcFromInitGtm(gtmDataPoints)(gtmId);
		} else {
			setTimeout(() => {
				scriptSrc = getScriptSrcFromInitGtm(gtmDataPoints)(gtmId);
			}, timeout);
		}
	});
</script>

<svelte:head>
	{#if scriptSrc}
		<script src={scriptSrc} defer></script>

		<script>
			window.dataLayer = window.dataLayer || [];
			function gtag() {
				dataLayer.push(arguments);
			}
			gtag('js', new Date());

			gtag('config', '{gtmId}');
		</script>
	{/if}
</svelte:head>
