
Meteor.publish("validUsers", function() {
  return ValidUsers.find();
})