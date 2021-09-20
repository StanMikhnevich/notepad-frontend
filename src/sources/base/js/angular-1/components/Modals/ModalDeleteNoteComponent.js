const ModalDeleteNoteComponent = function (
    ModalService,
    NotesService
) {
    let $ctrl = this;

    $ctrl.deleteNote = () => {
        NotesService.destroy($ctrl.modal.scope.noteUID, {}).then(res => {
            $ctrl.close();
            $ctrl.modal.scope.onDelete(res);
        })
    };
};

module.exports = {
    bindings: {
        close: '=',
        modal: '=',
    },
    controller: [
        'ModalService',
        'NotesService',
        ModalDeleteNoteComponent
    ],
    templateUrl: 'assets/tpl/modals/modal-note-delete.html',
};