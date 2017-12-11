function leftNavChange() {
	var _leftNav = $('.left').find('.left-nav').find('div');
	_leftNav.click(function () {
		var index = $(this).index();
		_leftNav.eq(index).css({"background-color": "#108ee9","padding-left": "30px"}).siblings().css({"background-color": "transparent","padding-left": "20px"});
	})
}
function logOut() {
	var _logout = $('.logout');
	_logout.click(function() {
		window.location.href = 'login/login.html'
	})
}
tablePaging('tablelsw','spanTotalPage','spanPageNum','spanPre','spanNext','spanFirst','spanLast',10);
leftNavChange();
logOut();