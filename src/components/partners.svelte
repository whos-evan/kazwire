<script>
	import Box from './box.svelte';
	import { onMount } from 'svelte';

	let interval;

	onMount(() => {
		let partnersScroll = document.getElementById('partnersScroll');
		let direction = 1;

		setTimeout(function () {
			interval = setInterval(function () {
				let scrollAmount = partnersScroll.scrollWidth - partnersScroll.clientWidth;
				partnersScroll.scrollLeft += 5 * direction;
				if (partnersScroll.scrollLeft >= scrollAmount) {
					direction = -1;
				}
				if (partnersScroll.scrollLeft <= 0) {
					direction = 1;
				}
			}, 100);
		}, 5000);

		partnersScroll.addEventListener('mouseover', function () {
			clearInterval(interval);
		});

		partnersScroll.addEventListener('mouseout', function () {
			interval = setInterval(function () {
				let scrollAmount = partnersScroll.scrollWidth - partnersScroll.clientWidth;
				partnersScroll.scrollLeft += 5 * direction;
				if (partnersScroll.scrollLeft >= scrollAmount) {
					direction = -1;
				}
				if (partnersScroll.scrollLeft <= 0) {
					direction = 1;
				}
			}, 100);
		});
	});
</script>

<div class="Partners w-full pl-10 pr-10">
	<h1 class="text-4xl text-white font-bold text-center mb-5">Partners</h1>
	<div
		id="partnersScroll"
		class="scroll-smooth grid grid-flow-col lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 overflow-x-scroll px-10 py-10"
		style="grid-template-columns: repeat(auto-fill,minmax(500px,1fr)); grid-auto-columns: minmax(500px,1fr);"
	>
		<Box
			title="WebLFG"
			image="weblfg.png"
			description="From internet classics to present-day favorites, it's online entertainment right at your fingertips."
			href="https://weblfg.com"
			color="#e77e7e"
		/>
		<Box
			title="Bigfoot's Game Shack"
			image="bigfoot.png"
			description="Built for real gamers. 100+ Games, Apps (Discord, etc), Tab Cloaking, and Game Cloaking!"
			href="https://bgs.pages.dev/"
			color="#774e24"
		/>
		<Box
			title="Partner with us!"
			image="kazwire.png"
			description="We would love to partner with you and have you showcased here! Click the box to join our Discord server!"
			href="https://discord.gg/kazwire"
			color="#f49724"
		/>
	</div>
</div>
