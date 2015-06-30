/*
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
*/

Events = new Mongo.Collection('events');
Events.before.insert(function (userId, doc) {
    doc.createdAt = new Date();
});

Meteor.methods({
    vote: function (userId, userType) {
        check(userId, String);
        check(userType, String);

        // TODO 查后台数据库，校验用户是否在这个组里，是否已经通过手机验证
        // 更新候选人信息列表
    }
});
