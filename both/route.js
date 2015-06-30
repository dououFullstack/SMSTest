// 整体配置
Router.configure({
    loadingTemplate: 'loading',
    layoutTemplate: "layout",
    notFoundTemplate: 'notFound',
    before: function (pause) {
        if (! Meteor.userId()) {
            this.layout("loginLayout");
            this.render('login');
        } else {
            this.next();
        }
    },
    waitOn: function() {
        return [];
    }
});

// 首页
Router.route('/', {
    name: 'voteslist',
    waitOn: function () {
        return [];
    },
    data: function () {
        return {};
    }
});

// 投票历史记录
Router.route('/voteshistory', {
    name: 'history',
    template: 'voteslist',
    waitOn: function () {
        return [];
    },
    data: function () {
        return {};
    }
});

// 个人主页
Router.route('/profile', {
    name: 'profile',
    waitOn: function () {
        return [];
    },
    data: function () {
        return {};
    }
});

// 简易的router配置
Router.map(function() {
    // this.route('home');
    this.route('login');
});

var requireLogin = function() {
    if (! Meteor.user()) {
        if (Meteor.loggingIn()) {
            this.render(this.loadingTemplate);
        } else {
            this.render('accessDenied');
        }
    } else {
        this.next();
    }
};

Router.onBeforeAction(requireLogin, {only: '/create'});
