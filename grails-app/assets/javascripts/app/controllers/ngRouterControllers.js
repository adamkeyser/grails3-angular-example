app.controller('headerController', function ($scope, $location) {
  $scope.message = 'I manage the header, meaning the nav tabs';
  $scope.isActive = function (viewLocation) {
    return viewLocation == $location.path();
  };
});

app.controller('mainController', function ($scope, $location, attendeeService) {
  $scope.message = 'Default Routed Page (Home)';
  $scope.toggle = false;
  $scope.attendees = attendeeService.getAttendees();
  $scope.addUserPage = function() {
    $location.path("/addUser");
  }
});

app.controller('aboutController', function ($scope) {
  $scope.message = 'About Page';
});

app.controller('contactController', function ($scope) {
  $scope.message = 'Contact Us';
});

app.controller('addUserController', function ($scope, $location, attendeeService) {
  $scope.attendee = {};
  $scope.saveCurrentAttendee = function() {
    attendeeService.addAttendee($scope.attendee);
    attendeeService.attendee = {};
  };
  $scope.message = 'Wire up controller in html (Not really good practice)';

  $scope.return = function() {
    $location.path("/home");
  };
});