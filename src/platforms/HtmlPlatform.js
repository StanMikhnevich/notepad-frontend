const Platform = require('../qdt/Platform');

// set platform source and destination folder
const platform = new Platform('base');

// change platform name
platform.setName('html');

// change building root path
platform.setDestRootPath("../dist/html");

// tweaking output and cleaned paths config
platform.setDest(`./`);
platform.setAssetsPath(`./assets`);

platform.addCleanPath('./');
platform.addCleanPath(`./assets`);

// add libs to bundle (see libs folder)
platform.setLibs([
    "mdi",
    "jquery",
    "jquery_fancybox",
    "angular",
    "angular_animate",
    "angular_cookies",
    "angular_sanitize",
    // "date_fns",
    "ui_router",
    "tailwind",
    "babel_polyfill",
    "underscore",
    "underscore.string",
]);

// assets configs
platform.copyAsset("resources/**/*", "./");

// add js task
platform.addTask('js', {
    src: "app.js",
    watch: "**/*.js",
    dest: "/",
    name: "app.min.js",
    minify: true,
    sourcemap: true,
    browserify: true
}, 'js');

// add scss task
platform.addTask('scss', {
    src: "style.scss",
    watch: [
        "includes/**/*.scss",
        "blocks/**/*.scss",
    ],
    path: "/",
    name: "style.min.css",
    minify: true
}, 'scss');

// add pug task
platform.addTask('pug', {
    path: "/",
    src: "*.pug",
    watch: "layout/**/*.pug",
    minify: true
}, 'pug');

// add pug task
platform.addTask('pug', {
    path: "/tpl",
    src: [
        "tpl/**/*.pug"
    ],
    dest: "/assets/tpl",
    minify: true
}, 'pug_raw');

// change server port
platform.serve(3000, '/');

module.exports = platform;
