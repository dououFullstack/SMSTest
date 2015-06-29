AppController = RouteController.extend({
    loadingTemplate: 'loading',
    layoutTemplate: 'layout'
});

UsersShowController = AppController.extend({
    data: function () {
        return {
            user: Meteor.users.findOne({_id: this.params._id})
        };
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

Router.map(function() {
    this.route('home');
    this.route('login');
});

Router.configure({
    layoutTemplate: "layout",
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
}

Router.onBeforeAction(requireLogin, {only: '/create'});
