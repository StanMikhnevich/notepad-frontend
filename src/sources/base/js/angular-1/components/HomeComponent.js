const HomeComponent = function (
    $rootScope,
    $state,
    $scope,
    $stateParams
) {
    let $ctrl = this;
    $ctrl.displayNavBar = $rootScope.displayNavBar;

};

module.exports = {
    controller: [
        '$state',
        '$scope',
        '$stateParams',
        '$rootScope',
        HomeComponent
    ],
    templateUrl: 'assets/tpl/pages/home.html',
};