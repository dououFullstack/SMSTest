Template.login.rendered = function () {
    // hack以符合模板的样式
    $('html').addClass('login-content');
    $('body').addClass('login-content');

    // 定制scrollbar
    function scrollbar(className, color, cursorWidth) {
        $(className).niceScroll({
            cursorcolor: color,
            cursorborder: 0,
            cursorborderradius: 0,
            cursorwidth: cursorWidth,
            bouncescroll: true,
            mousescrollstep: 100
        });
    }

    // Scrollbar for HTML(not mobile) but not for login page
    if (!$('html').hasClass('ismobile')) {
        if (!$('.login-content')[0]) {
            scrollbar('html', 'rgba(0,0,0,0.3)', '5px');
        }

        //Scrollbar Tables
        if ($('.table-responsive')[0]) {
            scrollbar('.table-responsive', 'rgba(0,0,0,0.5)', '5px');
        }

        //Scrill bar for Chosen
        if ($('.chosen-results')[0]) {
            scrollbar('.chosen-results', 'rgba(0,0,0,0.5)', '5px');
        }

        //Scroll bar for tabs
        if ($('.tab-nav')[0]) {
            scrollbar('.tab-nav', 'rgba(0,0,0,0)', '1px');
        }

        //Scroll bar for dropdowm-menu
        if ($('.dropdown-menu .c-overflow')[0]) {
            scrollbar('.dropdown-menu .c-overflow', 'rgba(0,0,0,0.5)', '0px');
        }

        //Scrollbar for rest
        if ($('.c-overflow')[0]) {
            scrollbar('.c-overflow', 'rgba(0,0,0,0.5)', '5px');
        }
    }

    // waves动画，注册页面的面板切换效果
    Waves.attach('.btn', ['waves-button', 'waves-float']);
    Waves.init();
};

Template.login.events({
    // login面板下部的小圆点的导航处理
    'click .login-navigation > li': function (e) {
        var $this = $(e.target);
        var z = $this.data('block');
        var t = $this.closest('.lc-block');

        t.removeClass('toggled');

        setTimeout(function(){
            $(z).addClass('toggled');
        });
    },

    // login面板登陆按钮的处理
    'click #l-login > .btn-login': function (e) {
        var $wrapper = $('#l-login');
        var username = $.trim($wrapper.find('input.username').val());
        var password = $.trim($wrapper.find('input.password').val());

        e.preventDefault();
        Meteor.loginWithPassword(username, password, function (err) {
            if (err) {
                console.log(err);
            } else {
                console.log('User login success!');
                $('html').removeClass('login-content');
                $('body').removeClass('login-content');
                Router.go('voteslist');
            }
        });
         return false; 
    },

    'click #l-register > .btn-login': function (e) {
        var $wrapper = $('#l-register');
        var username = $.trim($wrapper.find('input.username').val());
        var email = $.trim($wrapper.find('input.email').val());
        var password = $.trim($wrapper.find('input.password').val());

        Accounts.createUser({username: username, email: email, password : password}, function(err){
            if (err) {
                console.log(err);
            } else {
                console.log('注册成功！');
            }
        });

        return false;
    },

    'click #l-forget-password > .btn-login': function (e) {
        var email = $.trim($wrapper.find('input.email').val());
        console.log('Send email to: ' + email);
    }
});
