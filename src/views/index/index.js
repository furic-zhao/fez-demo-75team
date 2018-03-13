$.fn.parallaxSlider = function(options) {
    let opts = $.extend({}, $.fn.parallaxSlider.defaults, options);
    return this.each(function() {
        let $pxs_container = $(this),
            o = $.meta ? $.extend({}, opts, $pxs_container.data()) : opts;

        //幻灯对象
        let $pxs_slider = $('.pxs_slider', $pxs_container),
            //内部对象
            $elems = $pxs_slider.children(),
            //幻灯总数
            total_elems = $elems.length,
            //左右顺序滑动按钮
            $pxs_next = $('.pxs_next', $pxs_container),
            $pxs_prev = $('.pxs_prev', $pxs_container),
            //背景
            $pxs_bg1 = $('.pxs_bg1', $pxs_container),
            $pxs_bg2 = $('.pxs_bg2', $pxs_container),
            $pxs_bg3 = $('.pxs_bg3', $pxs_container),
            //当前图像
            current = 0,
            //导航容器
            $pxs_thumbnails = $('.pxs_thumbnails', $pxs_container),
            //导航
            $thumbs = $pxs_thumbnails.children(),
            //自动播放定时器
            slideshow,
            //加载图像
            $pxs_loading = $('.pxs_loading', $pxs_container),
            $pxs_slider_wrapper = $('.pxs_slider_wrapper', $pxs_container);

        //预加载所有图像
        let loaded = 0
        const $images = $pxs_slider_wrapper.find('img')

        $images.each(function() {
            const $img = $(this);
            $('<img/>').load(function() {
                ++loaded;
                if (loaded == total_elems * 2) {
                    $pxs_loading.hide();
                    $pxs_slider_wrapper.show();

                    //图像宽度(所有图像宽度相同)
                    const one_image_w = $pxs_slider.find('img:first').width();

                    /*设置宽度*/
                    setWidths($pxs_slider,
                        $elems,
                        total_elems,
                        $pxs_bg1,
                        $pxs_bg2,
                        $pxs_bg3,
                        one_image_w,
                        $pxs_next,
                        $pxs_prev);

                    /*导航*/
                    $pxs_thumbnails.css({
                        'width': one_image_w + 'px',
                        'margin-left': -one_image_w / 2 + 'px'
                    });
                    let spaces = one_image_w / (total_elems + 1);
                    $thumbs.each(function(i) {
                        const $this = $(this);
                        let left = spaces * (i + 1) - $this.width() / 2;
                        $this.css('left', left + 'px');

                        if (o.thumbRotation) {
                            let angle = Math.floor(Math.random() * 41) - 20;
                            $this.css({
                                '-moz-transform': 'rotate(' + angle + 'deg)',
                                '-webkit-transform': 'rotate(' + angle + 'deg)',
                                'transform': 'rotate(' + angle + 'deg)'
                            });
                        }

                        $this.bind('mouseenter', function() {
                            $(this).stop().animate({
                                top: '-10px'
                            }, 100);
                        }).bind('mouseleave', function() {
                            $(this).stop().animate({
                                top: '0px'
                            }, 100);
                        });
                    });

                    //默认高亮
                    highlight($thumbs.eq(0));

                    //点击导航按钮开始滑动
                    $pxs_next.bind('click', function() {
                        ++current;
                        if (current >= total_elems)
                            if (o.circular)
                                current = 0;
                            else {
                                --current;
                                return false;
                            }
                        highlight($thumbs.eq(current));
                        slide(current,
                            $pxs_slider,
                            $pxs_bg3,
                            $pxs_bg2,
                            $pxs_bg1,
                            o.speed,
                            o.easing,
                            o.easingBg);
                    });
                    $pxs_prev.bind('click', function() {
                        --current;
                        if (current < 0)
                            if (o.circular)
                                current = total_elems - 1;
                            else {
                                ++current;
                                return false;
                            }
                        highlight($thumbs.eq(current));
                        slide(current,
                            $pxs_slider,
                            $pxs_bg3,
                            $pxs_bg2,
                            $pxs_bg1,
                            o.speed,
                            o.easing,
                            o.easingBg);
                    });

                    /*滑动到对应的图像 */
                    $thumbs.bind('click', function() {
                        const $thumb = $(this);
                        highlight($thumb);
                        //用户点击时中断自动播放
                        if (o.auto)
                            clearInterval(slideshow);
                        current = $thumb.index();
                        slide(current,
                            $pxs_slider,
                            $pxs_bg3,
                            $pxs_bg2,
                            $pxs_bg1,
                            o.speed,
                            o.easing,
                            o.easingBg);
                    });
                    /*激活自动播放*/
                    if (o.auto != 0) {
                        o.circular = true;
                        slideshow = setInterval(function() {
                            $pxs_next.trigger('click');
                        }, o.auto);
                    }

                    /*缩放窗口时重新计算宽度*/
                    $(window).resize(function() {
                        w_w = $(window).width();
                        setWidths($pxs_slider, $elems, total_elems, $pxs_bg1, $pxs_bg2, $pxs_bg3, one_image_w, $pxs_next, $pxs_prev);
                        slide(current,
                            $pxs_slider,
                            $pxs_bg3,
                            $pxs_bg2,
                            $pxs_bg1,
                            1,
                            o.easing,
                            o.easingBg);
                    });

                }
            }).error(function() {
                console.log('here')
            }).attr('src', $img.attr('src'));
        });



    });
};

