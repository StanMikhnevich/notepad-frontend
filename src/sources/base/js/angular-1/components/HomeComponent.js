const HomeComponent = function (
    appConfigs,
    $scope,
    $state,
    $stateParams,
    CredentialsService,
) {
    let $ctrl = this;

    if($stateParams.verified) {
        CredentialsService.verifyUser();
        $state.go('notesAll');
        document.location.replace('/');
    }

};

module.exports = {
    controller: [
        'appConfigs',
        '$scope',
        '$state',
        '$stateParams',
        'CredentialsService',
        HomeComponent
    ],
    templateUrl: 'assets/tpl/pages/home.html',
};