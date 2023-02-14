// get random bare-server url
var urls = [
	'https://uv.kazwire.com/bare/',
	'https://uv2.kazwire.com/bare/'
];

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
