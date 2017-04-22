/**
 * Created by Administrator on 2017/2/10.
 */



window.onload = function(){

    //登录面板
    var $login_pad = $(".login-pad");
    var $login_pad2 = $(".login-pad2");
    mouseEvent($login_pad,$login_pad2,"block");

    //城市选择面板
    city_select();

    //右侧导航栏
    nav_right();

    //搜索栏
    search_anime();

    //中部导航列表
    nav_list();

    //中部轮播图片区域
    promolist();

    //中部右侧快捷充值面板
    shortcut();

    //专属活动轮播区
    private_activity();

    //导航楼层顶部区
    index_roof();

    //导航楼层部分
    index_floor();
    //闪购楼层
    floorShan();

    //电梯
    elevator();

    //顶部悬浮搜索条
    floatSearchBar();
};
//检测是否为ie浏览器
function isIE(){
    var ua = navigator.userAgent;
    var regexp = /MSIE/;
    return regexp.test(ua);
}
//$pad1:触发面板，$pad2:新面板
//鼠标移入移出事件1(新面板无变化)
function mouseEvent($pad1,$pad2,displayMode){
    $pad1.mouseover(function(e){
        $pad2.css("display",displayMode);
    });
    $pad1.mouseout(function(e){
        var evt = window.event || e;
        var obj = evt.toElement || evt.relatedTarget;
        if(($(obj)[0]==$pad2[0])) return false;
        $pad2.css("display","none");
    });
    $pad2.mouseout(function(e){
        var evt = window.event || e;
        //返回与事件的目标节点相关的节点
        var obj = evt.toElement || evt.relatedTarget;
        var pa = this;
        if(pa.contains(obj)) return false;
        $pad2.css("display","none");
    })
}
//鼠标移入移出事件2(原面板有变化)
/*
displayMode:触发后pad2的display属性
$pad1Class:触发后pad1的class属性
*/
function mouseEvent2($pad1,$pad2,displayMode,$pad1Class){
    $pad1.mouseover(function(e){
        $pad2.css("display",displayMode);
        if($pad1Class){
            $pad1.attr('class',$pad1Class);
        }
    });
    $pad1.mouseout(function(e){
        var evt = window.event || e;
        var obj = evt.toElement || evt.relatedTarget;
        if(($(obj)[0]==$pad2[0]))return false;
        $pad2.css("display","none");
        if($pad1Class){
            $pad1.attr('class',"");
        }
    });
    $pad2.mouseout(function(e){
        var evt = window.event || e;
        //返回与事件的目标节点相关的节点
        var obj = evt.toElement || evt.relatedTarget;
        var pa = this;
        if(pa.contains(obj)) return false;
        $pad2.css("display","none");
        if($pad1Class){
            $pad1.attr('class',"");
        }
    })
}
//鼠标移入移出事件3
//(新面板始终显示,并通过触发面板进行切换)
//$pad_array:包含$pad的所有兄弟元素的数组
function mouseEvent3($pad1,$pad2,$pad1_array,$pad2_array,displayMode,$pad1Class){
    $pad1.mouseover(function(e){
        for(let i=0;i<$pad2_array.length;i++){
            $($pad2_array[i]).css("display","none");
            if($pad1Class){
                $($pad1_array[i]).attr('class',"");
            }
        }
        $pad2.css("display",displayMode);
        if($pad1Class){
            $pad1.attr('class',$pad1Class);
        }
    });
    //console.log($pad2_array.length);
}
function appear($item){
    var $window = $(window);
            //元素顶部到页面顶部距离+60  小于  浏览器底部到页面顶部距离
    return (($item.offset().top+60 < $window.scrollTop()+$window.height())
            &&   //元素底部到页面顶部距离-60  大于  浏览器顶部到页面顶部距离
            ($item.offset().top+$item.height()-60 > $window.scrollTop()))
}

