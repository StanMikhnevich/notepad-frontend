module.exports = [
    'PrintableRouteProvider',
    function (PrintableRouteProvider) {
        PrintableRouteProvider.printable('noteFull', {component: 'printableNoteComponent'});
    }
];