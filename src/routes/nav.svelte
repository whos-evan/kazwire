<script>
    import { writable } from "svelte/store";
    const theme = writable(0);

    function toggle() {
        localStorage.setItem("theme", localStorage.getItem("theme") === 'dark' ? 'light' : 'dark');
        document.documentElement.classList.toggle('dark');
    }

</script>

<div class="Nav">
    <nav class="bg-[#0875bb] h-25 max-w mb-5 shadow-md shadow-black dark:shadow-white">
        <div class="flex items-center justify-between flex-wrap p-6">
            <div class="flex items-center text-white ml-10">
                <ul class="align-middle leading-[4rem]">
                    <li class='float-left'>
                        <a class="block" href="/">
                            <img src="./logo.png" class="h-16" alt="Kazwire Logo"/>
                        </a>
                    </li>
                    <li class='float-left'><a href="/games" class="text-white text-lg ml-10">Games</a></li>
                    <li class='float-left'><a href="/proxy" class="text-white text-lg ml-10">Proxy</a></li>
                    <li class='float-left'><a href="/faq" class="text-white text-lg ml-10">FAQ</a></li>
                    <li class='float-left'><a href="/" class="text-white text-lg ml-10">Support</a></li>
                    <li class='float-left'><a href="/" class="text-white text-lg ml-10">Discord</a></li>
                </ul>

            </div>
                <div class='float-right text-white text-2xl mr-10'>
                    <button id="theme-toggle" on:click="{toggle}" class='float-right'>
                        ☀️
                    </button>
            </div>
        </div>
    </nav>
</div>