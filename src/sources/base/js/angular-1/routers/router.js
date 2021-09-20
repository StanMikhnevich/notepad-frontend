module.exports = [
    '$stateProvider',
    '$locationProvider',
    'appConfigs',
    (
        $stateProvider,
        $locationProvider,
        appConfigs
    ) => {

        $stateProvider.state({
            name: "authLogin",
            url: "/login",
            component: "authLoginComponent",
        });

        $stateProvider.state({
            name: "authRegister",
            url: "/register",
            component: "authRegisterComponent",
        });

        $stateProvider.state({
            name: "home",
            url: "/",
            component: "homeComponent",
        });

        $stateProvider.state({
            name: "notesAll",
            url: "/notes/all",
            component: "notesComponent",
            params: {
                pageTitle: 'All notes',
                show: 'all',
            },
        });

        $stateProvider.state({
            name: "notesPublic",
            url: "/notes/public",
            component: "notesComponent",
            params: {
                pageTitle: 'Public notes',
                show: 'public',
            },
        });

        $stateProvider.state({
            name: "notesMy",
            url: "/notes/my",
            component: "notesComponent",
            params: {
                pageTitle: 'My notes',
                show: 'my',
            },
        });

        $stateProvider.state({
            name: "notesShared",
            url: "/notes/shared",
            component: "notesComponent",
            params: {
                pageTitle: 'Shared notes',
                show: 'shared',
            },
        });

        $stateProvider.state({
            name: "noteShow",
            url: "/notes/:noteUID",
            component: "notesShowComponent",
        });

        // console.log(appConfigs.html5ModeEnabled)
        // if (appConfigs.html5ModeEnabled) {
        //     $locationProvider.html5Mode({
        //         enabled: true,
        //         requireBase: true
        //     }).hashPrefix('!');
        // }
    }
]