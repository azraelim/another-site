/**
 * Created by Administrator on 2017/3/12.
 */


window.onload = function(){
    //导航轮播图
    window.mySwipe = new Swipe(document.getElementById('indexBanner'), {
        startSlide: 0,
        speed: 400,
        auto: 3000,
        continuous: true,
        disableScroll: false,
        stopPropagation: false,
        callback: function(index, elem) {
            $dot_span.each(function(i,element){
                $(element).attr("class","");
            });
            $($dot_span[index]).attr("class","cur")
        },
        transitionEnd: function(index, elem) {}
    });

    var $dot_span = $(".dot span");
    var $lazy_imgs = $("img.lazy");
    var $product_wrap = $(".product_wrap");
    //var lazy = $lazy_imgs.lazyload;
    search_box();
    lowPrice();
    returnTop();

    $lazy_imgs.lazyload(null,$product_wrap);

    //顶部搜索框
    function search_box(){
        var $window = $(window);
        var $globalHeader = $("#globalHeader");
        var $ReplaceHeader = $("#ReplaceHeader");
        var $keyword = $("#keyword");
        var $header_logo = $(".header_logo");
        var $header_area = $(".header_area");

        var keyword_extend = function(){
            if ($window.scrollTop() > 50) {
                $keyword.stop();
                $globalHeader.css("position", "fixed");
                $ReplaceHeader.css("display", "block");
                $header_logo.css("display", "none");
                $header_area.css("display", "none");
                $keyword.animate({
                    width: "2.65rem"
                }, 300);
            }
            if ($window.scrollTop() < 50) {
                $keyword.stop();
                $globalHeader.css("position", "");
                $ReplaceHeader.css("display", "none");
                $keyword.animate({
                    width: "1.65rem"
                }, 300);
                $header_logo.css("display", "block");
                $header_area.css("display", "block");
            }
        };
        window.addEventListener("scroll",throttle(keyword_extend,200,500),false);
    }


    //今日特价 金牌秒杀倒计时
    function lowPrice(){
        //var $lowPriceRemainTime = $("#lowPriceRemainTime");
        var $lowPrice_hour = $("#lowPriceRemainTime .hour");
        var $lowPrice_min = $("#lowPriceRemainTime .min");
        var $lowPrice_second = $("#lowPriceRemainTime .second");

        //var $groupon_time_left = $("#groupon_time_left");
        var $groupon_hour = $("#groupon_time_left .hour");
        var $groupon_min = $("#groupon_time_left .min");
        var $groupon_second = $("#groupon_time_left .second");

        function showNum1(){
            var currentTime = new Date();
            var year = currentTime.getFullYear();
            var month = currentTime.getMonth();
            var day = currentTime.getDate();
            var endTime = new Date(year,month,(day+1),0,0,0);
            var remainTime = (endTime - currentTime)/1000;

            var show_hour = Math.floor(remainTime/3600);
            var show_min = Math.floor(( remainTime - show_hour*3600 ) / 60);
            var show_second = Math.round(remainTime - show_hour*3600 - show_min*60);

            show_hour = addzero(show_hour);
            show_min = addzero(show_min);
            show_second = addzero(show_second);

            $lowPrice_hour.text(show_hour);
            $lowPrice_min.text(show_min);
            $lowPrice_second.text(show_second);
        }
        function showNum2(){
            var currentTime = new Date();
            var year = currentTime.getFullYear();
            var month = currentTime.getMonth();
            var day = currentTime.getDate();
            var hour = currentTime.getHours();
            var endTime = new Date(year,month,day,(hour+1),0,0);
            var remainTime = (endTime - currentTime)/1000;

            var show_hour = Math.floor(remainTime/3600);
            var show_min = Math.floor(( remainTime - show_hour*3600 ) / 60);
            var show_second = Math.round(remainTime - show_hour*3600 - show_min*60);

            show_hour = addzero(show_hour);
            show_min = addzero(show_min);
            show_second = addzero(show_second);

            $groupon_hour.text(show_hour);
            $groupon_min.text(show_min);
            $groupon_second.text(show_second);
        }

        setInterval(function(){
            showNum1();
            showNum2();
        },50);

        function addzero(num){
            if(num<10){
                num = "0" + num.toString();
            }
            return num;
        }
    }

    //返回顶部按钮
    function returnTop(){
        var $returnTop = $(".returnTop");
        var $window = $(window);
        var timer;

        window.addEventListener("scroll",throttle(showbtn,200,500),false);

        function showbtn(){
            clearTimeout(timer);
            $returnTop.css("display","block");
            timer = setTimeout(function(){
                $returnTop.css("display","none");
            },3000)
        }

        $returnTop.click(function(){
            window.scrollTo(0,0);
        })
    }


    //减少滚动时的检索次数
    function throttle(fn,delay,atleast) {
        var timeout = null,
            startTime = new Date();
        return function() {
            var curTime = new Date();
            clearTimeout(timeout);
            if(curTime - startTime >= atleast) {
                fn();
                startTime = curTime;
            }else {
                timeout = setTimeout(fn, delay);
            }
        }
    }


}