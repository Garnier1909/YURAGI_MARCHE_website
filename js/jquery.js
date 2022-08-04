$(function () {
    // #で始まるa要素をクリックした場合に処理
    $('a[href^="#"]').click(function () {
        // 移動先を0px調整する。0を30にすると30px下にずらすことができる。
        var adjust = 30;
        // スクロールの速度（ミリ秒）
        var speed = 400;
        // アンカーの値取得 リンク先（href）を取得して、hrefという変数に代入
        var href = $(this).attr("href");
        // 移動先を取得 リンク先(href）のidがある要素を探して、targetに代入
        var target = $(href == "#" || href == "" ? 'html' : href);
        // 移動先を調整 idの要素の位置をoffset()で取得して、positionに代入
        var position = target.offset().top + adjust;
        // スムーススクロール linear（等速） or swing（変速）
        $('body,html').animate({ scrollTop: position }, speed, 'swing');
        //チェックボックスのチェックを外す
        $("#menu-btn-check").removeAttr("checked").prop("checked", false).change();

        return false;
    });

    // ----------------------トップに戻るボタン----------------------

    // 変数にクラスを入れる
    var btn = $('.button');

    //スクロールしてページトップから100に達したらボタンを表示
    $(window).on('load scroll', function () {
        if ($(this).scrollTop() > 100) {
            btn.addClass('active');
        } else {
            btn.removeClass('active');
        }
    });

    //スクロールしてトップへ戻る
    btn.on('click', function () {
        $('body,html').animate({
            scrollTop: 0
        });
    });


    // ----------------------ハンバーガーメニューの表示-------------------------
    $("#menu-btn-check").on('checked', function () {
        (".menu-content").fadeIn(1000);
    });


    //------------------ レスポンシブでの変更 -------------------------

    if (window.matchMedia('(max-width: 520px)').matches) {
        /* ウィンドウサイズ520以下の処理 */

    } else if (window.matchMedia('(max-width:960px)').matches) {
        /* ウィンドウサイズ960以下の処理 */

    } else if (window.matchMedia('(min-width:961px)').matches) {
        /* ウィンドウサイズ961以上の処理 */
        // 改行をプラス
        $(".br").css('display', 'none');
    }

    //-------------------- アニメーション -------------------
    const c_windowHeight = $(window).height();
    const c_scroll = $(window).scrollTop();

    $(window).scroll(function () {
        const windowHeight = $(window).height();
        const scroll = $(window).scrollTop();

        $('.float, .content').each(function () {
            const targetPosition = $(this).offset().top;
            if (scroll > targetPosition - windowHeight + 100) {
                $(this).addClass("is-fadein");
            }
        });
    });


});