<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<article class="prose lg:prose-lg">
	<h1>Admin Page</h1>
	<p>This is an admin page.</p>

	<a href="/admin/users">
		<h2>Users:</h2>
	</a>

	<div class="stats shadow">
		<div class="stat">
			<div class="stat-title">Total Users</div>
			<div class="stat-value">{data.userCount}</div>
		</div>
	</div>

	<code>
		<pre class="max-h-[50rem]">{JSON.stringify(data.users, null, 2)}</pre>
	</code>

	<h2>Config:</h2>
	<code>
		<pre>{JSON.stringify(data.config, null, 2)}</pre>
	</code>

	<a href="/admin/games">
		<h2>Game Data:</h2>
	</a>

	<div class="stats shadow">
		<div class="stat">
			<div class="stat-title">Total Game View Count</div>
			<div class="stat-value">{data.gameViewCount}</div>
		</div>
	</div>

	<code>
		<pre class="max-h-[50rem]">{JSON.stringify(data.games, null, 2)}</pre>
	</code>

	<a href="/admin/apps">
		<h2>App Data:</h2>
	</a>

	<div class="stats shadow">
		<div class="stat">
			<div class="stat-title">Total App View Count</div>
			<div class="stat-value">{data.appViewCount}</div>
		</div>
	</div>

	<code>
		<pre class="max-h-[50rem]">{JSON.stringify(data.apps, null, 2)}</pre>
	</code>
</article>
