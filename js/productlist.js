$(function(){
    
    var categoryId = GetQueryString("categoryid")
    var category = GetQueryString("category")
    console.log(categoryId);
    console.log(category);


})


function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}