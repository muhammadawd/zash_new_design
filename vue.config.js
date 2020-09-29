const manifestJSON = require('./public/manifest.json')

module.exports = {
    publicPath: '/new_front2/',
    lintOnSave: false,
    css: {
        // Enable CSS source maps.
        sourceMap: process.env.NODE_ENV !== 'production'
    },
    pwa: {
        themeColor: manifestJSON.theme_color,
        name: manifestJSON.short_name,
        msTileColor: manifestJSON.background_color,
        appleMobileWebAppCapable: 'yes',
        appleMobileWebAppStatusBarStyle: '#172b4d',
        workboxPluginMode: 'InjectManifest',
        workboxOptions: {
            importWorkboxFrom: 'local',
            swSrc:'public/service-worker.js',
        }
    },
}

