const ModalCreateNoteComponent = function (
    $q,
    $scope,
    $rootScope,
    $state,
    $stateParams,
    ModalService,
    NotesService
) {
    let $ctrl = this;

    $ctrl.pageTitle = $stateParams.pageTitle;

    $ctrl.$onInit = function () {
        $ctrl.user = JSON.parse(localStorage.getItem('user')) ?? undefined;
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
        ModalCreateNoteComponent
    ],
    templateUrl: 'assets/tpl/modals/modal-note-create.html',
};