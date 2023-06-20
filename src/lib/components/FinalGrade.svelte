<script lang="ts">
	let currentGrade: number;
	let desiredGrade: number;
	let finalWeight: number;

	let finalGrade: number | null = null;

	function calculateFinalGrade() {
		// Ensure all fields are filled out
		if (!currentGrade || !desiredGrade || !finalWeight) {
			return;
		}

		finalGrade = (desiredGrade - (1 - finalWeight / 100) * currentGrade) / (finalWeight / 100);

		// round to the nearest hundredth
		finalGrade = Math.round(finalGrade * 100) / 100;
	}

	let showPopup: boolean = false;
	function closePopup() {
		showPopup = false;
	}

	let popupTitle: string = '';
	let popupContent: string = '';
	let funnyMessage: string = '';
	let errorMessage: string = '';

	function openPopup() {
		if (!finalGrade) {
			errorMessage = 'Please fill out all fields.';
			return;
		}

		if (finalWeight > 100) {
			errorMessage = 'Your final cannot be worth more than 100%.';
			return;
		}

		if (finalWeight < 0) {
			errorMessage = 'Your final cannot be worth less than 0%.';
			return;
		}

		// Generate a funny message
		if (finalGrade > 100) {
			funnyMessage = 'Maybe ask your teacher for extra credit?';
		} else if (finalGrade > 90) {
			funnyMessage = 'You got this, I believe in you.';
		} else if (finalGrade > 80) {
			funnyMessage = 'You probally want to study, maybe some LoFi beats will help?';
		} else if (finalGrade > 70) {
			funnyMessage = 'Why even try? You\'re fine, you\'ll get the grade you want. Probably.';
		} else if (finalGrade > 60) {
			funnyMessage = 'Instead of studying maybe relax and play some games on Kazwire!';
		} else if (finalGrade > 50) {
			funnyMessage = 'Why are you using this calculator? You\'re fine.';
		} else {
			funnyMessage = 'Dude you\'re fine, you\'re gonna get the grade you want, maybe take a nap?';
		}

		errorMessage = '';
		popupTitle = 'Final Grade Calculator';
		popupContent = `You need a ${finalGrade}% on your final to get a ${desiredGrade}% in the class.`;
		showPopup = true;
	}
</script>

<div class="rounded-3xl bg-tertiary p-8 text-black dark:bg-tertiaryDark dark:text-white">
	<h1 class="text-left text-4xl font-bold">Final Grade Calculator</h1>
	<!-- Text describing what it does -->
	<div class="mt-2 text-xl">
		<p>
			This calculator will tell you what you need to get on your final to get a certain grade in the
			class.
		</p>
	</div>
	<!-- Grid with text saying what they are inputting on the left and the input field on the right with placeholders -->
	<div class="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
		<div class="max-w-md">
			<h3 class="text-2xl font-bold">Current Grade</h3>
			<p class="text-sm text-gray-500">Enter your current grade in the class.</p>
		</div>
		<div class="flex items-center">
			<input
				class="mr-1 w-full flex-grow rounded-lg border-2 border-secondary p-2 md:max-w-xs"
				type="number"
				bind:value={currentGrade}
				placeholder="Current Grade (eg. 85)"
			/>
			%.
		</div>
		<div class="max-w-md">
			<h3 class="text-2xl font-bold">Desired Grade</h3>
			<p class="text-sm text-gray-500">Enter the grade you want in the class.</p>
		</div>
		<div class="flex items-center">
			<input
				class="mr-1 w-full flex-grow rounded-lg border-2 border-secondary p-2 md:max-w-xs"
				type="number"
				bind:value={desiredGrade}
				placeholder="Desired Grade (eg. 90)"
			/>
			%.
		</div>
		<div class="max-w-md">
			<h3 class="text-2xl font-bold">Final Weight</h3>
			<p class="text-sm text-gray-500">
				Enter the weight of the final in the class. If the final is worth 20% of your grade, enter
				20.
			</p>
		</div>
		<div class="flex items-center">
			<input
				class="mr-1 w-full flex-grow rounded-lg border-2 border-secondary p-2 md:max-w-xs"
				type="number"
				bind:value={finalWeight}
				placeholder="Final Weight (eg. 20)"
			/>
			%.
		</div>
	</div>
	<!-- Button to calculate the final grade -->
	<div class="mt-10 flex flex-col items-center justify-center gap-4">
		<button
			class="btn-lg"
			on:click={() => {
				calculateFinalGrade();
				openPopup();
			}}
		>
			Calculate
		</button>
		{#if errorMessage != ''}
			<p class="text-sm text-red-500">{errorMessage}</p>
		{/if}
	</div>
</div>

<!-- Popup showing their final grade -->
{#if showPopup}
	<div class="fixed inset-0 z-[100] flex items-center justify-center px-4">
		<div class="absolute inset-0 bg-black opacity-50" />
		<div class="relative rounded-3xl bg-white p-8 text-black dark:bg-tertiaryDark dark:text-white max-w-lg">
			<h1 class="text-center text-4xl font-bold">{popupTitle}</h1>
			<div class="mt-4 flex flex-row items-center justify-center">
				<h2 class="mr-2 text-center text-2xl font-bold">{finalGrade}%</h2>
			</div>
			<div class="mt-4 text-xl">
				<p>{popupContent}</p>
				<br>
				<p>{funnyMessage}</p>
			</div>
			<div class="mt-10 flex flex-row items-center justify-center">
				<button
					class="btn-lg"
					on:click={() => {
						closePopup();
						finalGrade = null;
					}}>Close</button
				>
			</div>
		</div>
	</div>
{/if}