function city_select(){
    var $search_city_byletter = $(".search-city-byletter a");
    var $letters = $(".hd_city_innitial_tit");

    var $selected_city = $(".selected-city span");
    var $city_name = $(".city-name a")
    var $hotcity_list = $(".hotcity-list a");
    var $hd_city = $(".hd_city a");

    var $city_pad = $(".city-name");
    var $city_select_pad = $("#city-select-pad");
    mouseEvent($city_pad,$city_select_pad,"block");

    //自动滑动至指定字母处
    if($search_city_byletter != undefined){
        for(let i=0;i<$search_city_byletter.length;i++){
            $search_city_byletter[i].onclick = function(e){
                e.preventDefault();
                $letters[i].scrollIntoView();
                $(document).scrollTop(0);
            }
        }
    }
    //选择城市
    if($hotcity_list != undefined){
        for(let i=0;i<$hotcity_list.length;i++){
            $hotcity_list[i].onclick = function(e){
                e.preventDefault();
                var temp = $hotcity_list[i].innerHTML;
                $selected_city.text(temp);
                $city_name.text(temp);
            }
        }
    }
    if($hd_city != undefined){
        for(let i=0;i<$hd_city.length;i++){
            $hd_city[i].onclick = function(e){
                e.preventDefault();
                var temp = $hd_city[i].innerHTML;
                $selected_city.text(temp);
                $city_name.text(temp);
            }
        }
    }
}

/*顶部右侧导航栏*/
function nav_right(){
    var $right_nav_list_0 = $(".right-nav-list>li span:eq(0)");
    var $myyhd = $(".myyhd:first");
    mouseEvent2($right_nav_list_0,$myyhd,"block","right-nav-list-li-hover");

    var $right_nav_list_1 = $(".right-nav-list>li span:eq(1)");
    var $mobile_yhd = $(".mobile-yhd");
    mouseEvent2($right_nav_list_1,$mobile_yhd,"block","right-nav-list-li-hover");

    var $right_nav_list_2 = $(".right-nav-list>li span:eq(2)");
    var $company_purchase = $("#company-purchase");
    mouseEvent2($right_nav_list_2,$company_purchase,"block","right-nav-list-li-hover");

    var $right_nav_list_3 = $(".right-nav-list>li span:eq(3)");
    var $customer_service = $("#customer-service");
    mouseEvent2($right_nav_list_3,$customer_service,"block","right-nav-list-li-hover");

    var $right_nav_list_4 = $(".right-nav-list>li span:eq(4)");
    var $site_index = $("#site-index");
    mouseEvent2($right_nav_list_4,$site_index,"block","right-nav-list-li-hover");
}
/*搜索栏相关逻辑*/
function search_anime(){
    var $search_tab_change = $("#search-tab-change");
    var $search_tab_commodity = $(".search-tab-commodity");
    var $search_tab_shop = $(".search-tab-shop");
    var $icon1 = $("#search-tab-change i:first");
    var $icon2 = $("#search-tab-change i:last");

    mouseEvent2($search_tab_commodity,$search_tab_shop,"inline-block",null);

    /*搜索栏箭头滚动动画*/
    $search_tab_commodity.mouseover(function(e){
        $icon1.animate({ bottom: '30px'},70,function(e){
            $icon1.css('display','none');
            $icon2.css('display','block');
            $icon2.animate({bottom: '22px'},40)
        });
    });
    $search_tab_change.mouseout(function(e){
        var evt = window.event || e;
        var obj = evt.toElement || evt.relatedTarget;
        var pa = this;
        if(pa.contains(obj)) return false;
        $icon2.animate({bottom: '12px'},70,function(e){
            $icon2.css('display','none');
            $icon1.css('display','block');
            $icon1.animate({bottom: '22px'},40)
        });
    });

    /*搜索lable变化*/
    $search_tab_shop.click(function(e){
        var temp = $search_tab_shop.text();
        $search_tab_shop.text($search_tab_commodity.text());
        $search_tab_commodity.text(temp);
    })
}

function nav_list(){
    var $h3_list = $(".navlist h3");
    var $navdiv_list = $(".hd_sort_list_wrap");
    for(let i=0;i<12;i++){
        /*console.log($h3_list[i]);
        console.log($navdiv_list[i]);*/
        mouseEvent($($h3_list[i]),$($navdiv_list[i]),"block")
    }
}

