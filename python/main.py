import tkinter as tk
from tkinter import filedialog
import re

def is_valid_date(date):
    # Regex to match a date in the format yyyy-mm-dd
    regex = r'^\d{4}-\d{2}-\d{2}$'

    # Check if the date matches the regex
    return re.match(regex, date) is not None

import io
# Create a global variable to store the selected file object
selected_file = None
def select_file():
    # Open a file selection dialog and get the selected file's path
    file_path = filedialog.askopenfilename()

    # Change image to the file path
    image_button.config(text=file_path)

    # Check if the user cancelled the file selection dialog
    if file_path == "":
        return

    # Open the file and store it in the global variable
    global selected_file
    selected_file = io.open(file_path, 'rb')

import shutil

def select_folder():
    # Open a folder selection dialog and get the selected folder's path
    source_folder_path = filedialog.askdirectory()

    # Check if the user cancelled the folder selection dialog
    if source_folder_path == "":
        return

    # Get the destination folder path
    if not game_id_entry.get():
        tk.messagebox.showerror("Error", "Game ID is required")
        return
    
    destination_folder_path = "../static/game/" + game_id_entry.get() + "/"

    print("Copying " + source_folder_path + " to " + destination_folder_path)
    # Copy the selected folder and its contents to the destination folder
    shutil.copytree(source_folder_path, destination_folder_path)

# Create the main window
root = tk.Tk()
root.title("Game Information")

# Create the widgets
game_name_label = tk.Label(root, text="Game Name:*")
game_name_entry = tk.Entry(root)
game_id_label = tk.Label(root, text="Game ID:*")
game_id_entry = tk.Entry(root)
image_label = tk.Label(root, text="Image:*")
image_button = tk.Button(root, text="Select Image*", command=select_file)
developer_label = tk.Label(root, text="Developer:*")
developer_entry = tk.Entry(root)
description_label = tk.Label(root, text="Description:*")
description_entry = tk.Entry(root, width=25)

# optional widgets
embed_url_label = tk.Label(root, text="Embed URL: (valid URL)")
embed_url_entry = tk.Entry(root)
release_date_label = tk.Label(root, text="Release Date: (yyyy-mm-dd)")
release_date_entry = tk.Entry(root)
popular_label = tk.Label(root, text="Popular: (Select if the game is popular)")
popular_var = tk.BooleanVar()
popular_checkbox = tk.Checkbutton(root, variable=popular_var)
emulator_type_label = tk.Label(root, text="Emulator Type: (Ruffle or EmulatorJS)")
emulator_type_var = tk.StringVar(root)
emulator_type_var.set("None")  # default value
emulator_type_menu = tk.OptionMenu(root, emulator_type_var, "None", "Ruffle", "EmulatorJS")
folder_label = tk.Label(root, text="Select folder for static game: (MUST HAVE INDEX.HTML FILE)")
folder_button = tk.Button(root, text="Select Folder", command=select_folder)


