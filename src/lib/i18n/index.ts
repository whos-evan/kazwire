import { browser } from '$app/environment'
import { init, register } from 'svelte-i18n'

const defaultLocale = 'en'

register('en', () => import('$lib/i18n/locales/en.json'))
register('ja', () => import('$lib/i18n/locales/ja.json'))

init({
	fallbackLocale: defaultLocale,
	// check localStorage for saved locale or use the default locale
	initialLocale: browser ? localStorage.getItem('locale') || defaultLocale : defaultLocale
})