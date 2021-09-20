let PrintableNoteComponent = function($timeout) {
    let $ctrl = this;

    $ctrl.$onInit = () => {
        $ctrl.note = $ctrl.printable.scope.note;
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
