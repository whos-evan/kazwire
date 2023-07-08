<script lang="ts">
	import { onMount } from 'svelte';
	import type { Game } from '@prisma/client';
	import { PUBLIC_API_BASE_URL } from '$env/static/public';

	// Fetch all the games
	let games: Game[] = [];
	onMount(async () => {
		const res = await fetch(PUBLIC_API_BASE_URL + '/api/games');
		games = await res.json();
	});

	function updateGame() {
		// POST /api/admin/edit/game
		fetch(PUBLIC_API_BASE_URL + '/api/admin/edit/game', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(selectedGame)
		})
			.then((res) => {
				if (res.status === 200) {
					alert('Successfully updated game!');
				} else {
					alert('Failed to update game!');
				}
			})
			.catch((err) => {
				alert('Failed to update game!');
			});
	}

	let selectedGame: Game | null = null;
</script>

<div class="rounded-3xl bg-tertiary p-8 text-black dark:bg-tertiaryDark dark:text-white">
	<h1 class="text-left text-4xl font-bold">Admin Panel</h1>
	<div class="mt-2 text-xl">
		<p>
			Looks like someone got access to the fake password lol. Here's the admin panel. You can edit
			games as needed, but please be careful. If you are unsure of what you are doing, please ask
			for help.
		</p>
	</div>

	<div class="mt-10 grid grid-cols-1 gap-10">
		<div class="col-start-1 row-start-1">
            <a href="/admin/games/add">
				<button class="btn"> Add Games </button>
			</a>
			<a href="/admin/games/edit">
				<button class="btn"> Edit Games </button>
			</a>
		</div>
		<div class="col-start-1 row-start-2">
            <a href="/admin/apps/add">
				<button class="btn"> Add Apps </button>
			</a>
			<a href="/admin/apps/edit">
				<button class="btn"> Edit Apps </button>
			</a>
		</div>
	</div>
</div>
