<script lang="ts">
	import Icon from '@iconify/svelte';

	let content: string =
		'Sir William Whetstone (died 1711) was an officer of the Royal Navy in the later 17th and early eighteenth century. He eventually rose to the rank of rear admiral, having spent his career serving with several distinguished figures. Whetstone appears to have been born into a naval family, his father John Whetstone had probably been a naval officer. William established himself in Bristol, becoming a member of Bristol corporation and commanding a merchant ship, the Mary of Bristol, with which he carried out trading with Virginia and Barbados. His trading appears to have been in a wide variety of goods, including serge.';
</script>

<svelte:head>
	<title>Google Docs</title>
	<link rel="icon" type="image/x-icon" href="https://www.google.com/favicon.ico" />
</svelte:head>

<!-- This page is entended to mock a google dock -->
<header class="bg-white p-4 shadow">
	<div class="flex items-center justify-between">
		<div class="flex items-center">
			<Icon icon="iconoir:google-docs" class="mr-2 h-8 w-8 text-blue-500" />
			<h1 class="text-lg font-bold" contenteditable="true">Untitled Document</h1>
		</div>
		<div class="flex items-center">
			<button class="mr-2 rounded-full bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
				>Share</button
			>
			<button class="rounded-full bg-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-400"
				>Settings</button
			>
		</div>
	</div>
</header>

<main class="flex justify-center px-4 py-8">
	<div class="w-6/12 bg-white p-8 shadow-md">
		<div class="min-h-[800px] overflow-auto border border-gray-300 p-4" contenteditable="true">
			{content}
		</div>
	</div>
</main>

<footer class="bg-white p-4 text-center">
	<p class="text-sm text-gray-600">Made with ❤ by evan.</p>
</footer>
