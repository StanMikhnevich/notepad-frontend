const NotesComponent = function (
    $q,
    $rootScope,
    $scope,
    $timeout,
    $state,
    $stateParams,
    appConfigs,
    ModalService,
    NotesService,
    PageLoadingBarService,
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
        ModalService.open('createNote', {onSubmit: (value) => $ctrl.loadAllNotes()});
    };

    $scope.openEditNoteModal = (noteUID) => {
        ModalService.open('editNote', {noteUID, onSubmit: (value) => $ctrl.loadAllNotes()});
    };

    $scope.openShareNoteModal = (noteUID) => {
        ModalService.open('shareNote', {noteUID});
    };

    $scope.openDeleteNoteModal = (noteUID) => {
        ModalService.open('deleteNote', {
            noteUID,
            onDelete: (value) => $ctrl.loadAllNotes()
        });
    };

    $ctrl.$onInit = function () {

        PageLoadingBarService.setProgress(0);

        $ctrl.user = JSON.parse(localStorage.getItem('user')) ?? undefined;

        $ctrl.per_page = '15';
        $ctrl.order = '-created_at';

        $ctrl.loadAllNotes();

        $timeout(() => {
            PageLoadingBarService.setProgress(100);
        }, 1000);

    }

    $ctrl.loadAllNotes = () => {
        return $q((resolve, reject) => {
            NotesService.listAll({show: $stateParams.show}).then(res => resolve(
                $ctrl.notes = {meta: res.data.meta, data: res.data.data}
            ), reject)
        });
    };

};

module.exports = {
    controller: [
        '$q',
        '$rootScope',
        '$scope',
        '$timeout',
        '$state',
        '$stateParams',
        'appConfigs',
        'ModalService',
        'NotesService',
        'PageLoadingBarService',
        NotesComponent
    ],
    templateUrl: 'assets/tpl/pages/notes.html',
};