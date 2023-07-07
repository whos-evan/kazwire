---
title: Version 2 Beta
description: This rewrite completely change how the site works and feels!
date: '2023-7-6'
version: '2.0.0b'
published: true
---

## Version 2 beta is here!
In this version we are excited to bring actually readable code with type checking and better maintainability. We have switched over to TypeScript fully, we have also implemented a PostgreSQL database, there is now a new API endpoint for filtering through games and apps, a changelog blog is in the works and will work using markdown posts.

---

### Here are some of the new changes:
* Rewrite utilizing types with TypeScript
* Icon library (iconify) instead of using SVGs
* Reorganization of components and game files
* API for games and apps which supports filtering via id, name, or tags (games only)
* Upgraded UV version
* PostgreSQL database for dynamically adding games/apps, editing games/apps (error message if a service/game is down/not working), and removing games
* Better SEO (titles dynamically change based on the page you are viewing)
* Loading animation for boxes while the api is fetching games/apps
* Changelog blog
* Improved heart system (localStorage and through the db using user auth)

### Here's what is coming soon:
* Account system with roles (admin, mod, dev, normal user)
* System for giving access to admins/mods to edit/remove/add games to the site
