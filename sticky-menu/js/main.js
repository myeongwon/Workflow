/* ********************
	*
	* skicky menu 만들기 
	*
	* 구상 : 
	* 1. 해당 역역의  position top값 만큼 스크롤 되면 
	* skicky menu 클래스 이름이 바뀌게됨 change_menu로 
	*
	*	2. 다시 화면 최상단으로 옮기면 다시 
	*	 change_menu 에서 skicy menu 로 
	*
	*  global.body.scrollTop
		global.body.offsetHeight
******************** */



document.body.onscroll = change_menu;

function change_menu(){
	//
	var basic_menu = document.querySelector('.skicky_menu'),
		arear1 = document.querySelector('.test1'),

		arear2 = document.querySelector('.test2');

		var arear2_h = arear2.style.position.top;
		// console.log(arear2_h);

		// scroll / heigth 값 
		body_scroll = document.body.scrollTop,  // 스크롤시 스크롤 된만큼 값을 표시 !!!!!!!!!!!
		body_h = document.body.offsetHeight,
		menu_h = basic_menu.offsetHeight,
		area2_h = arear2.offsetHeight,
				
		target_h = body_h - area2_h,
		// area2_h = arear2.offsetHeight, //  자기 자신의 높이 
		change_h = area2_h - menu_h;
		
		console.log('aaa');	
		// console.log(body_scroll);
		

	if(body_scroll >= target_h){
		// change_menu
		basic_menu.classList.add('change_menu');
	}else{
		basic_menu.classList.remove('change_menu');
	}

	console.log(target_h +': 영역2 높이');
	// console.log(menu_h +': 메뉴 높이');
	// console.log(area2_h +': 영역2 높이');
	// console.log(change_h +': 변화 높이');
}




