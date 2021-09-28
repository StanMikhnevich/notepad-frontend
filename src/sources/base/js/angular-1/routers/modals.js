module.exports = [
    'ModalRouteProvider',
    function (
        ModalRouteProvider
    ) {
        ModalRouteProvider.modal('authLogin', {component: 'modalAuthLoginComponent'}); // openAuthLoginModal()
        ModalRouteProvider.modal('authRegister', {component: 'modalAuthRegisterComponent'}); // openAuthRegisterModal()
        ModalRouteProvider.modal('authEmailVerify', {component: 'modalAuthEmailVerifyComponent'}); // openAuthEmailVerifyModal()
        ModalRouteProvider.modal('createNote', {component: 'modalCreateNoteComponent'}); // openCreateNoteModal()
        ModalRouteProvider.modal('editNote', {component: 'modalEditNoteComponent'}); // openEditNoteModal()
        ModalRouteProvider.modal('shareNote', {component: 'modalShareNoteComponent'}); // openShareNoteModal()
        ModalRouteProvider.modal('deleteNote', {component: 'modalDeleteNoteComponent'}); // openDeleteNoteModal()
        ModalRouteProvider.modal('showNote', {component: 'modalShowNoteComponent'}); // openNoteModal()
        ModalRouteProvider.modal('printNote', {component: 'modalPrintNoteComponent'}); // printNoteModal()
    }
]
