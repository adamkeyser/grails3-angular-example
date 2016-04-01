app.service('attendeeService', function () {
  var id = 2;

  var attendees = [
    {id: 1, first: 'ted', last: 'johnson'},
    {id: 2, first: 'dale', last: 'keith'}
  ];

  var addAttendee = function (newObj) {
    newObj.id = ++id;
    attendees.push(newObj);
  };

  var updateAttendee = function (newObj) {
    for (i = 0; i < attendees.length; i++) {
      if (attendees[i].id == newObj.id) {
        attendees[i] = newObj;
      }
    }
  };

  var getAttendees = function () {
    return attendees;
  };

  return {
    addAttendee: addAttendee,
    getAttendees: getAttendees
  };
});