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

// 首页，所有投票
Router.route('/', {
    name: 'voteslist',
    waitOn: function () {
        Session.set('pageTitle', '所有投票')
        return [];
    },
    data: function () {
        return {
            votes: [{
                title: '关于小区垃圾桶处理方式的投票',
                desc: '建议每天及时收垃圾，不要让垃圾过夜等等等等',
                candidates: [{
                    name: '王大锤',
                    slogan: '我锤故我在',
                    result: 27
                }, {
                    name: '李小五',
                    slogan: '我的礼物很多',
                    result: 42
                }]
            }, {
                title: '关于9号楼养狗状况的投票',
                desc: '建议对那些任由狗在楼道内大便的业主进行处罚',
                candidates: [{
                    name: '刘晓萌',
                    slogan: '给大家一个舒适的环境',
                    result: 52
                }, {
                    name: '李小五',
                    slogan: '我的礼物很多',
                    result: 32
                }]
            }]
        };
    }
});

// 组团投票
Router.route('/votesgroup', {
    name: 'votesgroup',
    template: 'voteslist',
    waitOn: function () {
        Session.set('pageTitle', '组团投票')
        return [];
    },
    data: function () {
        return {
            votes: [{
                title: '关于9号楼养狗状况的投票',
                desc: '建议对那些任由狗在楼道内大便的业主进行处罚',
                candidates: [{
                    name: '刘晓萌',
                    slogan: '给大家一个舒适的环境',
                    result: 52
                }, {
                    name: '李小五',
                    slogan: '我的礼物很多',
                    result: 32
                }]
            }]
        };
    }
});

// 全员投票
Router.route('/votes/all', {
    name: 'votesall',
    template: 'voteslist',
    waitOn: function () {
        Session.set('pageTitle', '全员投票')
        return [];
    },
    data: function () {
        return {
            votes: [{
                title: '关于小区垃圾桶处理方式的投票',
                desc: '建议每天及时收垃圾，不要让垃圾过夜等等等等',
                candidates: [{
                    name: '王大锤',
                    slogan: '我锤故我在',
                    result: 27
                }, {
                    name: '李小五',
                    slogan: '我的礼物很多',
                    result: 42
                }]
            }]
        };
    }
});

// 我的投票
Router.route('/myvotes', {
    name: 'myvotes',
    template: 'voteslist',
    waitOn: function () {
        Session.set('pageTitle', '我的投票');
        return [];
    },
    data: function () {
        return {
            votes: [{
                title: '9号楼业主选举',
                desc: '9号楼进行的业主选举情况的判定',
                readonly: false,
                candidates: [{
                    name: '刘晓萌',
                    slogan: '给大家一个舒适的环境',
                    result: 52
                }, {
                    name: '李小五',
                    slogan: '我的礼物很多',
                    result: 32
                }]
            }]
        };
    }
});

// 公示期的投票展示
Router.route('/voteshistory', {
    name: 'history',
    template: 'voteslist',
    waitOn: function () {
        Session.set('pageTitle', '公示中的投票');
        return [];
    },
    data: function () {
        return {
            votes: [{
                title: '1号楼业主选举',
                desc: '1号楼进行的业主选举情况的判定',
                readonly: true,
                candidates: [{
                    name: '刘晓萌',
                    slogan: '给大家一个舒适的环境',
                    result: 99
                }, {
                    name: '李小五',
                    slogan: '我的礼物很多',
                    result: 88
                }]
            }]
        };
    }
});

// 个人主页
Router.route('/profile', {
    name: 'profile',
    waitOn: function () {
        Session.set('pageTitle', '个人主页');
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
