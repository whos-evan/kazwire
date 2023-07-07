<script lang="ts">
	import { writable } from 'svelte/store';

	export let data;
</script>

<!-- SEO -->
<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<article class="text-black dark:text-white">
	<div class="flex flex-col sm:flex-row gap-2 sm:gap-24">
		<!-- Title -->
		<div class="mb-4 flex items-start sm:w-1/4 w-full md:min-w-[20rem]">
			<chip class="mr-2 mt-4 rounded-full bg-red-500 px-2 py-1 text-sm text-white">
				{data.meta.version}
			</chip>
			<div>
				<h1 class="text-3xl font-bold">{data.meta.title}</h1>
				<p class="text-sm text-gray-500">Published at {data.meta.date}</p>
                <p class="text-md text-gray-900 dark:text-gray-300">{data.meta.description}</p>
			</div>
		</div>

		<!-- Post -->
		<div class="prose">
			<svelte:component this={data.content} />

			<style>
				.prose h1 {
					font-size: 2.5rem;
					font-weight: 700;
					margin-bottom: 0.5rem;
				}

				.prose h2 {
					font-size: 2rem;
					font-weight: 600;
					margin-bottom: 0.5rem;
				}

				.prose h3 {
					font-size: 1.75rem;
					font-weight: 500;
					margin-bottom: 0.5rem;
				}

				.prose code {
					border-radius: 0.25rem;
					padding: 0.25rem;
				}

				.prose hr {
					border-top-color: #e5e7eb;
					margin: 2rem 0;
				}

				.prose img {
					border-radius: 0.25rem;
				}
				/* Put the little dot next to it */
				.prose li {
					position: relative;
					padding-left: 1.5em;

					/* This is the little dot */
					&::before {
						content: '';
						position: absolute;
						top: 0.75em;
						left: 0;
						width: 0.5em;
						height: 0.5em;
						background-color: #111827;
						border-radius: 50%;
					}

					/* Spacing */
					& + li {
						margin-top: 0.25em;
					}
				}
			</style>
		</div>
	</div>
</article>
