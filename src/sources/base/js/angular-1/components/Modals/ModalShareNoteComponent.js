const ModalShareNoteComponent = function (
    $timeout,
    ModalService,
    NotesService
) {
    let $ctrl = this;

    $ctrl.share = {
        email: '',
    }

    $ctrl.$onInit = function () {

    }

    $ctrl.success = false;

    $ctrl.shareNote = () => {
        NotesService.share($ctrl.modal.scope.noteUID, {
            note_uid: $ctrl.modal.scope.noteUID,
            email: $ctrl.share.email
        }).then(res => {
            $ctrl.success = true;
            $ctrl.modal.scope.onSubmit(res);

            $timeout(() => {
                $ctrl.close();
                $ctrl.success = false;
            }, 2000);

        })
    };
};

module.exports = {
    bindings: {
        close: '=',
        modal: '=',
    },
    controller: [
        '$timeout',
        'ModalService',
        'NotesService',
        ModalShareNoteComponent
    ],
    templateUrl: 'assets/tpl/modals/modal-note-share.html',
};