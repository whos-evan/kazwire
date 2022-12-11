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
        await registerSW();

        let input = document.getElementById('uv-address').value;
        let iframe = document.getElementById('search-frame');

        iframe.src = __uv$config.prefix + __uv$config.encodeUrl(search(input));
    }

    // watch for title change in iframe
    function checkTitle() {
        let iframe = document.getElementById('search-frame');
        let contentTitle = iframe.contentDocument.title;
        let title = document.getElementById('title').innerHTML;

        if (contentTitle !== title) {
            document.getElementById('title').innerHTML = contentTitle;
        }
    }

    function fullScreen() {
		let searchFrame = document.getElementById('search-frame');
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

<div class="flex h-[calc(100vh-220px)] max-w-full pl-5 pr-5 pb-5">
	<div class="flex-grow mb-14 align-center">
		<iframe id="search-frame" class="w-full h-full rounded-t-lg bg-blue-200 dark:bg-gray-800" on:load={checkTitle}/>
		<div
			class="block relative items-center h-14 leading-[3.5rem] mt-2 rounded-b-lg bg-[#0875bb] text-white"
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
			<div id="title" class="ml-5">
                Nothing here...
			</div>
		</div>
	</div>
</div>