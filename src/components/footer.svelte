
<script lang="ts">
    import { darkMode } from "../dark";
    import { onMount } from "svelte";
    onMount(() => {
        darkMode();
    });
</script>

<div class="Footer relative">
    <nav class="bg-[#0875bb] max-w mt-10 pt-2">
        <div class="flex items-center justify-evenly flex-wrap p-6">
            <div class="flex items-center text-white ml-10">
                <ul class="align-middle leading-[3rem]">
                    <li class='float-left text-white text-lg'>Made with ❤️ by evan</li>
                    <li class='float-left'><a href="/legal/tos" class="text-white text-lg ml-10">Terms of Service</a></li>
                    <li class='float-left'><a href="/legal/privacy-policy" class="text-white text-lg ml-10">Privacy Policy</a></li>
                    <li class='float-left'><a href="/legal/dmca" class="text-white text-lg ml-10">DMCA</a></li>
                    <li class='float-left text-white text-lg ml-10'>©2022 Kazwire</li>
                </ul>
        </div>
    </nav>
</div>