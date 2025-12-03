import { config } from './config';

// Shows a custom welcome message
// --------------------------------------------------------

export function styledMessage(message: string, chip: string) {
	// Show the name of the service and next to it have a chip saying Info/Warning/Error
	// Should be the normal text size for both the name and the chip
	// Name shouldn't have any background color, but the chip should

	const style = [
		'color: #ffffff',
		'display: block',
		'font-size: 1rem',
		'text-align: center',
		'font-weight: bold'
	].join(';');

	const chipStyle = [
		'background: #8d76d3',
		'color: #ffffff',
		'font-size: 0.75rem',
		'font-weight: bold',
		'padding: 0.5rem 0.5rem 0.5rem 0.5rem',
		'border-radius: 0.5rem',
		'margin: 1rem 0'
	].join(';');

	// Show the console.log with the name of the service and the chip next to it and a new line with the message
	console.log(`%c${config.branding.name} %c${chip}%c\n${message}`, style, chipStyle, '');
}

function customMessage() {
	const message = `Welcome to ${config.branding.name}!`;
	const style = [
		'background: #000000',
		'border: 1px solid #8d76d3',
		'color: #ffffff',
		'display: block',
		'text-align: center',
		'font-size: 2rem',
		'font-weight: bold',
		'padding: 1rem 1rem 1rem 1rem',
		'border-radius: 0.5rem',
		'margin: 1rem 0'
	].join(';');

	console.log(`%c${message}`, style);
	console.log(
		`%c${config.branding.description} If you would like to learn more visit the about us page or read the FAQ.`,
		'text-align: center; font-size: 1rem; margin: 1rem 0;'
	);

	// Debugging info as a group
	console.groupCollapsed('Debugging Info');
	// Show client info
	console.log('%cClient Info:', 'font-weight: bold;');
	console.log(`\tUser Agent: ${navigator.userAgent}`);
	console.log(`\tPlatform: ${navigator.platform}`);
	console.log(`\tLanguage: ${navigator.language}`);
	console.log(`\tDo Not Track: ${navigator.doNotTrack}`);
	console.log(`\tCookies Enabled: ${navigator.cookieEnabled}`);
	console.log(`\tOnline: ${navigator.onLine}`);
	// Show screen info
	console.log('%cScreen Info:', 'font-weight: bold;');
	console.log(`\tScreen Width: ${screen.width}`);
	console.log(`\tScreen Height: ${screen.height}`);
	console.log(`\tScreen Color Depth: ${screen.colorDepth}`);
	console.log(`\tScreen Pixel Depth: ${screen.pixelDepth}`);
	// Show location info
	console.log('%cLocation Info:', 'font-weight: bold;');
	console.log(`\tLocation: ${location.href}`);
	console.log(`\tProtocol: ${location.protocol}`);
	console.log(`\tHost: ${location.host}`);
	console.log(`\tHostname: ${location.hostname}`);
	console.log(`\tPort: ${location.port}`);
	console.log(`\tPathname: ${location.pathname}`);
	console.log(`\tSearch: ${location.search}`);
	console.log(`\tHash: ${location.hash}`);
	// Show document info
	console.log('%cDocument Info:', 'font-weight: bold;');
	console.log(`\tTitle: ${document.title}`);
	console.log(`\tURL: ${document.URL}`);
	console.log(`\tLast Modified: ${document.lastModified}`);
	console.log(`\tReady State: ${document.readyState}`);
	console.log(`\tVisibility State: ${document.visibilityState}`);
	console.log(`\tCharacter Set: ${document.characterSet}`);
	console.log(`\tContent Type: ${document.contentType}`);
	console.groupEnd();
}

export default customMessage;
