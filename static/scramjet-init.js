// Global Scramjet initialization
(async function() {
    console.log('Starting Scramjet initialization...');
    
    // Version number - increment this to force cache clear
    const SCRAMJET_VERSION = '1.0.1';
    const currentVersion = localStorage.getItem('scramjet_version');
    
    // Force clear everything if version changed or first time
    if (currentVersion !== SCRAMJET_VERSION) {
        console.log('Version mismatch or first run, clearing all caches and service workers...');
        
        // Unregister ALL service workers
        const registrations = await navigator.serviceWorker.getRegistrations();
        for (const registration of registrations) {
            console.log('Unregistering service worker:', registration.scope);
            await registration.unregister();
        }
        
        // Clear all caches
        const cacheNames = await caches.keys();
        await Promise.all(cacheNames.map(name => {
            console.log('Deleting cache:', name);
            return caches.delete(name);
        }));
        
        // Clear localStorage items (except version)
        const keysToRemove = [];
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key && key !== 'scramjet_version') {
                keysToRemove.push(key);
            }
        }
        keysToRemove.forEach(key => localStorage.removeItem(key));
        
        // Update version
        localStorage.setItem('scramjet_version', SCRAMJET_VERSION);
        console.log('Cache cleared, reloading page...');
        
        // Reload page to start fresh
        window.location.reload();
        return;
    }

    // Initialize Scramjet
    const { ScramjetController } = window.$scramjetLoadController();
    
    const scramjet = new ScramjetController({
        files: {
            wasm: '/sj/scramjet.wasm.wasm',
            all: '/sj/scramjet.all.js',
            sync: '/sj/scramjet.sync.js'
        },
        prefix: '/service/'
    });
    
    await scramjet.init();
    
    // Expose scramjet globally
    window.scramjet = scramjet;
    
    // Initialize bare-mux
    // const { BareMuxConnection } = await import('/baremux/index.js');
    const connection = new BareMux.BareMuxConnection('/baremux/worker.js');
    
    const wsUrl = `${location.protocol === 'https:' ? 'wss' : 'ws'}://${location.host}/wisp/`;
    await connection.setTransport('/epoxy/index.mjs', [{ wisp: wsUrl }]);
    
    // Register Scramjet service worker with cache busting
    const swUrl = `/sj.js?v=${SCRAMJET_VERSION}`;
    const registration = await navigator.serviceWorker.register(swUrl, {
        scope: '/service/',
        updateViaCache: 'none'
    });
    
    // Force update
    await registration.update();
    
    console.log('Scramjet initialized successfully');
    
    // Set global flag
    window.scramjetReady = true;
})();
