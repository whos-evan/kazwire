<script lang="ts">
	import QrCode from '$lib/components/QRCode/QRCode.svelte';
	import { config } from '$lib/config';

	let width = 0;
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

<svelte:window bind:innerWidth={width} />

<div class="flex h-[calc(100vh-12rem)] flex-row place-items-center justify-center">
	<div class="flex flex-row gap-2">
		<div class="flex items-center justify-center">
			<div
				class="hover:shadow-3xl rounded-box mx-auto w-full max-w-xl bg-base-200 shadow-2xl transition-shadow duration-300"
			>
				<div class="p-8 text-center">
					<h1
						class="mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-5xl font-black text-transparent"
					>
						Get More {config.branding.name} Links
					</h1>
					<p class="text-md mb-8 leading-relaxed">
						We distribute more links in our Discord server. Please join on a personal device like
						your phone instead of using {config.branding.name} in case the link gets blocked.
					</p>
					<div class="space-y-6">
						<a
							href="https://joinkaz.com/"
							target="_blank"
							rel="noopener noreferrer"
							class="btn btn-primary rounded-btn btn-lg mx-auto w-full max-w-xs transform transition-transform duration-300 hover:scale-105"
						>
							{config.branding.name} Discord
						</a>
						<p class="pt-4 text-xs text-gray-500">
							Not on your personal device? Visit
							<a
								href="https://joinkaz.com"
								class="text-primary underline transition-colors duration-300 hover:text-primary-focus"
							>
								joinkaz.com
							</a>
							on your phone or scan the QR code to easily join our Discord server.
						</p>
					</div>
				</div>
			</div>
		</div>

		{#if width > 1000}
			<!-- divider -->
			<div class="divider divider-vertical mb-auto mt-auto h-10 bg-secondary p-[1px]" />

			<!-- qr code on the right -->
			<div class="flex h-auto items-center justify-center">
				<div
					class="rounded-box mx-auto flex h-full w-full max-w-2xl flex-col justify-between bg-base-200 shadow-2xl"
				>
					<div class="flex h-full flex-col justify-between p-8 text-center">
						<div class="mx-auto h-[20rem] w-[20rem]">
							<QrCode />
						</div>
						<p class="text-xs leading-relaxed text-gray-500">
							Scan the QR code to join our Discord server.
						</p>
					</div>
				</div>
			</div>
		{/if}
	</div>
</div>
