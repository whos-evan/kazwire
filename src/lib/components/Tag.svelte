<script lang="ts">
    export let tag: string;
</script>

<a href="/games?tag={tag}" data-sveltekit-reload>
	<div
		class="my-1 inline-block w-min rounded-lg bg-orange-600 px-2 py-1 text-sm text-white transition-colors hover:bg-orange-800 dark:bg-black dark:hover:bg-gray-700"
	>
		{tag}
	</div>
</a>
