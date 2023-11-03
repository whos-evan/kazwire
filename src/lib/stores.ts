import { browser } from '$app/environment';
import { writable } from 'svelte/store';

export const darkMode = writable(false);
export const isLiked = writable(false);

export const neverShowSchoolRescue = writable(false);
export const neverShowHalloween = writable(false);
export const neverShowThanksgiving = writable(false);
export const neverShowFortnite = writable(false);

// Update the store with data from local storage
if (browser) {
	if (localStorage.getItem('neverShowSchoolRescue') === 'true') {
		neverShowSchoolRescue.set(true);
	}

	if (localStorage.getItem('neverShowHalloween') === 'true') {
		neverShowHalloween.set(true);
	}

	if (localStorage.getItem('neverShowThanksgiving') === 'true') {
		neverShowThanksgiving.set(true);
	}

	if (localStorage.getItem('neverShowFortnite') === 'true') {
		neverShowFortnite.set(true);
	}
}
