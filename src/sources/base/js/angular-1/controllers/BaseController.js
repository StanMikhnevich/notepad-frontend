const BaseController = function(
    $q,
    $scope,
    $http,
    $state,
    $cookies,
    appConfigs,
    CredentialsService,
) {
    let $ctrl = this;

    $ctrl.$state = $state;
    $ctrl.appConfigs = appConfigs;

    $scope.user = CredentialsService.getUser();

    // $translate.use('en');
}

module.exports = [
    '$rootScope',
    '$scope',
    '$http',
    '$state',
    '$cookies',
    'appConfigs',
    'CredentialsService',
    BaseController
];