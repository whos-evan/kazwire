import json
import psycopg2

# Define the database connection parameters
db_params = {
    'host': 'localhost',
    'port': 6500,
    'database': 'mydb',
    'user': 'postgres',
    'password': 'postgres'
}

# Read the JSON file
with open('games.json', 'r') as file:
    json_data = json.load(file)

# Establish a connection to the PostgreSQL database
conn = psycopg2.connect(**db_params)

# Create a cursor object to execute SQL queries
cursor = conn.cursor()

# Iterate over each game in the JSON data
for game in json_data['games']:
    # Extract the game attributes
    game_id = game['id']
    name = game['name']
    tags = game.get('tags', [])
    platform = game.get('platform')
    developer = game.get('developer')
    description = game.get('description')
    image = game.get('image')
    embed_url = game.get('embedURL')

    # Assign a default value of None if platform is missing
    platform = platform or "PC"

    # Insert the game data into the "Game" table
    cursor.execute(
        """
        INSERT INTO "Game" (id, name, tags, platform, developer, description, image, "embedURL")
        VALUES (%s, %s, %s, %s, %s, %s, %s, %s)
        """,
        (game_id, name, tags, platform, developer, description, image, embed_url)
    )

# Commit the changes and close the cursor and connection
conn.commit()
cursor.close()
conn.close()

print('Data imported successfully.')
