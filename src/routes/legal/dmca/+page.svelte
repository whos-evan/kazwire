<script lang="ts">
	import { config } from '$lib/config';
</script>

<svelte:head>
	<title>{config.branding.name} - DMCA</title>
	<meta property="og:title" content="{config.branding.name} - DMCA" />
	<meta name="description" content="Play and browse for free now on {config.branding.name}!" />
	<meta
		property="og:description"
		content="Play and browse for free now on {config.branding.name}!"
	/>
</svelte:head>

<article class="prose lg:prose-lg">
	<h1>DMCA Policy</h1>
	<p>
		This Digital Millennium Copyright Act policy (“Policy”) applies to the {config.branding.mainDomain} website
		(“Website” or “Service”) and any of its related products and services (collectively, “Services”)
		and outlines how this Website operator (“Operator”, “we”, “us” or “our”) addresses copyright
		infringement notifications and how you (“you” or “your”) may submit a copyright infringement
		complaint.
	</p>
	<p>
		Protection of intellectual property is of utmost importance to us and we ask our users and their
		authorized agents to do the same. It is our policy to expeditiously respond to clear
		notifications of alleged copyright infringement that comply with the United States Digital
		Millennium Copyright Act (“DMCA”) of 1998, the text of which can be found at the <a
			href="https://www.copyright.gov/legislation/dmca.pdf">U.S. Copyright Office website</a
		>. This DMCA policy was created with the help of WebsitePolicies.
	</p>
	<h2>Table of Contents</h2>
	<ol>
		<li><a href="#consider">What to Consider Before Submitting a Copyright Complaint</a></li>
		<li><a href="#notifications">Notifications of Infringement</a></li>
		<li><a href="#counter-notifications">Counter-Notifications</a></li>
		<li><a href="#changes">Changes and Amendments</a></li>
		<li><a href="#reporting">Reporting Copyright Infringement</a></li>
	</ol>
	<h2 id="consider">What to Consider Before Submitting a Copyright Complaint</h2>
	<p>
		Before submitting a copyright complaint to us, consider whether the use could be considered fair
		use. Fair use states that brief excerpts of copyrighted material may, under certain
		circumstances, be quoted verbatim for purposes such as criticism, news reporting, teaching, and
		research, without the need for permission from or payment to the copyright holder. If you have
		considered fair use, and you still wish to continue with a copyright complaint, you may want to
		first reach out to the user in question to see if you can resolve the matter directly with the
		user.
	</p>
	<p>
		Please note that if you are unsure whether the material you are reporting is in fact infringing,
		you may wish to contact an attorney before filing a notification with us.
	</p>
	<p>
		We may, at our discretion or as required by law, share a copy of your notification or
		counter-notification with third parties. This may include sharing the information with the
		account holder engaged in the allegedly infringing activity or for publication.
	</p>
	<h2 id="notifications">Notifications of Infringement</h2>
	<p>
		If you are a copyright owner or an agent thereof, and you believe that any material available on
		our Services infringes your copyrights, then you may submit a written copyright infringement
		notification (“Notification”) using the contact details below pursuant to the DMCA. All such
		Notifications must comply with the DMCA requirements.
	</p>
	<p>
		Filing a DMCA complaint is the start of a pre-defined legal process. Your complaint will be
		reviewed for accuracy, validity, and completeness. If your complaint has satisfied these
		requirements, our response may include the removal or restriction of access to allegedly
		infringing material.
	</p>
	<p>
		If we remove or restrict access to materials or terminate an account in response to a
		Notification of alleged infringement, we will make a good faith effort to contact the affected
		user with information concerning the removal or restriction of access, which may include a full
		copy of your Notification (including your name, address, phone, and email address), along with
		instructions for filing a counter-notification.
	</p>
	<p>
		Notwithstanding anything to the contrary contained in any portion of this Policy, the Operator
		reserves the right to take no action upon receipt of a DMCA copyright infringement notification
		if it fails to comply with all the requirements of the DMCA for such notifications.
	</p>
	<h2 id="counter-notifications">Counter-Notifications</h2>
	<p>
		A user who receives a copyright infringement Notification may make a counter-Notification
		pursuant to sections 512(g)(2) and (3) of the US Copyright Act. If you receive a copyright
		infringement Notification, it means that the material described in the Notification has been
		removed from our Services or access to the material has been restricted. Please take the time to
		read through the Notification, which includes information on the Notification we received. To
		file a counter-notification with us, you must provide a written communication compliant with the
		DMCA requirements.
	</p>
	<p>
		Please note that if you are not sure whether certain material infringes the copyrights of others
		or that the material or activity was removed or restricted by mistake or misidentification, you
		may wish to contact an attorney before filing a counter-notification.
	</p>
	<p>
		Notwithstanding anything to the contrary contained in any portion of this Policy, the Operator
		reserves the right to take no action upon receipt of a counter-notification. If we receive a
		counter-notification that complies with the terms of 17 U.S.C. § 512(g), we may forward it to
		the person who filed the original Notification.
	</p>
	<h2 id="changes">Changes and Amendments</h2>
	<p>
		We reserve the right to modify this Policy or its terms related to the Website and Services at
		any time at our discretion. When we do, we will send you an email to notify you. We may also
		provide notice to you in other ways at our discretion, such as through the contact information
		you have provided.
	</p>
	<p>
		An updated version of this Policy will be effective immediately upon the posting of the revised
		Policy unless otherwise specified. Your continued use of the Website and Services after the
		effective date of the revised Policy (or such other act specified at that time) will constitute
		your consent to those changes.
	</p>
	<h2 id="reporting">Reporting Copyright Infringement</h2>
	<p>
		If you would like to notify us of the infringing material or activity, we encourage you to
		contact us using the details below:
	</p>
	<p>Email: {config.branding.supportEmail}</p>
	<p>This document was last updated on February 22, 2025</p>
</article>
