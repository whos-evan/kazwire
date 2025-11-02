// Global Scramjet initialization
(async function() {
    console.log('Starting Scramjet initialization...');
    
    // Wait for Scramjet to load
    let attempts = 0;
    const maxAttempts = 50; // 5 seconds max
    
    while (typeof window.$scramjetLoadController === 'undefined' && attempts < maxAttempts) {
        await new Promise(resolve => setTimeout(resolve, 100));
        attempts++;
    }
    
    if (typeof window.$scramjetLoadController === 'undefined') {
        console.error('Scramjet failed to load after 5 seconds');
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
    
    const wsUrl = `${location.protocol === 'https:' ? 'wss' : 'ws'}://${location.host}/wisp`;
    await connection.setTransport('/epoxy/index.mjs', [{ wisp: wsUrl }]);
    
    // Register Scramjet service worker
    await navigator.serviceWorker.register('/sj.js', {
        scope: '/service/'
    });
    
    console.log('Scramjet initialized successfully');
    
    // Set global flag
    window.scramjetReady = true;
})();
