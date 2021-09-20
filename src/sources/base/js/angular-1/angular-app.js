const app = angular.module('notesApp', [
    // 'ngAnimate',
    'ui.router',
    'ngCookies',
    'ngLocale',
    'ngSanitize',
]);

app.constant('appConfigs', env_data);

// Controllers
app.controller('BaseController', require('./controllers/BaseController'));

// Components
app.component('homeComponent', require('./components/HomeComponent'));
app.component('notesComponent', require('./components/NotesComponent'));
app.component('notesShowComponent', require('./components/NotesShowComponent'));
app.component('notesCreateComponent', require('./components/NotesCreateComponent'));
app.component('notesEditComponent', require('./components/NotesEditComponent'));

// Components - Modal
app.component('modalAuthLoginComponent', require('./components/Modals/ModalAuthLoginComponent'));
app.component('modalAuthRegisterComponent', require('./components/Modals/ModalAuthRegisterComponent'));
app.component('modalAuthEmailVerifyComponent', require('./components/Modals/ModalAuthEmailVerifyComponent'));
app.component('modalShowNoteComponent', require('./components/Modals/ModalShowNoteComponent'));
app.component('modalCreateNoteComponent', require('./components/Modals/ModalCreateNoteComponent'));
app.component('modalEditNoteComponent', require('./components/Modals/ModalEditNoteComponent'));
app.component('modalShareNoteComponent', require('./components/Modals/ModalShareNoteComponent'));
app.component('modalDeleteNoteComponent', require('./components/Modals/ModalDeleteNoteComponent'));

// Components - Printable
app.component('printableNoteComponent', require('./components/Printables/PrintableNoteComponent'));

// Services
app.service('ModalService', require('./services/ModalService'));
app.service('PrintableService', require('./services/PrintableService'));
app.service('CredentialsService', require('./services/CredentialsService'));
app.service('AuthService', require('./services/AuthService'));
app.service('FormBuilderService', require('./services/FormBuilderService'));
app.service('NotesService', require('./services/NotesService'));

// Directives
app.directive('navbarAuthDirective', require('./directives/NavbarAuthDirective'));
// app.directive('i18n', require('./directives/I18nDirective'));

// Directives - Modal
app.directive('modalsRoot', require('./directives/modals/ModalsRootDirective'));
app.directive('modalItem', require('./directives/modals/ModalItemDirective'));
app.directive('modalScrollBraker', require('./directives/modals/ModalScrollBrakerDirective'));

// Directives - Printable
app.directive('printablesRoot', require('./directives/printables/PrintableRootDirective'));
app.directive('printableItem', require('./directives/printables/PrintableItemDirective'));
app.directive('printableEnabler', require('./directives/printables/PrintableEnablerDirective'));

// Providers
app.provider('ApiRequest', require('./providers/ApiRequestProvider'));
app.provider('PrintableRoute', require('./providers/PrintableRouteProvider'));
app.provider('ModalRoute', require('./providers/ModalRouteProvider'));
// app.provider('I18nLib', require('./providers/I18nLibProvider'));

// Config
app.config(require('./routers/router'));
app.config(require('./routers/modals'));
app.config(require('./routers/printables'));
app.config(require('./config/api-service'));
// app.config(require('./config/i18n'));

// app.run(require('./routers/modals-transitions'));

if (!env_data.html5ModeEnabled) {
    let hash = document.location.hash;

    if (hash.length > 3 && hash[hash.length - 1] == '/') {
        document.location.hash = hash.slice(0, hash.length - 1);
    } else if (hash.length < 3) {
        document.location.hash = '#!/';
    }
}

module.exports = app;