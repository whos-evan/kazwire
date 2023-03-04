<script>
	import changeLog from './changelog.json';
</script>

<div class="text-white w-full text-center">
	<h1 class="text-4xl font-bold mb-5">📜 Changelog:</h1>
	<div class="overflow-scroll max-h-[25rem] min-h-[20rem]">
		{#each changeLog['changelog'] as change}
			<div class="text-xl md:text-left sm:text-center">
				<h2 class="text-2xl font-bold mb-2 mt-4">Date: {change.date}</h2>
				<div class="grid grid-flow-row gap-4">
					{#each change.changes as change}
						<!-- Create a small icon next to it to let users know its a change. -->
						<div class="inline-flex">
							<span
								class="text-sm font-semibold px-3 py-2 max-h-9 rounded-lg bg-green-700 whitespace-nowrap text-white align-middle"
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
								class="text-sm font-semibold px-3 py-2 max-h-9 rounded-lg bg-blue-700 whitespace-nowrap text-white align-middle"
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
								class="text-sm font-semibold px-3 py-2 max-h-9 rounded-lg bg-red-700 whitespace-nowrap text-white align-middle"
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
