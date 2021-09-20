const core = require('./qdt/Core');

core.addPlatform(require('./platforms/HtmlPlatform'));

module.exports = core;