Template.header.helpers({
    pageTitle: function () {
        return Session.get('pageTitle') || '首页';
    }
});
