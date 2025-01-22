<script lang="ts">
	import { config } from '$lib/config';
	import Icon from '@iconify/svelte';
</script>

<footer class="footer bg-base-200 p-10 text-base-content">
	<div>
		<span class="footer-title">Services</span>
		<a class="link-hover link" href="/games">Games</a>
		<a class="link-hover link" href="/apps">Apps</a>
		<a class="link-hover link" href="/search">Search</a>
		<a class="link-hover link" href="/settings">Settings</a>
		<a class="link-hover link" href="/links">More Links</a>
	</div>
	<div>
		<span class="footer-title">Company</span>
		<a class="link-hover link" href="/about">About Us</a>
		<a class="link-hover link" href="/blog">Blog</a>
		<a class="link-hover link" href="mailto:{config.branding.supportEmail}">Contact</a>
	</div>
	<div>
		<span class="footer-title">Legal</span>
		<a class="link-hover link" href="/legal/terms-of-service">Terms of use</a>
		<a class="link-hover link" href="/legal/privacy-policy">Privacy policy</a>
		<a class="link-hover link" href="/legal/dmca">DMCA</a>
	</div>
</footer>
<footer class="footer border-t border-base-300 bg-base-200 px-10 py-4 text-base-content">
	<div class="grid-flow-col items-center">
		<img src="/logo.png" alt="{config.branding.name} Logo" class="h-10 w-10 rounded-md" />
		<p>{config.branding.name}<br />{config.branding.slogan}</p>
	</div>
	<div class="md:place-self-center md:justify-self-end">
		<div class="grid grid-flow-col gap-4">
			{#if config.social.twitter}
				<a href={config.social.twitter} target="_blank" rel="noopener noreferrer">
					<Icon icon="ic:baseline-twitter" class="h-6 w-6" />
				</a>
			{/if}
			{#if config.social.tiktok}
				<a href={config.social.tiktok} target="_blank" rel="noopener noreferrer">
					<Icon icon="ic:baseline-tiktok" class="h-6 w-6" />
				</a>
			{/if}
			{#if config.social.discord}
				<a href={config.social.discord} target="_blank" rel="noopener noreferrer">
					<Icon icon="ic:baseline-discord" class="h-6 w-6" />
				</a>
			{/if}
		</div>
	</div>
</footer>
