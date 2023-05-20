<script lang="ts" context="module">
	declare var __uv$config: any;

	function search(input: string) {
		let template = 'https://www.google.com/search?q=%s';
		try {
			// input is a valid URL:
			// eg: https://example.com, https://example.com/test?q=param
			return new URL(input).toString();
		} catch (err) {
			// input was not a valid URL
		}

		try {
			// input is a valid URL when http:// is added to the start:
			// eg: example.com, https://example.com/test?q=param
			const url = new URL(`http://${input}`);
			// only if the hostname has a TLD/subdomain
			if (url.hostname.includes('.')) return url.toString();
		} catch (err) {
			// input was not valid URL
		}

		// input may have been a valid URL, however the hostname was invalid

		// Attempts to convert the input to a fully qualified URL have failed
		// Treat the input as a search query
		return template.replace('%s', encodeURIComponent(input));
	}

	async function iframeSearch() {
		document.getElementById('search-iframe').style.display = 'none';
		await registerSW();

		let input = document.getElementById('uv-address').value;
		let iframe = document.getElementById('search-iframe');

		iframe.src = __uv$config.prefix + __uv$config.encodeUrl(search(input));
	}

	function fullScreen() {
		let searchFrame = document.getElementById('search-frame');
		searchFrame.style.borderRadius = '0';
		if (searchFrame.requestFullscreen) {
			searchFrame.requestFullscreen();
		} else if (searchFrame.mozRequestFullScreen) {
			/* Firefox */
			searchFrame.mozRequestFullScreen();
		} else if (searchFrame.webkitRequestFullscreen) {
			/* Chrome, Safari and Opera */
			searchFrame.webkitRequestFullscreen();
		} else if (searchFrame.msRequestFullscreen) {
			/* IE/Edge */
			searchFrame.msRequestFullscreen();
		}
	}

	import VertAd from '$lib/components/vert-ad.svelte';
</script>

<script>
	import Back from '$lib/components/buttons/back.svelte';
	import Minimize from '$lib/components/buttons/minimize.svelte';
	import { onMount } from 'svelte';

	let searchInput = '';

	onMount(async () => {
		let url = new URL(window.location.href);
		let search = url.searchParams.get('s');
		if (search) {
			searchInput = search;
			startLoad();
			iframeSearch();
		}
	});

	let maximized = false;
	let loading = false;
	let initialLaunch = true;

	function minimize() {
		// make the iframe back to normal
		let searchFrame = document.getElementById('search-frame');
		document.body.style.overflow = 'auto';
		searchFrame.style.position = 'relative';
		searchFrame.style.top = '0px';
		searchFrame.style.bottom = '0px';
		searchFrame.style.left = '0px';
		searchFrame.style.right = '0px';
		searchFrame.style.height = '100%';
		searchFrame.style.width = '100%';
		searchFrame.style.zIndex = '0';
		searchFrame.style.border = 'none';

		maximized = false;
	}

	function maximize() {
		// make the iframe fill the entire screen
		let searchFrame = document.getElementById('search-frame');
		document.body.style.overflow = 'hidden';
		searchFrame.style.position = 'fixed';
		searchFrame.style.top = '0px';
		searchFrame.style.bottom = '0px';
		searchFrame.style.left = '0px';
		searchFrame.style.right = '0px';
		searchFrame.style.height = '100%';
		searchFrame.style.width = '100%';
		searchFrame.style.zIndex = '9999';
		searchFrame.style.border = 'none';

		maximized = true;
	}

	function startLoad() {
		document.getElementById('search-iframe').style.display = 'none';
		loading = true;
		initialLaunch = false;

		// wait 2 seconds and if the page hasn't loaded, remove the loading animation
		setTimeout(() => {
			if (loading) {
				loading = false;
				document.getElementById('search-iframe').style.display = 'block';
			}
		}, 2000);
	}

	function loaded() {
		checkTitle();
		document.getElementById('search-iframe').style.display = 'block';
		loading = false;
	}

	// watch for title change in iframe
	function checkTitle() {
		let iframe = document.getElementById('search-iframe');
		let contentTitle = iframe.contentDocument.title;
		let title = document.getElementById('title').innerHTML;

		if (contentTitle !== title) {
			document.getElementById('title').innerHTML = contentTitle;
		}
		return contentTitle;
	}

	function hideMessage() {
		let message = document.getElementById('message');
		message.style.display = 'none';
	}
