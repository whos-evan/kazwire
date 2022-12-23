# Kazwire - Unblocked Games + Proxy

## Features:
- Looks super sleek!
- Dark and light mode.
- Constantly updating and adding the latest games.
- Massive library of games that are constantly being updated.
- Blazingly fast proxy.

## How can I add a game I want to it?
There are two current ways that you can add a game. You can make a pull request to add the game or you can join the [Discord](https://discord.gg/Ve7JBjpYJg) and request the game there with ``/requestgame`` on our Discord bot!

## How can I deploy it?
Well we don't support this at the moment. The proxy part of Kazwire will not work if you only do the following steps, it will require either editing the ``uv.config.js`` to point to a working bare-server (such as ``https://search.kazwire.com/bare/``). However if you would like to get it running here are the steps to do so!
1. Install Node.js and NPM
2. Clone the repository with ``git clone https://github.com/whos-evan/kazwire.git``
2a. Optional: edit ``uv.config.js`` in the ``./static/uv`` folder to a working bare-server such as ``https://search.kazwire.com/bare/``.
3. Run ``npm install`` in the directory where you cloned the repository.
4. Run ``npm run build`` to build Kazwire.
5. Run ``node index.js`` in the directory where you built Kazwire.

## Coming soon!
1. Better self-hosting support!
    - Docker support for easy deployment.
    - Possibly support for Railway and other PaaS providers.
    - Removal of the ``ad block disable`` message for users who selfhosting.