def submit():
    # Get the user-entered values
    game_name = game_name_entry.get()
    game_id = game_id_entry.get()
    image = selected_file  # get the file object from the global variable
    if image is None:  # user cancelled the file selection dialog
        tk.messagebox.showerror("Error", "Image is required")
        return

    # Get the image file name and ensure that it matches the game ID
    image_filename = image.name.split("/")[-1]
    # rename the file to the game ID
    image_filename = game_id + image_filename[image_filename.rfind("."):]

    developer = developer_entry.get()
    description = description_entry.get()
    embed_url = embed_url_entry.get()
    release_date = release_date_entry.get()
    popular = popular_var.get()
    emulator_type = emulator_type_var.get()
    if emulator_type == "Ruffle":
        emulator_type = "ruffle"
    elif emulator_type == "EmulatorJS":
        emulator_type = "emulatorJS"

   # Validate the user-entered values
    if not game_name:
        tk.messagebox.showerror("Error", "Game name is required")
        return
    if not game_id:
        tk.messagebox.showerror("Error", "Game ID is required")
        return
    if not image:
        tk.messagebox.showerror("Error", "Image is required")
        return
    if not developer:
        tk.messagebox.showerror("Error", "Developer is required")
        return
    if not description:
        tk.messagebox.showerror("Error", "Description is required")
        return
    if release_date and not is_valid_date(release_date):
        tk.messagebox.showerror("Error", "Invalid date")
        return

    # Submit the form
    tk.messagebox.showinfo("Success", "Form submitted successfully editing the game.json file now...")
    import json

    print("Opening games.json file...")
    with open('../src/routes/games/games.json', 'r') as f:
        data = json.load(f)

        data['games'].append({
        "name": game_name,
        "id": game_id,
        "image": image_filename,
        "developer": developer,
        "description": description,
        # optional fields (only add them if they are not empty)
        "embed_url": embed_url if embed_url else None,
        "release_date": release_date if release_date else None,
        "popular": popular if popular else None,
        "emulator_type": emulator_type if emulator_type != "None" else None
    })

    # remove null values
    for game in data['games']:
        for key, value in list(game.items()):
            if value is None:
                del game[key]

    print ("Writing to games.json file...")
    with open('../src/routes/games/games.json', 'w') as f:
        json.dump(data, f, indent=4)

    # Place the image file in the correct folder
    print("Moving image file to the correct folder...")
    import shutil
    image_path = "../static/game/img/" + game_id + image.name[image.name.rindex("."):]
    shutil.copyfileobj(image, open(image_path, 'wb'))

    
    # Updated the games.json file successfully
    print("Updated the games.json file successfully")
    print("")
    # Information about the game
    print("Game Information:")
    print("Game Name:", game_name)
    print("Game ID:", game_id)
    print("Image:", image)
    print("Developer:", developer)
    print("Description:", description)
    print("Embed URL:", embed_url)
    print("Release Date:", release_date)
    print("Popular:", popular)
    print("Emulator Type:", emulator_type)

    print('')
    print("Making git commit.")

    # import git
    # import getpass

    # # Get the username and password
    # username = input("Enter your git username: ")
    # password = getpass.getpass("Enter your git password: ")

    # # Open the repo
    # repo = git.Repo("../")

    # # Set the author and committer
    # author = git.Actor(username, username + "@users.noreply.github.com")
    # committer = git.Actor(username, username + "@users.noreply.github.com")

    # repo.git.add(A=True)

    # repo.index.commit("Added " + game_name + " to website.", author=author, committer=committer)
    # print("Git commit made.")
    # print("Pushing to GitHub.")
    # master = repo.remote(name='master')
    # master.push(auth=git.credentials.UserPass(username, password))
    # print("Pushed to GitHub.")


# Bind the submit function to the submit button's "command" attribute
submit_button = tk.Button(root, text="Submit", command=submit)


# Place the widgets in the window
game_name_label.grid(row=0, column=0)
game_name_entry.grid(row=0, column=1)
game_id_label.grid(row=1, column=0)
game_id_entry.grid(row=1, column=1)
image_label.grid(row=2, column=0)
image_button.grid(row=2, column=1)
developer_label.grid(row=3, column=0)
developer_entry.grid(row=3, column=1)
description_label.grid(row=4, column=0)
description_entry.grid(row=4, column=1)
# optional widgets
embed_url_label.grid(row=5, column=0)
embed_url_entry.grid(row=5, column=1)
release_date_label.grid(row=6, column=0)
release_date_entry.grid(row=6, column=1)
popular_label.grid(row=7, column=0)
popular_checkbox.grid(row=7, column=1)
emulator_type_label.grid(row=8, column=0)
emulator_type_menu.grid(row=8, column=1)
folder_label.grid(row=10, column=0)
folder_button.grid(row=10, column=1)
submit_button.grid(row=11, column=1)

# Run the main loop
root.mainloop()
