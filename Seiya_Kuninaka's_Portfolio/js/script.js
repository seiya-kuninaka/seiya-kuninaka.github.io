// PhotoSwipe
initPhotoSwipeFromDOM('.js-my-gallery');

$(function () {

  //Worksのリンクを有効化
  //スライド（Swiper）内に記載のリンクを有効にするため下記の記述が必要
  $(".works-url").on("click", "a", function (e) {
    e.stopPropagation();
  });


  //ページトップへもどる
  $('#js-page-top').on('click', function () {
    $('body,html').animate({
      scrollTop: 0
    }, 300);
    return false;
  });

  //固定ヘッダー
  $(window).scroll(function () {
    if ($(window).scrollTop() >= offset.top) {
      $nav.addClass('fixed');
      $("body").css("margin-top", navHeight);
    } else {
      $nav.removeClass('fixed');
      $("body").css("margin-top", "0");
    }
  });

  //ページ内スクロール
  var $nav = $(".gnav");
  var offset = $nav.offset();
  var navHeight = $nav.outerHeight();

  $('a[href^="#"]').on("click", function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top - navHeight;
    $("html, body").animate({scrollTop: position},300,"swing");
    return false;
  });

  (function() {
    const target = document.getElementById('logo-name'),
      height = document.getElementById('video').clientHeight,
      height_y =height - 100;
        console.log('height: ' + height + 'px  ' + 'height_y: ' + height_y + 'px');
  let offset       = 0,
      lastPosition = 0,// 現在地を示す変数を定義
      ticking      = false;

  function onScroll() {
    if (lastPosition > height_y) {
      if (lastPosition > offset) {
        target.classList.add('head-animation');
      } else if (lastPosition > height_y && lastPosition < offset) {
        target.classList.add('head-animation');
      } else if (lastPosition < height_y) {
        target.classList.remove('head-animation');
      } else {
        target.classList.remove('head-animation');
      }
      offset = lastPosition; //スクロール量の更新。この設定がなければ、アニメーションが動かない。
    } else {
      target.classList.remove('head-animation');
    }
  }

    window.addEventListener('scroll', function (e) {
    // スクロールするごとにlastPosition（現在地）の値を更新
    lastPosition = window.scrollY;
    if (!ticking) {
      // 指定した関数を再描画の前に呼び出してくれる。
      window.requestAnimationFrame(function() {
        onScroll(lastPosition);
        ticking = false;
      });
      ticking = true;
    }
  });
})();

});
