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
			<span>We're currently accepting applications for our affiliate marketing program!</span>
		</div>
	</div>

	<h2>Affiliate Marketing Program</h2>

	<p>
		Are you passionate about gaming, browsing freedom, and social media? Do you love creating
		content and engaging with communities? We're looking for creative marketers to join our
		affiliate program and help spread the word about {config.branding.name}!
	</p>

	<h3>What We Offer</h3>

	<ul>
		<li>
			<strong>Guaranteed minimum payment of $50</strong> for completed campaigns (within terms)
		</li>
		<li>Flexible work schedule - work on your own time</li>
		<li>Creative freedom in content creation</li>
		<li>Support from our marketing team</li>
		<li>Opportunity for long-term partnerships</li>
		<li>Performance-based bonuses for exceptional results</li>
	</ul>

	<h3>How It Works</h3>

	<div class="not-prose">
		<div class="steps steps-vertical lg:steps-horizontal">
			<div class="step step-primary">Apply & Get Approved</div>
			<div class="step step-primary">Receive Your Campaign</div>
			<div class="step step-primary">Create & Post Content</div>
			<div class="step step-primary">Get Paid</div>
		</div>
	</div>

	<p>
		"And we just make a new site with a new link and assign it to a marketer for a month and pay
		them 50 dollars and see what happens" - that's our philosophy! We believe in giving talented
		creators the opportunity to showcase their skills while earning fair compensation for their
		work.
	</p>

	<h3>What We're Looking For</h3>

	<ul>
		<li>Active social media presence (TikTok, Instagram, Twitter, YouTube, etc.)</li>
		<li>Experience creating engaging content</li>
		<li>Understanding of gaming and/or tech communities</li>
		<li>Ability to follow brand guidelines and terms of service</li>
		<li>Consistent posting schedule</li>
		<li>Authentic engagement with your audience</li>
	</ul>

	<h3>Campaign Requirements</h3>

	<p>To qualify for the minimum $50 payment, your campaign must:</p>

	<ul>
		<li>Meet the agreed-upon posting schedule</li>
		<li>Follow our brand guidelines</li>
		<li>Comply with platform terms of service</li>
		<li>Include proper disclosures as required by law</li>
		<li>Maintain professional and appropriate content</li>
		<li>Provide campaign analytics and reports</li>
	</ul>

	<div class="not-prose my-8">
		<div class="card bg-primary text-primary-content">
			<div class="card-body">
				<h2 class="card-title">Ready to Get Started?</h2>
				<p>
					Join our Discord community to learn more about the affiliate program, connect with our
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
					High-performing campaigns may earn additional bonuses based on results and engagement.
				</p>
			</div>
		</div>

		<div class="collapse collapse-arrow mb-2 bg-base-200">
			<input type="radio" name="faq-accordion" />
			<div class="collapse-title text-xl font-medium">How long are campaigns?</div>
			<div class="collapse-content">
				<p>
					Most campaigns run for about one month, but this can vary based on the specific
					requirements and goals of each campaign.
				</p>
			</div>
		</div>

		<div class="collapse collapse-arrow mb-2 bg-base-200">
			<input type="radio" name="faq-accordion" />
			<div class="collapse-title text-xl font-medium">When do I get paid?</div>
			<div class="collapse-content">
				<p>
					Payment is processed after campaign completion and verification that all requirements have
					been met, typically within 1-2 weeks of campaign end.
				</p>
			</div>
		</div>

		<div class="collapse collapse-arrow mb-2 bg-base-200">
			<input type="radio" name="faq-accordion" />
			<div class="collapse-title text-xl font-medium">Do I need a certain number of followers?</div>
			<div class="collapse-content">
				<p>
					While we value quality engagement over follower count, we typically look for creators with
					at least 1,000 active followers and consistent engagement on their content. However, we
					also consider creators with smaller followings if they demonstrate exceptional engagement
					and creativity.
				</p>
			</div>
		</div>

		<div class="collapse collapse-arrow mb-2 bg-base-200">
			<input type="radio" name="faq-accordion" />
			<div class="collapse-title text-xl font-medium">What platforms can I use?</div>
			<div class="collapse-content">
				<p>
					We work with creators across all major platforms including TikTok, Instagram, YouTube,
					Twitter, Snapchat, and more. We'll discuss the best platform for your specific campaign.
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
