muban.mxpro.二级.desc = '.module-info-item:eq(4)&&Text;;;.module-info-item-content:eq(1)&&Text;.module-info-item-content:eq(0)&&Text';
muban.mxpro.二级.tabs = '#y-playList&&.tab-item';
var rule = {
    title:'爱看影院',
        模板:'mxpro',
    host:'https://www.2wyy.com/',
   url:'/vodshow/fyclass--------fypage---.html',
    filterable:1,//是否启用分类筛选,
   filter_url:'{{fl.cateId}}--------fypage----',
    filter:{
       "1":[
 {"key":"cateId","name":"类型","value":[
            {"n":"全部","v":"1"},
            {"n":"动作片","v":"25"},
            {"n":"喜剧片","v":"26"},
            {"n":"爱情片","v":"27"},
            {"n":"科幻片","v":"28"},
            {"n":"恐怖片","v":"30"},
            {"n":"剧情片","v":"33"},
            {"n":"战争片","v":"35"},
            {"n":"记录片","v":"24"},
            {"n":"悬疑片","v":"36"},
            {"n":"犯罪片","v":"38"},
            {"n":"冒险片","v":"40"},
            {"n":"动画片","v":"41"},
            {"n":"惊悚片","v":"43"},
            {"n":"奇幻片","v":"44"},
            {"n":"理伦片","v":"46"}]},
  {"key":"area","name":"地区","value":[
  {"n":"全部","v":""},
  {"n":"大陆","v":"大陆"},
  {"n":"香港","v":"香港"},
  {"n":"台湾","v":"台湾"},
  {"n":"美国","v":"美国"},
  {"n":"法国","v":"法国"},
  {"n":"英国","v":"英国"},
  {"n":"日本","v":"日本"},
  {"n":"韩国","v":"韩国"},
  {"n":"德国","v":"德国"},
  {"n":"泰国","v":"泰国"},
  {"n":"印度","v":"印度"},
  {"n":"意大利","v":"意大利"},
  {"n":"西班牙","v":"西班牙"},
  {"n":"加拿大","v":"加拿大"},
  {"n":"其他","v":"其他"}]}],

"2":[
 {"key":"cateId","name":"类型","value":[
            {"n":"全部","v":"2"},
            {"n":"国产剧","v":"42"},
            {"n":"欧美剧","v":"45"},
            {"n":"日韩剧","v":"47"},
            {"n":"日韩剧","v":"49"},
            {"n":"泰剧","v":"51"},
            {"n":"海外剧","v":"52"}]}],
  
 // {"key":"area","name":"地区","value":[
 // {"n":"全部","v":""},
 // {"n":"内地","v":"内地"},
//  {"n":"韩国","v":"韩国"},
 // {"n":"香港","v":"香港"},
 // {"n":"台湾","v":"台湾"},
//  {"n":"日本","v":"日本"},
 // {"n":"美国","v":"美国"},
 // {"n":"泰国","v":"泰国"},
 // {"n":"英国","v":"英国"},
 // {"n":"新加坡","v":"新加坡"},
  //{"n":"其他","v":"其他"}]}],

"3":[
    {"key":"cateId","name":"类型","value":[
            {"n":"全部","v":"3"},
            {"n":"大陆综艺","v":"20"},
            {"n":"日韩综艺","v":"21"},
            {"n":"港台综艺","v":"22"},
            {"n":"欧美综艺","v":"23"}]},
 
  {"key":"area","name":"地区","value":[
  {"n":"全部","v":""},
  {"n":"内地","v":"内地"},
  {"n":"港台","v":"港台"},
  {"n":"日韩","v":"日韩"},
  {"n":"欧美","v":"欧美"}]}],

  "4":[
  {"key":"cateId","name":"类型","value":[
            {"n":"全部","v":"4"},
            {"n":"国产动漫","v":"29"},
            {"n":"日韩动漫","v":"32"},
            {"n":"欧美动漫","v":"34"}]},
 
  {"key":"area","name":"地区","value":[
  {"n":"全部","v":""},
  {"n":"国产","v":"国产"},
  {"n":"日本","v":"日本"},
  {"n":"欧美","v":"欧美"},
  {"n":"其他","v":"其他"}]}]
 
    },
    class_name:'电影&电视剧&综艺&动漫',
    class_url:'1&2&3&4',
   //class_parse: '.navbar-items&&li:gt(1):lt(6);a&&title;a&&href;/(\\d+).html',

}