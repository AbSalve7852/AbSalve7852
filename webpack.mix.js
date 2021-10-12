// webpack.mix.js

let mix = require('laravel-mix');
mix.options({ purifyCss: true });
mix.js('resources/js/app.js', 'public/js/app.js').saas('resources/scss/app.scss', 'public/css/app.css');