/*
 username (手机号)
 emails
 roles
     admin
     user
 profile
     name (户主姓名)
     mobile (手机号码)
     wechat (微信号)
     qq (QQ号码)
     rooms
         id (房间号)
         size (房屋建筑面积)
         groupId (组团编号)
*/




// 通过管理员上传的正确的用户信息，存入 validUsers 数据库中
/*
{
    name: '李明'
    mobile: '13691584999'
    group: '第一组团'
}
*/
ValidUsers = new Mongo.Collection('validUsers');
