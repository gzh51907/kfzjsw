<template>
    <div id="app">
        <div style="margin-bottom:2rem">
            <el-row :gutter="20" style="margin:.133333rem 0 .133333rem 0;position:relative">
                <el-col :span="3"><div class="grid-content bg-purple" style="margin-top:.083333rem"><img src="../assets/shouye/logo.png" style="width:.453333rem;height:.32rem"></div></el-col>
                <el-col :span="16"><div class="grid-content bg-purple"><img src="../assets/shouye/serch.png" style="width:.2rem;position: absolute;top:.13rem;left:.9rem"><input type="text" placeholder="商品名称 作者 出版社 ISBN" style="background:#F5F5F5;border:.013333rem solid #F5F5F5;border-radius: .233333rem;width:4.053333rem;height:.453333rem;padding-left:.5rem"></div></el-col>
            </el-row>
            <div class="block">
                <el-carousel trigger="click" height="2.133333rem">
                <el-carousel-item v-for="item in menus" :key="item">
                    <img :src="require(`../assets/shouye/${item}`)" style="width:100%">
                </el-carousel-item>
                </el-carousel>
            </div>
            <div style="width:92%;margin:auto">
                <ul style="display:flex;align-items:center;justify-content: space-around;padding:.23rem 0 .23rem 0;">
                    <li v-for="item in menu" :key="item.img">
                        <img :src="require(`../assets/shouye/${item.img}`)" style="width:.586667rem;display:block;margin-bottom:.13rem">{{item.text}}
                    </li>
                </ul>
                <ul style="display:flex;flex-wrap:wrap;justify-content: space-between;">
                    <li v-for="item in men" :key="item.img" style="display:flex;background:#FAFAFA;width:2.28rem;height:.88rem;padding:.13rem;justify-content: space-between;margin-bottom:.1rem">
                        <div><p style="line-height:.4rem;font-size:.2rem">{{item.text}}</p>
                        <p style="color:#ABABAB">{{item.text1}}</p></div>
                        <img :src="require(`../assets/shouye/${item.img}`)" style="width:.693333rem;height:.693333rem">
                    </li>
                </ul> 
            </div>
           <div style="wigth:100%;height:.1rem;background:#F3F3F3;margin-top:.28rem"></div>
           <div style="width:92%;margin:auto">
               <p style="font-size:.26rem;padding:.2rem 0 .2rem 0"><b>拍卖</b></p>
               <ul style="display:flex;flex-wrap:wrap;justify-content: space-between;">
                   <!-- <li>
                       <div><p style="line-height:.4rem;font-size:.2rem">全部拍卖</p>
                       <p style="line-height:.6rem;font-size:.2rem">日均4万余件拍品</p></div>
                       <img src="../assets/shouye/lq1.png"  style="width:2.013333rem;height:.92rem">
                   </li> -->
                    <li v-for="item in me" :key="item.img" style="display:flex;background:#FAFAFA;width:2.28rem;height:.88rem;padding:.13rem;justify-content: space-between;margin-bottom:.1rem">
                        <div><p style="line-height:.4rem;font-size:.2rem">{{item.text}}</p>
                        <p style="color:#ABABAB">{{item.text1}}</p></div>
                        <img :src="require(`../assets/shouye/${item.img}`)" style="width:.693333rem;height:.693333rem">
                    </li>
                </ul> 
           </div>
           <div style="wigth:100%;height:.1rem;background:#F3F3F3;margin-top:.28rem"></div>
           <div>
                 <p style="font-size:.26rem;padding:.2rem .18rem .2rem .18rem"><b>好书推荐</b><span style="float: right;font-size:.18rem;line-height:.34rem">更多 ></span></p>
               <ul style="display:flex;overflow:auto;">
                   <li v-for="item in shuji" :key="item.img" style="margin:0 .13rem 0 .13rem">
                       <img :src="require(`../assets/shouye/${item.img}`)" style="width:1.333333rem;height:1.68rem;">
                       <div style="line-height:.3rem">
                        <p style="">{{item.text}}</p>
                       <p style="font-size:.13rem;color:#B2B2B2">{{item.text1}}</p>
                       <p style="font-size:.2rem;color:#BC5958">{{item.text2}} <span style="font-size:.13rem;color:#ccc">{{item.text3}}</span>
                       </p>
                       </div>
                   </li>
               </ul>
           </div>
           <div style="wigth:100%;height:.1rem;background:#F3F3F3;margin-top:.28rem"></div>
           <div>
                 <p style="font-size:.26rem;padding:.2rem .18rem .2rem .18rem"><b>书单推荐</b><span style="float: right;font-size:.18rem;line-height:.34rem">更多 ></span></p>
               <ul style="display:flex;overflow:auto;">
                   <li v-for="item in tuijian" :key="item.img" style="margin:0 .13rem 0 .13rem;border:.013333rem solid #ccc">
                       <img :src="require(`../assets/shouye/${item.img}`)" style="width:4.466667rem;height:2.068rem;">
                       <div style="line-height:.3rem">
                        <p style="">{{item.text}}</p>
                       </div>
                   </li>
               </ul>
           </div>
           <div style="wigth:100%;height:.1rem;background:#F3F3F3;margin-top:.28rem"></div>
           <div>
                 <p style="font-size:.26rem;padding:.2rem .18rem .2rem .18rem"><b>新书广场</b><span style="float: right;font-size:.18rem;line-height:.34rem">更多 ></span></p>
               <ul style="">
                   <li v-for="item in xinshu" :key="item.img" style="margin:0 .13rem 0 .13rem;display:flex;position:relative">
                        <p style="background:#B1403E;color:#fff;width:.8rem;height:.4rem;position: absolute;top:1.2rem;border-radius:0 .13rem .13rem 0;opacity:0.9"><span style="display:block;line-height:.4rem;font-size:.2rem;padding-left:.13rem">{{item.text6}}</span></p>
                      <div style="width:1.333333rem;height:1.8968rem;line-height:2.64rem;"> 
                          <img :src="require(`../assets/shouye/${item.img}`)" style="width:1.333333rem;height:.8968rem;diaplay:block"></div>
                       <div style="line-height:.3rem;padding:0 .13rem 0 .13rem;">
                        <p style="font-size:.2rem"><b>{{item.text}}</b></p>
                        <p style="margin-top: .166667rem;">{{item.text1}}</p>
                        <p style="margin-top: .206667rem;">
                            <span class="span1">{{item.text2}}</span>
                            <span class="span1">{{item.text3}}</span>
                            <span class="span1">{{item.text4}}</span>
                            <span class="span1">{{item.text5}}</span>
                        </p>
                       </div>
                   </li>
               </ul>
           </div>
           <div style="wigth:100%;height:.1rem;background:#F3F3F3;margin-top:.28rem"></div>
           <div>
                 <p style="font-size:.26rem;padding:.2rem .18rem .2rem .18rem"><b>旧书-国学经典</b><span style="float: right;font-size:.18rem;line-height:.34rem">更多 ></span></p>
               <ul style="">
                   <li v-for="item in jiushu" :key="item.img" style="margin:0 .13rem 0 .13rem;display:flex;position:relative">
                        <p style="background:#B1403E;color:#fff;width:.8rem;height:.4rem;position: absolute;top:1.2rem;border-radius:0 .13rem .13rem 0;opacity:0.9"><span style="display:block;line-height:.4rem;font-size:.2rem;padding-left:.13rem">{{item.text6}}</span></p>
                      <div style="width:1.333333rem;height:1.8968rem;line-height:3.04rem;"> 
                          <img :src="require(`../assets/shouye/${item.img}`)" style="width:1.333333rem;height:1.333333rem ;diaplay:block"></div>
                       <div style="line-height:.3rem;padding:0 .13rem 0 .13rem;">
                        <p style="font-size:.2rem"><b>{{item.text}}</b></p>
                        <p style="margin-top: .106667rem;">{{item.text1}}</p>
                        <p style="margin-top: .106667rem;">
                            <span class="span2">{{item.text2}}</span>
                        </p>
                       </div>
                   </li>
               </ul>
           </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            menus:[
                "lb1.jpg",
                "lb2.jpg",
                "lb3.jpg",
                "lb4.jpg"
            ],
            menu:[{
                img:"ll1.png",
                text:"线装古籍"
            },{
                img:"ll2.png",
                text:"民国旧书"
            },{
                img:"ll3.png",
                text:"名人墨迹"
            },{
                img:"ll4.png",
                text:"古玩杂项"
            },{
                img:"ll5.png",
                text:"全部分类"
            },
            ],
            men:[{
                img:"li1.png",
                text:"今日发现",
                text1:"发现新上好书"
            },{
                img:"li2.png",
               text:"书店排行榜",
                text1:"发现口碑好店"
            },{
                img:"li3.png",
              text:"新书频道",
                text1:"发现孔网新书"
            },{
                img:"li4.png",
                text:"藏书单",
                text1:"为你推荐好书"
            }
            ],
            me:[{
                img:"lq2.png",
               text:"艺术品专场",
                text1:"名人字画墨迹等"
            },{
                img:"lq3.png",
              text:"低价拍卖",
                text1:"1元起拍捡漏"
            },{
                img:"lq4.png",
                text:"珍本拍卖",
                text1:"古籍善本"
            },{
                img:"lq5.png",
               text:"今日热点",
                text1:"每日必看"
            },{
                img:"lq6.png",
              text:"大众拍卖",
                text1:"大家都在拍"
            },{
                img:"lq7.png",
                text:"三天热点",
                text1:"热拍推荐"
            }
            ],
            shuji:[{
                img:"s1.jpg",
               text:"汗青堂丛书028·",
                text1:"孔俐颖 后浪  译者；",
                text2:"¥49 ",
                text3:"起"
            },{
               img:"s2.jpg",
              text:"舆论",
                text1:"[美]李普曼  著",
                text2:"¥32 ",
                text3:"起"
            },{
               img:"s3.jpg",
                text:"恶魔的饱食",
                text1:"森村诚一、骆为龙、",
                text2:"¥5 ",
                text3:"起"
            },{
               img:"s4.jpg",
               text:"邬达克",
                text1:"[意]卢卡·彭切里尼",
                text2:"¥34 ",
                text3:"起"
            },{
                img:"s5.jpg",
              text:"旧日的静定",
                text1:"张怡微",
                text2:"¥35 ",
                text3:"起"
            },{
               img:"s6.jpg",
                text:"她们自己的文学",
                text1:"[美]伊莱恩·肖瓦尔特",
                text2:"¥42 "
            },{
               img:"s7.jpg",
               text:"上海外滩建筑地图",
                text1:"乔争月、张雪飞  著",
                text2:"¥25 ",
                text3:"起"
            },{
                img:"s8.jpg",
              text:"十九世纪欧洲艺",
                text1:"[荷]曲培醇",
                text2:"¥140 ",
                text3:"起"
            },{
               img:"s9.jpg",
                text:"魔术师时代：哲",
                text1:"[德]沃尔夫拉姆·艾",
                text2:"¥40 ",
                text3:"起"
            },{
               img:"s10.jpg",
                text:"亲爱的陌生人",
                text1:"卡米耶·茹尔迪  著；",
                text2:"¥94 ",
                text3:"起"
            }
            ],
            tuijian:[{
                img:"lb4.jpg",
               text:"只有湿气和密林，未有名字的/雷鸣，及星空下的邦巴斯草原。"
            },{
               img:"t1.jpg",
              text:"在伟大的小说中，窥探人性和时代"
            },{
               img:"t2.jpg",
                text:"实处就法，虚处藏神"
            }],
            xinshu:[{
                img:"x1.jpg",
               text:"天地盖特藏毛边本《靳以日记书",
               text1:"钤靳以印章（靳以先生遗物，文物级，首次公开）  章洁思先生签名、盖章）",
               text2:"限量",
               text3:"签名",
               text4:"铃印",
               text5:"题词",
                text6:"¥418"
            },{
               img:"x2.jpg",
              text:"韦力签名钤印《觅经记》毛边布面",
              text1:"自孔子至晚清学人，生动复现近60位经学大师广研群经、论辩今古 。",
               text2:"签名",
               text3:"铃印",
               text4:"毛边本",
               text5:"函套",
                text6:"¥360"
            },{
               img:"x3.jpg",
                text:"钤印藏书票陈从周《百年从周》礼",
                text1:"中国园林之父，诗、书、画、曲无所不能的通才，有深厚中国传统文化的文人型学者",
               text2:"铃印",
               text3:"函套",
               text4:"赠品",
               text5:"特装",
                text6:"¥318"
            }],
            jiushu:[{
                img:"j4.jpg",
               text:"山谷詩集注（全二冊）",
               text1:"[宋]黄庭坚  著；[宋]任渊 、[宋]史容、[宋]史季温  注 / 上海古籍出版社 / 2003-12 / 精装",
               text2:"黄庭坚，字鲁直，自号山谷道人，晚号涪翁，宋洪州分宁（今江西修水）人，生于宋仁宗庆历五年（一○四五），",
                text6:"¥55起"
            },{
               img:"j2.jpg",
              text:"民国大师经典作品集·一位执拗的君子，孤独的改革家：王安石传",
              text1:"梁启超  著 / 商务印书馆 / 2015-01 / 精装",
               text2:"《民国大师经典作品集·一位执拗的》",
                text6:"¥10起"
            },{
               img:"j3.jpg",
                text:"欧阳修词校注",
                text1:"上海古籍出版社  编 / 上海古籍出版社 / 2015-07 / 平装",
               text2:"《欧阳修词校注》在校勘、编年的基础上，对欧词之人名、地名、本事、典故、名物及词句化用等做了深入而全面",
                text6:"¥38起起"
            }]
        }
    }
}
</script>
<style scoped>
*{margin: 0;padding: 0;}
.span1{padding:.06333rem;height: .293333rem;border: .013333rem solid #997F55;margin-right: .183333rem;color:#997F55;border-radius:.10rem }
</style>