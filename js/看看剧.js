var rule={
    title:'看看剧',
    host:'https://www.kankanju.cc/',
    url:'/vodshow/id/fyfilter.html',
    headers:{'User-Agent':'UC_UA',},
    class_name:'电影&电视剧&综艺&动漫&纪录片',
    class_url:'dianying&dianshiju&zongyi&dongman&jilupian',
    play_parse:true,
    detailUrl:'',
    lazy:"",
    limit:6,
    推荐:'',
    double:true, // 推荐内容是否双层定位
    一级:"js:var items=[];pdfh=jsp.pdfh;pdfa=jsp.pdfa;pd=jsp.pd;var html=request(input);var tabs=pdfa(html,'body&&.stui-vodlist__box');tabs.forEach(function(it){var  pz=pdfh(it,'.stui-vodlist__detail h4&&Text');var ps=pdfh(it,'.pic-text b&&Text');var img=pd(it,'a&&data-original');var timer=pdfh(it,'.&&Text');var url=pd(it,'a&&href');items.push({desc:timer+'  '+ps,title:pz,pic_url:img,url:url})});setResult(items);",
    二级:{
        "title":".stui-content__detail h1&&Text;.stui-content__detail p:gt(0)&&Text",
        "img":".lazyload&&data-original",
        "desc":";;;.module-info-item-content:eq(2)&&Text;.module-info-item-content:eq(0)&&Text",
        "content":".module-info-introduction-content p&&Text",
        "tabs":"h3.title",
        "lists":"ul.stui-content__playlist sort-list maxheight clearfix:eq(#id)&&a"},

   搜索:'',
}