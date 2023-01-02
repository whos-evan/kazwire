<script>
	import Nav from '../../../components/nav.svelte';
	import Footer from '../../../components/footer.svelte';

    let gameTitle;
    let gameID;
    let gameDescription;
    let gameImageURL;
    let gameDeveloper;
    let gameReleaseDate;
    let gameStaticURL;
    let gamePopular;
    let gameEmulator;
    let gameEmulatorFileURL;
</script>

<Nav />
<div class="w-full mt-10 text-center text-white">
	<h1 class="text-3xl">JSON Generator</h1>
	<div class="grid grid-cols-2 gap-5 mt-5 w-[50vw] ml-auto mr-auto">
		<div class="row-start-1 col-start-1">
			Game Title:
			<input
				id="game-title"
				type="text"
				class="text-black rounded-lg p-2"
				placeholder="Run 3"
                bind:value={gameTitle}
			/>
		</div>
		<div class="row-start-1 col-start-2">
			Game ID
			<input
				id="game-id"
				type="text"
				class="text-black rounded-lg p-2 w-[18rem]"
				placeholder="run-3"
                bind:value={gameID}
			/>
		</div>
        <div class="row-start-2 col-span-2">
			Game Description
			<textarea
				id="game-id"
				class="text-black rounded-lg p-2 h-[5rem] w-[30rem]"
				placeholder="Run 3 is the first Run game to introduce a storyline, mainly told through cutscenes."
                bind:value={gameDescription}
			/>
		</div>
        <div class="row-start-3 col-start-1">
			Image URL
			<input
				id="game-image-url"
				type="text"
				class="text-black rounded-lg p-2 w-[18rem]"
				placeholder="https://i.imgur.com/QYCHKIv.png"
                bind:value={gameImageURL}
			/>
		</div>
        <div class="row-start-3 col-start-2">
			Developer
			<input
				id="game-developer"
				type="text"
				class="text-black rounded-lg p-2 w-[18rem]"
				placeholder="Joseph Cloutier"
                bind:value={gameDeveloper}
			/>
		</div>
        <div class="row-start-4 col-start-1">
			Release Date
			<input
				id="game-release-date"
				type="text"
				class="text-black rounded-lg p-2 w-[18rem]"
				placeholder="6/5/2014"
                bind:value={gameReleaseDate}
			/>
		</div>
        <div class="row-start-4 col-start-2">
            Popular:
			<select id="game-popular" class="text-black p-3 rounded-md" bind:value={gamePopular}>
                <option value="false">False</option>
                <option value="true">True</option>
            </select>
        </div>
        <div class="row-start-5 col-start-1">
            Game Emulator:
			<select id="game-emulator" class="text-black p-3 rounded-md" bind:value={gameEmulator}>
                <option value="none">None</option>
                <option value="ruffle">Ruffle</option>
            </select>
        </div>
        {#if gameEmulator === "ruffle"}
            <div class="row-start-5 col-start-2">
                Game Emulator File (.swf)
                <input
                    id="game-emulator-file"
                    type="text"
                    class="text-black rounded-lg p-2 w-[18rem]"
                    placeholder="GDrive link."
                    bind:value={gameEmulatorFileURL}
                />
            </div>
        {/if}
        <div class="row-start-6 col-span-2">
			Static Game Files
			<input
				id="game-release-date"
				type="text"
				class="text-black rounded-lg p-2 w-[18rem]"
				placeholder="GDrive link or a GitHub link."
                bind:value={gameStaticURL}
			/>
		</div>
	</div>
</div>

<div class="mt-10 w-1/2 m-auto bg-white rounded-lg">
    <code class="text-green-700">
        <!-- align center -->
        <pre class="p-5">
            {JSON.stringify({
                title: gameTitle,
                id: gameID,
                description: gameDescription,
                image: gameImageURL,
                developer: gameDeveloper,
                releaseDate: gameReleaseDate,
                popular: gamePopular === "true" ? true : false,
                emulator: gameEmulator,
                emulatorFile: gameEmulatorFileURL,
                staticURL: gameStaticURL
            }, null, 4)}
        </pre>
    </code>
</div>
<Footer />
