const NotesShowComponent = function (
    $q,
    $scope,
    $rootScope,
    $timeout,
    $state,
    $stateParams,
    appConfigs,
    PrintableService,
    ModalService,
    NotesService,
    PageLoadingBarService,
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

    $scope.printNoteModal = () => {
        PrintableService.open('noteFull', {
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

        PageLoadingBarService.setProgress(0);

        $ctrl.user = JSON.parse(localStorage.getItem('user')) ?? undefined;
        $ctrl.displayNavBar = $rootScope.displayNavBar;
        $ctrl.backend_url = appConfigs.backend_url;

        $ctrl.loadNote();

        $timeout(() => {
            PageLoadingBarService.setProgress(100);
        }, 1000);

    }

    $ctrl.loadNote = () => {
        PageLoadingBarService.setProgress(0);
        $timeout(() => {
            PageLoadingBarService.setProgress(100);
        }, 500);

        return $q((resolve, reject) => {
            NotesService.read($state.params.noteUID).then(res => resolve(
                $ctrl.note = res.data.data
            ), reject);
        });
    };

};

module.exports = {
    controller: [
        '$q',
        '$scope',
        '$rootScope',
        '$timeout',
        '$state',
        '$stateParams',
        'appConfigs',
        'PrintableService',
        'ModalService',
        'NotesService',
        'PageLoadingBarService',
        NotesShowComponent
    ],
    templateUrl: 'assets/tpl/pages/notes-show.html',
};