//当前窗口的宽度
let w_w = $(window).width();

let slide = function(current,
    $pxs_slider,
    $pxs_bg3,
    $pxs_bg2,
    $pxs_bg1,
    speed,
    easing,
    easingBg) {
    let slide_to = parseInt(-w_w * current);
    $pxs_slider.stop().animate({
        left: slide_to + 'px'
    }, speed, easing);
    $pxs_bg3.stop().animate({
        left: slide_to / 4 + 'px'
    }, speed, easingBg);
    $pxs_bg2.stop().animate({
        left: slide_to / 8 + 'px'
    }, speed, easingBg);
    $pxs_bg1.stop().animate({
        left: slide_to / 16 + 'px'
    }, speed, easingBg);
}

let highlight = function($elem) {
    $elem.siblings().removeClass('selected');
    $elem.addClass('selected');
}

let setWidths = function($pxs_slider,
    $elems,
    total_elems,
    $pxs_bg1,
    $pxs_bg2,
    $pxs_bg3,
    one_image_w,
    $pxs_next,
    $pxs_prev) {
    /*
    计算滑块的总宽度
     */
    let pxs_slider_w = w_w * total_elems;
    $pxs_slider.width(pxs_slider_w + 'px');

    $elems.width(w_w + 'px');

    $pxs_bg1.width(pxs_slider_w + 'px');
    $pxs_bg2.width(pxs_slider_w + 'px');
    $pxs_bg3.width(pxs_slider_w + 'px');

    let position_nav = w_w / 2 - one_image_w / 2 + 3;
    $pxs_next.css('right', position_nav + 'px');
    $pxs_prev.css('left', position_nav + 'px');
}

$.fn.parallaxSlider.defaults = {
    auto: 7000, //自动播放时间间隔，0为关闭自动播放
    speed: 1000, //完成一次动画切换的速度
    easing: 'jswing', //easing effect for the slide animation
    easingBg: 'jswing', //easing effect for the background animation
    circular: true, //circular slider
    thumbRotation: false //切换幻灯的图标是否随机旋转排版
};
//easeInOutExpo,easeInBack


const $pxs_container = $('#pxs_container');
$pxs_container.parallaxSlider();
/*其他工具按钮动画特效*/
$(".other-tool li").hover(function() {
    $(this).find("a").addClass("lightSpeedIn current").end().find(".ico").addClass("bounceInDown").css({
        "display": "block",
        "background-image": "url(" + randomFace() + ")"
    });
}, function() {
    $(this).find("a").removeClass("lightSpeedIn current").end().find(".ico").removeClass("bounceInDown").css("display", "none");
});

const faceList = [
'static/images/face/001.gif',
'static/images/face/002.gif',
'static/images/face/003.gif',
'static/images/face/004.gif',
'static/images/face/005.gif',
'static/images/face/006.gif',
'static/images/face/007.gif',
'static/images/face/008.gif',
'static/images/face/009.gif',
'static/images/face/010.gif',
'static/images/face/011.gif',
'static/images/face/012.gif',
'static/images/face/013.gif',
'static/images/face/014.gif',
'static/images/face/015.gif',
'static/images/face/016.gif',
'static/images/face/017.gif',
'static/images/face/018.gif',
'static/images/face/019.gif',
'static/images/face/020.gif',
'static/images/face/021.gif',
'static/images/face/022.gif',
'static/images/face/023.gif',
'static/images/face/024.gif'
];
/*随机表情*/
function randomFace() {
    let random = Math.ceil(Math.random() * 24);
    // if (random < 10) random = "0" + random;
    return faceList[random];
}
/*lightbox*/
$(".other-tool a,.pxs_slider_wrapper .content a").fancybox({
    'titlePosition': 'inside',
    'width': '100%',
    'height': '100%',
    'autoScale': true,
    'transitionIn': 'elastic', //elastic,fade,none
    'transitionOut': 'elastic',
    'type': 'iframe'
});
