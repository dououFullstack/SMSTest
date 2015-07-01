Template.header.helpers({
    pageTitle: function () {
        return Session.get('pageTitle') || '首页';
    }
});

Template.header.events({
    'click .vote #vote-oper': function (event, template) {
    }
});