function promolist(){
    var $promo_show = $("#promo-show");
    var $promo_pics = $(".promoshow");
    var $promo_btn = $("#promo-show-btn li");
    var $promo_btn2 = $("#promo-show-btn2");
    var $left_btn = $("#promo-show-btn2 span:eq(0)");
    var $right_btn = $("#promo-show-btn2 span:eq(1)");
    var ShowNum = 0;
    var HideNum;
    //图片数量需-1
    var picture_num = 8;
    var timer;
    var inTimer = true;
    var inanime = false;

    mouseEvent($promo_show,$promo_btn2,"block");
    setTimer();

    $left_btn.click(function(){
        HideNum = ShowNum;
        if(ShowNum == 0){
            ShowNum = picture_num;
            changeImg(HideNum,ShowNum);
            return;
        }
        ShowNum--;
        ShowNum = borderLimiter(ShowNum);
        changeImg(HideNum,ShowNum);
    });
    $right_btn.click(function(){
        HideNum = ShowNum;
        if(ShowNum == picture_num){
            ShowNum = 0;
            changeImg(HideNum,ShowNum);
            return;
        }
        ShowNum++;
        ShowNum = borderLimiter(ShowNum);
        changeImg(HideNum,ShowNum);
    });
    $promo_btn.each(function(num){
        $(this).mouseenter(function(){
            HideNum = ShowNum;
            ShowNum = num;
            changeImg(HideNum,ShowNum);
        })
    });
    function borderLimiter(ShowNum){
        if(ShowNum<=0){
            ShowNum = 0;
        }else if(ShowNum>=picture_num){
            ShowNum = picture_num;
        }
        return ShowNum;
    }
    function changeImg(hidenum,shownum){
        //手动变换图片时，定时器暂停5s
        clearInterval(timer);
        if(inTimer){
            setTimeout(function(){
                setTimer();
            },5000)
        }
        inTimer = false;
        changeimg(hidenum,shownum);
    }
    function changeimg(hidenum,shownum){
        if(!inanime){
            inanime = true;
            $promo_pics.stop();
            $($promo_pics[hidenum]).fadeOut(50,function(){
                $($promo_pics[shownum]).fadeIn(50,function(){
                    for(let i=0;i<$promo_btn.length;i++){
                        $($promo_btn[i]).css("background-color","#ccc");
                    }
                    $($promo_btn[shownum]).css("background-color","#e22");
                    inanime = false;
                });
            });
        }
    }
    function setTimer(){
        timer = setInterval(function(){
            HideNum = ShowNum;
            if(ShowNum == picture_num){
                ShowNum = 0;
                changeimg(HideNum,ShowNum);
                return;
            }
            ShowNum++;
            ShowNum = borderLimiter(ShowNum);
            changeimg(HideNum,ShowNum);
            inTimer = true;
        },3000);
    }
    $promo_show.mouseover(function(){
        clearInterval(timer);
        if(inTimer){
            setTimeout(function(){
                setTimer();
            },5000)
        }
        inTimer = false;
    });
}

function shortcut(){
    var $exclusive_ul_li = $(".exclusive-ul li");
    var $exclusive_ul_span = $(".exclusive-ul span");
    var $shortcut_trigger = $(".shortcut-trigger");

    var $extend_title = $(".extend-title li");
    var $extend_content = $(".extend-content");
    var $recharge_select = $(".recharge-select span");
    var $recharge_pad = $(".recharge-pad form");
    var $extend_content_close = $(".extend-content i");
    var $shortcut_extend = $(".shortcut-extend");
    var inanime = false;
    //console.log($exclusive_ul_li[0],$exclusive_ul_span[0]);
    //文字变红
    for(let j=0;j<$exclusive_ul_li.length;j++){
        $($exclusive_ul_li[j]).mouseover(function(){
            $($exclusive_ul_span[j]).css("color","#e22");
        });
        $($exclusive_ul_li[j]).mouseout(function(){
            $($exclusive_ul_span[j]).css("color","#000");
        })
    }
    //触发新面板
    for(let i=0;i<3;i++){
        $($shortcut_trigger[i]).mouseover(function () {
            if(!inanime){
                inanime = true;
                $($extend_content[i]).css("display","block");
                $($extend_title[i]).attr("class","extend-title-hover");
                $shortcut_extend.show(300,function(){
                    inanime = false;
                });
            }
        })
    }
    for(let i=0;i<3;i++){
        //变更新面板
        //大面板的变更
        mouseEvent3($($extend_title[i]),$($extend_content[i]),$extend_title,$extend_content,"block","extend-title-hover");
        //第一个面板的变更
        mouseEvent3($($recharge_select[i]),$($recharge_pad[i]),$recharge_select,$recharge_pad,"block","recharge-select-hover");

        //关闭新面板
        $($extend_content_close[i]).click(function () {
            $shortcut_extend.hide(300);
            for(let i=0;i<$extend_content.length;i++){
                $($extend_content[i]).css("display","none");
                $($extend_title[i]).attr('class',"");
            }
        })
    }
}

