// Global Scramjet initialization
(async function() {
    console.log('Starting Scramjet initialization...');

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
    
    // Register Scramjet service worker
    await navigator.serviceWorker.register('/sj.js', {
        scope: '/service/'
    });
    
    console.log('Scramjet initialized successfully');
    
    // Set global flag
    window.scramjetReady = true;
})();
