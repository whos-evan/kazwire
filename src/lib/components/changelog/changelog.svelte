<script>
	import changeLog from './changelog.json';

	let numToShow = 1;

	// only show the latest changelog
	let changeLogEntries = changeLog['changelog'].slice(0, numToShow);
</script>

<div class="text-white w-full text-center md:ml-8 sm:ml-0">
	<h1 class="text-4xl font-bold mb-5">📜 Changelog:</h1>
	<div class="overflow-scroll max-h-[25rem] min-h-[20rem]">
		{#each changeLogEntries as change}
			<div class="text-xl text-left">
				<h2 class="text-2xl font-bold mt-4 from-green-500 via-blue-500 to-red-500 text-transparent w-fit bg-clip-text bg-gradient-to-tr">{change.name}</h2>
				<h2 class="text-xl mb-2 w-fit">Date: {change.date}</h2>
				<div class="grid grid-flow-row gap-4">
					{#each change.changes as change}
						<!-- Create a small icon next to it to let users know its a change. -->
						<div class="inline-flex">
							<span
								class="text-sm font-semibold px-3 py-2 max-h-9 rounded-lg from-green-700 to-green-400 bg-gradient-to-tr whitespace-nowrap text-white align-middle"
								>Change</span
							>
							<span class="pl-2 items-center break-words text-white align-middle">{change}</span
							>
						</div>
					{/each}
					{#each change.additions as addition}
						<!-- Create a small icon next to it to let users know its an addition. -->
						<div class="inline-flex">
							<span
								class="text-sm font-semibold px-3 py-2 max-h-9 rounded-lg from-blue-700 to-blue-400 bg-gradient-to-tr whitespace-nowrap text-white align-middle"
								>Addition</span
							>
							<span class="pl-2 items-center break-words text-white align-middle"
								>{addition}</span
							>
						</div>
					{/each}
					{#each change.removals as removal}
						<div class="inline-flex">
							<!-- Create a small icon next to it to let users know its a fix. -->

							<span
								class="text-sm font-semibold px-3 py-2 max-h-9 rounded-lg from-red-700 to-red-400 bg-gradient-to-tr whitespace-nowrap text-white align-middle"
								>Removal</span
							>
							<span class="pl-2 items-center break-all text-white align-middle"
								>{removal}</span
							>
						</div>
					{/each}
				</div>
			</div>
		{/each}
	</div>
</div>
