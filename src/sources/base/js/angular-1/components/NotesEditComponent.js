const NotesEditComponent = function (
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

        $ctrl.loadNote();

    }

    $ctrl.loadNote = () => {
        return $q((resolve, reject) =>
            NotesService.read($state.params.noteUID).then(res =>
                resolve($ctrl.note = res.data.data), reject
            )
        );
    };

    $ctrl.deleteNoteAttachment = (attachment_id) => {
        console.log(attachment_id);
    };

    $ctrl.unShare = (sharing_id) => {
        return $q((resolve, reject) =>
            NotesService.unShare($state.params.noteUID, {sharing_id}).then(res =>
                resolve($ctrl.note = res.data.data), reject
            )
        );
    };

    $ctrl.updateNote = () => {
        console.log($ctrl.note)
        $q((resolve, reject) =>
            NotesService.update($state.params.noteUID, {
                id: $ctrl.note.id,
                title: $ctrl.note.title,
                text: $ctrl.note.text,
                private: $ctrl.note.private
            }).then(res =>
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
        'NotesService',
        NotesEditComponent
    ],
    templateUrl: 'assets/tpl/pages/notes-edit.html',
};