function leftNavChange(argument) {
	var $leftNav = $('.left').find('.left-nav').find('div');
	$leftNav.click(function () {
		var index = $(this).index();
		$leftNav.eq(index).css({"background-color": "#108ee9","padding-left": "30px"}).siblings().css({"background-color": "transparent","padding-left": "20px"});
	})
}
leftNavChange();
