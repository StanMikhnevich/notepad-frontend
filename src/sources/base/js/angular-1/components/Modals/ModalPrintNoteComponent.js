let ModalPrintNoteComponent = function(
    $timeout,
    PrintableService,
) {
    let $ctrl = this;

    $ctrl.printNote = () => {
        PrintableService.open('noteFull', {
            note: $ctrl.note,
            backend_url: $ctrl.backend_url,
        });
    };

    $ctrl.$onInit = () => {
        $ctrl.note = $ctrl.modal.scope.note;
        $ctrl.backend_url = $ctrl.modal.scope.backend_url;
    };

    $timeout(() => {
        window.print();
        $ctrl.close();
    }, 500);


    // $ctrl.$onDestroy = function() { };
};

module.exports = {
    bindings: {
        close: '=',
        modal: '=',
    },
    controller: [
        '$timeout',
        'PrintableService',
        ModalPrintNoteComponent
    ],
    templateUrl: () => {
        return 'assets/tpl/modals/modal-note-show.html';
    }
};

