<script>
	import newsJson from './news.json';
	let newsText = newsJson['news']['text'];
	let newsDate = newsJson['news']['date'];
</script>

<div class="text-white w-full pl-10 pr-10 text-center ">
	<h1 class="text-4xl font-bold mb-5">📰 News: {newsDate}</h1>
	<p class="text-xl text-left">{newsText}</p>
</div>
