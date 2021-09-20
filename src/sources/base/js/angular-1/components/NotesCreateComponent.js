const NotesCreateComponent = function (
    $q,
    $scope,
    $rootScope,
    $state,
    $stateParams,
    NotesService
) {
    let $ctrl = this;

    $ctrl.pageTitle = $stateParams.pageTitle;

    $ctrl.$onInit = function () {
        $ctrl.user = JSON.parse(localStorage.getItem('user')) ?? undefined;
        $ctrl.displayNavBar = $rootScope.displayNavBar;

        $ctrl.note = {
            title: '',
            text: '',
            attachment: [],
            private: false
        }
    }

    $ctrl.createNote = () => {
        NotesService.store($ctrl.note).then(res => {
            $state.go('notesMy')
        })
    };
};

module.exports = {
    controller: [
        '$q',
        '$scope',
        '$rootScope',
        '$state',
        '$stateParams',
        'NotesService',
        NotesCreateComponent
    ],
    templateUrl: 'assets/tpl/pages/notes-create.html',
};