var themename = "bootstrap_sass";
const themePath = 'web/themes/contrib/bootstrap/subthemes/' + themename;
const output = 'web/themes/contrib/bootstrap/subthemes/' + themename + '/asset';
const resources = themePath;

let mix = require('laravel-mix');
mix.sourceMaps(true, 'source-map')

mix.setPublicPath(`${themePath}`);

mix.sass(`${resources}/scss/base.scss`, `${output}/css`);
/*
mix.js(`${resources}/js/app.js`, `${output}/js`);

mix.scripts([
    `${resources}/js/base.js`,
    `${resources}/js/custom.js`,
], `${output}/js/app.js`);
*/
mix.copyDirectory(`${resources}/images`, `${output}/images`);