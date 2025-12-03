<script lang="ts">
	import { config } from '$lib/config';
</script>

<!-- fake faq with one question and answer-->
<div class="my-6 bg-base-200 p-6 box-{config.styling.contentBoxStyleType}">
	<h2 class="text-3xl font-bold">Frequently Asked Questions</h2>
	<div class="divider" />
	<div class="flex flex-col gap-2">
		{#each config.faq as question}
			<div>
				<label for={question.answer} class="text-xl">
					{question.question}
				</label>
				<p>
					{question.answer}
				</p>
			</div>
		{/each}
	</div>
</div>
