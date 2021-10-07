const ModalAuthRegisterComponent = function(
    $rootScope,
    AuthService,
    // FormBuilderService,
    ModalService,
    CredentialsService,
    PageLoadingBarService,
) {
    let $ctrl = this;

    $ctrl.auth = {
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
    }

    $ctrl.loading = false;

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
        ModalService.open('authEmailVerify', {})
    };

    $ctrl.register = () => {
        PageLoadingBarService.setProgress(0);

        AuthService.register($ctrl.auth).then(res => {
            console.log(res.data)
            CredentialsService.setUser(res.data.user);

            PageLoadingBarService.setProgress(100);
            $ctrl.openAuthVerifyModal();
            // $state.go('notesMy');
            // document.location.reload();
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
        'ModalService',
        'CredentialsService',
        'PageLoadingBarService',
        ModalAuthRegisterComponent
    ],
    templateUrl: () => {
        return 'assets/tpl/modals/modal-register.html';
    }
};
