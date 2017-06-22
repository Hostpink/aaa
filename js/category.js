$(function () {
    $("#category_title ").on("click", ".category_ul>li>a", function () {
        // alert(1);
        $(this).parent().find("ul").toggle();
        $(this).parent().siblings().find("ul").slideUp();
        //每次点击的时候，拿到我们的自定义属性
        // console.log($(this).attr("data_title_id"));
        var titleid = $(this).attr("data_title_id");
        // 通过缓冲保存当前点击的a标签
        var $that = $(this);
        getCategoryMenu(titleid,$that);
    })

    getCategoryTitle();
})



function getCategoryTitle() {
    $.ajax({
        url: url + "api/getcategorytitle",
        success: function (info) {
            //console.log(info);
            var html = template("categoryInfoTpl", info)
            $(".category_ul").html(html);
        }
    })
}

function getCategoryMenu(titleid,$that) {
    $.ajax({
        url: url + "api/getcategory?titleid="+titleid,
        success:function(data){
            var html = template("categoryMenuTpl",data);
            var $ul = $that.siblings("ul");
            $ul.html(html);
            // 要做的一件事：解决一个bug，最后一行的线去掉
            // 1.1 首先拿到ul下边的li
            // 1.2 每行显示3个li，思路是用ul下的所有li标签%3
            // 1.3 每行显示三个也应该
            var lastlis = $ul.children().length % 3||3;
            console.log(lastlis);
            $ul.children("li:nth-last-child(-n+"+lastlis+")").css("border-bottom","none");
    
        }

    })
}