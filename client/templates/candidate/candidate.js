Template.candidate.rendered = function () {
};

Template.candidate.helpers({
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

Template.candidate.events({
    'click .add-member': function (event, template) {
        var html = $('#NewMemberHtml').html();
        $('#MemberList').append(html);
    },

    'click .back-bottom button': function (event, template) {
        window.history.back();
    },

    'click .add-ok': function (event, template) {
    },
});

Template.CandidateInfo.helpers({
    isCandidate: function () {
        return this.role == 'candidate';
    },
    itsMe: function () {
        return this.name == Meteor.user().username;
    }
});
