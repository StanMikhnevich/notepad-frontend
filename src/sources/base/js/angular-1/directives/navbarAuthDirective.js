const navbarAuthDirective = function (
    $scope,
    $state,
    $element,
    appConfigs,
    ModalService,
) {
    let $ctrl = this;

    $scope.user = JSON.parse(localStorage.getItem('user')) ?? false;

    $scope.logout = () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('user');

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
            navbarAuthDirective
        ],
        templateUrl: 'assets/tpl/directives/navbar-auth-directive.html',
    };
};