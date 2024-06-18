$(document).ready(function() {


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
    
    /* 왼쪽 사이드바 함수 */
    function showLeftSideBar(){
      $('.left-side-bar > .menu-1 ul > li.active').removeClass('active');
      $('.left-side-bar-box').addClass('active');
    };
    function hideLeftSideBar(){
      $('.left-side-bar-box').removeClass('active');
    };
    
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
    
    $('.left-side-bar-box').click(function(){
      $('.toggle-side-bar-btn').click();
    });
    
    $('.left-side-bar').click(function(e){
      e.stopPropagation();
    });




  //  연혁 스크롤 이벤트
    (function () {
        "use strict";
      
        var items = document.querySelectorAll(".timeline li");
      
        function isElementInViewport(el) {
          var rect = el.getBoundingClientRect();
          return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <=
              (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
          );
        }
      
        function callbackFunc() {
          for (var i = 0; i < items.length; i++) {
            if (isElementInViewport(items[i])) {
              items[i].classList.add("in-view");
            }
          }
        }
      
        window.addEventListener("load", callbackFunc);
        window.addEventListener("resize", callbackFunc);
        window.addEventListener("scroll", callbackFunc);
      })();
      

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

// 페이지 로드시와 .top을 클릭한 후에 스크롤 이벤트 핸들러 등록
$(document).ready(function() {
  $(window).scroll(handleScroll); // 페이지 로드시 스크롤 이벤트 등록

  $(".top").click(function() {
      $("html, body").animate({
          scrollTop: 0
      }, 400, function() {
          $(window).scroll(handleScroll); // .top을 클릭한 후에 스크롤 이벤트 재등록
      });
      return false;
  });
});

  

