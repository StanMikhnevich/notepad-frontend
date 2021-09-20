const BaseController = function(
    $q,
    $rootScope,
    $scope,
    $http,
    $state,
    $cookies,
    appConfigs,
) {
    let $ctrl = this;

    $rootScope.$state = $state;
    $rootScope.appConfigs = appConfigs;

    // $translate.use('en');
}

module.exports = [
    '$rootScope',
    '$scope',
    '$http',
    '$state',
    '$cookies',
    'appConfigs',
    BaseController
];