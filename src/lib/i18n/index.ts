import { browser } from '$app/environment';
import { init, register, locale } from 'svelte-i18n';

let defaultLocale = 'en';

register('en', () => import('$lib/i18n/locales/en.json'));
register('es', () => import('$lib/i18n/locales/es.json'));
register('fr', () => import('$lib/i18n/locales/fr.json'));
register('de', () => import('$lib/i18n/locales/de.json'));
register('ja', () => import('$lib/i18n/locales/ja.json'));


if (browser) {
	init({
		fallbackLocale: defaultLocale,
		// priority: localStorage, navigator, defaultLocale
		initialLocale: localStorage.getItem('locale') || navigator.language || defaultLocale
	});
	console.log('i18n initialized');
}