function private_activity(){
    var $pa_lis = $(".pa-lis");
    var $pa_lis_img = $(".pa-lis img");
    var $left = $("#pa-icons .left");
    var $right = $("#pa-icons .right");
    var $pa_imgs_ul = $("#pa-imgs ul");
    var $pa_top_span = $("#pa-top span");
    var inanime = false;
    //鼠标悬停图片放大
    for(let i=0;i<$pa_lis.length;i++){
        $($pa_lis[i]).mouseenter(function(){
            if(!inanime){
                inanime = true;
                var wValue=1.2 * $($pa_lis_img[i]).width();
                var hValue=1.2 * $($pa_lis_img[i]).height();
                $($pa_lis_img[i]).animate({width: wValue,
                    height: hValue,
                    left:("-"+(0.2 * $($pa_lis_img[i]).width())/2),
                    top:("-"+(0.2 * $($pa_lis_img[i]).height())/2)}
                    ,200,function(){
                    inanime = false;
                });
            }
        });
        $($pa_lis[i]).mouseleave(function(){
            //$($pa_lis_img[i]).stop();
                $($pa_lis_img[i]).animate({
                    width: "100",
                    height: "100",
                    left: "0px",
                    top: "0px"
                }, 200);
        });
    }
    //更换图片组
    var picture_num;
    var showNum = 0;
    var left;
    var $document = $(document);
    $($pa_top_span[0]).css("background-color","#e22");
    $left.click(function(){
        if($document.width()<1200){
            picture_num = 4;
            showNum--;
            showNum = borderLimiter(showNum,picture_num);
            clearColor(picture_num);
            $($pa_top_span[showNum]).css("background-color","#e22");
            $pa_imgs_ul.animate({
                left: -870*showNum +"px"
            },300)
        }
        if($document.width()>1200){
            picture_num = 3;
            showNum--;
            showNum = borderLimiter(showNum,picture_num);
            clearColor(picture_num);
            $($pa_top_span[showNum]).css("background-color","#e22");
            $pa_imgs_ul.animate({
                left: -1095*showNum +"px"
            },300)
        }
    });
    $right.click(function(){
        if($document.width()<1200){
            picture_num = 4;
            showNum++;
            showNum = borderLimiter(showNum,picture_num);
            clearColor(picture_num);
            $($pa_top_span[showNum]).css("background-color","#e22");
            $pa_imgs_ul.animate({
                left: -870*showNum +"px"
            },300)
        }
        if($document.width()>1200){
            picture_num = 3;
            showNum++;
            showNum = borderLimiter(showNum,picture_num);
            clearColor(picture_num);
            $($pa_top_span[showNum]).css("background-color","#e22");
            $pa_imgs_ul.animate({
                left: -1095*showNum +"px"
            },300)
        }
    });
    /*如果窗口大小发生变化则重置位置*/
    $(window).resize(function(){
        $pa_imgs_ul.css("left","0");
        showNum = 0;
        clearColor(picture_num);
        $($pa_top_span[0]).css("background-color","#e22");
    });
    function borderLimiter(ShowNum,picture_num){
        if(ShowNum<0){
            ShowNum = (picture_num-1);
        }else if(ShowNum>=picture_num){
            ShowNum = 0;
        }
        return ShowNum;
    }
    function clearColor(picture_num){
        for(let i=0;i<picture_num;i++){
            $($pa_top_span[i]).css("background-color","#eee");
        }
    }
}

