export function darkMode() {
	if (localStorage.getItem('darkMode') === 'true') {
		document.documentElement.classList.add('dark');
		return true;
	} else {
		document.documentElement.classList.remove('dark');
		return false;
	}
}
