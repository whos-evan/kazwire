import { browser } from '$app/environment';
import { writable } from 'svelte/store';

export const darkMode = writable(false);
export const isLiked = writable(false);

export const neverShowSchoolRescue = writable(false);
// Update the store with data from local storage
if (browser) {
	if (localStorage.getItem('neverShowSchoolRescue') === 'true') {
		neverShowSchoolRescue.set(true);
	}
}
