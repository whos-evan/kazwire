function loadScript(path,onComplete)
{var script=document.createElement('script');if(onComplete)script.onload=onComplete;script.src=path;document.head.appendChild(script);}
function initPokiSDK(onComplete)
{var PokiSDK=window.PokiSDK;if(!PokiSDK)return onComplete();function onInitComplete(adBlockerOn)
{PokiSDK.adBlockerOn=adBlockerOn;PokiSDK.gameLoadingStart();if(onComplete)onComplete();}
return PokiSDK.init().then(function()
{onInitComplete(false);}).catch(function()
{onInitComplete(true);});}
function initApp()
{if(window.PokiSDK&&window.GAME_CONFIG&&window.GAME_CONFIG.pokiSdkDebug!==undefined)
{window.PokiSDK.setDebug(window.GAME_CONFIG.pokiSdkDebug);}
loadScript('./js/dependencies.bundle.js');loadScript(window.MAIN?window.MAIN:'./js/index.js');}
function preventDefaultKeyboardEvents()
{const keys=[' ','ArrowUp','ArrowDown','ArrowLeft','ArrowRight',];function onKey(e)
{if(keys.indexOf(e.key)<0)return;e.preventDefault();}
window.addEventListener('keydown',onKey);window.addEventListener('keyup',onKey);}
function registerServiceWorker(onComplete)
{if(navigator.serviceWorker&&!window.NOSW)
{console.log('Service worker available');navigator.serviceWorker.register('./sw.js',{scope:'./'}).then(function()
{console.log('Service worker registered');if(onComplete)onComplete();}).catch(function(error)
{console.log('Service worker registration failed - '+error);if(onComplete)onComplete();});}
else if(onComplete)
{onComplete();}}
preventDefaultKeyboardEvents();registerServiceWorker(function()
{initPokiSDK(function()
{initApp();});});