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
					<div class="float-right mr-5">
						<button class="mt-[1.1rem] h-5 w-5 fill-white" id="refresh">
							<svg width="25px" height="25px" viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#ffffff" stroke="#ffffff" style="margin-top:-2px;">
								<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
								<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
								<g id="SVGRepo_iconCarrier">
									<title>reload</title>
									<g id="Page-1" stroke-width="19.968" fill="none" fill-rule="evenodd">
										<g id="Combined-Shape" fill="#ffffff" transform="translate(64.000000, 64.000000)">
											<path d="M234.666667,149.333333 L234.666667,106.666667 L314.564847,106.664112 C287.579138,67.9778918 242.745446,42.6666667 192,42.6666667 C109.525477,42.6666667 42.6666667,109.525477 42.6666667,192 C42.6666667,274.474523 109.525477,341.333333 192,341.333333 C268.201293,341.333333 331.072074,284.258623 340.195444,210.526102 L382.537159,215.817985 C370.807686,310.617565 289.973536,384 192,384 C85.961328,384 1.42108547e-14,298.038672 1.42108547e-14,192 C1.42108547e-14,85.961328 85.961328,1.42108547e-14 192,1.42108547e-14 C252.316171,1.42108547e-14 306.136355,27.8126321 341.335366,71.3127128 L341.333333,1.42108547e-14 L384,1.42108547e-14 L384,149.333333 L234.666667,149.333333 Z">
											</path>
										</g>
									</g>
								</g>
							</svg>
						</button>
					</div>
					<script>
						document.querySelector("#refresh").onclick = function() {
							if(!document.querySelector('#search-frame > div')){
								document.getElementById('search-iframe').contentWindow.location.reload();
							}
						}
					function He(c) {
						let e = "https://www.google.com/search?q=%s";
						try {
							return new URL(c).toString()
						} catch {}
						try {
							const t = new URL(`http://${c}`);
							if (t.hostname.includes("."))
								return t.toString()
						} catch {}
						return e.replace("%s", encodeURIComponent(c))
					}

					document.querySelector("#uv-address").onkeyup = () => {
						searching(document.querySelector("#uv-address").value);
					}

					var s = document.createElement("style");
					s.textContent = "#autofill:hover {text-decoration: underline}";
					document.head.appendChild(s);

					document.body.addEventListener('click', async (e) => {
						if(e.target.id == "uv-address") {
							if(document.querySelector("#uv-address").value != ""){
								document.querySelector("#uv-address").style.borderRadius = ".5rem .5rem 0 0";
							}
							if(document.querySelectorAll("#autofill")){
								for(var i=0;i<document.querySelectorAll("#autofill").length;i++){
									document.querySelectorAll("#autofill")[i].style.display = "block";
								}
							}
						} else{
							if (e.target.id == "autofill") {
								var f = document.getElementById("search-iframe");
								await registerSW();
								let c = e.target.innerText;
								if(document.querySelector("#search-frame > div")) {
									f.onload = () => {
										document.querySelector("#search-frame > div").remove();
									}
								}
								f.src = __uv$config.prefix + __uv$config.encodeUrl(He(c));
							}
							document.querySelector("#uv-address").style.borderRadius = ".5rem";
							if(document.querySelectorAll("#autofill")){
							for(var i=0;i<document.querySelectorAll("#autofill").length;i++){
								document.querySelectorAll("#autofill")[i].style.display = "none";
							}
							}
						}
					});

					async function searching(q) {
					var rawResponse = await fetch('https://cors.zimjs.com/https://duckduckgo.com/ac/?q=' + q + '&type=list', {
						method: 'POST',
						headers: {
						'Accept': 'application/json',
						'Content-Type': 'application/json'
						}
					});
					var l = await rawResponse.json();
					var l = l[1];
					document.querySelector("#uv-address").style.borderRadius = ".5rem .5rem 0 0";

					if(document.querySelectorAll("#autofill")){
						var a = document.querySelectorAll("#autofill");
						for(var i=0;i<a.length;i++){
							a[i].remove();
						}
					}

					if(q != "") {
						for(var i=0;i<l.length;i++){
							var newEl = document.createElement("div");
							newEl.id = "autofill";
							newEl.className = "md:w-[35vw] sm:w-[70vw] text-black placeholder:text-gray-500";
							newEl.style = "background:white;padding:calc(1.5rem / 2);cursor:pointer;position:absolute;left: 0; right: 0; margin-left: auto; margin-right: auto;z-index:999;";
							newEl.style.width = document.querySelector("#uv-address").offsetWidth;
							newEl.style.marginTop = 2.5*i + "rem";
							if(i >= l.length - 1){
								newEl.style.borderRadius = "0 0 .5rem .5rem";
							}
							newEl.innerText = l[i];
							document.querySelector("#uv-form").appendChild(newEl);
						}
					} else {
						document.querySelector("#uv-address").style.borderRadius = ".5rem";
					}
					}
					</script>
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
