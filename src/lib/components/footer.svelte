<script lang="ts">
	import { darkMode } from '../dark';
	import { onMount } from 'svelte';
	onMount(() => {
		darkMode();
	});
</script>

<!-- https://flowbite.com/docs/components/footer/ -->
<footer class="p-4 sm:p-6 bg-secondary mt-10">
	<div class="md:flex md:justify-between">
		<div class="mb-6 md:mb-0">
			<a href="https://kazwire.com/" class="flex items-center mb-2">
				<img src="/logo.png" class="h-8 mr-3" alt="Kazwire Logo" />
				<span class="self-center text-2xl font-semibold whitespace-nowrap text-white">Kazwire</span>
			</a>
			<a href="/about-the-developers" class="self-center text-md text-white hover:underline">
				Made with ❤️ by evan
			</a>
		</div>
		<div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
			<div>
				<h2 class="mb-6 text-sm font-semibold uppercase text-white">Resources</h2>
				<ul class="text-white">
					<li class="mb-4">
						<a href="/request" class="hover:underline">Request a Game</a>
					</li>
					<li class="mb-4">
						<a href="/discord" class="hover:underline">Get Support</a>
					</li>
					<li>
						<a href="/faq" class="hover:underline">FAQ</a>
					</li>
				</ul>
			</div>
			<div>
				<h2 class="mb-6 text-sm font-semibold text-white uppercase">Online Services</h2>
				<ul class="text-white">
					<li class="mb-4">
						<a href="/search" class="hover:underline">Search</a>
					</li>
					<li class="mb-4">
						<a href="/games" class="hover:underline">Games</a>
					</li>
					<li>
						<a href="/apps" class="hover:underline">Apps</a>
					</li>
				</ul>
			</div>
			<div>
				<h2 class="mb-6 text-sm font-semibold text-white uppercase">Legal</h2>
				<ul class="text-white">
					<li class="mb-4">
						<a href="/legal/privacy-policy" class="hover:underline">Privacy Policy</a>
					</li>
					<li class="mb-4">
						<a href="/legal/tos" class="hover:underline">Terms &amp; Conditions</a>
					</li>
					<li>
						<a href="/legal/dmca" class="hover:underline">DMCA</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
	<hr class="my-6 border-gray-300 sm:mx-auto lg:my-8" />
	<div class="sm:flex sm:items-center sm:justify-between">
		<span class="text-sm text-white sm:text-center"
			>© 2023 <a href="https://kazwire.com/" class="hover:underline">Kazwire</a>
		</span>
		<div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
			<a
				href="https://discord.gg/FEkFSWRFM9"
				class="text-white hover:text-primary"
			>
				<svg class="w-5 h-5" fill="currentColor" viewBox="0 -28.5 256 256" aria-hidden="true"
					><g
						><path
							xmlns="http://www.w3.org/2000/svg"
							d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z"
							fill-rule="evenodd"
						/></g
					></svg
				>
				<span class="sr-only">Discord server</span>
			</a>
			<a href="https://github.com/whos-evan/kazwire" class="text-white hover:text-primary">
				<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"
					><path
						fill-rule="evenodd"
						d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
						clip-rule="evenodd"
					/></svg
				>
				<span class="sr-only">GitHub</span>
			</a>
		</div>
	</div>
</footer>
