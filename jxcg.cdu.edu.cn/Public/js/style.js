


$(".text .nav li a b").remove();
//返回顶部的js
function pageScroll(){
    //把内容滚动指定的像素数（第一个参数是向右滚动的像素数，第二个参数是向下滚动的像素数(每循环一次滚动条的top减10)）
    window.scrollBy(0,-100);
    //延时递归调用，模拟滚动向上效果
    scrolldelay = setTimeout('pageScroll()',100);
    //获取scrollTop值，声明了DTD的标准网页取document.documentElement.scrollTop，否则取document.body.scrollTop；因为二者只有一个会生效，另一个就恒为0，所以取和值可以得到网页的真正的scrollTop值
    var sTop=document.documentElement.scrollTop+document.body.scrollTop;
    //判断当页面到达顶部，取消延时代码（否则页面滚动到顶部会无法再向下正常浏览页面）
    if(sTop==0) clearTimeout(scrolldelay);
}
        
        
//图片滚动
var speed=100;
var tab=document.getElementById("demo");
var tab1=document.getElementById("demo1");
var tab2=document.getElementById("demo2");
tab2.innerHTML=tab1.innerHTML;
function Marquee(){
if(tab2.offsetWidth-tab.scrollLeft<=0)
tab.scrollLeft-=tab1.offsetWidth
else{
tab.scrollLeft++;
}
}
var MyMar=setInterval(Marquee,speed);
tab.onmouseover=function() {clearInterval(MyMar)};
tab.onmouseout=function() {MyMar=setInterval(Marquee,speed)};

var _url=document.getElementById("videoJs");
console.warn(_url);
var _src=_url.getAttribute("src");
var _params=_src.substring(_src.indexOf('?')+1);
console.warn("_params:"+_params);

strs=_params.split("'");
vUrl = strs[1];

//网页视屏播放器
var flashvars={
            f:vUrl,
            c:0,
            b:1
            };
        var params={bgcolor:'#fff',allowFullScreen:true,allowScriptAccess:'always'};
        CKobject.embedSWF('ckplayer/ckplayer.swf','a1','ckplayer_a1','440','330',flashvars,params);
        /*
        CKobject.embedSWF(播放器路径,容器id,播放器id/name,播放器宽,播放器高,flashvars的值,其它定义也可省略);
        下面三行是调用html5播放器用到的
        */
		
        var video=[vUrl];
        var support=['iPad','iPhone','ios','android+false','msie10+false','webKit'];
        CKobject.embedHTML5('video','ckplayer_a1',440,330,video,flashvars,support);




    