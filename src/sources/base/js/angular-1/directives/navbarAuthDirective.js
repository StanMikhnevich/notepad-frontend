const navbarAuthDirective = function (
    $scope,
    $state,
    $element,
    appConfigs,
    ModalService,
    CredentialsService,
) {
    let $ctrl = this;

    $scope.user = CredentialsService.getUser();

    $scope.logout = () => {
        CredentialsService.clear();

        $state.go('notesAll');
        document.location.reload();

    }

    $scope.openAuthLoginModal = () => {
        // $ctrl.close();
        ModalService.open('authLogin', {});
    };

    $scope.openAuthRegisterModal = () => {
        // $ctrl.close();
        ModalService.open('authRegister', {});
    };

    $scope.openAuthEmailVerifyModal = () => {
        // $ctrl.close();
        ModalService.open('authEmailVerify', {});
    };


}

module.exports = () => {
    return {
        controller: [
            '$scope',
            '$state',
            '$element',
            'appConfigs',
            'ModalService',
            'CredentialsService',
            navbarAuthDirective
        ],
        templateUrl: 'assets/tpl/directives/navbar-auth-directive.html',
    };
};