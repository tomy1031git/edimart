/*************************************************************/



$(function() {
　//要素が〜された時、動作（処理）させる。
  //開ける
　$('.el_humburger').click(function(){
　 //処理を記述
  $('.navigation_sp').stop(true,true).fadeIn();
  $('.navigation_sp').slideDown(500);
  $('.el_humburger').css('display','none');
  $('.navigation_sp').css('display','block');
　});

  //閉じる
  $('.Close').click(function(){
    $('.navigation_sp').stop(true,true).fadeOut();
    $('.el_humburger').fadeIn().css('display','block');
    // $('.navigation_sp').fadeOut().css('display','none');
　});

  


});

/*************************************************************/



/*************************************************************



//ハンバーガーメニュー
$(function(){
  $('.el_humburger').on('click',function(){
    spNavInout();
    $(".navigation_sp").css({display: block});
  });
});
 
//spナビ開く処理
function spNavIn(){
  $('body').removeClass('js_humburgerClose');
  $('body').addClass('js_humburgerOpen');
  $(".navigation_sp").addClass("js_appear");
  $(".navigation_sp").css({opacity:0});
  $(".navigation_sp").animate({
    opacity: 1
  },200);
  scrollBlocker(true);
}
 
//spナビ閉じる処理
function spNavOut(){
  $(".navigation_sp").animate({
    opacity: 0
  },200)
  $('body').removeClass('js_humburgerOpen');
  $('body').addClass('js_humburgerClose');
  setTimeout(function(){
    $(".navigation_sp").removeClass("js_appear");
  },200);
  scrollBlocker(false);
}
 
//spナビ開閉処理
function spNavInout(){
  if($('body.spNavFreez').length){
    return false;
  }
  if($('body').hasClass('js_humburgerOpen')){
   spNavOut();
  } else {
   spNavIn();
  }
}
 
//ナビ向けスクロール無効化処理
 
var scrollBlockerFlag;
 
function scrollBlocker(flag){
  if(flag){
    scrollpos = $(window).scrollTop();
    $('body').addClass('js_fixed').css({'top': -scrollpos});
    scrollBlockerFlag = true;
  } else {
    $('body').removeClass('js_fixed').css({'top': 0});
    window.scrollTo( 0 , scrollpos );
    scrollBlockerFlag = false;
  }
}




*************************************************************/
