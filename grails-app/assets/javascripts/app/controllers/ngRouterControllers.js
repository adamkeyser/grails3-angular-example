app.controller('headerController', function ($scope, $location) {
  $scope.message = 'I manage the header, meaning the nav tabs';
  $scope.isActive = function (viewLocation) {
    return viewLocation == $location.path();
  };
});

app.controller('mainController', function ($scope, $location, attendeeService) {
  $scope.message = 'Default Routed Page (Home)';
  $scope.toggle = true;
  $scope.attendees = attendeeService.getAttendees();
  $scope.manageUserPage = function() {
    $location.path("/manageUser");
  }
});

app.controller('aboutController', function ($scope) {
  $scope.message = 'About Page';
});

app.controller('contactController', function ($scope) {
  $scope.message = 'Contact Us';
});

app.controller('manageUserController', function ($scope, $location, $routeParams, attendeeService) {
  $scope.attendee = {};
  $scope.mode = 'Add Attendee';
  if ('edit' == $routeParams.action) {
    $scope.mode = 'Edit Attendee';
    var id = $routeParams.id;
    var attendees = attendeeService.getAttendees();
    for (i = 0; i < attendees.length; i++) {
      if (attendees[i].id == id) {
        $scope.attendee = attendees[i];
      }
    }
  }

  $scope.saveCurrentAttendee = function() {
    if ($scope.attendee.first && $scope.attendee.last) {
      if ($scope.attendee.id) {
        attendeeService.updateAttendee($scope.attendee);
      } else {
        attendeeService.addAttendee($scope.attendee);
      }
      attendeeService.addAttendee($scope.attendee);
      attendeeService.attendee = {};
    }
  };

  $scope.message = 'Wire up controller in html (Not really good practice)';

  $scope.return = function() {
    $location.path("/home");
  };


});