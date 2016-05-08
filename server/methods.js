Meteor.methods({
  // 'createUserWithRole': function(data, role) {
  //   var userId;

  //   Meteor.call('createUserNoRole', data, function(err, result) {
  //     if (err) {
  //       return err;
  //     }
  //     Roles.addUsersToRoles(result, role);
  //     return userId = result;
  //   });
  //   return userId;
  // },
  // 'createUser': function(data) {
  //   //Do server side validation
  //   console.log('--- createUserNoRole ---');
  //   console.log(data);
  //   return Accounts.createUser({
  //     email: data.email,
  //     password: data.password,
  //     profile: data.profile,
  //     isVerified: data.isVerified,
  //   });
  // },

  // usage:
  // Meteor.call('isMobileValid', '136', function (error, result) { console.log(result) } );
  // return value: true / false
  'isMobileValid1': function(mobileNumber) {

    // // find in an array
    // var validNumbers = ['136', '139', '185'];
    // var exist = _.find(validNumbers, function(num){ return num == mobileNumber; });
    // return (exist == mobileNumber ? true : false);

    // find in database: UsersBase
    var result = ValidUsers.findOne({mobile: mobileNumber});
    //console.log(result);
    return result == undefined ? false : true;
  },
  'isMobileValid': function(mobileNumber) {
    return true;
  }
});

ValidUsers.allow({
  'insert': function(userId, doc) {
    return true;
  },
  'update': function(userId, doc, fields, modifier) {
    //return true;
    console.log(doc);
    return true;
  },
  'remove': function(userId, doc) {
    return userId === doc.userId;
  }
});
