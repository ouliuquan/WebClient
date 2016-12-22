angular.module('proton.elements')
.factory('firstLoad', ($rootScope) => {
    let first = true;
    $rootScope.$on('$stateChangeStart', (event, toState, toParams, fromState) => {
        first = fromState.name !== toState.name;
    });
    function get() {
        return first;
    }
    return { get };
});
