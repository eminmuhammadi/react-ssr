const withSass = require('@zeit/next-sass');
const withCSS = require("@zeit/next-css");
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

module.exports = {
    devIndicators: {
        autoPrerender: false,
    },
    useFileSystemPublicRoutes: false,
    poweredByHeader: false,
};

module.exports = withPlugins([
    [withCSS(withSass({

    }))],
    [optimizedImages, {

        inlineImageLimit: 8192,
        imagesFolder: 'images',
        imagesName: '[name]-[hash].[ext]',
        handleImages: ['jpeg', 'png', 'svg', 'webp', 'gif'],
        optimizeImages: true,
        optimizeImagesInDev: false,
        mozjpeg: {
            quality: 80,
        },
        optipng: {
            optimizationLevel: 3,
        },
        pngquant: false,
        gifsicle: {
            interlaced: true,
            optimizationLevel: 3,
        },
        svgo: {
            // enable/disable svgo plugins here
        },
        webp: {
            preset: 'default',
            quality: 75,
        },
    }]
]);
