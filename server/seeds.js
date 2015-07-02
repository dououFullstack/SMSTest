Meteor.startup(function() {
  var users = [
    {
      mobile: '13691584139',
      name: '李明',
      group: '第一组团'
    },
    {
      mobile: '18957296162',
      name: '刘吉洋',
      group: '第二组团'
    },    
    {
      mobile: '13691584139',
      name: '杨帆',
      group: '第三组团'
    },
  ];


  if (ValidUsers.find({}).count() === 0) {
    _(users).each(function (user) {
      ValidUsers.insert({
        mobile: user.mobile,
        name: user.name,
        group: user.group,
      });
    }); 
  }
});
