let _module = angular.module('pageLoadingBarModule', []);

_module.directive('pageLoadingBar', require('./directives/PageLoadingBarDirective'));
_module.service('PageLoadingBarService', require('./services/PageLoadingBarService'));
