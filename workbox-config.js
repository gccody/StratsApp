module.exports = {
    globDirectory: 'build/',
    globPatterns: [
        '**/*.{html,json,js,css}'
    ],
    swDest: 'build/service-worker.js',
    clientsClaim: true,
    skipWaiting: true,
    runtimeCaching: [
        {
            urlPattern: ({ request }) => request.destination === 'document' || request.destination === 'script' || request.destination === 'style' || request.destination === 'image',
            handler: 'StaleWhileRevalidate',
            options: {
            cacheName: 'runtime-cache',
            expiration: {
                maxEntries: 100,
                maxAgeSeconds: 60 * 60 * 24 * 30, // 30 Days
            },
            },
        },
    ],
};