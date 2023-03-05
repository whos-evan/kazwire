import os
import json

# open the json file
with open('../src/routes/games/games.json') as f:
    data = json.load(f)

# create the tags
tags = []
for game in data['games']:
    # ask the user to input tags for the game given a list of categories
    print('Game: ' + game['name'])
    print('1. Action')
    print('2. Adventure')
    print('3. Casual')
    print('4. Indie')
    print('5. Multiplayer')
    print('6. Racing')
    print('7. RPG')
    print('8. Simulation')
    print('9. Sports')
    print('10. Strategy')
    print('11. None of the above')
    print('100. Exit and write')

    # get the user's input
    tag = input('Enter the number of the tag: ').split(' ')
    
    for t in tag:
        if t == '1':
            tags.append('action')
        elif t == '2':
            tags.append('adventure')
        elif t == '3':
            tags.append('casual')
        elif t == '4':
            tags.append('indie')
        elif t == '5':
            tags.append('multiplayer')
        elif t == '6':
            tags.append('racing')
        elif t == '7':
            tags.append('rpg')
        elif t == '8':
            tags.append('simulation')
        elif t == '9':
            tags.append('sports')
        elif t == '10':
            tags.append('strategy')
        elif t == '11':
            tags.append('none')
        elif t == '100':
            with open('../src/routes/games/games.json', 'w') as f:
                json.dump(data, f, indent=4)
            exit()
        else:
            print('Invalid input')
    
    # add the tags to the game
    game['tags'] = tags
    tags = []

# write the json file
with open('../src/routes/games/games.json', 'w') as f:
    json.dump(data, f, indent=4)

