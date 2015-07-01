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
                type: -1,
                candidates: [{
                    name: '王大锤',
                    userimg: 'img/profile-pics/1.jpg',
                    uid: 1,
                    slogan: '能给大家提供帮助一直都是我的心愿',
                    result: {
                        peopleCount: 10,
                        peopleRatio: 50,
                        roomsizeCount: 1000,
                        roomsizeRatio: 50
                    }
                }, {
                    name: '李小五',
                    userimg: 'img/profile-pics/2.jpg',
                    uid: 2,
                    slogan: '每一个抉择背后都是一张暖心的笑脸，世界终将更加美好。',
                    result: {
                        peopleCount: 10,
                        peopleRatio: 50,
                        roomsizeCount: 1000,
                        roomsizeRatio: 50
                    }
                }, {
                    name: '王晨光',
                    userimg: 'img/profile-pics/3.jpg',
                    uid: 3,
                    slogan: '清晨的阳光洒向世界，万物开始生长。愿我们都有美好生活！',
                    result: {
                        peopleCount: 10,
                        peopleRatio: 50,
                        roomsizeCount: 1000,
                        roomsizeRatio: 50
                    }
                }]
            }, {
                title: '关于9号楼养狗状况的投票',
                desc: '建议对那些任由狗在楼道内大便的业主进行处罚',
                type: 9,
                candidates: [{
                    name: '王大锤',
                    userimg: 'img/profile-pics/1.jpg',
                    uid: 1,
                    slogan: '能给大家提供帮助一直都是我的心愿',
                    result: {
                        peopleCount: 10,
                        peopleRatio: 50,
                        roomsizeCount: 1000,
                        roomsizeRatio: 50
                    }
                }, {
                    name: '李小五',
                    userimg: 'img/profile-pics/2.jpg',
                    uid: 2,
                    slogan: '每一个抉择背后都是一张暖心的笑脸，世界终将更加美好。',
                    result: {
                        peopleCount: 10,
                        peopleRatio: 50,
                        roomsizeCount: 1000,
                        roomsizeRatio: 50
                    }
                }, {
                    name: '王晨光',
                    userimg: 'img/profile-pics/3.jpg',
                    uid: 3,
                    slogan: '清晨的阳光洒向世界，万物开始生长。愿我们都有美好生活！',
                    result: {
                        peopleCount: 10,
                        peopleRatio: 50,
                        roomsizeCount: 1000,
                        roomsizeRatio: 50
                    }
                }]
            }, {
                title: '关于8号楼电梯申请维护的投票',
                type: 8,
                desc: '',
                candidates: [{
                    name: '王大锤',
                    userimg: 'img/profile-pics/1.jpg',
                    uid: 1,
                    slogan: '能给大家提供帮助一直都是我的心愿',
                    result: {
                        peopleCount: 10,
                        peopleRatio: 50,
                        roomsizeCount: 1000,
                        roomsizeRatio: 50
                    }
                }, {
                    name: '李小五',
                    userimg: 'img/profile-pics/2.jpg',
                    uid: 2,
                    slogan: '每一个抉择背后都是一张暖心的笑脸，世界终将更加美好。',
                    result: {
                        peopleCount: 10,
                        peopleRatio: 50,
                        roomsizeCount: 1000,
                        roomsizeRatio: 50
                    }
                }, {
                    name: '王晨光',
                    userimg: 'img/profile-pics/3.jpg',
                    uid: 3,
                    slogan: '清晨的阳光洒向世界，万物开始生长。愿我们都有美好生活！',
                    result: {
                        peopleCount: 10,
                        peopleRatio: 50,
                        roomsizeCount: 1000,
                        roomsizeRatio: 50
                    }
                }]
            }, {
                title: '关于小区遛狗情况的投票',
                desc: '',
                type: -1,
                candidates: [{
                    name: '王大锤',
                    userimg: 'img/profile-pics/1.jpg',
                    uid: 1,
                    slogan: '能给大家提供帮助一直都是我的心愿',
                    result: {
                        peopleCount: 10,
                        peopleRatio: 50,
                        roomsizeCount: 1000,
                        roomsizeRatio: 50
                    }
                }, {
                    name: '李小五',
                    userimg: 'img/profile-pics/2.jpg',
                    uid: 2,
                    slogan: '每一个抉择背后都是一张暖心的笑脸，世界终将更加美好。',
                    result: {
                        peopleCount: 10,
                        peopleRatio: 50,
                        roomsizeCount: 1000,
                        roomsizeRatio: 50
                    }
                }, {
                    name: '王晨光',
                    userimg: 'img/profile-pics/3.jpg',
                    uid: 3,
                    slogan: '清晨的阳光洒向世界，万物开始生长。愿我们都有美好生活！',
                    result: {
                        peopleCount: 10,
                        peopleRatio: 50,
                        roomsizeCount: 1000,
                        roomsizeRatio: 50
                    }
                }]
            }, {
                title: '关于小区内禁止抽烟的投票',
                desc: '',
                type: -1,
                candidates: [{
                    name: '王大锤',
                    userimg: 'img/profile-pics/1.jpg',
                    uid: 1,
                    slogan: '能给大家提供帮助一直都是我的心愿',
                    result: {
                        peopleCount: 10,
                        peopleRatio: 50,
                        roomsizeCount: 1000,
                        roomsizeRatio: 50
                    }
                }, {
                    name: '李小五',
                    userimg: 'img/profile-pics/2.jpg',
                    uid: 2,
                    slogan: '每一个抉择背后都是一张暖心的笑脸，世界终将更加美好。',
                    result: {
                        peopleCount: 10,
                        peopleRatio: 50,
                        roomsizeCount: 1000,
                        roomsizeRatio: 50
                    }
                }, {
                    name: '王晨光',
                    userimg: 'img/profile-pics/3.jpg',
                    uid: 3,
                    slogan: '清晨的阳光洒向世界，万物开始生长。愿我们都有美好生活！',
                    result: {
                        peopleCount: 10,
                        peopleRatio: 50,
                        roomsizeCount: 1000,
                        roomsizeRatio: 50
                    }
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
                type: 9,
                candidates: [{
                    name: '王大锤',
                    userimg: 'img/profile-pics/1.jpg',
                    uid: 1,
                    slogan: '能给大家提供帮助一直都是我的心愿',
                    result: {
                        peopleCount: 10,
                        peopleRatio: 50,
                        roomsizeCount: 1000,
                        roomsizeRatio: 50
                    }
                }, {
                    name: '李小五',
                    userimg: 'img/profile-pics/2.jpg',
                    uid: 2,
                    slogan: '每一个抉择背后都是一张暖心的笑脸，世界终将更加美好。',
                    result: {
                        peopleCount: 10,
                        peopleRatio: 50,
                        roomsizeCount: 1000,
                        roomsizeRatio: 50
                    }
                }, {
                    name: '王晨光',
                    userimg: 'img/profile-pics/3.jpg',
                    uid: 3,
                    slogan: '清晨的阳光洒向世界，万物开始生长。愿我们都有美好生活！',
                    result: {
                        peopleCount: 10,
                        peopleRatio: 50,
                        roomsizeCount: 1000,
                        roomsizeRatio: 50
                    }
                }]
            }, {
                title: '关于8号楼电梯申请维护的投票',
                desc: '',
                type: 8,
                candidates: [{
                    name: '王大锤',
                    userimg: 'img/profile-pics/1.jpg',
                    uid: 1,
                    slogan: '能给大家提供帮助一直都是我的心愿',
                    result: {
                        peopleCount: 10,
                        peopleRatio: 50,
                        roomsizeCount: 1000,
                        roomsizeRatio: 50
                    }
                }, {
                    name: '李小五',
                    userimg: 'img/profile-pics/2.jpg',
                    uid: 2,
                    slogan: '每一个抉择背后都是一张暖心的笑脸，世界终将更加美好。',
                    result: {
                        peopleCount: 10,
                        peopleRatio: 50,
                        roomsizeCount: 1000,
                        roomsizeRatio: 50
                    }
                }, {
                    name: '王晨光',
                    userimg: 'img/profile-pics/3.jpg',
                    uid: 3,
                    slogan: '清晨的阳光洒向世界，万物开始生长。愿我们都有美好生活！',
                    result: {
                        peopleCount: 10,
                        peopleRatio: 50,
                        roomsizeCount: 1000,
                        roomsizeRatio: 50
                    }
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
                type: -1,
                candidates: [{
                    name: '王大锤',
                    userimg: 'img/profile-pics/1.jpg',
                    uid: 1,
                    slogan: '能给大家提供帮助一直都是我的心愿',
                    result: {
                        peopleCount: 10,
                        peopleRatio: 50,
                        roomsizeCount: 1000,
                        roomsizeRatio: 50
                    }
                }, {
                    name: '李小五',
                    userimg: 'img/profile-pics/2.jpg',
                    uid: 2,
                    slogan: '每一个抉择背后都是一张暖心的笑脸，世界终将更加美好。',
                    result: {
                        peopleCount: 10,
                        peopleRatio: 50,
                        roomsizeCount: 1000,
                        roomsizeRatio: 50
                    }
                }, {
                    name: '王晨光',
                    userimg: 'img/profile-pics/3.jpg',
                    uid: 3,
                    slogan: '清晨的阳光洒向世界，万物开始生长。愿我们都有美好生活！',
                    result: {
                        peopleCount: 10,
                        peopleRatio: 50,
                        roomsizeCount: 1000,
                        roomsizeRatio: 50
                    }
                }]
            }, {
                title: '关于小区遛狗情况的投票',
                desc: '',
                type: -1,
                candidates: [{
                    name: '王大锤',
                    userimg: 'img/profile-pics/1.jpg',
                    uid: 1,
                    slogan: '能给大家提供帮助一直都是我的心愿',
                    result: {
                        peopleCount: 10,
                        peopleRatio: 50,
                        roomsizeCount: 1000,
                        roomsizeRatio: 50
                    }
                }, {
                    name: '李小五',
                    userimg: 'img/profile-pics/2.jpg',
                    uid: 2,
                    slogan: '每一个抉择背后都是一张暖心的笑脸，世界终将更加美好。',
                    result: {
                        peopleCount: 10,
                        peopleRatio: 50,
                        roomsizeCount: 1000,
                        roomsizeRatio: 50
                    }
                }, {
                    name: '王晨光',
                    userimg: 'img/profile-pics/3.jpg',
                    uid: 3,
                    slogan: '清晨的阳光洒向世界，万物开始生长。愿我们都有美好生活！',
                    result: {
                        peopleCount: 10,
                        peopleRatio: 50,
                        roomsizeCount: 1000,
                        roomsizeRatio: 50
                    }
                }]
            }, {
                title: '关于小区内禁止抽烟的投票',
                desc: '',
                type: -1,
                candidates: [{
                    name: '王大锤',
                    userimg: 'img/profile-pics/1.jpg',
                    uid: 1,
                    slogan: '能给大家提供帮助一直都是我的心愿',
                    result: {
                        peopleCount: 10,
                        peopleRatio: 50,
                        roomsizeCount: 1000,
                        roomsizeRatio: 50
                    }
                }, {
                    name: '李小五',
                    userimg: 'img/profile-pics/2.jpg',
                    uid: 2,
                    slogan: '每一个抉择背后都是一张暖心的笑脸，世界终将更加美好。',
                    result: {
                        peopleCount: 10,
                        peopleRatio: 50,
                        roomsizeCount: 1000,
                        roomsizeRatio: 50
                    }
                }, {
                    name: '王晨光',
                    userimg: 'img/profile-pics/3.jpg',
                    uid: 3,
                    slogan: '清晨的阳光洒向世界，万物开始生长。愿我们都有美好生活！',
                    result: {
                        peopleCount: 10,
                        peopleRatio: 50,
                        roomsizeCount: 1000,
                        roomsizeRatio: 50
                    }
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
                type: 9,
                readonly: false,
                candidates: [{
                    name: '王大锤',
                    userimg: 'img/profile-pics/1.jpg',
                    uid: 1,
                    slogan: '能给大家提供帮助一直都是我的心愿',
                    result: {
                        peopleCount: 10,
                        peopleRatio: 50,
                        roomsizeCount: 1000,
                        roomsizeRatio: 50
                    }
                }, {
                    name: '李小五',
                    userimg: 'img/profile-pics/2.jpg',
                    uid: 2,
                    slogan: '每一个抉择背后都是一张暖心的笑脸，世界终将更加美好。',
                    result: {
                        peopleCount: 10,
                        peopleRatio: 50,
                        roomsizeCount: 1000,
                        roomsizeRatio: 50
                    }
                }, {
                    name: '王晨光',
                    userimg: 'img/profile-pics/3.jpg',
                    uid: 3,
                    slogan: '清晨的阳光洒向世界，万物开始生长。愿我们都有美好生活！',
                    result: {
                        peopleCount: 10,
                        peopleRatio: 50,
                        roomsizeCount: 1000,
                        roomsizeRatio: 50
                    }
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
                type: 1,
                readonly: true,
                candidates: [{
                    name: '王大锤',
                    userimg: 'img/profile-pics/1.jpg',
                    uid: 1,
                    slogan: '能给大家提供帮助一直都是我的心愿',
                    groupNo: 1,
                    result: {
                        peopleCount: 10,
                        peopleRatio: 50,
                        roomsizeCount: 1000,
                        roomsizeRatio: 50
                    }
                }, {
                    name: '李小五',
                    userimg: 'img/profile-pics/2.jpg',
                    uid: 2,
                    slogan: '每一个抉择背后都是一张暖心的笑脸，世界终将更加美好。',
                    groupNo: 1,
                    result: {
                        peopleCount: 10,
                        peopleRatio: 50,
                        roomsizeCount: 1000,
                        roomsizeRatio: 50
                    }
                }, {
                    name: '王晨光',
                    userimg: 'img/profile-pics/3.jpg',
                    uid: 3,
                    groupNo: 1,
                    slogan: '清晨的阳光洒向世界，万物开始生长。愿我们都有美好生活！',
                    result: {
                        peopleCount: 10,
                        peopleRatio: 50,
                        roomsizeCount: 1000,
                        roomsizeRatio: 50
                    }
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
        return {
        };
    }
});

// 
Router.route('/candidate/:uid', {
    name: 'candidate',
    waitOn: function () {
        Session.set('pageTitle', '候选人信息');
        return [];
    },
    data: function () {
        return {
            uid: this.params.uid
        };
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
