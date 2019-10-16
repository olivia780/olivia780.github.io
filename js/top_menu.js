$("#icon_menu").click(function (event) {
	event.preventDefault();
	if($("#top_menu").attr('class') === "menu-drop"){
		$("#top_menu").addClass('responsive');
		$("#top_menu").find('ul').addClass('responsive');
		$("li.dropdown").addClass('responsive');
	}
	else{
		$("#top_menu").removeClass('responsive');
		$("#top_menu").find('ul').removeClass('responsive');
		$("li.dropdown").removeClass('responsive');	
	}
})