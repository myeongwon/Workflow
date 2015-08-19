(function(global, doc){
 	
 	
	document.body.onload=uiInit;

	function uiInit(){
		this.onscroll = changeMenu;
		// this.onkeydown = keyDownfn;
		// this.onkeyup = keyUpfn;
	}

	// changeMenu() 실행
	function changeMenu(){
		// 조작 변수선언
		var first_menu = document.querySelector('.skicky_menu');
			
		// 위치값 변수 선언
			// 전체 스크롤 현재 top 값 
		var body_scroll = document.body.scrollTop,
			// nav 높이
			first_menu_h = first_menu.offsetHeight,
			// 브라우져 기준상 first_menu의 top의 위치 
			first_menu_top = first_menu.offsetTop,
			
			change_point =  first_menu_top + first_menu_h

			console.log(first_menu_h); //100
			console.log(change_point); //200

			if(body_scroll > change_point ){
				first_menu.classList.add('change_menu');

			}else{
				first_menu.classList.remove('change_menu');
			}
	}

	// function keyDownfn(event){
	// 	changeMenu();
	// }
	// function keyUpfn(event){
	// 	changeMenu();
	// }
})(window, window.document);