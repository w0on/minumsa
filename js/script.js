$(document).ready(function() {

  // 모달
  $('#myModal').show();

setTimeout(function() { $('#myModal').hide();}, 4000);

});

function close_pop(flag) {$('#myModal').hide();};


$(document).ready(function(){




// 새로고침 무시
$(function(){
  $('.sec03_main_left>.left01 a').on("click",function(e){
      e.preventDefault();
  });
});



// 좌측 사이드바
$('.toggle-side-bar-btn').click(function(){
  
  var $clicked = $(this);
  var nowAnimating = $clicked.attr('data-ico-now-animating');
  
  if ( nowAnimating == "Y" ){
      return;
  }
  
  if ( $clicked.hasClass('active') ){
      hideLeftSideBar();
  }
  else {
      showLeftSideBar();
  }
  
  $clicked.attr('data-ico-now-animating', 'Y');
  $clicked.toggleClass('active');
  
  setTimeout(function(){
      $clicked.attr('data-ico-now-animating', 'N');
  }, 400);
});

/* 좌측 사이드바 함수 */
function showLeftSideBar(){

  $('.left-side-bar > .menu-1 ul > li.active').removeClass('active');
  $('.left-side-bar-box').addClass('active');
};
function hideLeftSideBar(){
  $('.left-side-bar-box').removeClass('active');
};

/* 메뉴 접히고 펼치기 */
$('.left-side-bar > .menu-1 ul > li').click(function(e){
  
  if ( $(this).hasClass('active') ){
      $(this).removeClass('active');
  }
  else {
      $(this).siblings('.active').removeClass('active');
      $(this).find('.active').removeClass('active');
      $(this).addClass('active');
  }
  
  e.stopPropagation();
});

/* 좌측 사이드바 배경을 클릭했을때 */
$('.left-side-bar-box').click(function(){
  $('.toggle-side-bar-btn').click();
});

$('.left-side-bar').click(function(e){
  e.stopPropagation();
});



// 스크롤이벤트

$(window).scroll(function(){

let value = $(this).scrollTop();

var scrollY = $(this).scrollTop();

if (scrollY > 700 && !$(this).data('animated')) {
  
  $(this).data('animated', true);

  $('.circle_1').animate({top: '360px', left: '700px'}, function() {
      $('.circle_1').animate({top: '300px', left: '850px'});
      $('.circle_1').animate({top: '340px', left: '950px'});
      $('.circle_1').animate({top: '270px', left: '1100px'});
    $(window).off('scroll');
  });
} 

// sec01 동그라미 애니메이션
if(value > 670){

 $('.circle').stop().animate({left : 60, top : 110},400);
 
 $('.circle_2').stop().animate({left : 300, top : 500},400);
 
 $('.circle_3').stop().animate({right : 5, bottom : -100},400);
 
 $('.circle_4').stop().animate({right : 450, bottom : 600},400);
 
 $('.circle_5').stop().animate({left : 300, top : 200},400);
}

});




// sec02 스와이퍼
const swiper = new Swiper('.swiper', {
  
  direction: 'vertical',
  loop: true,
  autoplay : true,
  spaceBetween: 30,

  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  
  breakpoints: {
      1024: {
          slidesPerView: 3,
          direction: 'horizontal',
      },
      768: {
          slidesPerView: 2,
          direction: 'horizontal', 
      },
      400: {
          slidesPerView:2,
          direction: 'vertical',
      },
  },

});




// sec03 새소식
$('.sec03_main_right ul:first').siblings().hide();

$('.left01 a').click(function(){
  $('.sec03_main_right ul').hide();
 $($(this).attr('href')).fadeIn();
});




// 스크롤 이벤트 핸들러 함수
function handleScroll() {
  let value2 = $(this).scrollTop();

  if (value2 > 700) {
      $(".top").fadeIn();
  } else {
      $(".top").fadeOut();
  }
  
}

$(document).ready(function() {
  $(window).scroll(handleScroll); 

  $(".top").click(function() {
      $("html, body").animate({
          scrollTop: 0
      }, 400, function() {
          $(window).scroll(handleScroll); 
      });
      return false;
  });
});



});




