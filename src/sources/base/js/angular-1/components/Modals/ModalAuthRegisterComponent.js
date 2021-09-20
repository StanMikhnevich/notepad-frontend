let ModalAuthLoginComponent = function(
    $rootScope,
    AuthService,
    // FormBuilderService,
    // CredentialsService,
    ModalService
) {
    let $ctrl = this;

    $ctrl.auth = {
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
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

    $ctrl.openAuthLoginModal = () => {
        $ctrl.close();
        ModalService.open('authLogin', {});
    };

    $ctrl.openAuthVerifyModal = () => {
        $ctrl.close();
        ModalService.open('authVerify', {})
    };

    $ctrl.register = () => {
        AuthService.register($ctrl.auth).then(res => {
            localStorage.setItem('user', JSON.stringify(res.data.user));

            $ctrl.openAuthVerifyModal();
            // $state.go('notesMy');
            document.location.reload();
        })
    };

};

module.exports = {
    bindings: {
        close: '=',
        modal: '='
    },
    controller: [
        // '$timeout',
        '$rootScope',
        'AuthService',
        // 'IdentityService',
        // 'FormBuilderService',
        // 'CredentialsService',
        'ModalService',
        ModalAuthLoginComponent
    ],
    templateUrl: () => {
        return 'assets/tpl/modals/modal-register.html';
    }
};