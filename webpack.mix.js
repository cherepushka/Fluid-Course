/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

const mix = require('laravel-mix');
const fs = require('fs');
const path = require('path');

mix.disableSuccessNotifications();

mix.setPublicPath('./');

buildJs('assets/js/pages/', 'public/js');

function buildJs(dir, dest) {
    findFiles(dir).forEach(function (file) {
        
        const filename = path.basename(file)
        
        if (!filename.startsWith('_')) {
            mix.js(file, dest).version();
        }
    });
}

function findFiles(dir) {
    let results = [];
    const list = fs.readdirSync(dir);

    list.forEach(function(file) {
        file = dir + '/' + file;
        var stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            /* Recurse into a subdirectory */
            results = results.concat(findFiles(file));
        } else { 
            /* Is a file */
            results.push(file);
        }
    });
    
    return results;
}


// mix.sass('assets/scss/new_fluid_style.scss', 'assets/css/new_fluid_style.css');