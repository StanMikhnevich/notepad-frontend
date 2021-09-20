module.exports = (core) => {
    //- Enable only given platforms
    core.enableOnly([
        'html',
    ]);

    // Edit platform and task example
    /* core.editPlatform('html', (platform) => {
        // platform.setEnvData({api_url: 'https://example.com/api/v1'});
        // platform.editTask('js', (task) => ({ ...task, ...{ minify: true } }));

        return platform;
    });*/

    //- Enable all but given platforms (will ignore: 'core.enableOnly' when used) [] or ''
    // core.disableOnly([]);

    return core;
};
