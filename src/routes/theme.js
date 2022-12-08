import { writable } from "svelte/store";
import { onMount } from 'svelte';

export function theme(){

    onMount(() => {
        const storedTheme = localStorage.getItem("theme");
        const theme = writable(storedTheme);
        theme.subscribe(value => {
            localStorage.setItem("theme", value === 'dark' ? 'dark' : 'light');
        });
        if (storedTheme === 'dark') {
            document.documentElement.classList.add('dark');
        }
    });
}
