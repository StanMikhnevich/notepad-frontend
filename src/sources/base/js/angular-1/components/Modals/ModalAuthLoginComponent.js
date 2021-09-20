const ModalAuthLoginComponent = function (
    $q,
    $state,
    $rootScope,
    ModalService,
    AuthService
) {
    let $ctrl = this;

    $ctrl.auth = {
        email: '',
        password: ''
    }

    $ctrl.$onInit = function () {
        // $(document).bind('keydown', (e) => {
        //     $timeout(function() {
        //         var key = e.charCode || e.keyCode || 0;
        //
        //         if (key == 27) {
        //             $ctrl.close();
        //         }
        //     }, 0);
        // });

    }

    $ctrl.openAuthRegisterModal = () => {
        $ctrl.close();
        ModalService.open('authRegister', {});
    };

    $ctrl.login = () => {
        AuthService.login($ctrl.auth).then(res => {
            localStorage.setItem('accessToken', res.data.token);
            localStorage.setItem('user', JSON.stringify(res.data.user));

            $rootScope.auth = true;

            $ctrl.close();
            $state.go('notesMy');
            document.location.reload();
        })
    };
};

module.exports = {
    bindings: {
        close: '=',
        modal: '=',
    },
    controller: [
        '$q',
        '$state',
        '$rootScope',
        'ModalService',
        'AuthService',
        ModalAuthLoginComponent
    ],
    templateUrl: 'assets/tpl/modals/modal-login.html',
};