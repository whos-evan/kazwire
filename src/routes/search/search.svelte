<script lang="ts" context="module">

    declare var __uv$config: any;

    function search(input: string) {
        let template = "https://www.google.com/search?q=%s";
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
            if (url.hostname.includes(".")) return url.toString();
        } catch (err) {
            // input was not valid URL
        }

        // input may have been a valid URL, however the hostname was invalid

        // Attempts to convert the input to a fully qualified URL have failed
        // Treat the input as a search query
        return template.replace("%s", encodeURIComponent(input));
    }

    async function iframeSearch() {
        startLoad();
        await registerSW();

        let input = document.getElementById('uv-address').value;
        let iframe = document.getElementById('search-frame');

        iframe.src = __uv$config.prefix + __uv$config.encodeUrl(search(input));
    }
    // shows a loading animation
    function startLoad() {
        let searchFrame = document.getElementById('search-frame');
        // background transparent
        searchFrame.src = 'about:blank';
        searchFrame.style.background = 'rgba(31, 41, 55, 100) url(/assets/loading.gif) no-repeat center';
        searchFrame.style.backgroundSize = '100px';
        searchFrame.style.backgroundRepeat = 'no-repeat';
        searchFrame.style.backgroundPosition = 'center';
    }

    // watch for title change in iframe
    function checkTitle() {
        let iframe = document.getElementById('search-frame');
        let contentTitle = iframe.contentDocument.title;
        let title = document.getElementById('title').innerHTML;

        if (contentTitle !== title) {
            document.getElementById('title').innerHTML = contentTitle;
        }
        return contentTitle;
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

    function maximize() {
        // make the iframe fill the entire screen
        let searchFrame = document.getElementById('search-frame');
        searchFrame.style.position = 'fixed';
        searchFrame.style.top = '0px';
        searchFrame.style.bottom = '0px';
        searchFrame.style.right = '0px';
        searchFrame.style.width = '100%';
        searchFrame.style.border = 'none';
        searchFrame.style.margin = '0';
        searchFrame.style.padding = '0';
        searchFrame.style.overflow = 'hidden';
        searchFrame.style.zIndex = '999999';
        searchFrame.style.height = '100%';
        searchFrame.style.borderRadius = '0';
    }

    import VertAd from "../../components/vert-ad.svelte";
</script>

<div class="text-white w-full pb-5 text-center">
    <form id="uv-form" class="flex-center" on:submit={iframeSearch}>
        <input
            id="uv-address"
            type="text"
            class="w-[35vw] h-10 p-6 rounded-lg mt-5 text-black placeholder:text-gray-500"
            placeholder="Search here..."
            autocomplete="off"
        />
      </form>
</div>

<div class="flex flex-row relative justify-center">
	<div class="flex h-[calc(90vh-132px)] md:w-[80vw] sm:w-full float-left pl-5 pr-5 pb-5">
		<div class="flex-grow mb-14 align-center">
            <div class="w-full h-full">
                <iframe on:load={checkTitle} id="search-frame" class="w-full h-full rounded-t-lg bg-black" />
            </div>

			<div class="grid">
				<div class="w-full relative items-center h-14 leading-[3.5rem] mt-2 rounded-b-lg bg-secondaryLight dark:bg-secondaryDark text-white">
					<div class="float-right mr-5">
						<button class="mt-4 h-5 w-5 fill-white" on:click={fullScreen}>
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
								><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path
									d="M32 32C14.3 32 0 46.3 0 64v96c0 17.7 14.3 32 32 32s32-14.3 32-32V96h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H32zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H64V352zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32h64v64c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32H320zM448 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64H320c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32V352z"
								/></svg>
						</button>
					</div>
					<div class="float-right mr-5">
						<button class="mt-[1.1rem] h-5 w-5 fill-white" on:click={maximize}>
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M344 0H488c13.3 0 24 10.7 24 24V168c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-39-39-87 87c-9.4 9.4-24.6 9.4-33.9 0l-32-32c-9.4-9.4-9.4-24.6 0-33.9l87-87L327 41c-6.9-6.9-8.9-17.2-5.2-26.2S334.3 0 344 0zM184 496H40c-13.3 0-24-10.7-24-24V328c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2l39 39 87-87c9.4-9.4 24.6-9.4 33.9 0l32 32c9.4 9.4 9.4 24.6 0 33.9l-87 87 39 39c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8z"/></svg>
						</button>
					</div>
					<div id="title" class="ml-5">
						Nothing here...
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="w-full max-w-[280px] hidden xl:flex flex-col justify-center items-center gap-y-2 px-3 bg-opacity-50 backdrop-blur-md" align="middle">
		<VertAd />
	</div>
</div>