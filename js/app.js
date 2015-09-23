angular.module('app', [
    'ui.router',
    'ngResource',
    //'lbServices',
    //'truncate',
    'ngCookies'
])

.config(['$urlRouterProvider', function($urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
}])

.config(function($httpProvider) {
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
})

.run(function($rootScope, $state, Settings) {
    $rootScope.settings = Settings;
});


angular.module('app')
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                controller: 'homeCtrl',
                controllerAs: 'home',
                url: '/home',
                templateUrl: '/app/home/index.html'
            });
    }])

.controller('homeCtrl', function($scope, $rootScope, $state) {
})
