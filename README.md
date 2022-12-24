# Kazwire

Kazwire allows you to play your favorite games whenever, wherever you need while also allowing you to browse the web freely and securely!
## Support

For support the fastest way to contact us is through Discord. Join our Discord server at https://discord.gg/Ve7JBjpYJg.
## Installation

Support for self-hosting will be coming soon!
## Run Locally (for developement purposes)

The proxy part of Kazwire will not work if you only do the following steps. (Support for that is coming soon!)
Install Node.js and NPM
Clone the repository with
```bash
git clone https://github.com/whos-evan/kazwire.git
```

Set the active directory to the cloned repository.
```bash
cd kazwire
```

Edit ``uv.config.js`` in the ``./static/uv`` folder to a working bare-server (e.g. ``https://search.kazwire.com/bare/``).
```bash
nano static/uv/uv.config.js
```
Install the necessary packages using npm, build it, and run it.
```bash
npm install
npm run dev
```


## Adding games
We have a games.json file located [here](https://github.com/whos-evan/kazwire/blob/master/src/routes/games/games.json) which you can edit to add your favorite games!

### Formatting of the games.json file
Example of the formatting
```json
{
    "games": [
        {
            "description": "Description of the game",
            "developer": "Developer of the game",
            "id": "id-of-the-game",
            "image": "id-of-the-game.png",
            "name": "Title Case: Name of the Game",
            "releaseDate": "?",
            "embedURL": "https://urlofthegame.tld",
            "popular": true,
            "emulator": "ruffle",
        }
    ]
}
```

`description`: Full description of the game, not too long or short.

`developer`: Ensure to give credit to everyone necessary.

`id`: Ensure that there are no spaces and that everything is lowercase.

`image`: This will grab the image from the `./static/game/img` folder, the filename should match the `id`.

`name`: The name that will be shown to the user. Usually in title case.

`releaseDate`: May be used in the future for now it is usually `?`.

`embedURL`: If the game is only accessible through a proxy then include the URL that should be proxied.

`popular`: Boolean (either `true` or `false`). Applies only if the game is popular or not.

`emulator`: Can either be ruffle or emulatorjs. If it is ruffle then there only needs to be the `swf` file in `./static/game/[id-of-game]/[id-of-game].swf` otherwise the necessary files (`index.html`, etc.) must be included in the `./static/game/[id-of-game]/[id-of-game].swf` folder.

### Other information:

 - If the game has static assets (i.e. it isn't proxied) then the necessary files must be placed in the `./static/game/[id-of-game]` folder along with an `index.html` file.
 - An image must be placed in the `./static/game/img` directory that matches the image provided in the json file.
## Roadmap
- Better self-hosting support!
    - Docker support for easy deployment.
    - Possibly support for Railway and other PaaS providers.
    - Removal of the ``ad block disable`` message for users who selfhosting.

- Splitting of games assets and website code with different repositories.
## Screenshots!

![brave_Jl0NzV94ME](https://user-images.githubusercontent.com/72959444/209419997-4a995a17-1b1d-4b21-b9ef-f19c10d3c0d8.png)
![brave_2PqHjNkeiM](https://user-images.githubusercontent.com/72959444/209420008-c458e229-074f-4a4f-a486-dcb682f1dfe9.png)
![brave_DOGyTI4KJG](https://user-images.githubusercontent.com/72959444/209419990-b47880d2-2f08-40ba-a669-005a1456f1b2.png)




