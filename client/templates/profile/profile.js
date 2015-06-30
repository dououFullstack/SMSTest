Template.profile.rendered = function () {
};

Template.profile.helpers({
    profile: function () {
        return {};
    },
    members: function () {
        return [];
    }
});

Template.profile.events({
    'click .add-member': function (event, template) {
        var html = $('#NewMemberHtml').html();
        $('#MemberList').append(html);
    },

    'click .add-cancel': function (event, template) {
    },

    'click .add-ok': function (event, template) {
    },
});

Template.CurrentMember.helpers({
    isAdmin: function () {
        var teamId = Meteor.user().currentTeamId;
        var uId = Meteor.userId();
        var teamObj = Teams.findOne({_id: Meteor.user().currentTeamId});
        var flag = false;

        if (teamObj) {
            flag = teamObj.admins.some(function (adminObj) {
                return adminObj.userId == uId;
            });
        }
        return flag;
    },
    isCandidate: function () {
        return this.role == 'candidate';

    },
    itsMe: function () {
        return this.name == Meteor.user().username;
    }
});

Template.CurrentMember.events({
    'click a[data-action]': function (event, template) {
        var $this = $(event.target);
        var $wrapper = $this.closest('.action-wrapper');
        var action = $this.data('action');
        var role = $wrapper.find('button.user-setting').data('role');
        var username = $wrapper.data('name');

        if (action == 'exit') {
        } else if (action == 'remove') {
            Meteor.call('removeMember', username, role, function (error, result) {
                error && console.log(error);
            });
        } else {
            Meteor.call('updateMemberRole', username, role, action, function (error, result) {
                error && console.log(error);
            });
        }
    },
});
