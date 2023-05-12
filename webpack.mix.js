const mix = require('laravel-mix')
const tailwindcss = require('tailwindcss')

mix
    .js('resources/js/app.js', 'public/js')
    .postCss('resources/css/app.css', 'public/css', [
        require('postcss-import'),
        tailwindcss('./tailwind.config.js'),
    ])
    .webpackConfig(require('./webpack.config'))

if (mix.inProduction()) {
    mix.version()
} else {
    mix.sourceMaps()
}
