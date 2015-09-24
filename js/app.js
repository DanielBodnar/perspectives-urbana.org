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

  var wow = new WOW({
    boxClass: 'wow', // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset: 0, // distance to the element when triggering the animation (default is 0)
    mobile: false, // trigger animations on mobile devices (default is true)
    live: false // act on asynchronously loaded content (default is true)
  });

  wow.init();

  $rootScope.$on('$routeChangeStart', function(next, current) {
    //when the view changes sync wow
    wow.sync();
  });
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

.controller('homeCtrl', function($scope, $rootScope, $state) {})
