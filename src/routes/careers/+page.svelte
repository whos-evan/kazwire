<script lang="ts">
	import { config } from '$lib/config';
	import Icon from '@iconify/svelte';
</script>

<svelte:head>
	<title>{config.branding.name} - Careers</title>
	<meta property="og:title" content="{config.branding.name} - Careers" />
	<meta
		name="description"
		content="Join the {config.branding
			.name} affiliate marketing program and earn money promoting our platform!"
	/>
	<meta
		property="og:description"
		content="Join the {config.branding
			.name} affiliate marketing program and earn money promoting our platform!"
	/>
</svelte:head>

<article class="prose p-6 lg:prose-xl">
	<h1>Join Our Team</h1>

	<div class="not-prose mb-8">
		<div class="alert alert-info">
			<Icon
                class="h-6 w-6 shrink-0 stroke-current"
                icon="material-symbols:info-outline"
            />
			<span>We're currently accepting applications for our social media marketing team!</span>
		</div>
	</div>

	<h2>Social Media Marketing</h2>

	<p>
		We'll teach you how to make engaging TikToks/Reels/YouTube Shorts (you make one video and upload it to all 3 platforms) and pay you to promote our links. <br />
		Make videos on your time throughout the month and get paid a guaranteed minimum of $50 per month! <br />
		Performance bonuses have led some of our team members to earn over $300 a month.
		{config.branding.name}!
	</p>

	<h3>What We Offer</h3>

	<ul>
		<li>
			<strong>Guaranteed minimum payment of $50</strong>
		</li>
		<li>Complete training & help so you go viral with zero experience.</li>
		<li>Free premium for you and your friends (hundreds of extra links).</li>
		<li>You can design your own site with your own name if you want, too.</li>
		<li>Referrals for paid marketing roles at other companies and startups.</li>
		<li>Bonuses for uploading streak, view count, engagement count, etc., that add up.</li>
	</ul>

	<h3>How It Works</h3>

	<div class="not-prose">
		<div class="steps steps-vertical lg:steps-horizontal">
			<div class="step step-primary">Apply</div>
			<div class="step step-primary">Get trained/make your accounts</div>
			<div class="step step-primary">Create & Post Videos</div>
			<div class="step step-primary">Get Paid</div>
		</div>
	</div>

	<p>
		If you're terrible at making videos we simply won't pay you again lol.
		But if you follow our training and get tens of thousands of views,
		you can stay for years and make thousands. We're able to run this program and guaranteed rate by being smart about it.
	</p>

	<h3>What We're Looking For</h3>

	<ul>
		<li>Over 13 years old.</li>
		<li>Competent</li>
		<li>Active on Discord</li>
		<li>Addicted to scrolling (but seriously...)</li>
	</ul>

	<h3>Application Requirements & Misc.</h3>

	<p>Your application should take no longer than 5 minutes.</p>

	<ul>
		<li>We need basic info like age & state (for legal reasons)</li>
		<li>Our docs, videos, and support makes getting started take less than 30 minutes.</li>
		<li>We'll review your videos to make sure you're actually putting in some effort.</li>
		<li>Any questions? Ask them in our Discord server.</li>
	</ul>

	<div class="not-prose my-8">
		<div class="card bg-primary text-primary-content">
			<div class="card-body">
				<h2 class="card-title">Ready to Get Started?</h2>
				<p>
					Join our Discord community to learn more about the program, connect with our
					team, and get started with your application!
				</p>
				<div class="card-actions justify-end flex flex-col">
					<a
						href={config.social.discord}
						target="_blank"
						rel="noopener noreferrer"
						class="btn btn-secondary w-full outline outline-1 outline-black"
					>
						<Icon class="h-6 w-6" icon="ic:baseline-discord" />
						Join Discord
					</a>
				</div>
			</div>
		</div>
	</div>

	<h3>Frequently Asked Questions</h3>

	<div class="not-prose">
		<div class="collapse collapse-arrow mb-2 bg-base-200">
			<input type="radio" name="faq-accordion" />
			<div class="collapse-title text-xl font-medium">How much can I earn?</div>
			<div class="collapse-content">
				<p>
					You're guaranteed a minimum of $50 for each completed campaign that meets our terms.
					You're nearly guaranteed more than that due to streak, view count, and engagement bonuses.
				</p>
			</div>
		</div>

		<div class="collapse collapse-arrow mb-2 bg-base-200">
			<input type="radio" name="faq-accordion" />
			<div class="collapse-title text-xl font-medium">How long are campaigns?</div>
			<div class="collapse-content">
				<p>
					A 'campaign' is marketing speak for how long you're uploading the same style of video. This is almost always one month.
				</p>
			</div>
		</div>

		<div class="collapse collapse-arrow mb-2 bg-base-200">
			<input type="radio" name="faq-accordion" />
			<div class="collapse-title text-xl font-medium">When do I get paid?</div>
			<div class="collapse-content">
				<p>
					Google pays us on the 21st of each month, and we process payments within 3-5 days after that.
				</p>
			</div>
		</div>

		<div class="collapse collapse-arrow mb-2 bg-base-200">
			<input type="radio" name="faq-accordion" />
			<div class="collapse-title text-xl font-medium">Do I need prior experience?</div>
			<div class="collapse-content">
				<p>
					Prior experience will make it easier to unlock our highest bonuses, but you can still make hundreds per month pretty easily without any prior experience.
					Our thorough training and support will get you up to speed quickly.
				</p>
			</div>
		</div>

		<div class="collapse collapse-arrow mb-2 bg-base-200">
			<input type="radio" name="faq-accordion" />
			<div class="collapse-title text-xl font-medium">What platforms can I use?</div>
			<div class="collapse-content">
				<p>
					You make the same video & upload it to TikTok, Instagram Reels, and YouTube Shorts.
					If you want to use other platforms to unlock link click bonuses that's fine too.
				</p>
			</div>
		</div>
	</div>

	<h3>Contact Us</h3>

	<p>
		Have questions that aren't answered here? The best way to get in touch with our team and learn
		more about opportunities is through our Discord community. Our team is active there and can
		provide personalized answers to your questions.
	</p>

	<p>
		For business inquiries, you can also reach us at <a href="mailto:{config.branding.supportEmail}"
			>{config.branding.supportEmail}</a
		>.
	</p>

	<div class="not-prose mt-8">
		<div class="alert alert-success">
			<Icon
                class="h-6 w-6 shrink-0 stroke-current"
                icon="material-symbols:check-circle-outline"
            />
			<span>
                Ready to turn your social media skills into income? Join our Discord to get started!
            </span>

            <button
                onclick="window.open('{config.social.discord}', '_blank')"
                class="btn btn-success ml-4 outline outline-1 outline-black"
            >
                <Icon class="h-6 w-6" icon="ic:baseline-discord" />
                Join Discord
            </button>
		</div>
	</div>
</article>
