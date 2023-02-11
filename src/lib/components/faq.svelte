<script>
	import gamesJson from '../../routes/games/games.json';

	// go through each game and find the developers and put them in a string
	let developers = '';
	gamesJson['games'].forEach((game) => {
		if (game['developer'] != 'Unknown'){
			developers += game['developer'] + ', ';
		}
	});
	// remove duplicates
	developers = [...new Set(developers.split(', '))].join(', ');
	// remove the last comma and space
	developers = developers.slice(0, -2);
	developers = developers.replace(/,([^,]*)$/, ', and$1');
</script>

<div class="Faq w-full pl-10 pr-10">
	<div class="text-white grid grid-rows-5 mt-5">
		<h1 class="text-4xl text-white font-bold row-span-1 text-center mb-5">What is Kazwire?</h1>
		<div class="text-xl row-span-4 ml-10 mr-10">
			<p>
				Are you looking for a new place to play your favorite online games? Look no further! Our
				online gaming site is the perfect destination for gamers of all levels and interests.
			</p>
			<br />
			<p>
				With a wide variety of games to choose from, including popular titles like Run 3, Slope, and
				Retro Bowl, as well as many of lesser-known games in a variety of genres, there's something
				for everyone on our site.
			</p>
			<br />
			<p>
				We also give you the ability to browse the entire internet if you don't like what you see!
				If you ever need help please join our <a
					class="hover:cursor-pointer hover:underline"
					href="https://discord.gg/KRNy7EpXFD">Discord</a
				> and let us know!
			</p>
			<br />
			<p>
				Games shown in this website are the property of their respective owners. If you see your
				game here and would like it removed please refer to our <a
					class="hover:cursor-pointer hover:underline"
					href="/legal/dmca">DMCA page</a
				>.
			</p>
		</div>
	</div>
</div>