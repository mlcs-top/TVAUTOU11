var rule={     
    title:'看比赛',
    host:'https://sports.qq.com/kbsweb/',
    url:'/vodshow/fyclass--------fypage---.html',
    searchUrl:'/vodsearch/**----------fypage---.html',
    class_name:'NBA&CBA&FIBA&女篮世界杯&男篮世界杯&WNBA&NCAA&篮球其他&欧冠&德甲&英超&#西甲&意甲&法甲&中超',
    class_url:'#nba&#cba&#160000&#160004&#160001&#100020&#ncaa&#100340&#ucl&#bundesliga&#laliga&#seriea&#ll&#csl', 
    //class_url:".a&&href", 
    推荐:'.module-poster-item;a&&title;.lazyload&&data-original;.module-item-note&&Text;a&&href',
    一级:'.module-poster-item;a&&title;.lazyload&&data-original;.module-item-note&&Text;a&&href',
    //二级:{"title":"h1&&Text;","img":".lazyload&&data-original","desc":";;.module-info-item:eq(4) p&&Text;.module-info-item:eq(3) div&&Text;.module-info-item:eq(1) a&&Text","content":".show-desc&&Text","tabs":'#y-playList&&span',"lists":".module-play-list:eq(#id) a"},     
    二级:{"title":"h1&&Text;.module-info-tag-link:eq(2)&&Text","img":".lazyload&&data-original","desc":".module-info-content&&.module-info-item:eq(-2)&&Text;.module-info-content&&.module-info-item:eq(-2)&&Text;.module-info-content&&.module-info-item:eq(-2)&&Text;.module-info-content&&.module-info-item:eq(2)&&.module-info-item-content&&Text;.module-info-content&&.module-info-item:eq(1)&&.module-info-item-content&&Text","content":".module-info-introduction-content&&Text","tabs":".module-tab-items-box:eq(0)&&.module-tab-item","lists":".module-list:eq(#id)&&.module-play-list-content a"}, 
    搜索:'.module-card-item;.module-card-item-title&&Text;.lazyload&&data-original;.module-item-note&&Text;a&&href', 
}