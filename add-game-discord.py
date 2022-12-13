# This example builds on the concepts of the app_commands/basic.py example
# It's suggested to look at that one to understand certain concepts first.

from typing import Literal, Union, NamedTuple
from enum import Enum

import errno

import json
import shutil

import discord
from discord import app_commands
import typing


MY_GUILD = discord.Object(id=785577600219086881)  # replace with your guild id


class MyClient(discord.Client):
    def __init__(self):
        super().__init__(intents=discord.Intents.default())
        self.tree = app_commands.CommandTree(self)

    async def setup_hook(self):
        self.tree.copy_global_to(guild=MY_GUILD)
        await self.tree.sync(guild=MY_GUILD)


client = MyClient()


@client.event
async def on_ready():
    print(f'Logged in as {client.user} (ID: {client.user.id})')
    print('------')


# A transformer is a class that specifies how a parameter in your code
# should behave both when used on Discord and when you receive it from Discord.
# There are a few built-in transformers, this example will show these along with
# creating your own for maximum flexibility.

# The first built-in transformer is app_commands.Range
# It works on `str`, `int`, and `float` options and tells you
# the maximum and minimum values (or length in the case of `str`) allowed

def write_json(new_data, filename):
    with open(filename,'r+') as file:
          # First we load existing data into a dict.
        file_data = json.load(file)
        # Join new_data with file_data inside emp_details
        file_data["games"].append(new_data)
        
        # Sets file's current position at offset.
        file.seek(0)
        # convert back to json.
        json.dump(file_data, file, indent = 4)

@client.tree.command()
@app_commands.describe(name='Name of the game to add (this is what the users see)',
    id="This is what the backend sees, please remove spaces (replacing them with -'s) and keep it lowercase",
    image="The image of the game, this will be shown on the game page",
    developer="The developer of the game",
    description="The description of the game, this will be shown on the game page",
    embed_url="The URL of the game, this will be shown on the game page",
    swf_file="The SWF file of the game, this will be shown on the game page",
    n64_file="The N64 file of the game, this will be shown on the game page")
async def addgame(
    interaction: discord.Interaction,
    name: str,
    id: str,
    image: discord.Attachment,
    developer: str,
    description: str,
    embed_url: str = None,
    swf_file: discord.Attachment = None,
    n64_file: discord.Attachment = None
):
    if interaction.user.id != 314174289110892556 and interaction.user.id != 400430761557229579: # replace with your user id
        return await interaction.response.send_message('You do not have permission to use this command!', ephemeral=True)
    if embed_url is not None:
        # get image file extension
        image_extension = image.filename.split('.')[-1]
        image_name = id + '.' + image_extension

        gameJson = ({
            'name': name,
            'id': id,
            'image': image_name,
            'developer': developer,
            'description': description,
            'embedURL': embed_url
        })
        write_json(gameJson, './proxy/kazwire/src/routes/games/games.json')
        image = await image.save('./proxy/kazwire/static/game/img/' + image_name)
        await interaction.response.send_message(f'Game added!\nJSON: ```{gameJson}```')

    elif swf_file is not None:
        # get image file extension
        image_extension = image.filename.split('.')[-1]
        image_name = id + '.' + image_extension
        
        swf_file.save('./proxy/kazwire/static/game/' + id + '/' + id + '.swf')
        def copyanything(src, dst):
            try:
                shutil.copytree(src, dst)
            except OSError as exc: # python >2.5
                if exc.errno in (errno.ENOTDIR, errno.EINVAL):
                    shutil.copy(src, dst)
                else: raise

        copyanything('./proxy/kazwire/static/game/ruffle-template', './proxy/kazwire/static/game/' + id)

        with open(r'./proxy/kazwire/static/game/' + id + '/index.html', 'r') as file:
  
            # Reading the content of the file
            # using the read() function and storing
            # them in a new variable
            data = file.read()

            data = data.replace('ruffle-template', id)

        with open(r'./proxy/kazwire/static/game/' + id + '/index.html', 'w') as file:
  
            # Writing the replaced data in our
            # text file
            file.write(data)

        gameJson = ({
            'name': name,
            'id': id,
            'image': image_name,
            'developer': developer,
            'description': description,
            'emulator': 'ruffle'
        })
        write_json(gameJson, './proxy/kazwire/src/routes/games/games.json')

        image = await image.save('./proxy/kazwire/static/game/img/' + image_name)

        await interaction.response.send_message(f'Game added!\nJSON: ```{gameJson}```')

    elif n64_file is not None:
        # get image file extension
        image_extension = image.filename.split('.')[-1]
        image_name = id + '.' + image_extension

        n64_file.save('./proxy/kazwire/static/game/' + id + '/' + id + '.n64')

        def copyanything(src, dst):
            try:
                shutil.copytree(src, dst)
            except OSError as exc: # python >2.5
                if exc.errno in (errno.ENOTDIR, errno.EINVAL):
                    shutil.copy(src, dst)
                else: raise

        copyanything('./proxy/kazwire/static/game/n64-template', './proxy/kazwire/static/game/' + id)

        with open(r'./proxy/kazwire/static/game/' + id + '/index.html', 'r') as file:
  
            # Reading the content of the file
            # using the read() function and storing
            # them in a new variable
            data = file.read()

            data = data.replace('game-url-here', id)

        with open(r'./proxy/kazwire/static/game/' + id + '/index.html', 'w') as file:
  
            # Writing the replaced data in our
            # text file
            file.write(data)

        gameJson = ({
            'name': name,
            'id': id,
            'image': image_name,
            'developer': developer,
            'description': description,
            'emulator': 'emulatorjs'
        })
        write_json(gameJson, './proxy/kazwire/src/routes/games/games.json')

        image = await image.save('./proxy/kazwire/static/game/img/' + image_name)

client.run('token')