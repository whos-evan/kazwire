<script lang="ts">
	import { config } from '$lib/config';
</script>

<div class="hero mb-10 min-h-fit bg-base-100 font-heading">
	<div class="hero-content flex-col gap-24 lg:flex-row">
		<img
			src="/logo.png"
			alt="{config.branding.name} Logo"
			class="w-full max-w-sm rounded-lg drop-shadow-2xl"
		/>
		<div class="flex skew-x-3 flex-col gap-6 text-base-content">
			<a href="/games">
				<h1
					class="text-5xl font-black uppercase transition-all hover:-skew-y-2 hover:skew-x-6 hover:scale-105 hover:text-secondary sm:text-8xl"
				>
					Games
				</h1>
			</a>
			<a href="/apps">
				<h1
					class="text-5xl font-black uppercase transition-all hover:skew-x-6 hover:skew-y-2 hover:scale-105 hover:text-success sm:text-8xl"
				>
					Apps
				</h1>
			</a>
			<a href="/search">
				<h1
					class="text-5xl font-black uppercase transition-all hover:-skew-y-3 hover:skew-x-6 hover:scale-105 hover:text-primary sm:text-8xl"
				>
					Browse
				</h1>
			</a>
		</div>
	</div>
</div>
