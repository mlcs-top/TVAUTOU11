var rule={
    title:'无名小站',
    host:'https://blssv.com',
    // homeUrl:'/',
    // url:'/vodshow-fyclass/page/fypage/',
    url:'/vodshow-fyclassfyfilter/',
    filterable:1,//是否启用分类筛选,
    filter_url:'{{fl.area}}{{fl.by}}{{fl.class}}/page/fypage{{fl.year}}',
    filter:{
        "1":[{"key":"by","name":"排序","value":[{"n":"时间","v":"/by/time"},{"n":"人气","v":"/by/hits"},{"n":"评分","v":"/by/score"}]},{"key":"class","name":"类型","value":[{"n":"全部","v":""},{"n":"喜剧","v":"/class/喜剧"},{"n":"爱情","v":"/class/爱情"},{"n":"恐怖","v":"/class/恐怖"},{"n":"动作","v":"/class/动作"},{"n":"科幻","v":"/class/科幻"},{"n":"剧情","v":"/class/剧情"},{"n":"战争","v":"/class/战争"},{"n":"犯罪","v":"/class/犯罪"},{"n":"奇幻","v":"/class/奇幻"},{"n":"冒险","v":"/class/冒险"},{"n":"悬疑","v":"/class/悬疑"},{"n":"惊悚","v":"/class/惊悚"},{"n":"古装","v":"/class/古装"},{"n":"警匪","v":"/class/警匪"},{"n":"犯罪","v":"/class/犯罪"},{"n":"动画","v":"/class/动画"},{"n":"武侠","v":"/class/武侠"},{"n":"枪战","v":"/class/枪战"},{"n":"青春","v":"/class/青春"},{"n":"文艺","v":"/class/文艺"},{"n":"历史","v":"/class/历史"},{"n":"运动","v":"/class/运动"},{"n":"儿童","v":"/class/儿童"},{"n":"网络电影","v":"/class/网络电影"}]},{"key":"area","name":"地区","value":[{"n":"全部","v":""},{"n":"中国大陆","v":"/area/中国大陆"},{"n":"中国香港","v":"/area/中国香港"},{"n":"中国台湾","v":"/area/中国台湾"},{"n":"美国","v":"/area/美国"},{"n":"韩国","v":"/area/韩国"},{"n":"日本","v":"/area/日本"},{"n":"法国","v":"/area/法国"},{"n":"英国","v":"/area/英国"},{"n":"德国","v":"/area/德国"},{"n":"泰国","v":"/area/泰国"},{"n":"印度","v":"/area/印度"},{"n":"其他","v":"/area/其他"}]},{"key":"year","name":"年代","value":[{"n":"全部","v":""},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016","v":"/year/2016"},{"n":"2015","v":"/year/2015"},{"n":"2014","v":"/year/2014"},{"n":"2013","v":"/year/2013"},{"n":"2012","v":"/year/2012"},{"n":"2011","v":"/year/2011"},{"n":"2010","v":"/year/2010"},{"n":"2009","v":"/year/2009"},{"n":"2008","v":"/year/2008"},{"n":"2007","v":"/year/2007"},{"n":"2006","v":"/year/2006"},{"n":"2005","v":"/year/2005"},{"n":"2004","v":"/year/2004"},{"n":"2003","v":"/year/2003"},{"n":"2002","v":"/year/2002"},{"n":"2001","v":"/year/2001"},{"n":"2000","v":"/year/2000"}]}],
        "2":[{"key":"by","name":"排序","value":[{"n":"时间","v":"/by/time"},{"n":"人气","v":"/by/hits"},{"n":"评分","v":"/by/score"},{"n":"连载中","v":""},{"n":"已完结","v":"/isend/1"}]},{"key":"class","name":"类型","value":[{"n":"全部","v":""},{"n":"喜剧","v":"/class/喜剧"},{"n":"爱情","v":"/class/爱情"},{"n":"古装","v":"/class/古装"},{"n":"恐怖","v":"/class/恐怖"},{"n":"动作","v":"/class/动作"},{"n":"科幻","v":"/class/科幻"},{"n":"剧情","v":"/class/剧情"},{"n":"战争","v":"/class/战争"},{"n":"犯罪","v":"/class/犯罪"},{"n":"奇幻","v":"/class/奇幻"},{"n":"冒险","v":"/class/冒险"},{"n":"悬疑","v":"/class/悬疑"},{"n":"惊悚","v":"/class/惊悚"},{"n":"偶像","v":"/class/偶像"},{"n":"言情","v":"/class/言情"},{"n":"家庭","v":"/class/家庭"},{"n":"历史","v":"/class/历史"},{"n":"经典","v":"/class/经典"},{"n":"乡村","v":"/class/乡村"},{"n":"情景","v":"/class/情景"},{"n":"商战","v":"/class/商战"},{"n":"网剧","v":"/class/网剧"},{"n":"其他","v":"/class/其他"}]},{"key":"area","name":"地区","value":[{"n":"全部","v":""},{"n":"中国大陆","v":"/area/中国大陆"},{"n":"中国香港","v":"/area/中国香港"},{"n":"中国台湾","v":"/area/中国台湾"},{"n":"美国","v":"/area/美国"},{"n":"韩国","v":"/area/韩国"},{"n":"日本","v":"/area/日本"},{"n":"法国","v":"/area/法国"},{"n":"英国","v":"/area/英国"},{"n":"德国","v":"/area/德国"},{"n":"泰国","v":"/area/泰国"},{"n":"印度","v":"/area/印度"},{"n":"其他","v":"/area/其他"}]},{"key":"year","name":"年代","value":[{"n":"全部","v":""},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016","v":"/year/2016"},{"n":"2015","v":"/year/2015"},{"n":"2014","v":"/year/2014"},{"n":"2013","v":"/year/2013"},{"n":"2012","v":"/year/2012"},{"n":"2011","v":"/year/2011"},{"n":"2010","v":"/year/2010"},{"n":"2009","v":"/year/2009"},{"n":"2008","v":"/year/2008"},{"n":"2007","v":"/year/2007"},{"n":"2006","v":"/year/2006"},{"n":"2005","v":"/year/2005"},{"n":"2004","v":"/year/2004"},{"n":"2003","v":"/year/2003"},{"n":"2002","v":"/year/2002"},{"n":"2001","v":"/year/2001"},{"n":"2000","v":"/year/2000"}]}],
        "3":[{"key":"by","name":"排序","value":[{"n":"时间","v":"/by/time"},{"n":"人气","v":"/by/hits"},{"n":"评分","v":"/by/score"},{"n":"连载中","v":""},{"n":"已完结","v":"/isend/1"}]},{"key":"class","name":"类型","value":[{"n":"全部","v":""},{"n":"选秀","v":"/class/选秀"},{"n":"脱口秀","v":"/class/脱口秀"},{"n":"情感","v":"/class/情感"},{"n":"访谈","v":"/class/访谈"},{"n":"播报","v":"/class/播报"},{"n":"旅游","v":"/class/旅游"},{"n":"音乐","v":"/class/音乐"},{"n":"美食","v":"/class/美食"},{"n":"纪实","v":"/class/纪实"},{"n":"曲艺","v":"/class/曲艺"},{"n":"生活","v":"/class/生活"},{"n":"游戏互动","v":"/class/游戏互动"},{"n":"财经","v":"/class/财经"},{"n":"求职","v":"/class/求职"}]},{"key":"area","name":"地区","value":[{"n":"全部","v":""},{"n":"中国大陆","v":"/area/中国大陆"},{"n":"中国香港","v":"/area/中国香港"},{"n":"中国台湾","v":"/area/中国台湾"},{"n":"美国","v":"/area/美国"},{"n":"韩国","v":"/area/韩国"},{"n":"日本","v":"/area/日本"},{"n":"法国","v":"/area/法国"},{"n":"英国","v":"/area/英国"},{"n":"德国","v":"/area/德国"},{"n":"泰国","v":"/area/泰国"},{"n":"印度","v":"/area/印度"},{"n":"其他","v":"/area/其他"}]},{"key":"year","name":"年代","value":[{"n":"全部","v":""},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016","v":"/year/2016"},{"n":"2015","v":"/year/2015"},{"n":"2014","v":"/year/2014"},{"n":"2013","v":"/year/2013"},{"n":"2012","v":"/year/2012"},{"n":"2011","v":"/year/2011"},{"n":"2010","v":"/year/2010"},{"n":"2009","v":"/year/2009"},{"n":"2008","v":"/year/2008"},{"n":"2007","v":"/year/2007"},{"n":"2006","v":"/year/2006"},{"n":"2005","v":"/year/2005"},{"n":"2004","v":"/year/2004"},{"n":"2003","v":"/year/2003"},{"n":"2002","v":"/year/2002"},{"n":"2001","v":"/year/2001"},{"n":"2000","v":"/year/2000"}]}],
        "4":[{"key":"by","name":"排序","value":[{"n":"时间","v":"/by/time"},{"n":"人气","v":"/by/hits"},{"n":"评分","v":"/by/score"},{"n":"连载中","v":""},{"n":"已完结","v":"/isend/1"}]},{"key":"class","name":"类型","value":[{"n":"全部","v":""},{"n":"热血","v":"/class/热血"},{"n":"搞笑","v":"/class/搞笑"},{"n":"冒险","v":"/class/冒险"},{"n":"科幻","v":"/class/科幻"},{"n":"剧情","v":"/class/剧情"},{"n":"战斗","v":"/class/战斗"},{"n":"动画","v":"/class/动画"},{"n":"玄幻","v":"/class/玄幻"},{"n":"恋爱","v":"/class/恋爱"},{"n":"校园","v":"/class/校园"},{"n":"奇幻","v":"/class/奇幻"},{"n":"喜剧","v":"/class/喜剧"},{"n":"动作","v":"/class/动作"},{"n":"惊悚","v":"/class/惊悚"},{"n":"悬疑","v":"/class/悬疑"},{"n":"情感","v":"/class/情感"},{"n":"推理","v":"/class/推理"},{"n":"冒险","v":"/class/冒险"},{"n":"萝莉","v":"/class/萝莉"},{"n":"机战","v":"/class/机战"},{"n":"运动","v":"/class/运动"},{"n":"战争","v":"/class/战争"},{"n":"少年","v":"/class/少年"},{"n":"少女","v":"/class/少女"},{"n":"社会","v":"/class/社会"},{"n":"亲子","v":"/class/亲子"},{"n":"益智","v":"/class/益智"},{"n":"励志","v":"/class/励志"},{"n":"其他","v":"/class/其他"}]},{"key":"area","name":"地区","value":[{"n":"全部","v":""},{"n":"中国大陆","v":"/area/中国大陆"},{"n":"中国香港","v":"/area/中国香港"},{"n":"中国台湾","v":"/area/中国台湾"},{"n":"美国","v":"/area/美国"},{"n":"韩国","v":"/area/韩国"},{"n":"日本","v":"/area/日本"},{"n":"法国","v":"/area/法国"},{"n":"英国","v":"/area/英国"},{"n":"德国","v":"/area/德国"},{"n":"泰国","v":"/area/泰国"},{"n":"印度","v":"/area/印度"},{"n":"其他","v":"/area/其他"}]},{"key":"year","name":"年代","value":[{"n":"全部","v":""},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016","v":"/year/2016"},{"n":"2015","v":"/year/2015"},{"n":"2014","v":"/year/2014"},{"n":"2013","v":"/year/2013"},{"n":"2012","v":"/year/2012"},{"n":"2011","v":"/year/2011"},{"n":"2010","v":"/year/2010"},{"n":"2009","v":"/year/2009"},{"n":"2008","v":"/year/2008"},{"n":"2007","v":"/year/2007"},{"n":"2006","v":"/year/2006"},{"n":"2005","v":"/year/2005"},{"n":"2004","v":"/year/2004"},{"n":"2003","v":"/year/2003"},{"n":"2002","v":"/year/2002"},{"n":"2001","v":"/year/2001"},{"n":"2000","v":"/year/2000"}]}],
        "5":[{"key":"by","name":"排序","value":[{"n":"时间","v":"/by/time"},{"n":"人气","v":"/by/hits"},{"n":"评分","v":"/by/score"},{"n":"连载中","v":""},{"n":"已完结","v":"/isend/1"}]},{"key":"area","name":"地区","value":[{"n":"全部","v":""},{"n":"中国大陆","v":"/area/中国大陆"},{"n":"中国香港","v":"/area/中国香港"},{"n":"中国台湾","v":"/area/中国台湾"},{"n":"美国","v":"/area/美国"},{"n":"韩国","v":"/area/韩国"},{"n":"日本","v":"/area/日本"},{"n":"法国","v":"/area/法国"},{"n":"英国","v":"/area/英国"},{"n":"德国","v":"/area/德国"},{"n":"泰国","v":"/area/泰国"},{"n":"印度","v":"/area/印度"},{"n":"其他","v":"/area/其他"}]},{"key":"year","name":"年代","value":[{"n":"全部","v":""},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016","v":"/year/2016"},{"n":"2015","v":"/year/2015"},{"n":"2014","v":"/year/2014"},{"n":"2013","v":"/year/2013"},{"n":"2012","v":"/year/2012"},{"n":"2011","v":"/year/2011"},{"n":"2010","v":"/year/2010"},{"n":"2009","v":"/year/2009"},{"n":"2008","v":"/year/2008"},{"n":"2007","v":"/year/2007"},{"n":"2006","v":"/year/2006"},{"n":"2005","v":"/year/2005"},{"n":"2004","v":"/year/2004"},{"n":"2003","v":"/year/2003"},{"n":"2002","v":"/year/2002"},{"n":"2001","v":"/year/2001"},{"n":"2000","v":"/year/2000"}]}]
    },
    filter_def:{
        1:{by:'/by/time'},
        2:{by:'/by/time'},
        3:{by:'/by/time'},
        4:{by:'/by/time'},
        5:{by:'/by/time'}
    },
    searchUrl:'/vodsearch/**----------fypage---/',
    searchable:2,//是否启用全局搜索,
    quickSearch:1,//是否启用快速搜索,
    headers:{//网站的请求头,完整支持所有的,常带ua和cookies
        'User-Agent':'UC_UA',
    },
    class_name:'电影&剧集&综艺&动漫&记录',
    class_url:'1&2&3&4&5',
    play_parse:true,
    detailUrl:'',
    lazy:"",
    limit:6,
    推荐:'.index_vod;.vod_item;.vod_title&&Text;.lazyload&&data-src;.vod_remarks&&Text;a&&href',
    double:true, // 推荐内容是否双层定位
    //一级:'.mdui-m-t-2&&li;.star-up-name&&Text;.lazy&&data-original;.vod_remarks&&Text;a&&href',
     一级:"js:var items=[];pdfh=jsp.pdfh;pdfa=jsp.pdfa;pd=jsp.pd;var html=request(input);var tabs=pdfa(html,'body&&li.vod_item.mdui-col');tabs.forEach(function(it){var  pz=pdfh(it,'span.star-up-name.mdui-p-t-1&&Text');var ps=pdfh(it,'.vod_remarks&&Text');var img=pd(it,'img&&data-original');var timer=pdfh(it,'.&&Text');var url=pd(it,'a&&href');items.push({desc:timer+'  '+ps,title:pz,pic_url:img,url:url})});setResult(items);",
    二级访问前:'log(MY_URL);let jump=request(MY_URL).match(/href="(.*?)"/)[1];log(jump);MY_URL=urljoin2(MY_URL,jump)',
    二级:{
        "title":"h1.doc-title.mdui-text-color-white&&Text",
        "img":".lazyload&&data-original",
        "desc":";;;.inline_item:eq(2)&&Text;.info-block&&Text",
        // "content":".module-info-introduction&&Text",
        "content":".info-block p&&Text",
        "tabs":".mdui-panel&&.mdui-panel-item-open&&.mdui-panel-item-header&&.mdui-panel-item-title",
        "lists":".mdui-panel-item-body a"},
        "list_url":'.mdui-panel-item-body a&&href',
    搜索:'body li.vod_item;*;*;*;*',
}