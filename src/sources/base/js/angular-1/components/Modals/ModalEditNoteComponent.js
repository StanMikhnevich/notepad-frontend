const ModalEditNoteComponent = function (
    $q,
    $state,
    ModalService,
    NotesService
) {
    let $ctrl = this;

    $ctrl.$onInit = function () {

        $ctrl.loadNote();

    }

    $ctrl.openDeleteNoteModal = (noteUID) => {
        ModalService.open('deleteNote', {
            noteUID,
            onDelete: (value) => $state.go('notesMy')
        })
    };

    $ctrl.loadNote = () => {
        return $q((resolve, reject) =>
            NotesService.read($ctrl.modal.scope.noteUID).then(res =>
                resolve($ctrl.note = res.data.data), reject
            )
        );
    };

    $ctrl.deleteNoteAttachment = (attachment_id) => {
        console.log(attachment_id);
    };

    $ctrl.unShare = (sharing_id) => {
        return $q((resolve, reject) =>
            NotesService.unShare($ctrl.modal.scope.noteUID, {sharing_id}).then(res => {
                $ctrl.loadNote(res);
                $ctrl.modal.scope.onUnshare(res);
            })
        );
    };

    $ctrl.updateNote = () => {
        NotesService.update($ctrl.modal.scope.noteUID, {
            id: $ctrl.note.id,
            title: $ctrl.note.title,
            text: $ctrl.note.text,
            private: $ctrl.note.private
        }).then(res => {
            $ctrl.close();
            $ctrl.modal.scope.onSubmit(res);
        });
    };
};

module.exports = {
    bindings: {
        close: '=',
        modal: '='
    },
    controller: [
        '$q',
        '$state',
        'ModalService',
        'NotesService',
        ModalEditNoteComponent
    ],
    templateUrl: 'assets/tpl/modals/modal-note-edit.html',
};