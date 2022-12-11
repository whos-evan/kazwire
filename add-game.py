import json
import shutil
import urllib.request

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

game = input('What is the name of the game? ')
print('Adding game', game)

id = input('What is the ID of the game? ')
print('Adding game', game, 'with ID', id)

image = input('What is the image URL of the game? ')
print('Adding game', game, 'with ID', id, 'and image', image)

imageFileName = input('What is the image file name? ')
print('Adding game', game, 'with ID', id, 'and image', image, 'and imageFileName', imageFileName)

developer = input('What is the developer of the game? ')
print('Adding game', game, 'with ID', id, 'and image', image, 'and developer', developer)

description = input('What is the description of the game?' )
print('Adding game', game, 'with ID', id, 'and image', image, 'and developer', developer, 'and description', description)

isEmbed = input('Is the game embeddable? ')
if isEmbed == 'yes':

    print('Adding game', game, 'with ID', id, 'and image', image, 'and developer', developer, 'and description', description, 'and isEmbed', isEmbed)

    embedURL = input('What is the embed URL?')
    print('Adding game', game, 'with ID', id, 'and image', image, 'and developer', developer, 'and description', description, 'and isEmbed', isEmbed, 'and embedURL', embedURL)

    gameJson = ({
        'name': game,
        'id': id,
        'image': imageFileName,
        'developer': developer,
        'description': description,
        'embedURL': embedURL
    })
    write_json(gameJson, './src/routes/games/games.json')

    urllib.request.urlretrieve(image, "./static/games/img/" + imageFileName)

else:
    isSwf = input('Is the game a swf? (yes/no) ')
    if isSwf == 'yes':

        import shutil, errno

        def copyanything(src, dst):
            try:
                shutil.copytree(src, dst)
            except OSError as exc: # python >2.5
                if exc.errno in (errno.ENOTDIR, errno.EINVAL):
                    shutil.copy(src, dst)
                else: raise

        copyanything('./static/games/ruffle-template', './static/games/' + id)

        with open(r'./static/games/' + id + '/index.html', 'r') as file:
  
            # Reading the content of the file
            # using the read() function and storing
            # them in a new variable
            data = file.read()

            data = data.replace('ruffle-template', id)

        with open(r'./static/games/' + id + '/index.html', 'w') as file:
  
            # Writing the replaced data in our
            # text file
            file.write(data)

        print('Adding game', game, 'with ID', id, 'and image', image, 'and developer', developer, 'and description', description, 'and isEmbed', isEmbed)

        gameJson = {
            'name': game,
            'id': id,
            'image': imageFileName,
            'developer': developer,
            'description': description
        }
        write_json(gameJson, './src/routes/games/games.json')
        
        urllib.request.urlretrieve(image, "./static/games/img/" + imageFileName)
    else:
        isEmbed = 'no'
        print('Adding game', game, 'with ID', id, 'and image', image, 'and developer', developer, 'and description', description, 'and isEmbed', isEmbed)

        gameJson = {
            'name': game,
            'id': id,
            'image': imageFileName,
            'developer': developer,
            'description': description
        }
        write_json(gameJson, './src/routes/games/games.json')

        urllib.request.urlretrieve(image, "./static/games/img/" + imageFileName)