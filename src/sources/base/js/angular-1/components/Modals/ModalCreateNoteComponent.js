const ModalCreateNoteComponent = function (
    $q,
    $scope,
    $rootScope,
    $state,
    $stateParams,
    ModalService,
    NotesService,
    CredentialsService,
) {
    let $ctrl = this;

    $ctrl.pageTitle = $stateParams.pageTitle;

    $ctrl.$onInit = function () {
        $ctrl.user = CredentialsService.getUser();
        $ctrl.displayNavBar = $rootScope.displayNavBar;

        $ctrl.note = {
            title: '',
            text: '',
            attachment: [],
            private: false
        }
    }

    $ctrl.createNote = () => {
        NotesService.store($ctrl.note).then(res => {
            $ctrl.close();
            $ctrl.modal.scope.onSubmit(res);
        })
    };
};

module.exports = {
    bindings: {
        close: '=',
        modal: '='
    },
    controller: [
        '$q',
        '$scope',
        '$rootScope',
        '$state',
        '$stateParams',
        'ModalService',
        'NotesService',
        'CredentialsService',
        ModalCreateNoteComponent
    ],
    templateUrl: 'assets/tpl/modals/modal-note-create.html',
};