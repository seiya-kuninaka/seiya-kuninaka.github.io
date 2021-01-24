$(document).ready(function(){
    $("#topBtn").hide();
    $(window).on("scroll", function() {
       // ① 下部へのスクロールでページトップボタンをふんわり表示させる記述
        if ($(this).scrollTop() > 100) {
            $("#topBtn").fadeIn("fast");
        } else {
            $("#topBtn").fadeOut("fast");
        }
        // ③ ページトップボタンをフッターで止める記述
        scrollHeight = $(document).height();
        scrollPosition = $(window).height() + $(window).scrollTop();
        footHeight = $("footer").innerHeight(); //footerの高さ（＝止めたい位置）
        if ( scrollHeight - scrollPosition  <= footHeight ) {
            $("#topBtn").css({
                "position":"absolute",
                "bottom": footHeight + 20
            });
        } else {
            $("#topBtn").css({
                "position":"fixed",
                "bottom": "20px"
            });
        }
        //
    });
    // ② ページトップボタンをクリックでページ上部へスムーズにスクロールさせる記述
    $('#topBtn').click(function () {
        $('body,html').animate({
        scrollTop: 0
        }, 400);
        return false;
    });
    //
});
// この場合、ページトップボタンがフッターの位置に到着後、絶対値でページトップボタンを固定。
// 他の条件の時は、ページトップボタンをスクロールに合わせて固定する。
// ①②③ を個別使用でも、それぞれの動きをします。必要に応じて記述してみてください。