function index_roof(){
    var $small_pic_div = $(".small-pic div");
    var $small_pic_img = $(".small-pic img");

    for(let i=0;i<$small_pic_img.length;i++){
        $($small_pic_div[i]).mouseenter(function(){
            $($small_pic_img[i]).animate({
                    marginLeft: "-=7"
                },100);
        });
        $($small_pic_div[i]).mouseleave(function(){
            $($small_pic_img[i]).animate({
                marginLeft:"+=7"
            },100);
        });
    }
}

function index_floor(){
    var $window = $(window);
    var $floor1 = $("#floor1");
    var $floor2 = $("#floor2");
    var $floor3 = $("#floor3");
    var $floor4 = $("#floor4");
    var $floor5 = $("#floor5");
    var $floor6 = $("#floor6");
    var $floor7 = $("#floor7");
    var $floor8 = $("#floor8");
    floorfn($floor1);
    floorfn($floor2);
    floorfn($floor3);
    floorfn($floor4);
    floorfn($floor5);
    floorfn($floor6);
    floorfn($floor7);
    floorfn($floor8);

    var $index_floor_imgs = $(".mod_index_floor img");
    flash($index_floor_imgs);

    function floorfn($floor){
        var $img_box = $floor.find(".img_box");
        var $trig_box_a = $floor.find(".trig_box a");
        var $trig_box_span = $floor.find(".trig_box span");
        var picture_num = 3;

        carousel($trig_box_a,$trig_box_span,$img_box,picture_num);
    }

    function carousel($btn_pad,$btn_changedpad,$img_pad,picture_num){
        var shownum = 0;
        var timer;
        var intimer = false;
        setauto((appear($img_pad)));
        $window.scroll(function(){
            setauto((appear($img_pad)));
        });

        $btn_pad.each(function(num){
            $(this).mouseenter(function(){
                clearInterval(timer);
                clearColor(picture_num);
                changeImg(num);
            })
        });
        $img_pad.find("img").each(function(num){
            $(this).mouseenter(function(){
                $btn_changedpad.stop();
                clearInterval(timer);
                clearColor(picture_num);
                $($btn_changedpad[num]).css("width","25px");
            });
            $(this).mouseleave(function(){
                setauto();
            });
        });
        function changeImg(shownum){
                $img_pad.stop();
                clearColor(picture_num);
                $($btn_changedpad[shownum]).css({
                    width:25+"px"
                });
                $img_pad.animate({
                    left: -329*shownum +"px"
                },300);
        }
        function clearColor(picture_num){
            for(let i=0;i<picture_num;i++){
                $($btn_changedpad[i]).css("width","0");
            }
        }

        function setauto(position){
            if(position){
                if(!intimer){
                    clearInterval(timer);
                    setTimer();
                    intimer = true;
                }
            }else{
                if(intimer){
                    clearInterval(timer);
                    intimer = false;
                }
            }
            function setTimer(){
                //preAct
                clearColor(picture_num);
                $($btn_changedpad[shownum]).animate({width:25+"px"},2600);
                    shownum++;
                    if(shownum>(picture_num-1)){
                        shownum = 0;
                    }
                    changeImg(shownum);
                clearColor(picture_num);

                timer = setInterval(function(){
                    clearColor(picture_num);
                    $($btn_changedpad[shownum]).animate({width:25+"px"},2600,function(){
                    shownum++;
                    if(shownum>(picture_num-1)){
                        shownum = 0;
                    }
                    changeImg(shownum);
                    clearColor(picture_num);
                    })
                },3000);
            }
        }
    }
    function flash($index_floor_imgs){
        $index_floor_imgs.each(function(index){
            $(this).mouseenter(function(){
                $(this)
                    .animate({opacity:0.6},50)
                    .animate({opacity:1},50)
            })
        })
    }
}
function floorShan(){
    var $tab_arrow = $(".tab_arrow");
    var $sg_tab = $(".sg_tab ul>li");
    var $sg_tabwrap = $(".sg_tabwrap .sg_tabcontent");
    var $sg_banner = $(".sg_banner");
    var $count_down = $(".count_down");
    for(let i=0;i<3;i++){
        $($sg_tab[i]).mouseenter(function(){
            $tab_arrow.animate({
                left:50+i*78+"px"
            },200);
            $sg_tabwrap.each(function(index){
                $($sg_tabwrap[index]).css("display","none");
            });
            $($sg_tabwrap[i]).css("display","block");

            $sg_tab.find("a").css("color","#666");
            $($sg_tab[i]).find("a").css("color","#cea145");
        })
    }
    $sg_banner.each(function(index){
        $($sg_banner[index]).mouseenter(function(){
            $($count_down[index]).css("display","block");
        });
        $($sg_banner[index]).mouseleave(function(){
            $($count_down[index]).css("display","none");
        })
    })
}