</script>

<div class="text-white w-full pb-5 text-center">
	<!-- <div id="message" class="flex-center">
		<button class="m-auto bg-secondary md:w-[50vw] sm:w-[80vw] p-3 rounded-lg mt-5 text-white"
		on:click={hideMessage}>
			Search is currently disabled due to server issues. Please be patient while we fix it over the coming days.
	</button>
	</div> -->
	<form id="uv-form" class="flex-center" on:submit={iframeSearch} on:submit={startLoad}>
		<input
			id="uv-address"
			type="text"
			class="md:w-[35vw] sm:w-[70vw] h-10 p-6 rounded-lg mt-5 text-black placeholder:text-gray-500"
			placeholder="Search here..."
			autocomplete="off"
			bind:value={searchInput}
		/>
	</form>
</div>

<div class="flex flex-row relative justify-center">
	<div class="flex h-[calc(90vh-132px)] md:w-[80vw] sm:w-full float-left pl-5 pr-5 pb-5">
		<div class="flex-grow mb-14 align-center">
			<div id="search-frame" class="w-full h-full">
				{#if initialLaunch}
					<div
						class="flex flex-col items-center justify-center w-full h-full bg-zinc-900 rounded-t-lg"
					>
						<div>
							<img src="/logo.png" class="h-24 p-3 inline-block" alt="Kazwire Logo" />
							<span
								class="hidden lg:inline-block text-4xl font-semibold whitespace-nowrap text-white align-middle"
								>Kazwire</span
							>
						</div>
					</div>
				{:else if loading}
					<div
						class="flex flex-col items-center justify-center w-full h-full bg-zinc-900 rounded-t-lg"
					>
						<div>
							<img src="/logo.png" class="h-24 p-3 inline-block" alt="Kazwire Logo" />
							<span
								class="hidden lg:inline-block text-4xl font-semibold whitespace-nowrap text-white align-middle"
								>Kazwire</span
							>
						</div>
						<div class="flex flex-col items-center">
							<img src="/assets/loading.gif" class="h-20 w-20 mt-4" alt="Loading..." />
						</div>
					</div>
				{/if}

				<!-- <Back /> -->
				<!-- Removed due to complaints -->
				{#if maximized}
					<button class="absolute" on:click={minimize}>
						<Minimize />
					</button>
				{/if}
				<iframe
					id="search-iframe"
					on:load={loaded}
					title="Search"
					class="hidden w-full h-full rounded-t-lg bg-black"
				/>
			</div>

			<div class="grid">
				<div
					class="w-full relative items-center h-14 leading-[3.5rem] mt-2 rounded-b-lg bg-secondaryLight dark:bg-secondaryDark text-white"
				>
					<div class="float-right mr-5">
						<button class="mt-4 h-5 w-5 fill-white" on:click={fullScreen}>
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
								><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path
									d="M32 32C14.3 32 0 46.3 0 64v96c0 17.7 14.3 32 32 32s32-14.3 32-32V96h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H32zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H64V352zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32h64v64c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32H320zM448 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64H320c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32V352z"
								/></svg
							>
						</button>
					</div>
					<div class="float-right mr-5">
						<button class="mt-[1.1rem] h-5 w-5 fill-white" on:click={maximize}>
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
								><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path
									d="M344 0H488c13.3 0 24 10.7 24 24V168c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-39-39-87 87c-9.4 9.4-24.6 9.4-33.9 0l-32-32c-9.4-9.4-9.4-24.6 0-33.9l87-87L327 41c-6.9-6.9-8.9-17.2-5.2-26.2S334.3 0 344 0zM184 496H40c-13.3 0-24-10.7-24-24V328c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2l39 39 87-87c9.4-9.4 24.6-9.4 33.9 0l32 32c9.4 9.4 9.4 24.6 0 33.9l-87 87 39 39c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8z"
								/></svg
							>
						</button>
					</div>
					<!-- Below will be refactored soon -->
					<div class="float-right mr-5">
						<button class="mt-[1.1rem] h-5 w-5 fill-white" id="refresh">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
								><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
									d="M463.5 224H472c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1c-87.5 87.5-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H463.5z"
								/></svg
							>
						</button>
					</div>
					<script>
						document.querySelector('#refresh').onclick = function () {
							if (!document.querySelector('#search-frame > div')) {
								document.getElementById('search-iframe').contentWindow.location.reload();
							}
						};
						function makeAutofillWork(autofill) {
							let googleLink = 'https://www.google.com/search?q=%s';
							try {
								return new URL(autofill).toString();
							} catch {}
							try {
								const autofillUrl = new URL(`http://${autofill}`);
								if (autofillUrl.hostname.includes('.')) return autofillUrl.toString();
							} catch {}
							return googleLink.replace('%s', encodeURIComponent(autofill));
						}

						document.querySelector('#uv-address').onkeyup = () => {
							searching(document.querySelector('#uv-address').value);
						};

						var styleElement = document.createElement('style');
						styleElement.textContent = '#autofill:hover {text-decoration: underline}';
						document.head.appendChild(styleElement);

						document.body.addEventListener('click', async (e) => {
							if (e.target.id == 'uv-address') {
								if (document.querySelector('#uv-address').value != '') {
									document.querySelector('#uv-address').style.borderRadius = '.5rem .5rem 0 0';
								}
								if (document.querySelectorAll('#autofill')) {
									for (var i = 0; i < document.querySelectorAll('#autofill').length; i++) {
										document.querySelectorAll('#autofill')[i].style.display = 'block';
									}
								}
							} else {
								if (e.target.id == 'autofill') {
									var searchFrame = document.getElementById('search-iframe');
									await registerSW();
									let autofillValue = e.target.innerText;
									if (document.querySelector('#search-frame > div')) {
										searchFrame.onload = () => {
											document.querySelector('#search-frame > div').remove();
										};
									}
									searchFrame.src =
										__uv$config.prefix + __uv$config.encodeUrl(makeAutofillWork(autofillValue));
								}
								document.querySelector('#uv-address').style.borderRadius = '.5rem';
								if (document.querySelectorAll('#autofill')) {
									for (var i = 0; i < document.querySelectorAll('#autofill').length; i++) {
										document.querySelectorAll('#autofill')[i].style.display = 'none';
									}
								}
							}
						});

						async function searching(query) {
							var rawResponse = await fetch(
								'https://cors.zimjs.com/https://duckduckgo.com/ac/?q=' + query + '&type=list',
								{
									method: 'POST',
									headers: {
										Accept: 'application/json',
										'Content-Type': 'application/json'
									}
								}
							);
							var jsonResult = await rawResponse.json();
							var jsonResult = jsonResult[1];
							document.querySelector('#uv-address').style.borderRadius = '.5rem .5rem 0 0';

							if (document.querySelectorAll('#autofill')) {
								var allAutofillElements = document.querySelectorAll('#autofill');
								for (var i = 0; i < allAutofillElements.length; i++) {
									allAutofillElements[i].remove();
								}
							}

							if (query != '') {
								for (var i = 0; i < jsonResult.length; i++) {
									var newEl = document.createElement('div');
									newEl.id = 'autofill';
									newEl.className = 'md:w-[35vw] sm:w-[70vw] text-black placeholder:text-gray-500';
									newEl.style =
										'background:white;padding:calc(1.5rem / 2);cursor:pointer;position:absolute;left: 0; right: 0; margin-left: auto; margin-right: auto;z-index:999;';
									newEl.style.width = document.querySelector('#uv-address').offsetWidth;
									newEl.style.marginTop = 2.5 * i + 'rem';
									if (i >= jsonResult.length - 1) {
										newEl.style.borderRadius = '0 0 .5rem .5rem';
									}
									newEl.innerText = jsonResult[i];
									document.querySelector('#uv-form').appendChild(newEl);
								}
							} else {
								document.querySelector('#uv-address').style.borderRadius = '.5rem';
							}
						}
					</script>
					<!-- Above will be refactored soon -->
					<div id="title" class="ml-5">Nothing here...</div>
				</div>
			</div>
		</div>
	</div>
	<div
		class="w-full max-w-[280px] hidden xl:flex flex-col justify-center items-center gap-y-2 px-3 bg-opacity-50 backdrop-blur-md"
		align="middle"
	>
		<VertAd />
	</div>
</div>
