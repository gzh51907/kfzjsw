// 获取列表页面商品数据
var arrT = [{
    img1_src: 1,
    img2_bg_val: 1,
    img3_bg_background: 1,
    img4_bg_background: 1,
    title: 1,
    prom: 1,

    rank_bg: 1,
    cmt_num: 1,
    del_price: 1,
    now_price: 1,
    action1: 1

}, {}, {}];

var arrT = [];
$(".catepro ").find(".prolist >li").each(function (index, item) {

    let obj = {};
    obj.img1_src = $(item).find(".img img").attr("src");

    obj.img2_bg_val = $(item).find(".img em").html();
    obj.img3_bg_background = $(item).find(".img .ie6png").attr("title");

    obj.img4_bg_background = $($(item).find(".img .ie6png")[2]).attr("title");


    obj.title = $(item).find(".title a").html();

    obj.prom = $(item).find(".prom").html();

    obj.rank_bg = $(item).find(".rank a").attr("class");

    obj.cmt_num = $(item).find(".rank a").html();

    obj.del_price = $(item).find(".priceline del").html();
    obj.now_price = $(item).find(".price").html();
    obj.action1 = $($(item).find(".action  a")[0]).html();
    arrT.push(obj);
})
console.log(JSON.stringify(arrT));


$(".book_item").each(function name(index, item) {
    let obj = {};
    obj.bookName = $(item).find(".book-box-con-name").text();
    console.log(obj.bookName);

})