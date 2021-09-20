const NotesShowComponent = function (
    $q,
    $scope,
    $rootScope,
    $state,
    $stateParams,
    appConfigs,
    PrintableService,
    ModalService,
    NotesService
) {
    let $ctrl = this;

    $ctrl.pageTitle = $stateParams.pageTitle;

    $scope.openCreateNoteModal = () => {
        ModalService.open('createNote', {onSubmit: (value) => $state.go('notesMy')});
    };

    $scope.openEditNoteModal = (noteUID) => {
        // $ctrl.close();
        ModalService.open('editNote', {
            noteUID,
            onSubmit: (value) => $ctrl.loadNote(),
            onUnshare: (value) => $ctrl.loadNote(),
            onDelete: (value) => $state.go('notesMy'),
        });
    };

    $scope.openNoteModal = () => {
        ModalService.open('showNote', {
            note: $ctrl.note,
            backend_url: $ctrl.backend_url,
        });
    };

    // $scope.printNote = () => {
    //     PrintableService.open('noteFull', {
    //         note: $ctrl.note,
    //         backend_url: $ctrl.backend_url,
    //     });
    // };


    $scope.openShareNoteModal = (noteUID) => {
        // $ctrl.close();
        ModalService.open('shareNote', {
            noteUID,
            onSubmit: (value) => $ctrl.loadNote()
        });
    };

    $ctrl.$onInit = function () {
        $ctrl.user = JSON.parse(localStorage.getItem('user')) ?? undefined;
        $ctrl.displayNavBar = $rootScope.displayNavBar;
        $ctrl.backend_url = appConfigs.backend_url;

        $ctrl.loadNote();
    }

    $ctrl.loadNote = () => {
        return $q((resolve, reject) =>
            NotesService.read($state.params.noteUID).then(res =>
                resolve($ctrl.note = res.data.data), reject
            )
        );
    };
};

module.exports = {
    controller: [
        '$q',
        '$scope',
        '$rootScope',
        '$state',
        '$stateParams',
        'appConfigs',
        'PrintableService',
        'ModalService',
        'NotesService',
        NotesShowComponent
    ],
    templateUrl: 'assets/tpl/pages/notes-show.html',
};