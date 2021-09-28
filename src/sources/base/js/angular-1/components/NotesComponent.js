const NotesComponent = function (
    $q,
    $scope,
    $timeout,
    $state,
    $stateParams,
    appConfigs,
    ModalService,
    PrintableService,
    NotesService,
    PageLoadingBarService,
) {
    let $ctrl = this;

    $ctrl.filters = {};

    $ctrl.pageTitle = $stateParams.pageTitle;

    $ctrl.perPageList = [15, 30, 50, 100];

    $ctrl.orderList = [
        {value: "title", title: "Alphabetical"},
        {value: "-created_at", title: "Newest"},
        {value: "created_at", title: "Oldest"},
        {value: "user.name", title: "By user"}
    ];

    $ctrl.notes = [];

    $scope.setPerPage = (per_page) => {
        $scope.onPageChange({});
    }

    $scope.onPageChange = (query) => {
        PageLoadingBarService.setProgress(0);

        const filters = {show: $stateParams.show, ...$ctrl.filters, ...query };
        NotesService.listAll(filters).then((res => {
            $ctrl.notes = {meta: res.data.meta, data: res.data.data}
        }));

        $timeout(() => {
            PageLoadingBarService.setProgress(100);
        }, 500);
    };

    $scope.printNoteModal = (note) => {
        PrintableService.open('noteFull', {
            note,
            backend_url: $ctrl.backend_url,
        });
    };

    $scope.openCreateNoteModal = () => {
        ModalService.open('createNote', {onSubmit: (value) => $scope.onPageChange({})});
    };

    $scope.openEditNoteModal = (noteUID) => {
        ModalService.open('editNote', {noteUID, onSubmit: (value) => $scope.onPageChange({})});
    };

    $scope.openShareNoteModal = (noteUID) => {
        ModalService.open('shareNote', {noteUID});
    };

    $scope.openDeleteNoteModal = (noteUID) => {
        ModalService.open('deleteNote', {
            noteUID,
            onDelete: (value) => $scope.onPageChange({})
        });
    };

    $ctrl.$onInit = function () {

        PageLoadingBarService.setProgress(0);

        $ctrl.backend_url = appConfigs.backend_url;
        $ctrl.user = JSON.parse(localStorage.getItem('user')) ?? undefined;

        $ctrl.filters.per_page = $ctrl.filters.per_page || 15;
        $ctrl.order = $ctrl.order || "-created_at";

        $scope.onPageChange({});

        $timeout(() => {
            PageLoadingBarService.setProgress(100);
        }, 500);

    }

    // $ctrl.loadNotes = () => {
    //     return $q((resolve, reject) => {
    //         NotesService.listAll({show: $stateParams.show}).then(res => resolve(
    //             $ctrl.notes = {meta: res.data.meta, data: res.data.data}
    //         ), reject)
    //     });
    // };

};

module.exports = {
    bindings: {
        order: '=',
        notes: '<',
    },
    controller: [
        '$q',
        '$scope',
        '$timeout',
        '$state',
        '$stateParams',
        'appConfigs',
        'ModalService',
        'PrintableService',
        'NotesService',
        'PageLoadingBarService',
        NotesComponent
    ],
    templateUrl: 'assets/tpl/pages/notes.html',
};