# This example builds on the concepts of the app_commands/basic.py example
# It's suggested to look at that one to understand certain concepts first.

from typing import Literal, Union, NamedTuple
from enum import Enum

import json

import discord
from discord import app_commands


MY_GUILD = discord.Object(id=785577600219086881)  # replace with your guild id
OWNER_1 = 314174289110892556
OWNER_2 = 400430761557229579
REQUEST_CHANNEL = 1054890431416111134

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
@app_commands.checks.cooldown(1, 5, key=lambda i: (i.user.id))
@app_commands.describe(name='Name of the game to add.',
    url="The URL of the game if applicable.",
    image="An image of the game, this can be a screenshot or a logo.",
    description="A short description of the game.",
    other_info="Any other information you would like to add. If you did not provide a URL, please provide information for how to play the game here.")
async def suggestgame(
    interaction: discord.Interaction,
    name: str,
    url: str = 'None provided',
    image: discord.Attachment = None,
    description: str = 'None provided',
    other_info: str = 'None provided'
):
    if url == 'None provided' and other_info == 'None provided':
        return await interaction.response.send_message('You must provide either a URL or other information.', ephemeral=True)
    
    embed = discord.Embed()
    embed.title = name
    embed.description = 'Suggested by ``' + interaction.user.name + '#' + interaction.user.discriminator + '``'
    embed.add_field(name='Information', value=f"Description: ``{str(description)}\n``URL to game: ``{str(url)}``\nOther Info: ``{str(other_info)}``")
    embed.set_footer(text=f'Suggestion ID: {str(interaction.id)} | Suggester ID: {str(interaction.user.id)}')

    if image is not None:
        embed.set_image(url=image.url)

    await interaction.response.send_message('Suggestion sent! If it is accepted you will recieve a ping.', ephemeral=True)
    embed_message = await client.get_channel(REQUEST_CHANNEL).send(embed=embed)
    # react with thumbs up and thumbs down
    await embed_message.add_reaction('👍')
    await embed_message.add_reaction('👎')

@client.tree.error
async def on_command_error(interaction: discord.Interaction, error: Exception):
    if isinstance(error, app_commands.errors.CommandOnCooldown):
        return await interaction.response.send_message(f'You are on cooldown! Please wait {error.retry_after} seconds before using this command again.', ephemeral=True)
    else:
        raise error

@client.tree.command()
@app_commands.describe(name='Name of the game to add (this is what the users see)',
    id="This is what the backend sees, please remove spaces (replacing them with -'s) and keep it lowercase",
    image="The image of the game, this will be shown on the game page",
    developer="The developer of the game",
    description="The description of the game, this will be shown on the game page",
    embed_url="The URL of the game, this will be shown on the game page"
)
async def addgame(
    interaction: discord.Interaction,
    name: str,
    id: str,
    image: discord.Attachment,
    developer: str,
    description: str,
    embed_url: str
):
    if interaction.user.id != OWNER_1 and interaction.user.id != OWNER_2: # replace with your user id
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

client.run('token') # replace with your token