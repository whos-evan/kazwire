<script>
	import gamesJson from '../../routes/games/games.json';

	// go through each game and find the developers and put them in a string
	let developers = '';
	gamesJson['games'].forEach((game) => {
		if (game['developer'] != 'Unknown') {
			developers += game['developer'] + ', ';
		}
	});
	// remove duplicates
	developers = [...new Set(developers.split(', '))].join(', ');
	// remove the last comma and space
	developers = developers.slice(0, -2);
	developers = developers.replace(/,([^,]*)$/, ', and$1');
</script>

<div class="Credits w-full pl-10 pr-10 text-white">
	<h1 class="text-4xl font-bold row-span-1 text-center mt-5 mb-5">Credits</h1>
	<div class="text-xl row-span-4 ml-10 mr-10">
		<p>
			We would like to thank the following developers and publishers for their games:
			<br />
			<span class="text-xs">{developers}</span>
		</p>
		<br />
	</div>
	<div class="text-xl row-span-4 ml-10 mr-10">
		<p>
			We would also like to thank the following people for contributing to the site:
			<br />
			<span class="text-sm"
				><a class="hover:underline" href="https://github.com/silvereengames">kclive (silvereen)</a> and <a class="hover:underline" href="https://github.com/duckmob">zeno</a> for
				contributing to the GitHub, nev#0069 for providing domain(s),
				<a class="hover:underline" href="https://www.youtube.com/watch?v=qtC_-8FRgzM">Blazer</a> for
				creating content about the site, and to everyone who suggested games on our Discord. If you would
				like to see your name here just contribute to the site <a href="https://github.com/whos-evan/kazwire">here</a>!</span
			>
		</p>
	</div>
</div>
