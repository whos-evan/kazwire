<script lang="ts">
	import Popup from './calcPopup.svelte';

	let grade: number = 0;

	import { writable } from 'svelte/store';
	import Modal, { bind } from 'svelte-simple-modal';
	const modal = writable(null);

	let currGrade = 0;
	let desiredGrade = 0;
	let finalWeight = 0;

	const showModal = () =>
		modal.set(bind(Popup, { grade: grade.toString(), desiredGrade: desiredGrade.toString() }));

	function calc() {
		let res = +(
			((desiredGrade / 100 - (currGrade / 100) * (1 - finalWeight / 100)) / (finalWeight / 100)) *
			100
		).toFixed(2);

		showModal();

		if (res !== Infinity) grade = res;
	}
</script>

<Modal show={$modal}>
	<div
		class="space-y-4 rounded bg-zinc-400 text-2xl"
		style="display:inline-block; position:relative; padding: 1em;"
	>
		Your grade <input
			type="number"
			class="bg-transparent text-center text-white"
			style="text-decoration: underline; width: 3em"
			min="0"
			max="100"
			value="0"
			on:change={(e) => {
				// @ts-ignore
				currGrade = e.target.value;
			}}
		/>%<br />
		Your desired grade
		<input
			type="number"
			class="bg-transparent text-center text-white"
			style="text-decoration: underline; width: 3em"
			min="0"
			max="100"
			value="0"
			on:change={(e) => {
				// @ts-ignore
				desiredGrade = e.target.value;
			}}
		/>%<br />
		Value of your final exam
		<input
			type="number"
			class="bg-transparent text-center text-white"
			style="text-decoration: underline; width: 3em"
			min="1"
			max="100"
			value="0"
			on:change={(e) => {
				// @ts-ignore
				finalWeight = e.target.value;
			}}
		/>%<br />
		<button class="btn-primary mr-4" on:click={calc}>Calculate</button>
	</div>
</Modal>
