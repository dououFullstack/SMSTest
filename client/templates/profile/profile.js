Template.profile.rendered = function () {
};

Template.profile.helpers({
    profile: function () {
        var u = Meteor.user();
        var obj = {
            emailAddress: u? u.emails[0].address : '暂无邮箱信息',
            phone: u ? u.phone : '暂无手机号',
            photo: u ? u.photo : 'img/contacts/15.jpg',
            website: u ? u.website : 'www.startingx.com',
            weiboUrl: u ? u.weiboUrl : '暂无微博信息',
            address: u ? u.address : '暂无住址信息',
        };
        return util._copyAndAddItem(Meteor.user(), obj);
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
