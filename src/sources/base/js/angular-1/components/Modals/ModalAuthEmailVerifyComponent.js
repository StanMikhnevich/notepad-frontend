let ModalAuthLoginComponent = function(
    $rootScope,
    AuthService,
    // FormBuilderService,
    CredentialsService,
    ModalService
) {
    let $ctrl = this;

    $ctrl.$onInit = function () {
        $ctrl.user = CredentialsService.getUser();
        $ctrl.message = '';

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

    $ctrl.resend = () => {
        AuthService.resendVerify({user_id: $ctrl.user.id}).then(res => {
            if(res.data.success) {
                $ctrl.message = res.data.message;
            }
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
        'CredentialsService',
        'ModalService',
        ModalAuthLoginComponent
    ],
    templateUrl: () => {
        return 'assets/tpl/modals/modal-verify.html';
    }
};