function elevator(){
    var $window = $(window);
    var $elevator = $("#elevator");
    var $floor_left_box_a = $(".floor_left_box a");
    var $index_floor = $("#index-floor");
    var $index_floor_div = $index_floor.children("div");
    var left = $index_floor.offset().left - 40;
    $elevator.css("left",left + "px") ;

    $window.resize(function(){
        var left = $index_floor.offset().left - 40;
        $elevator.css("left",left + "px") ;
    });

    $window.scroll(function(){
        if($window.scrollTop()>1200){
            $elevator.css("display","block");
        }else{
            $elevator.css("display","none");
        }

        $index_floor_div.each(function(index){
            if(appear2( $($index_floor_div[index]) )){
                $($floor_left_box_a[index]).attr("class","curser");
            }else{
                $($floor_left_box_a[index]).attr("class","");
            }
        });
    });

    $floor_left_box_a.each(function(index,element){
        //ie 9 不支持
        /*$(this).click(function (e) {
         console.log(element[0]);
         e.preventDefault();
         e.returnValue = false;
         $index_floor_div[index].scrollIntoView(false);
         });*/
        element.onclick = function(e){
            e.preventDefault();
            e.returnValue = false;
            $index_floor_div[index].scrollIntoView(false);
        }
    });

    //电梯显示楼层
    function appear2($item) {
        var $window = $(window);
        var preOffset = $item.prev().html() == undefined ? 1050 : $item.prev().offset().top;
        var flag;
        flag =
            preOffset < $window.scrollTop() &&  //上一个元素顶部滚过屏幕顶部
            $item.offset().top > $window.scrollTop();//元素顶部未滚过屏幕顶部

        if(isIE()){
            flag =
                preOffset-60 < $window.scrollTop() &&
                $item.offset().top > $window.scrollTop();
        }

        return flag;
    }
}

function floatSearchBar(){
    var $window = $(window);
    var $floatSearchBar = $("#floatSearchBar");
    var $sortnav = $(".sortnav");
    var $sortlist = $("#sortlist");

    mouseEvent3($sortnav,$sortlist);
    $window.scroll(function() {
        if ($window.scrollTop() > 1200) {
            $floatSearchBar.css("display", "block");
        } else {
            $floatSearchBar.css("display", "none");
            $sortlist.attr("class", "");
        }
    });

    function mouseEvent3($pad1,$pad2){
        $pad1.mouseover(function(e){
            //$pad2.css("display",displayMode);
            $pad2.attr("class","float_list")
        });
        $pad1.mouseout(function(e){
            var evt = window.event || e;
            var obj = evt.toElement || evt.relatedTarget;
            if(($(obj)[0]==$pad2[0]) || ($pad2.contains($(obj))) )return false;
            //$pad2.css("display","none");
            $pad2.attr("class","")
        });
        $pad2.mouseout(function(e){
            var evt = window.event || e;
            //返回与事件的目标节点相关的节点
            var obj = evt.toElement || evt.relatedTarget;
            var pa = this;
            if(pa.contains(obj)) return false;
            //$pad2.css("display","none");
            $pad2.attr("class","")
        })
    }
}