<script lang="ts">
	import { config } from '$lib/config';
</script>

<svelte:head>
	<title>{config.branding.name} - About</title>
	<meta property="og:title" content="{config.branding.name} - About" />
	<meta name="description" content="Learn more about {config.branding.name}, owned by Kazwire LLC and run by Evan and Zachary." />
	<meta
		property="og:description"
		content="Learn more about {config.branding.name}, owned by Kazwire LLC and run by Evan and Zachary."
	/>
</svelte:head>

<main class="min-h-screen bg-base-100 dark:bg-base-900 p-6">
	<div class="container mx-auto max-w-3xl">
		<article class="bg-base-200 dark:bg-base-800 p-8 rounded-box shadow-lg">
			<!-- Title -->
			<h1 class="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
				About {config.branding.name}
			</h1>

			<!-- Owner and Team Section -->
			<div class="mb-8">
				<h2 class="text-2xl font-semibold mb-4">Ownership and Team</h2>
				<p class="text-gray-700 dark:text-gray-200">
					{config.branding.name} is proudly owned and operated by <strong>Kazwire LLC</strong>, a company dedicated to
					innovative web solutions and empowering users through technology. The site is run by <strong>Evan</strong> and
					<strong>Zachary</strong>, who bring their expertise and passion to create a seamless and enjoyable experience for
					our users.
				</p>
			</div>

			<!-- Mission Section -->
			<div class="mb-8">
				<h2 class="text-2xl font-semibold mb-4">Our Mission</h2>
				<p class="text-gray-700 dark:text-gray-200">
					In a world where boundaries are blurred, and voices are stifled, {config.branding.name} emerges as
					a sanctuary of hope—a place where the spirit of freedom on the internet refuses to be quelled. Our
					story is one of passion, heart, and an unyielding desire to safeguard the very essence of the internet—the
					boundless realm where dreams are born and ideas soar.
				</p>
			</div>

			<!-- History Section -->
			<div class="mb-8">
				<h2 class="text-2xl font-semibold mb-4">Our History</h2>
				<p class="text-gray-700 dark:text-gray-200">
					At {config.branding.name}, we cherish the memory of the internet's inception—an era when
					visionaries painted a canvas of limitless possibilities, where connectivity knew no bounds, and
					where knowledge flowed like an endless river. It was a time when freedom was the guiding light,
					illuminating the path towards progress and understanding.
				</p>
				<p class="text-gray-700 dark:text-gray-200">
					Yet, as time passed, shadows began to cast their pallor upon the online landscape. The free and
					open internet we once knew started to fade, giving way to censorship, oppression, and control.
					The very essence of what the internet was meant to be seemed to wither away, and we couldn't
					bear to watch this transformation without action.
				</p>
			</div>

			<!-- Values Section -->
			<div class="mb-8">
				<h2 class="text-2xl font-semibold mb-4">Our Values</h2>
				<p class="text-gray-700 dark:text-gray-200">
					The foundation of {config.branding.name} is built on the pillars of <strong>privacy</strong>,
					<strong>anonymity</strong>, and <strong>trust</strong>. We are committed to safeguarding your
					personal freedom and ensuring that your voice remains your own. Your privacy is not a commodity
					to be traded; it is a sacred right, and we stand as guardians, shielding you from prying eyes.
				</p>
			</div>

			<!-- Call to Action Section -->
			<div class="mb-8">
				<h2 class="text-2xl font-semibold mb-4">Join Us</h2>
				<p class="text-gray-700 dark:text-gray-200">
					We invite you to join us on this journey—a journey of hope and liberation. Together, let us
					cherish the internet's soul, nurturing its spirit of freedom so that it may thrive for
					generations to come. Let us create a world where the exchange of ideas knows no restrictions,
					and where the internet remains a beacon of unity and enlightenment.
				</p>
			</div>

			<!-- Closing Message -->
			<div class="text-center">
				<p class="text-gray-700 dark:text-gray-200">
					Thank you for being part of our heartfelt mission. Together, we will make a difference and
					continue to believe in the power of freedom.
				</p>
				<p class="text-gray-700 dark:text-gray-200 mt-4">With love and boundless hope,</p>
				<p class="text-gray-700 dark:text-gray-200 font-semibold">The {config.branding.name} Team</p>
			</div>
		</article>
	</div>
</main>