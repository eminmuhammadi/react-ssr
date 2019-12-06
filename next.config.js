const withSass = require('@zeit/next-sass');
const withCSS = require("@zeit/next-css");
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
const withFonts = require('next-fonts');


module.exports = {
    devIndicators: {
        autoPrerender: false,
    },
    useFileSystemPublicRoutes: false,
    poweredByHeader: false,
};

module.exports = withPlugins([
    [withFonts({
        enableSvg: true,
        webpack(config, options) {
            return config;
        }
    })],
    [withCSS(
        withSass({
            webpack (config) {
                config.module.rules.push({
                    test: /\.(eot|otf|ttf|woff|woff2)$/,
                    use: {
                        loader: 'url-loader',
                        options: {
                            limit: 100000,
                            publicPath: './',
                            outputPath: 'static/',
                            name: '[name].[ext]'
                        }
                    }
                });
                return config;
            }
        }))
    ],
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
