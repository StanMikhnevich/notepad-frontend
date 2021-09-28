let ModalShowNoteComponent = function(

) {
    let $ctrl = this;


    $ctrl.$onInit = () => {
        $ctrl.note = $ctrl.modal.scope.note;
        $ctrl.backend_url = $ctrl.modal.scope.backend_url;
    };
};

module.exports = {
    bindings: {
        close: '=',
        modal: '=',
    },
    controller: [
        ModalShowNoteComponent
    ],
    templateUrl: () => {
        return 'assets/tpl/modals/modal-note-show.html';
    }
};

