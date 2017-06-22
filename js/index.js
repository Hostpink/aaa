$(function(){
    $("#menu").on("click",".row>div:nth-child(8)",function(){
        $("#menu>.row>div:nth-last-child(-n+4)").toggle();
    })
    // 调用首页menu部分
    getIndexMenu();

    //商品推荐部分
    getIndexRecommend();





})
//首页menu部分
function getIndexMenu(){
    $.ajax({
        url:url+"api/getindexmenu",
        success:function(data){
           //console.log(data);
            var html = template("indexMenuTpl",data);
            $("#menu .row").html(html);
        }
    })
}



//首页折扣部分

function getIndexRecommend(){
    $.ajax({
        url:url+"api/getmoneyctrl",
        success:function(data){
            var html = template("indexRecommendTpl",data);
            $("#recommend .recommend_product").html(html);
        }
    })
}