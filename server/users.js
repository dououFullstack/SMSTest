Meteor.methods({
    userExist: function (username, emailAddress) {
        var userByName, userByEmail, user;

        if (username) {
            userByName = Meteor.users.find({username: username}).fetch();
        }

        if (emailAddress) {
            userByEmail = Meteor.users.find({
                'emails.0.address': emailAddress
            }).fetch();
        }

        user = userByName ? userByName : userByEmail;

        return user;
    }
});
