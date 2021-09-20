const NotesComponent = function (
    $q,
    $rootScope,
    $scope,
    $state,
    $stateParams,
    appConfigs,
    ModalService,
    NotesService
) {
    let $ctrl = this;

    $ctrl.pageTitle = $stateParams.pageTitle;

    $ctrl.orderList = [
        {value: "title", title: "Alphabetical"},
        {value: "-created_at", title: "Newest"},
        {value: "created_at", title: "Oldest"},
        {value: "user.name", title: "By user"}
    ]
    $ctrl.notes = [];

    $scope.openCreateNoteModal = () => {
        // $ctrl.close();
        ModalService.open('createNote', {onSubmit: (value) => $ctrl.loadAllNotes()});
    };

    $scope.openEditNoteModal = (noteUID) => {
        // $ctrl.close();
        ModalService.open('editNote', {noteUID, onSubmit: (value) => $ctrl.loadAllNotes()});
    };

    $scope.openShareNoteModal = (noteUID) => {
        // $ctrl.close();
        ModalService.open('shareNote', {noteUID});
    };

    $scope.openDeleteNoteModal = (noteUID) => {
        ModalService.open('deleteNote', {
            noteUID,
            onDelete: (value) => $ctrl.loadAllNotes()
        });
    };

    $ctrl.$onInit = function () {
        $ctrl.user = JSON.parse(localStorage.getItem('user')) ?? undefined;

        $ctrl.per_page = '15';
        $ctrl.order = '-created_at';

        $ctrl.loadAllNotes();
    }

    $ctrl.loadAllNotes = () => {
        return $q((resolve, reject) =>
            NotesService.listAll({show: $stateParams.show}).then(res =>
                resolve($ctrl.notes = {meta: res.data.meta, data: res.data.data}), reject
            )
        );
    };
};

module.exports = {
    // bindings: {
    //     notes: '<'
    // },
    controller: [
        '$q',
        '$rootScope',
        '$scope',
        '$state',
        '$stateParams',
        'appConfigs',
        'ModalService',
        'NotesService',
        NotesComponent
    ],
    templateUrl: 'assets/tpl/pages/notes.html',
};