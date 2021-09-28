let PrintableNoteComponent = function($timeout) {
    let $ctrl = this;

    $ctrl.$onInit = () => {
        $ctrl.note = $ctrl.printable.scope.note;
        $ctrl.note._created_at = moment($ctrl.note.created_at).format('DD.MM.YYYY hh:mm')
        $ctrl.note._updated_at = moment($ctrl.note.updated_at).format('DD.MM.YYYY hh:mm')
        $ctrl.backend_url = $ctrl.printable.scope.backend_url;

        $timeout(() => {
            window.print();
            $ctrl.close();
        }, 500);
    };

    $ctrl.$onDestroy = function() {};
};

module.exports = {
    bindings: {
        close: '=',
        printable: '=',
    },
    controller: [
        '$timeout',
        PrintableNoteComponent
    ],
    templateUrl: () => {
        return 'assets/tpl/printables/printable-note.html';
    }
};
