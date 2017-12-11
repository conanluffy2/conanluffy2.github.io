function login () {
	var username = $('#username').val();
	var password = $('#password').val();
	var loginStatus = {
		success: function (username) {
			// 保存登录状态并跳转到首页
			CookieUtil.set('login-status', '1','','/');
			CookieUtil.set('username', username,'','/');
			window.location.href = '../index.html';
		},
		fail: function (argument) {
			CookieUtil.set();
		}
	}
	if (true) {
		loginStatus.success(username);
	}
}