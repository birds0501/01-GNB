//HTML 구조 파악이 끝난 후 실행
$(function () {
  //대상을 변수에 저장
  const $menu = $(".gnb > li");
  const $submenu = $(".submenu");
  const duration = 800;
  //메뉴 영역에 마우스가 들어왔을 때
  $menu.on("mouseenter", function () {
    //해당 메뉴의 서브메뉴를 slide down
    // $submenu.stop().slideDown(duration);
    $(this).find($submenu).stop().slideDown(duration);

    //해당메뉴에 on클래스 부여
    $(this).addClass("on");
  }); //this-이벤트를 발생시킨(마우스가 들어간 메뉴) 그 놈을 특성하여 찾아낼 수 있다.

  //메뉴 영역에 마우스가 나갈 때
  $menu.on("mouseleave", function () {
    //서브메뉴를 slide up
    $submenu.stop().slideUp(duration);

    //모든 메뉴에서 on클래스 빼기 (다 빠져도 상관x this로 써도 됨)
    $menu.removeClass("on");
  });
}); //ready function줄여쓴 것
