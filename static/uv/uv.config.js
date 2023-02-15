// get bareServer from localStorage
var urls = [];
// add 'uv' as a subdomain to the current domain
urls.push('https://uv.' + location.hostname.split('.').reverse().splice(0,2).reverse().join('.')) + '/bare/';
urls.push('https://uv2.' + location.hostname.split('.').reverse().splice(0,2).reverse().join('.')) + '/bare/';

/*global Ultraviolet*/
self.__uv$config = {
	prefix: '/search/',
	bare: urls[Math.floor(Math.random() * urls.length)],
	encodeUrl: Ultraviolet.codec.xor.encode,
	decodeUrl: Ultraviolet.codec.xor.decode,
	handler: '/uv/uv.handler.js',
	bundle: '/uv/uv.bundle.js',
	config: '/uv/uv.config.js',
	sw: '/uv/uv.sw.js'
};
