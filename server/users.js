Meteor.methods({
    userExist: function (username, emailAddress) {
        var userByName, userByEmail, user;

        if (username) {
            userByName = Meteor.users.find({username: username}).fetch();
        }

        if (emailAddress) {
            userByEmail = Meteor.users.find({
                'emails.0.address': emailAddress
            }).fetch();
        }

        user = userByName ? userByName : userByEmail;

        return user;
    }
});

Meteor.methods({
  sendCodeSmsByYunpian: function(phoneNum){
    var couponCode = Math.floor(Random.fraction() * 1000000) + '';

    var domain = "http://yunpian.com/v1/sms/send.json";
    // var apikey = "1f9637998a397fab9727501c59763a3d";
    //竇恆山apikey
    var apikey = "7a11ac9b8eef8bf449df3fe7df2ca06e";

    var url = domain + "?apikey=" + apikey + "&mobile=" + phoneNum + "&text=【北京毛豆网】您的验证码是" + couponCode;

    HTTP.post(url, {
        headers: {
          "Content-type": "application/x-www-form-urlencoded",
          "Accept": "text/plain"
        }
      }, function(err, result){
        if (!err) {}
        console.log("+++++++++++++++statusCode", result.statusCode);
        console.log("+++++++++++++++headers", result.headers);
      }
    );

    Coupons.upsert({phoneNum: phoneNum}, {$set: {couponCode: couponCode}});
  }
});

Accounts.registerLoginHandler(function(loginRequest) {
  //there are multiple login handlers in meteor.
  //a login request go through all these handlers to find it's login hander
  //so in our login handler, we only consider login requests which has admin field
  var phoneNum = loginRequest.phoneNum;
  var couponCode = loginRequest.couponCode;
  var coupon = Coupons.findOne({phoneNum: phoneNum, couponCode: couponCode});

  if(!phoneNum) {
    return undefined;
  }

  if(!couponCode) {
    return undefined;
  }

  if(!coupon) {
    return undefined;
  }

  //we create a admin user if not exists, and get the userId
  var userId = null;
  var user = Meteor.users.findOne({phoneNum: phoneNum});
  if(!user) {
    userId = Meteor.users.insert({username: phoneNum, phoneNum: phoneNum});
  } else {
    userId = user._id;
  }

  //send loggedin user's user id
  return {
    userId: userId
  };
});
