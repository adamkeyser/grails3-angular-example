app.config(function ($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: 'angular-router/partials/home.html',
      controller: 'mainController'
    })
    .when('/about', {
      templateUrl: 'angular-router/partials/about.html',
      controller: 'aboutController'
    })
    .when('/contact', {
      templateUrl: 'angular-router/partials/contact.html',
      controller: 'contactController'
    })
    .when('/manageUser/:action?/:id?', {
      templateUrl: 'angular-router/partials/manageUser.html'
    })
    .otherwise({
      redirectTo: '/home'
    });
});