Template.sidebar.helpers({
    email: function () {
        if (Meteor.user() && Meteor.user().emails) {
            return Meteor.user().emails[0].address;
        } else {
            return '';
        }
    },
    username: function () {
        if (Meteor.user()) {
            return Meteor.user().username;
        } else {
            return '';
        }
    },
});

Template.sidebar.events({
    'click #Logout': function () {
        Meteor.logout();
    },
    'click #sidebar .main-menu a': function (event) {
        if ($(event.target).data('go') != 'no') {
            $('#menu-trigger').trigger('click');
        }
    }
});
