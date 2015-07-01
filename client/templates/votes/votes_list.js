Template.voteslist.helpers({
               /*
    votes: function () {
    title
    desc
    userId 创建人id
    groupId[] 所属组团编号数组
    createdAt
    beginAt (起始日期)
    endAt (结束日期)
    allPeopleCount 当前可以参与投票的人员基数
    allRoomsizeCount 当前可以参与投票的面积基数
    limit 候选人的人数限制
    candidates[] 候选人列表数组
        name 姓名
        picture 头像
        groupId 候选人所在组团编号
        slogan 宣言
        result 当前投票结果
        peopleCount 参与投票人数
        peopleRatio 投票人的百分比
        roomsizeCount 参与投票的面积总数
        roomsizeRatio 所占面积的百分比

        return [{
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
            title: '关于小区养狗状况的投票',
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
        }];
    }
    */
});

var switchOper = function ($i, $vote) {
    if ($i.hasClass('md-keyboard-arrow-down')) {
        $i.removeClass('md-keyboard-arrow-down');
        $i.addClass('md-keyboard-arrow-up');
        $vote.removeClass('fold');
        $vote.addClass('unfold');
    } else {
        $i.removeClass('md-keyboard-arrow-up');
        $i.addClass('md-keyboard-arrow-down');
        $vote.addClass('fold');
        $vote.removeClass('unfold');
    }
};

Template.voteslist.events({
    'click .vote #vote-oper': function (event, template) {
        var $this = $(event.target);
        switchOper($this.find('i'), $this.closest('#vote-item'));
    },
});
