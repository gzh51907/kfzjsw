<template>
  <div style="max-width: 5.573333rem;margin:auto">
    <div class="header">
      <h2>书店区</h2>
    </div>
    <div>
      <div class="block">
        <!-- lunbotu -->
        <el-carousel height="2.2rem">
          <el-carousel-item v-for="item in lunbotuimg" :key="item">
            <img :src="require(`../assets/bookstore/${item}`)" alt style="width:100%;height:2.2rem" />
          </el-carousel-item>
        </el-carousel>
        <!-- fenlei -->
        <div class="innernav">
          <div v-for="item in innernav" :key="item.text">
            <img :src="require(`../assets/bookstore/${item.icon}`)" alt />
            {{item.text}}
          </div>
        </div>
        <!-- 名家 -->
        <div style="margin-bottom:.133333rem">
          <div class="line"></div>
          <div class="mjprefecture">
            <h4 style="  font-weight: 600;">名家专区</h4>
          </div>
        </div>
        <!-- module-three -->
        <div style="display:flex;justify-content:space-around;padding: 0 .2rem;flex-wrap: wrap;">
          <div v-for="item in module" class="linnebox" :key="item.teler">
            <p class="telercla">{{item.teler}}</p>
            <p class="zuozcla">{{item.zuoz}}</p>
            <img :src="item.imgsrc1" alt style="width:1.8rem; border-radius: .066667rem;" />
          </div>
          <div>
            <div v-for="item in moduleone" class="linnebox" :key="item.teler">
              <div style="float:left;">
                <p class="telercla">{{item.teler}}</p>
                <p class="zuozcla">{{item.zuoz}}</p>
              </div>
              <img :src="item.imgsrc1" alt style="width: .533333rem;float:right;" />
            </div>
          </div>
          <div style="display:flex;justify-content:space-around;flex-wrap: wrap;">
            <div v-for="item in moduletow" class="linnebox" :key="item.title">
              <div style="float:left;">
                <p class="telercla">{{item.title}}</p>
                <p class="zuozcla">{{item.action}}</p>
              </div>
              <img :src="item.imgsrc" alt style="width: .533333rem;float:right;" />
            </div>
          </div>
        </div>
        <div style="width:100%;height: .293333rem;"></div>
        <!-- 特色 -->
        <div style="margin-bottom:.133333rem">
          <div class="line"></div>
          <div class="mjprefecture">
            <h4 style="font-weight: 600;">特色推荐</h4>
          </div>
        </div>
        <!-- 特色列表 -->
        <div style="margin:0 .2rem;color:#999" class="teselis">
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane
              :label="item.tele"
              :name="item.tele"
              v-for="item in testlisnav"
              :key="item.tele"
            >
              <div>
                <ul style=" display: flex;justify-content:space-around;flex-wrap:wrap">
                  <li v-for="ele in item.divgood" style="width:1.4rem" :key="ele.title">
                    <img :src="ele.imgsrc" alt style="width:1.4rem;height:1.4rem" />
                    <p
                      style="height:.52rem;overflow: hidden;font-size: .2rem;color: #262626;margin-top:.04rem"
                    >{{ele.title}}</p>
                    <div style="margin:.05rem 0;font-size:.22rem;color:#9e100e">
                      <span>￥</span>
                      <span>{{ele.action}}</span>
                    </div>
                  </li>
                </ul>
              </div>
            </el-tab-pane>
          </el-tabs>
          <!--  -->
          <div style="margin-top:20px;font-size:.213333rem;text-align: center;color:#365899">
            更多
            <span style="font-family:'宋体'">></span>
          </div>
          <div style="width:100%;height: .293333rem;"></div>
        </div>
        <!-- 书单推荐 -->
        <div>
          <div data-v-21efc5e6 class="line"></div>
          <div data-v-5a90ec03>
            <div data-v-21efc5e6 style="margin-bottom: 0.133333rem;">
              <div data-v-21efc5e6 class="mjprefecture">
                <h4 data-v-21efc5e6 style="font-weight: 600;">书单推荐</h4>
              </div>
            </div>
            <ul
              data-v-5a90ec03
              style="display: flex; overflow: auto;margin:0 0.2rem"
              class="sdanullis"
            >
              <li
                style="margin: 0px 0.13rem 0 0; border: 0.013333rem solid rgb(204, 204, 204);"
                v-for="item in shudan" :key="item.title"
              >
                <img data-v-5a90ec03 :src="item.imgsrc" style class="shudanimg" />
                <div data-v-5a90ec03 style="min-width: 140px;">
                  <p class="bookp" style>{{item.title}}</p>
                </div>
              </li>
            </ul>
            <div data-v-21efc5e6 style="width: 100%; height: 0.293333rem;"></div>
          </div>
          <div data-v-21efc5e6 class="line"></div>
        </div>
        <!-- 书店推荐 -->
        <div style="margin-bottom:150px">
          <div data-v-21efc5e6 style="margin-bottom: 0.133333rem;">
            <div data-v-21efc5e6 class="mjprefecture">
              <h4 data-v-21efc5e6 style="font-weight: 600;">书店推荐</h4>
            </div>
          </div>
          <div style="margin:0 .2rem;color:#999" class="teselis">
            <el-tabs v-model="bookliName" @tab-click="booksnaClick">
              <el-tab-pane
                :label="item.tele"
                :name="item.tele"
                v-for="item in booklistnav"
                :key="item.tele"
              >
                <div>
                  <ul style>
                    <li v-for="ele in item.divgood" :key="ele.title" style="background:#fafafa;padding:.266667rem .133333rem .133333rem .133333rem;margin-bottom:.133333rem;">
                      <div style="display: flex;justify-content:space-between;">
                          <div style="display: flex;">
                            <img :src="ele.imgsrc" alt style="width:.6rem;height:.6rem;margin-right:.133333rem" />
                            <div>
                              <span style="font-size:.213333rem;color:#000">{{ele.title}}</span><span :class="ele.classicon" style="display:inline-block;width:.96667rem;height: 0.16rem;"></span>
                              <p style="margin:.05rem 0;">{{ele.pinglvtext}}</p>
                          </div>
                        </div>
                        <div>
                          <button style="color:#9e100e;background: #fff;border: 1px solid #e5e5e5;width:.8rem;height:.333333rem;border-radius: .08rem">进店</button>
                        </div>
                     </div>
                     <div style="margin:.13rem 0;">
                       <ul style="display: flex;justify-content:space-between;">
                         <li v-for="item in ele.storyshoplist" :key="item.title">
                           <img :src="item.imgsrc" alt style="width:1.37rem;height:1.37rem;margin-right:.133333rem;border-radius: .066667rem" />
                          <p
                        style="width:1.37rem;overflow: hidden;white-space:nowrap;overflow: hidden;font-size: .18rem;color: #262626;margin-top:.04rem"
                      >{{item.title}}</p> 
                  <ul style=" display: flex;justify-content:space-around;flex-wrap:wrap">
                    <li v-for="ele in item.divgood" style="width:1.4rem" :key="ele.title">
                      <img :src="ele.imgsrc" alt style="width:1.4rem;height:1.4rem" />
                      <p
                        style="height:.52rem;overflow: hidden;font-size: .2rem;color: #262626;margin-top:.04rem"
                      >{{ele.title}}</p>
                      <div style="margin:.05rem 0;font-size:.22rem;color:#9e100e">
                        <span>￥</span>
                        <span>{{item.price}}</span>
                      </div>
                      </li>
                       </ul>
                     </div>
                     
                    </li>
                  </ul>
                </div>
              </el-tab-pane>
            </el-tabs>
            <div style="width:100%;height: .293333rem;"></div>
          </div>
         
          <div data-v-21efc5e6="" class="line"></div>
        </div>
        <!--  -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeName: "线装古籍",
      bookliName: "线装古籍",
      lunbotuimg: [
        "96d26344d5a955a8c1c8ce119450dd01.jpg",
        "280f2d1851087b91eea47c4580e62d9e.jpg"
      ],
      innernav: [
        {
          icon: "5ae0adbcbd23c27dc560947b773b6cda.png",
          text: "分类"
        },
        {
          icon: "a0f90a1df5f74df0e7008d631282e1f0.png",
          text: "每日新书"
        },
        {
          icon: "1b2b0411c923ce0a0d18a18b2b359108.png",
          text: "书店排行"
        },
        {
          icon: "d9af0dde30f2316fd055f0df4e86bb76.png",
          text: "书摊排行"
        },
        {
          icon: "92e9799a20a6baf8645b6f7a5576ff44.png",
          text: "新书广场"
        }
      ],
      module: [
        {
          teler: "博尔赫斯",
          zuoz: "作家们的作家",
          imgsrc1: require("../assets/bookstore/4dd662d6b6f90af15169677b5e696e3d.jpg")
        }
      ],
      moduleone: [
        {
          teler: "傅雷",
          zuoz: "孤独的赤子",
          imgsrc1: require("../assets/bookstore/7fa1558502fd8acb09928ab973e7f888.jpg")
        },
        {
          teler: "丰子恺",
          zuoz: "一钩新月天如水",
          imgsrc1: require("../assets/bookstore/95a7cad9e5591bddef5f58316907eeb8.jpg")
        }
      ],
      moduletow: [
        {
          imgsrc: require("../assets/bookstore/9fcb4f787dba29c2a8d19d451c6f6377.jpg"),
          title: "黑塞",
          action: "德国浪漫派骑士"
        },
        {
          imgsrc: require("../assets/bookstore/e16e9b0682f8e6e96c52a02386e37847.jpg"),
          title: "荣格",
          action: "分析心理学之父"
        },
        {
          imgsrc: require("../assets/bookstore/984ac5ddf47077b676705c70f494c357.jpg"),
          title: "福克纳",
          action: "喧哗与骚动"
        },
        {
          imgsrc: require("../assets/bookstore/4c40fc98bbdf86a54c41cea9a9a833b5.jpg"),
          title: "海因莱因",
          action: "美国现代科幻小说之父"
        },
        {
          imgsrc: require("../assets/bookstore/55ca4a16275d20986e02395a62bf7ad8.jpg"),
          title: "钱穆",
          action: "史学四大家"
        },
        {
          imgsrc: require("../assets/bookstore/ac4acb14e529d1355b3fa429b129b4bb.jpg"),
          title: "古龙",
          action: "谁来与我共醉"
        },
        {
          imgsrc: require("../assets/bookstore/96c0f24dcba7f9096fc776011101d930.jpg"),
          title: "王小波",
          action: "浪漫骑士，黑色幽默"
        },
        {
          imgsrc: require("../assets/bookstore/fab4f1ccfd6d0cbada807824500689a3.jpg"),
          title: "卡夫卡",
          action: "现代人的困境"
        },
        {
          imgsrc: require("../assets/bookstore/4a7cb23086c8e628410c59ac7fcb5d03.jpg"),
          title: "纳博科夫",
          action: "不止洛丽塔"
        },
        {
          imgsrc: require("../assets/bookstore/c52f830973e60f2b1eb563911d88b62a.jpg"),
          title: "莎士比亚",
          action: "生存还是毁灭"
        },
        {
          imgsrc: require("../assets/bookstore/167c6e401fc15ba63d790d33f2b2f208.jpg"),
          title: "汪曾祺",
          action: "抒情人道主义者"
        },
        {
          imgsrc: require("../assets/bookstore/9c688abce1def4e25660349f25a6a188.jpg"),
          title: "芥川龙之介",
          action: "大正鬼才文豪"
        },
        {
          imgsrc: require("../assets/bookstore/f8975e033cd1c97119311b1bbd77a584.jpg"),
          title: "冯至",
          action: "生命在沉思"
        },
        {
          imgsrc: require("../assets/bookstore/9bd7cd60d74b3deda91dd0a9cd2a941a.jpg"),
          title: "穆旦",
          action: "用言语照明世界"
        },
        {
          imgsrc: require("../assets/bookstore/2c45aa27422001cb3b97c74531bd924b.jpg"),
          title: "伍尔夫",
          action: "女性主义先锋"
        },
        {
          imgsrc: require("../assets/bookstore/69963f454f325d7995ff542dba04b573.jpg"),
          title: "老舍",
          action: "人民艺术家"
        },
        {
          imgsrc: require("../assets/bookstore/017054d1e9cdba5a29e99b548dc68571.jpg"),
          title: "顾随",
          action: "古典诗词感发"
        },
        {
          imgsrc: require("../assets/bookstore/68fb0841623166d35ee198cd06173140.jpg"),
          title: "康德",
          action: "古典哲学创始人"
        }
      ],
      testlisnav: [
        {
          tele: "线装古籍",
          divgood: [
            {
              imgsrc:
                "https://www.kfzimg.com/S01/20190825/1243853/V2_D5vVFqYpG5_n.jpg",
              title: "明代万历手写佛经《古佛天真收圆结果龙华忏》8本一套",
              action: "24000"
            },
            {
              imgsrc:
                "https://www.kfzimg.com/G07/M00/DB/CF/q4YBAFy4ckaAAQ1rAAJ8ttCxmpI592_n.jpg",
              title: "《增广经验良方》",
              action: "180"
            },
            {
              imgsrc:
                "https://www.kfzimg.com/sw/kfzimg/177/1e64b7a212dd15d4_n.jpg",
              title: "清代长沙药解手抄本",
              action: "600"
            },
            {
              imgsrc:
                "https://www.kfzimg.com/sw/kfzimg/328/403fd83ea82e02dc_n.jpg",
              title: "报海忆旧（冯英子 签赠）",
              action: "50"
            },
            {
              imgsrc:
                "https://www.kfzimg.com/sw/kfzimg/312/3c2ccf0e336b9466_n.jpg",
              title:
                "苏母沈太夫人讣告——祖籍福建的上海望族苏氏，创办上海民立中学",
              action: "1500"
            },
            {
              imgsrc:
                "https://www.kfzimg.com/G06/M00/CC/86/p4YBAFooDhKABwazAADicMEUXUY695_n.jpg",
              title: "爰居阁诗.爰居阁诗续【蓝印一函四册.一函一册】",
              action: "980"
            }
          ]
        },
        {
          tele: "国学古籍",
          divgood: [
            {
              imgsrc:
                "https://www.kfzimg.com/G06/M00/64/7E/p4YBAFvC9DGAPGcgAAGspjzLO40761_n.jpg",
              title:
                "后山居士文集 线装本全六册  上海古籍出版社1982年一版一印 影印宋本 私藏好品",
              action: "2800"
            },
            {
              imgsrc:
                "https://www.kfzimg.com/G07/M00/52/23/q4YBAFz48f6AEVHnAAHZ1ZrAk2g414_n.jpg",
              title:
                "中国历史地图集(1----8册) 全套（布面精装.）89年2印  带外盒.近95品",
              action: "700"
            },
            {
              imgsrc:
                "https://www.kfzimg.com/G07/M00/FD/1B/q4YBAFzraxGAUcbkAALB9GZJLvA228_n.jpg",
              title:
                "三国志  精装 全五册，漆面精装，1982年7月2版3印，相当于新版一印，仅1700册",
              action: "850"
            },
            {
              imgsrc:
                "https://www.kfzimg.com/G07/M00/A0/0E/q4YBAF0DUfuAK1KeAABmZmTaihE743_n.jpg",
              title: "史记  全十册",
              action: "500"
            },
            {
              imgsrc:
                "https://www.kfzimg.com/G07/M00/0B/B2/q4YBAF0FiX-AB-RUAADRslWVUYQ323_n.jpg",
              title:
                "北大版十三经注疏整理本11种：春秋左传正义、论语注疏、孟子注疏、礼记正义、仪礼注疏、周礼注疏、春秋公羊传注疏、春秋穀梁传注疏、尚书正义、孝经注疏、尔雅注疏（缺毛诗正义、周易正义）",
              action: "2400"
            },
            {
              imgsrc:
                "https://www.kfzimg.com/G07/M00/CC/F0/q4YBAFz_sXuAYrLgAAJwAgWoQvE815_n.jpg",
              title:
                "周易注疏 （全一函六册。1985年据北京图书馆藏南宋刻本原大影印",
              action: "3800"
            }
          ]
        },
        {
          tele: "民国旧书",
          divgood: [
            {
              imgsrc:
                "https://www.kfzimg.com/G06/M00/89/17/p4YBAFr7l3yAVFe5AAFwjYwRfsM360_n.jpg",
              title: "民国万有文库：《欧阳永叔集》18册全 馆藏书",
              action: "750"
            },
            {
              imgsrc:
                "https://www.kfzimg.com/G07/M00/E8/0D/qoYBAFv04-iACCC8AAKRcDNx100687_n.jpg",
              title: "蓬蓬雕刻集（外函套、 说明书、图版18幅全）",
              action: "660"
            },
            {
              imgsrc:
                "https://www.kfzimg.com/sw/kfzimg/383/4b2d472279aa988c_n.jpg",
              title: "民国版（牛天赐传）",
              action: "500"
            },
            {
              imgsrc:
                "https://www.kfzimg.com/sw/kfzimg/249/2e82393eb5cfc2db_n.jpg",
              title:
                "孔网独售   民国21年印  苏曼殊遗著《曼殊小说集》  上海光华书局刊",
              action: "380"
            },
            {
              imgsrc:
                "https://www.kfzimg.com/G07/M00/99/F0/q4YBAFzRTK-AN9CjAAIu9qQZW9w063_n.jpg",
              title:
                "民国老版 百科小丛书【五代文学】【辽金元文学】【宋代文学】【明代文学】四册合售 私藏品好",
              action: "350"
            },
            {
              imgsrc:
                "https://www.kfzimg.com/sw/kfzimg/272/33d9431e4bd49422_n.jpg",
              title: "陈东原 中国妇女生活史 1937年商务印书馆初版精装",
              action: "320"
            }
          ]
        },
        {
          tele: "名人墨迹",
          divgood: [
            {
              imgsrc: "https://www.kfzimg.com/20130604/79453/79453QDqra0_n.jpg",
              title:
                "著名老诗人韩 西 雅 签赠本 6开线装 韩西雅诗词续集 03年初版",
              action: "40"
            },
            {
              imgsrc:
                "https://www.kfzimg.com/G07/M00/40/7D/qoYBAFw0YDSAVRHYAAFeC2-hTB8061_n.jpg",
              title:
                "e0644邹建军上款，老诗人徐放签赠本《风雨沧桑集》春风文艺出版社（硬精装）9850*1168",
              action: "108"
            },
            {
              imgsrc:
                "https://www.kfzimg.com/G07/M00/3F/7D/qoYBAFyB9IaARMZ3AACcU2jqfNA714_n.jpg",
              title: "规划引导与农业发展研究（作者黄勇 签名）",
              action: "100"
            },
            {
              imgsrc:
                "https://www.kfzimg.com/S01/20190821/5014303/V2_d8DyFWdnKt_n.jpg",
              title:
                "周止礼（周易学家）旧藏：傅振伦民国时期签名本《中国艺术国际展览会参观记》一册（国立北平故宫博物院年刊，1936年抽印本，内页多图，珍贵，封面有傅振伦签赠，如图）【190829A 02】",
              action: "1000"
            },
            {
              imgsrc:
                "https://www.kfzimg.com/sw/kfzimg/338/423a721607437935_n.jpg",
              title: "中日甲午威海之战 戚其章签赠本 附信札一页",
              action: "42"
            },
            {
              imgsrc:
                "https://www.kfzimg.com/20120408/1284237/18661576aGD_n.jpg",
              title: "俞邃文集【精装，厚册，俞邃签赠钤印】",
              action: "10"
            }
          ]
        },
        {
          tele: "艺术珍本",
          divgood: [
            {
              imgsrc:
                "https://www.kfzimg.com/G05/M00/39/CB/p4YBAFmEbliAW9CeAAI_q-ltjSY856_n.jpg",
              title: "吴昌硕自用印集（线装 原拓）",
              action: "7200"
            },
            {
              imgsrc:
                "https://www.kfzimg.com/sw/kfzimg/130/1360493e38d31643_n.jpg",
              title:
                "《安平东汉壁画墓》（文物出版社）1990年一版一印 私藏品好◆ [8开特大本 精美彩色图版 -文革出土 汉代熹平 古墓室（河北衡水 逯家庄）出行图 车马 伎乐 汉服 -考古学、中国绘画史、汉代历史文化 研究艺术文献]",
              action: "950"
            },
            {
              imgsrc:
                "https://www.kfzimg.com/G04/M00/ED/FE/poYBAFdsx4eAJt-aAAMNN51P7F0770_n.jpg",
              title:
                "1988年上海古籍16开精装：中国古代版画丛刊 4册全（印2000册).",
              action: "2298"
            },
            {
              imgsrc:
                "https://www.kfzimg.com/G06/M00/31/A8/p4YBAFsGUr6AdcmoAACkG4CXFIc471_n.jpg",
              title:
                "中国古代版画丛刊二编.第二辑:释氏源流 水陆道场神鬼图像 牧牛图.",
              action: "880"
            },
            {
              imgsrc:
                "https://www.kfzimg.com/sw/kfzimg/184/20ac27ca191511ce_n.jpg",
              title: "马王堆帛书艺术 1996年上海书店 初版8开精装大开本",
              action: "1500"
            },
            {
              imgsrc:
                "https://www.kfzimg.com/sw/kfzimg/182/1ff6f72efc4ed026_n.jpg",
              title: "孙中山书信手迹选（文物出版社1986年初版初印一函两册）",
              action: "1500"
            }
          ]
        },
        {
          tele: "史学典籍",
          divgood: [
            {
              imgsrc:
                "https://www.kfzimg.com/sw/kfzimg/175/1e22ba1ec3afd6b0_n.jpg",
              title:
                "中国政治制度通史（全十册）精装本，主编，第一卷作者签赠本，保真",
              action: "1000"
            },
            {
              imgsrc:
                "https://www.kfzimg.com/G07/M00/88/44/q4YBAF0PPuGACtqKAATI95TmbhU052_n.jpg",
              title: "严耕望史学论文集",
              action: "480"
            },
            {
              imgsrc:
                "https://www.kfzimg.com/G07/M00/98/F2/q4YBAFz6eT-AJAfIAAGDHhIxGak304_n.jpg",
              title:
                "疆邨丛书.上、下 全二册（16开精装 89年一版一印 仅印1000册）",
              action: "680"
            },
            {
              imgsrc:
                "https://www.kfzimg.com/G06/M00/63/CC/p4YBAFvISEWAIU8jAAI3uS78UDw769_n.jpg",
              title: "中国饮食史 全六卷【布面精装初版、仅印3100套】",
              action: "469"
            },
            {
              imgsrc:
                "https://www.kfzimg.com/G07/M00/02/33/q4YBAF0ApoOAcFeQAANQOukFBh0346_n.jpg",
              title: "鸿雪因缘图记（全三集）",
              action: "350"
            },
            {
              imgsrc:
                "https://www.kfzimg.com/sw/kfzimg/58/039b4062c23535a2_n.jpg",
              title: "毛泽东诗词四十三首印谱（1980年1版1印）",
              action: "400"
            }
          ]
        }
      ],
      shudan: [
        {
          imgsrc: require("../assets/bookstore/d38a126ebf7e04c81826c0ad1202c339.jpg"),
          title: "内可以治身，外可以应变。"
        },
        {
          imgsrc: require("../assets/bookstore/083a6d230ccdf6dde74570f09db6ff68.jpg"),
          title: "用自然的野性和诗意治愈人的心灵。"
        },
        {
          imgsrc: require("../assets/bookstore/61db2f7ce7502d7af15108c1657630a6.jpg"),
          title: "“为什么要攀登珠穆朗玛峰？”“因为它在那里。”"
        },
        { title: "查看全部118个书单" }
      ],
      booklistnav: [
        {
          tele: "线装古籍",
          divgood:[{
          imgsrc: "http://user.kongfz.com/data/member_pic/1854/3411854.jpg",
          title: "古籍书社",
          classicon: "level level_star_2",
          pinglvtext: "六年老店 | 好评率99.92%",
          storyshoplist: [
                            {
                              imgsrc: "https://www.kfzimg.com/S01/20190611/3411854/V2_9ehpRwebMb_n.jpg",
                              title: "【明代珍本  名家递藏】明崇祯七年“毛氏汲古阁”精刻本《春秋公羊传注疏》原装28卷 八厚册全套，是书老装未衬，字口清晰，版心下方镌有“汲古阁”字样，卷尾刻有“皇明崇祯七年岁在阏逢阉茂古虞毛氏绣镌”木牌记， 著录：《中国古籍善本总目》P101页。",
                              price: "11200"
                            }, {
                                imgsrc: "https://www.kfzimg.com/S01/20190611/3411854/V2_vJgbMJjNMi_n.jpg",
                                title: "《春秋公羊传注疏》",
                                price: "4000"
                            }, {
                              imgsrc: "https://www.kfzimg.com/S01/20190611/3411854/V2_KhXSKHEpvs_n.jpg",
                              title: "《春秋公羊传注疏》",
                              price: "11200"
                    }]
                      }, {
                          imgsrc: "http://user.kongfz.com/data/member_pic/3127/43127.jpg",
                          title: "汉籍奇书舫",
                          classicon: "level level_star_5",
                          pinglvtext: "好评率100.00%",
                          storyshoplist: [
                            {
                              imgsrc: "https://www.kfzimg.com/sw/kfzimg/376/4a04403a50c387f1_n.jpg",
                              title: "清末书法三张，具历史感，侵华史料，日俄战争史料。奉天省铁岭县调兵山贡生陈福壬题的豪气凌云，清国铁岭教习赵藩臣书写的征露纪念等，珍贵的东北历史文献",
                              price: "2800"
                          }, {
                              imgsrc: "https://www.kfzimg.com/sw/kfzimg/374/4992edc2265b8488_n.jpg",
                              title: "稀见康熙32年和刻本《异称日本传》存11册，江户时代史学家松下见林著作。本书搜集中国古籍闽书、中华古今注、武备志、两朝平攘录、古东夷考略等记录日本之事的史料诗文，长篇短制皆有，甚至包括数幅相关的木刻古代地图、武术图、碑拓图等也收录记载，除此外，也收录一些日本朝鲜古籍的相关记载。该书旧佚上卷两本，元禄六年刊印。",
                              price: "7500"
                          }, {
                              imgsrc: "https://www.kfzimg.com/sw/kfzimg/370/48c6335e12e7fac7_n.jpg",
                              title: "乾隆54年和刻本《孔子行状图解》1册全，以图文形式展现孔子的一生",
                              price: "2100"
                          }]
                          }, {
                              imgsrc: "http://user.kongfz.com/data/member_pic/2110/172110.jpg",
                              title: "蓝搏书屋",
                              classicon: "level level_orange_3",
                              pinglvtext: "十二年老店 | 好评率99.84%",
                              storyshoplist: [{
                                  imgsrc: "https://www.kfzimg.com/sw/kfzimg/386/4c36bc8e2d72cf83_n.jpg",
                                  title: "康熙刻本 王损庵先生外科第四种《疡医准绳》两函10册全",
                                  price: "50000"
                              }, {
                                  imgsrc: "https://www.kfzimg.com/sw/kfzimg/386/4c2e540e011f3404_n.jpg",
                                  title: "康熙刻本 王损庵先生幼科第五种《幼科证治准绳》两函14册全",
                                  price: "55000"
                              }, {
                                  imgsrc: "https://www.kfzimg.com/sw/kfzimg/387/4c2186ca2dc56eec_n.jpg",
                                  title: "康熙刻本 王损庵先生女科第六种《女科证治准绳》一函六册全",
                                  price: "42000"
                              }]
                          }, {
                          imgsrc: "http://user.kongfz.com/data/member_pic/3904/1833904.jpg",
                          title: "艺文汇聚馆",
                          classicon: "level level_orange_3",
                          pinglvtext: "九年老店 | 好评率99.90%",
                          storyshoplist: [{
                              imgsrc: "https://www.kfzimg.com/sw/kfzimg/377/4a354072ccf496e0_n.jpg",
                              title: "《九华印室鉴藏画录》 珂罗版善本 桑名铁城旧藏宋元明清画 大正九年（1920年）珂罗版印本 四开一函二巨册全",
                              price: "70800"
                          }, {
                              imgsrc: "https://www.kfzimg.com/sw/kfzimg/366/47ae07b2eb8e6c52_n.jpg",
                              title: "精写刻本 《草韵汇编二十六卷》 清乾隆间南村草堂刊本 存竹纸一册二卷不全",
                              price: "680"
                          }, {
                              imgsrc: "https://www.kfzimg.com/sw/kfzimg/364/47ad75d60f463a38_n.jpg",
                              title: "锦函 特制本《董解元西厢记》 1984年齐鲁书社影印明带版图本 原装好评一函二册全",
                              price: "1080"
                          }]
                      }, {
                          imgsrc: "http://user.kongfz.com/data/member_pic/9981/3389981.jpg",
                          title: "蜀府古旧书店",
                          classicon: "level level_star_2",
                          pinglvtext: "好评率99.72%",
                          storyshoplist: [{
                              imgsrc: "https://www.kfzimg.com/sw/kfzimg/387/4bcc439a575e975c_n.jpg",
                              title: "补图2 精美少见 清木刻 《八代诗选》一套八册全 长沙湘潭王闿运撰 光绪辛巳四川尊经书局开雕 http://book.kongfz.com/26981/1552911439/",
                              price: "8600"
                          }, {
                              imgsrc: "https://www.kfzimg.com/sw/kfzimg/385/4bcbdd1a8b14b8e9_n.jpg",
                              title: "补图1 精美少见 清木刻 《八代诗选》一套八册全 长沙湘潭王闿运撰 光绪辛巳四川尊经书局开雕 http://book.kongfz.com/26981/1552911439/",
                              price: "8600"
                          }, {
                              imgsrc: "https://www.kfzimg.com/sw/kfzimg/387/4bcb7bd6ef289fd5_n.jpg",
                              title: "精美少见 清木刻 《八代诗选》一套八册全 长沙湘潭王闿运撰 光绪辛巳四川尊经书局开雕",
                              price: "8600"
                          }]
                      }, {
                          imgsrc: "http://user.kongfz.com/data/member_pic/443/120443.jpg",
                          title: "潍坊市古旧书店",
                          classicon: "level level_orange_1",
                          pinglvtext: "十一年老店 | 好评率100.00%",
                          storyshoplist: [{
                              imgsrc: "https://www.kfzimg.com/sw/kfzimg/387/4c2dcfb6feef5593_n.jpg",
                              title: "嘉庆十年经训堂刻本《金石萃编》6函80册全 品佳 一半内容为写刻文字并金石图版",
                              price: "62000"
                          }, {
                              imgsrc: "https://www.kfzimg.com/sw/kfzimg/374/494aaada8a03a82e_n.jpg",
                              title: "善本：康熙年尺木堂原刻本《史记论文一百三十卷》2函24册全套 品佳 康熙刻康熙印",
                              price: "24000"
                          }, {
                              imgsrc: "https://www.kfzimg.com/sw/kfzimg/370/48c8f45e1f4c4dc1_n.jpg",
                              title: "民国年味经堂木活字印本《秦氏三府君集》一夹板3册全  内收无锡秦旭 秦金 秦瀚之集",
                              price: "22000"
                          }]
                      }, {
                          imgsrc: "http://user.kongfz.com/data/member_pic/2642/4222642.jpg",
                          title: "唐风妙彩",
                          classicon: "level level_orange_3",
                          pinglvtext: "好评率99.99%",
                          storyshoplist: [{
                              imgsrc: "https://www.kfzimg.com/sw/kfzimg/386/4c069b12ec69fb8d_n.jpg",
                              title: "化工基础数据基本知识",
                              price: "2"
                          }, {
                              imgsrc: "https://www.kfzimg.com/sw/kfzimg/387/4c06a026d032c4b1_n.jpg",
                              title: "实变函数论",
                              price: "2"
                          }, {
                              imgsrc: "https://www.kfzimg.com/sw/kfzimg/387/4c06a4d656faf6fe_n.jpg",
                              title: "分析化学实验.",
                              price: "1.7"
                          }]
                      }, {
                          imgsrc: "http://user.kongfz.com/data/member_pic/3853/1243853.jpg",
                          title: "丰诚古籍书店",
                          classicon: "level level_red_3",
                          pinglvtext: "十一年老店 | 好评率100.00%",
                          storyshoplist: [{
                              imgsrc: "https://www.kfzimg.com/S01/20191010/1243853/V2_8VJJDTbaSf_n.jpg",
                              title: "明代崇祯 汲古阁 監本礼记  十册十卷一套全",
                              price: "25000"
                          }, {
                              imgsrc: "https://www.kfzimg.com/S01/20191010/1243853/V2_QmFPTaeX3e_n.jpg",
                              title: "清道光洗冤录  五册六卷  卷二为配本  卷二缺第一页和最后一页",
                              price: "11250"
                          }, {
                              imgsrc: "https://www.kfzimg.com/S01/20191010/1243853/V2_VKapR362Dv_n.jpg",
                              title: "民国时期月饼小广告  可通走可单出",
                              price: "1350"
                          }]
                      }, {
                          imgsrc: "http://user.kongfz.com/data/member_pic/920/1550920.jpg",
                          title: "云品书店",
                          classicon: "level level_star_5",
                          pinglvtext: "十年老店 | 好评率99.83%",
                          storyshoplist: [{
                              imgsrc: "https://www.kfzimg.com/G07/M00/9B/2B/qoYBAFwsgMqALLdLAADfTACMQAM216_n.jpg",
                              title: "民国《初级中学国文甲编》第一册   民国北平艳纸本    少见",
                              price: "220"
                          }, {
                              imgsrc: "https://www.kfzimg.com/G07/M00/9B/0C/qoYBAFwsf7CANj6wAAC6Ox82CbQ633_n.jpg",
                              title: "清光绪《最新格致教科书》第二册   动植物插图内容精美插图",
                              price: "980"
                          }, {
                              imgsrc: "https://www.kfzimg.com/G07/M00/9A/DE/qoYBAFwsfjCAegW1AADMyCt78c0312_n.jpg",
                              title: "清光绪  学部图书局   《初等小学国文教科书》第四册    精美插图“大清龙旗”极少见",
                              price: "1500"
                          }]
                      }, {
                          imgsrc: "http://user.kongfz.com/data/member_pic/4927/34927.jpg",
                          title: "葑溪书店",
                          classicon: "level level_orange_1",
                          pinglvtext: "六年老店 | 好评率100.00%",
                          storyshoplist: [{
                              imgsrc: "https://www.kfzimg.com/sw/kfzimg/381/4accb70e2ab1e492_n.jpg",
                              title: "《白衣观世音菩萨神咒注解》民国上海谢文益善书部铅印本一册全",
                              price: "290"
                          }, {
                              imgsrc: "https://www.kfzimg.com/sw/kfzimg/379/4a723ed275f7637d_n.jpg",
                              title: "《解深密经》同治金陵刻经处木刻本一厚册全 刻版精良、初印 带原签条",
                              price: "1380"
                          }, {
                              imgsrc: "https://www.kfzimg.com/sw/kfzimg/376/4a2aa7f2cbf17af7_n.jpg",
                              title: "《林文忠公法书金刚经》民国上海宏善书局道德书局发行红印巾箱本一册全",
                              price: "1280"
                          }]
                      }]
                        },
                        {
                          tele: "国学古籍",
                          divgood:[{"imgsrc":"http://user.kongfz.com/data/member_pic/8688/28688.jpg","title":"信都书店","classicon":"level level_red_3","pinglvtext":"十五年老店 | 好评率99.66%","storyshoplist":[{"imgsrc":"https://www.kfzimg.com/sw/kfzimg/384/4b6d560a92177ad2_n.jpg","title":"戏曲群星 （一）","price":"3"},{"imgsrc":"https://www.kfzimg.com/sw/kfzimg/384/4b6cf822a9dab99d_n.jpg","title":"儒林外史_会校会评本（上）","price":"15"},{"imgsrc":"https://www.kfzimg.com/sw/kfzimg/384/4b6ca5f241ad6298_n.jpg","title":"中国近代爱国人物故事丛书《文化教育名流》出版元老张元济、人世楷模蔡元培、报业大王史量才、教育局子陶行知、风云人物胡适、一代奇人梁漱溟","price":"3"}]},{"imgsrc":"http://user.kongfz.com/data/member_pic/9587/9587.jpg","title":"禹卿书局","classicon":"level level_orange_3","pinglvtext":"十六年老店 | 好评率99.85%","storyshoplist":[{"imgsrc":"https://www.kfzimg.com/sw/kfzimg/64/04f75e5af6adc07a_n.jpg","title":"Y044 蒋子龙选集 第1-3卷全三册（精装有护封、83年1版年印、品好）","price":"60"},{"imgsrc":"https://www.kfzimg.com/G05/M00/90/C6/p4YBAFk0x0uAUYAdAAcqXA4awY4641_n.jpg","title":"611〉张恨水全集；傲霜花（93年1版1印、精装有护封）","price":"40"},{"imgsrc":"https://www.kfzimg.com/G06/M00/F8/A4/p4YBAFuL6aaAOvalAAGAaFmCA6A317_n.jpg","title":"Z053 武侠类：武林浪子（上下全二册、老版武侠、品旧）","price":"4"}]},{"imgsrc":"http://user.kongfz.com/data/member_pic/7385/2637385.jpg","title":"芜湖市万卷书屋","classicon":"level level_orange_3","pinglvtext":"好评率99.99%","storyshoplist":[{"imgsrc":"https://www.kfzimg.com/sw/kfzimg/389/4ca5da9246668c90_n.jpg","title":"无计花间住 32开精装","price":"40"},{"imgsrc":"https://www.kfzimg.com/sw/kfzimg/390/4ca5626a4419e08c_n.jpg","title":"诗经别裁  32开平装","price":"30"},{"imgsrc":"https://www.kfzimg.com/sw/kfzimg/390/4ca4cb2a4ca61140_n.jpg","title":"物中看画","price":"40"}]},{"imgsrc":"http://user.kongfz.com/data/member_pic/5129/1025129.jpg","title":"四当斋书店","classicon":"level level_orange_3","pinglvtext":"十二年老店 | 好评率99.64%","storyshoplist":[{"imgsrc":"https://www.kfzimg.com/sw/kfzimg/387/4c4cf31ed0c70e10_n.jpg","title":"傅抱石精品画集，全新，包邮","price":"588"},{"imgsrc":"https://www.kfzimg.com/sw/kfzimg/386/4c4c7af6316b7014_n.jpg","title":"马背上的女孩，全五册，全新","price":"50"},{"imgsrc":"https://www.kfzimg.com/sw/kfzimg/385/4c4c2c0e64850c23_n.jpg","title":"八月之光","price":"88"}]},{"imgsrc":"http://user.kongfz.com/data/member_pic/2239/1492239.jpg","title":"仙岩书店","classicon":"level level_orange_3","pinglvtext":"十年老店 | 好评率99.98%","storyshoplist":[{"imgsrc":"https://www.kfzimg.com/G07/M00/C6/71/q4YBAFycKw2APA_sAAXoj7lEa7o116_n.jpg","title":"超级成长版冒险小虎队（全10册）超级版冒险小虎队（全10册）【附每册都有解密卡】20册合售 全新未翻阅  品好","price":"388"},{"imgsrc":"https://www.kfzimg.com/20111025/1492239/134384MVeVB_n.jpg","title":"临安市志 1989-2005（上下册） 品好","price":"138"},{"imgsrc":"https://www.kfzimg.com/sw/kfzimg/389/4c8d8096c3fd2a34_n.jpg","title":"金石书画 第二卷（品好）","price":"268"}]},{"imgsrc":"http://user.kongfz.com/data/member_pic/9533/1099533.jpg","title":"北京盛世情书店","classicon":"level level_orange_3","pinglvtext":"十一年老店 | 好评率99.80%","storyshoplist":[{"imgsrc":"https://www.kfzimg.com/sw/kfzimg/385/4c1db8bafc83a4bb_n.jpg","title":"犯罪社会学（汉译名著）","price":"19"},{"imgsrc":"https://www.kfzimg.com/20120629/1099533/90736V7Wy3_n.jpg","title":"在通向语言的途中(汉译世界学术名著丛书)","price":"14"},{"imgsrc":"https://www.kfzimg.com/20131004/1099533/1099533nhK7X0_n.jpg","title":"历史与阶级意识：关于马克思主义辩证法的研究 /汉译世界学术名著丛书（定价43元）","price":"23"}]},{"imgsrc":"http://user.kongfz.com/data/member_pic/9528/1459528.jpg","title":"大安市古旧书店","classicon":"level level_orange_3","pinglvtext":"十年老店 | 好评率99.70%","storyshoplist":[{"imgsrc":"https://www.kfzimg.com/sw/kfzimg/388/4c7a878eb310110f_n.jpg","title":"封建论的遵法反儒精神···","price":"999"},{"imgsrc":"https://www.kfzimg.com/sw/kfzimg/388/4c9af14a591e9a50_n.jpg","title":"中国博物馆2001年2.4合售","price":"999"},{"imgsrc":"https://www.kfzimg.com/sw/kfzimg/389/4c99867a3b7d9c50_n.jpg","title":"我家的动物园、月亮是什么味道、果子在哪里（三本合售）","price":"12"}]},{"imgsrc":"http://user.kongfz.com/data/member_pic/2477/22477.jpg","title":"雅奇斋","classicon":"level level_red_3","pinglvtext":"十五年老店 | 好评率99.90%","storyshoplist":[{"imgsrc":"https://www.kfzimg.com/sw/kfzimg/385/4c53e17e82b21865_n.jpg","title":"参加伦敦中国艺术国际展览会出品图说 （第四册 其他类）民国25年初版","price":"800"},{"imgsrc":"https://www.kfzimg.com/sw/kfzimg/386/4c532856305f2f3e_n.jpg","title":"参加伦敦中国艺术国际展览会出品图说 （第二册 瓷器）民国25年初版","price":"1000"},{"imgsrc":"https://www.kfzimg.com/sw/kfzimg/382/4b59c78ede3c06ee_n.jpg","title":"藏密修法秘典（全十册）","price":"500"}]},{"imgsrc":"http://user.kongfz.com/data/member_pic/7551/37551.jpg","title":"安徽芜湖万卷书屋","classicon":"level level_red_3","pinglvtext":"十五年老店 | 好评率99.98%","storyshoplist":[{"imgsrc":"https://www.kfzimg.com/sw/kfzimg/388/4c9acbf28bd48385_n.jpg","title":"《续古文辞类篡》一函8册  四部备要集部","price":"480"},{"imgsrc":"https://www.kfzimg.com/sw/kfzimg/389/4c929b1202a15d06_n.jpg","title":"《庄子（4册） 尹文子（1册）  孙子（6册）》 四部备要 子部 一函11册","price":"230"},{"imgsrc":"https://www.kfzimg.com/sw/kfzimg/388/4c888ee2e2f8c271_n.jpg","title":"《礼记》四部备要  经部      一函8册","price":"280"}]},{"imgsrc":"http://user.kongfz.com/data/member_pic/9982/79982.jpg","title":"扬州广文图书有限公司","classicon":"level level_red_3","pinglvtext":"十四年老店 | 好评率100.00%","storyshoplist":[{"imgsrc":"https://www.kfzimg.com/G03/M00/3E/5D/pYYBAFVUpE6AMC60AAL0FCPYf8o029_n.jpg","title":"《唐诗三百首详析（简体字本）》（全一册）大32开.平装.简体横排.中华书局.定价：￥29.00元","price":"26"},{"imgsrc":"https://www.kfzimg.com/G05/M00/80/71/p4YBAFmrsGmAEyTxAALSWIyF1wU903_n.jpg","title":"《唐五代志怪传奇叙录（增订本）》（全三册）32开.精装.繁体横排.中华书局.出版时间：2017年1月北京第1版第1次印刷.总印刷1~2000册【原包装，外有塑封】","price":"268"},{"imgsrc":"https://www.kfzimg.com/G05/M00/32/27/p4YBAFmzPZyAVwo4AAMGAq3XmJg989_n.jpg","title":"【书目题跋丛刊】《藏园批注楹书隅录》（全一册）32开平装.繁体竖排.中华书局.出版时间：2017年6月北京第1版第1次印刷","price":"48"}]}]
                        },
                        {
                          tele: "历史",
                          divgood:[{"imgsrc":"http://user.kongfz.com/data/member_pic/4234/194234.jpg","title":"慧通书局","classicon":"level level_orange_3","pinglvtext":"十二年老店 | 好评率99.95%","storyshoplist":[{"imgsrc":"https://www.kfzimg.com/sw/kfzimg/390/4cad2ebe12536530_n.jpg","title":"柳公权法书全集","price":"888"},{"imgsrc":"https://www.kfzimg.com/sw/kfzimg/390/4cacf1a6b5e6ff08_n.jpg","title":"影响孩子一生的300首经典唐诗","price":"888"},{"imgsrc":"https://www.kfzimg.com/sw/kfzimg/390/4cac947235da4a24_n.jpg","title":"宋词三百首：精品彩图注音","price":"888"}]},{"imgsrc":"http://user.kongfz.com/data/member_pic/4100/2144100.jpg","title":"梵.高书店","classicon":"level level_orange_3","pinglvtext":"八年老店 | 好评率99.85%","storyshoplist":[{"imgsrc":"https://www.kfzimg.com/sw/kfzimg/388/4c906446fc0401d9_n.jpg","title":"文化震撼之旅西班牙+法国（2册合售）","price":"8"},{"imgsrc":"https://www.kfzimg.com/sw/kfzimg/390/4c90247244d4066e_n.jpg","title":"中美战争 朝鲜决战","price":"3"},{"imgsrc":"https://www.kfzimg.com/sw/kfzimg/390/4c87e97e54724f63_n.jpg","title":"品质生活·玩转韩范儿 丝巾、围巾、披巾","price":"2"}]},{"imgsrc":"http://user.kongfz.com/data/member_pic/5144/1285144.jpg","title":"半个文化人书店","classicon":"level level_orange_3","pinglvtext":"十一年老店 | 好评率99.96%","storyshoplist":[{"imgsrc":"https://www.kfzimg.com/sw/kfzimg/379/4afa4ec6d1820879_n.jpg","title":"现场：殷双喜艺术批评文集  全新未开封【库房】","price":"25"},{"imgsrc":"https://www.kfzimg.com/G00/M00/1A/4E/oYYBAFNtikmAbIGEAABkGW9Uoz0928_n.jpg","title":"一只苹果的忧伤   梅洁签赠本！  892","price":"20"},{"imgsrc":"https://www.kfzimg.com/G05/M00/96/0E/p4YBAFhDl16AESj8AAA6M4vBEx4350_n.jpg","title":"TOUCHING SPIRIT BEAR 【182】","price":"80"}]},{"imgsrc":"http://user.kongfz.com/data/member_pic/2013/142013.jpg","title":"6969书店","classicon":"level level_orange_3","pinglvtext":"十三年老店 | 好评率99.92%","storyshoplist":[{"imgsrc":"https://www.kfzimg.com/G07/M00/DE/90/q4YBAFvfBViAKlGHAAMum-P2xLE560_n.jpg","title":"保险机构董事.监事和高级管理人员培训教材及任职资格考试参考教材 （保险基础知识导论，保险消费者权益保护，保险法律制度精解，财产保险公司合规指南，人身保险公司合规指南，保险资金运用实践与监管，保险案例选编，保险机构懂事、监事和高级管理人员任职资格考试大纲）【8本合售】  小16开","price":"780"},{"imgsrc":"https://www.kfzimg.com/sw/kfzimg/247/2ed55b3299115722_n.jpg","title":"屎捞人系列绘本  （屎诗童话、在路途上、浮屎若梦） 【3本合售】 【24开】","price":"88"},{"imgsrc":"https://www.kfzimg.com/sw/kfzimg/390/4c78842a9b5cfc8a_n.jpg","title":"Digital Identity        （16开 ）  【详见图】","price":"125"}]},{"imgsrc":"http://user.kongfz.com/data/member_pic/863/1010863.jpg","title":"瑞瑞书店","classicon":"level level_orange_3","pinglvtext":"十一年老店 | 好评率99.92%","storyshoplist":[{"imgsrc":"https://www.kfzimg.com/sw/kfzimg/388/4cadbb9a1f40244d_n.jpg","title":"Photoshop CS6人像与风光照片精修一本通 （无光盘）","price":"30"},{"imgsrc":"https://www.kfzimg.com/sw/kfzimg/388/4cad08265707d3b2_n.jpg","title":"植物代谢组学——方法与应用","price":"388"},{"imgsrc":"https://www.kfzimg.com/sw/kfzimg/390/4cacbae2f4acc99e_n.jpg","title":"富家益股市新手系列·新手学跟庄：从入门到精通","price":"15"}]},{"imgsrc":"http://user.kongfz.com/data/member_pic/9660/2089660.jpg","title":"林歌文轩","classicon":"level level_orange_3","pinglvtext":"六年老店 | 好评率99.89%","storyshoplist":[{"imgsrc":"https://www.kfzimg.com/sw/kfzimg/388/4c7237fa9a74f642_n.jpg","title":"毛泽东 为人民服务    纪念白求恩  愚公移山    英文版","price":"3"},{"imgsrc":"https://www.kfzimg.com/sw/kfzimg/390/4c72429a037848c8_n.jpg","title":"老门票  23张合售","price":"30"},{"imgsrc":"https://www.kfzimg.com/sw/kfzimg/389/4c7258025619d012_n.jpg","title":"麻姑献寿   老书签一张","price":"2"}]},{"imgsrc":"http://user.kongfz.com/data/member_pic/5437/1335437.jpg","title":"姚乐乐书屋","classicon":"level level_orange_3","pinglvtext":"十一年老店 | 好评率99.91%","storyshoplist":[{"imgsrc":"https://www.kfzimg.com/sw/kfzimg/390/4ca79832c5abd2ec_n.jpg","title":"诗词例话","price":"8"},{"imgsrc":"https://www.kfzimg.com/sw/kfzimg/388/4ca72afa3bfbaa10_n.jpg","title":"创作例话","price":"15"},{"imgsrc":"https://www.kfzimg.com/sw/kfzimg/389/4ca6d6ea75b1f173_n.jpg","title":"小说例话","price":"78"}]},{"imgsrc":"http://user.kongfz.com/data/member_pic/4237/1284237.jpg","title":"书渊阁","classicon":"level level_orange_3","pinglvtext":"八年老店 | 好评率100.00%","storyshoplist":[{"imgsrc":"https://www.kfzimg.com/sw/kfzimg/390/4cae5e42ef08c848_n.jpg","title":"中国音乐考古80年（精装厚册，私藏品好）","price":"160"},{"imgsrc":"https://www.kfzimg.com/sw/kfzimg/389/4cadfaba90e7c1ba_n.jpg","title":"欧阳允文书法作品集（精装私藏品好）","price":"15"},{"imgsrc":"https://www.kfzimg.com/sw/kfzimg/389/4cad709a6f39e912_n.jpg","title":"中外交通古地图集（精装私藏品好）","price":"300"}]},{"imgsrc":"http://user.kongfz.com/data/member_pic/5040/5040.jpg","title":"文史哲书店","classicon":"level level_star_2","pinglvtext":"十五年老店 | 好评率99.40%","storyshoplist":[{"imgsrc":"https://www.kfzimg.com/sw/kfzimg/382/4b6659c278a4de5d_n.jpg","title":"世界童话名著（第1册）","price":"25"},{"imgsrc":"https://www.kfzimg.com/sw/kfzimg/323/3e960dd2559cfcdd_n.jpg","title":"钱杨：钱杨摭拾","price":"13"},{"imgsrc":"https://www.kfzimg.com/sw/kfzimg/324/3e96068e0e6a79a8_n.jpg","title":"小念头：恋爱中的沈从文","price":"22"}]},{"imgsrc":"http://user.kongfz.com/data/member_pic/1934/1934.jpg","title":"书山房","classicon":"level level_orange_3","pinglvtext":"五年老店 | 好评率99.81%","storyshoplist":[{"imgsrc":"https://www.kfzimg.com/sw/kfzimg/387/4c2475f6a6836dcf_n.jpg","title":"孟子浅说  83年版,包快递","price":"120"},{"imgsrc":"https://www.kfzimg.com/sw/kfzimg/386/4c23c1423144ad5a_n.jpg","title":"中国佛教教理诠释  79年版,包快递","price":"120"},{"imgsrc":"https://www.kfzimg.com/sw/kfzimg/385/4c239a96ee392996_n.jpg","title":"阎毛古文尚书公案  63年初版","price":"70"}]}]
                        },
                        {
                          tele: "艺术",
                          divgood: [{"imgsrc":"http://user.kongfz.com/data/member_pic/1065/91065.jpg","title":"宝云堂旧书店","classicon":"level level_red_3","pinglvtext":"十三年老店 | 好评率99.92%","storyshoplist":[{"imgsrc":"https://www.kfzimg.com/sw/kfzimg/390/4cae6626c232afed_n.jpg","title":"英文原版：A Tale of Two Cities 双城记","price":"8"},{"imgsrc":"https://www.kfzimg.com/sw/kfzimg/390/4ca68ceea97e7413_n.jpg","title":"Business @ The Speed Of Thought","price":"20"},{"imgsrc":"https://www.kfzimg.com/sw/kfzimg/237/2bd8647ef8d7433d_n.jpg","title":"上海字记","price":"70"}]},{"imgsrc":"http://user.kongfz.com/data/member_pic/5711/6335711.jpg","title":"好读书旧书店","classicon":"level level_orange_3","pinglvtext":"三年老店 | 好评率99.99%","storyshoplist":[{"imgsrc":"https://www.kfzimg.com/sw/kfzimg/388/4cae5276d5ac1282_n.jpg","title":"人民文学 1977 8-12(合订在一起的)","price":"35"},{"imgsrc":"https://www.kfzimg.com/sw/kfzimg/388/4cad68cac53821bf_n.jpg","title":"新华月报 1962 1-10(10本合售)","price":"75"},{"imgsrc":"https://www.kfzimg.com/sw/kfzimg/389/4cab1af20c9d7c9f_n.jpg","title":"新华月报 1962 11","price":"3"}]},{"imgsrc":"http://user.kongfz.com/data/member_pic/1557/91557.jpg","title":"精诚书坊","classicon":"level level_orange_3","pinglvtext":"十三年老店 | 好评率99.97%","storyshoplist":[{"imgsrc":"https://www.kfzimg.com/sw/kfzimg/384/4b7a876276446331_n.jpg","title":"摄影的平面设计","price":"2"},{"imgsrc":"https://www.kfzimg.com/sw/kfzimg/383/4b7a3a1e54db676e_n.jpg","title":"空寂的神殿——中国文化之源","price":"2"},{"imgsrc":"https://www.kfzimg.com/sw/kfzimg/382/4b79d51a490e794c_n.jpg","title":"冷火与断云  随感录","price":"2"}]},{"imgsrc":"http://user.kongfz.com/data/member_pic/8992/1608992.jpg","title":"外山艺文书店","classicon":"level level_orange_3","pinglvtext":"九年老店 | 好评率99.97%","storyshoplist":[{"imgsrc":"https://www.kfzimg.com/sw/kfzimg/384/4bbeedb20f807b09_n.jpg","title":"向大师学绘画：铅笔风景画技法","price":"45"},{"imgsrc":"https://www.kfzimg.com/sw/kfzimg/382/4bbddc42749eeeac_n.jpg","title":"名家国画技法.菊花画谱","price":"78"},{"imgsrc":"https://www.kfzimg.com/sw/kfzimg/382/4bbddc42749eeeac_n.jpg","title":"名家国画技法.树木画谱","price":"50"}]},{"imgsrc":"http://user.kongfz.com/data/member_pic/5579/5579.jpg","title":"阿啦老韩","classicon":"level level_orange_3","pinglvtext":"六年老店 | 好评率99.91%","storyshoplist":[{"imgsrc":"https://www.kfzimg.com/sw/kfzimg/387/4c449e4e2424abfa_n.jpg","title":"中国国民党湖北省党部救济贫民遊艺会戏单:李宗义/傅德威主演  《庆顶珠～古城会～刺巴杰～巴骆和》【36.5+13.4cm双面】","price":"1500"},{"imgsrc":"https://www.kfzimg.com/W03/0f/39/0f39739aa20533d0e0403ab13b4bfe05_n.jpg","title":"商务印书馆:《中国寓言研究》胡怀琛著【32开 一册】(1)","price":"680"},{"imgsrc":"https://www.kfzimg.com/sw/kfzimg/342/42e48b3e306ecf3a_MASK_n.jpg","title":"翻译家/作家/教授:文楚安先生信札一通二页【32开   实寄】","price":"280"}]},{"imgsrc":"http://user.kongfz.com/data/member_pic/7810/1307810.jpg","title":"天津三乐堂西文旧书店","classicon":"level level_orange_3","pinglvtext":"十年老店 | 好评率99.95%","storyshoplist":[{"imgsrc":"https://www.kfzimg.com/S01/20190428/1307810/V2_Xw7WVKFDQa_n.jpg","title":"1952年英文版《长青的童话之蓝胡子》-限量编号，插画艺术家签名--精美插图","price":"450"},{"imgsrc":"https://www.kfzimg.com/S01/20190428/1307810/V2_7wMpgMxNdJ_n.jpg","title":"1952年英文版《长青的童话之汉塞尔和格雷特》-限量编号，插画艺术家签名--精美插图","price":"450"},{"imgsrc":"https://www.kfzimg.com/S01/20190428/1307810/V2_tEpSJpbYfS_n.jpg","title":"1952年英文版《长青的童话之杰克与豆茎》-限量编号，插画艺术家签名--精美插图","price":"450"}]},{"imgsrc":"http://user.kongfz.com/data/member_pic/5144/1285144.jpg","title":"半个文化人书店","classicon":"level level_orange_3","pinglvtext":"十一年老店 | 好评率99.96%","storyshoplist":[{"imgsrc":"https://www.kfzimg.com/sw/kfzimg/379/4afa4ec6d1820879_n.jpg","title":"现场：殷双喜艺术批评文集  全新未开封【库房】","price":"25"},{"imgsrc":"https://www.kfzimg.com/G00/M00/1A/4E/oYYBAFNtikmAbIGEAABkGW9Uoz0928_n.jpg","title":"一只苹果的忧伤   梅洁签赠本！  892","price":"20"},{"imgsrc":"https://www.kfzimg.com/G05/M00/96/0E/p4YBAFhDl16AESj8AAA6M4vBEx4350_n.jpg","title":"TOUCHING SPIRIT BEAR 【182】","price":"80"}]},{"imgsrc":"http://user.kongfz.com/data/member_pic/6514/3556514.jpg","title":"宿松梦缘古旧书店","classicon":"level level_orange_3","pinglvtext":"六年老店 | 好评率99.93%","storyshoplist":[{"imgsrc":"https://www.kfzimg.com/sw/kfzimg/383/4b57a5ee0fd52ba8_n.jpg","title":"Who   SpilIed  the MilK？谁打翻了牛奶？","price":"5"},{"imgsrc":"https://www.kfzimg.com/sw/kfzimg/383/4b575a2635a08569_n.jpg","title":"LooK   at   That  Cat！","price":"5"},{"imgsrc":"https://www.kfzimg.com/sw/kfzimg/383/4b56fc2a4b24270d_n.jpg","title":"This  ls  My  Day","price":"5"}]},{"imgsrc":"http://user.kongfz.com/data/member_pic/4320/3994320.jpg","title":"夜上海书局","classicon":"level level_orange_3","pinglvtext":"四年老店 | 好评率99.99%","storyshoplist":[{"imgsrc":"https://www.kfzimg.com/sw/kfzimg/390/4cae6702c67c4c9f_n.jpg","title":"腾越风情","price":"4"},{"imgsrc":"https://www.kfzimg.com/sw/kfzimg/388/4cae3a5249d2e32d_n.jpg","title":"只在此刻的拥抱（未拆封）","price":"5"},{"imgsrc":"https://www.kfzimg.com/sw/kfzimg/390/4cacc92e0f776027_n.jpg","title":"一杯关怀茶暖心香","price":"3.2"}]},{"imgsrc":"http://user.kongfz.com/data/member_pic/7662/107662.jpg","title":"砚书斋","classicon":"level level_orange_3","pinglvtext":"十三年老店 | 好评率99.88%","storyshoplist":[{"imgsrc":"https://www.kfzimg.com/sw/kfzimg/389/4c79b7d23a64a83d_n.jpg","title":"华严经（上、下册）","price":"300"},{"imgsrc":"https://www.kfzimg.com/sw/kfzimg/390/4c79d24ecf4bb7d6_n.jpg","title":"从医案中领会名医理法方药思路的18堂课-名家教你读医案-第2辑","price":"45"},{"imgsrc":"https://www.kfzimg.com/sw/kfzimg/389/4c79df6e8a7fce46_n.jpg","title":"失去灵魂的卓越：哈佛是如何忘记教育宗旨的","price":"8"}]}]
                        },
                        {
                          tele: "红色文献",
                          divgood: [{"imgsrc":"http://user.kongfz.com/data/member_pic/9080/1009080.jpg","title":"鸿文书局","classicon":"level level_red_3","pinglvtext":"十年老店 | 好评率99.99%","storyshoplist":[{"imgsrc":"https://www.kfzimg.com/sw/kfzimg/383/4b29db1e0091771c_n.jpg","title":"1949年7月22日【人民日报】解放平江，浙江大陆全部解放，解放海丰","price":"500"},{"imgsrc":"https://www.kfzimg.com/sw/kfzimg/382/4b29747609bebcc9_n.jpg","title":"1949年7月23日【人民日报】解放浏阳","price":"500"},{"imgsrc":"https://www.kfzimg.com/sw/kfzimg/383/4b28f122ee1914e1_n.jpg","title":"1949年5月23日【人民日报】解放咸宁，电贺解放西安","price":"500"}]},{"imgsrc":"http://user.kongfz.com/data/member_pic/1286/1081286.jpg","title":"红经典革命书屋","classicon":"level level_orange_3","pinglvtext":"十年老店 | 好评率99.99%","storyshoplist":[{"imgsrc":"https://www.kfzimg.com/sw/kfzimg/387/4c21a1e6cb1172af_n.jpg","title":"中国奥运冠军精彩瞬间 【1984年1992年1996年2000年2004年2008年 中国网通 卡】六册和售","price":"500"},{"imgsrc":"https://www.kfzimg.com/sw/kfzimg/387/4c17ce96c5abcdfb_n.jpg","title":"琼瑶的歌","price":"5"},{"imgsrc":"https://www.kfzimg.com/sw/kfzimg/386/4c179b1a13a5f916_n.jpg","title":"聊斋志异欣赏","price":"5"}]},{"imgsrc":"http://user.kongfz.com/data/member_pic/4226/1094226.jpg","title":"太行太岳边区书店","classicon":"level level_orange_3","pinglvtext":"七年老店 | 好评率100.00%","storyshoplist":[{"imgsrc":"https://www.kfzimg.com/sw/kfzimg/379/4ad619a2abb3dd4b_n.jpg","title":"红色文献-1948年辽北省文化协会编《剧选-打到老蒋再回家，消灭鼠疫】秧歌剧！","price":"450"},{"imgsrc":"https://www.kfzimg.com/sw/kfzimg/379/4ad6062e07e15869_n.jpg","title":"1950年9月5日~农民画报-苏南画刊【联合号外】庆祝苏南首届农民代表大会特辑！","price":"1500"},{"imgsrc":"https://www.kfzimg.com/sw/kfzimg/381/4ad5e36a337b08b9_n.jpg","title":"1950年9月18日《苏南画刊》庆祝苏南区工业劳动模范代表会议-光荣属于劳动人民","price":"360"}]},{"imgsrc":"http://user.kongfz.com/data/member_pic/8244/1528244.jpg","title":"蜗牛古旧书店","classicon":"level level_orange_3","pinglvtext":"九年老店 | 好评率100.00%","storyshoplist":[{"imgsrc":"https://www.kfzimg.com/S01/20171102/1528244/R6SDBnsXTr_n.jpg","title":"红色文献：中共的干部学习（1950年6月）收录刘少奇、高岗等人著作","price":"129"},{"imgsrc":"https://www.kfzimg.com/S01/20171102/1528244/twSMQmR7bq_n.jpg","title":"红色文献：大众路线论（民国）刘少奇著","price":"149"},{"imgsrc":"https://www.kfzimg.com/S01/20170630/1528244/wkPfwHx7rm_n.jpg","title":"红宝书：周恩来语录，带书衣，秋元书房版","price":"500"}]},{"imgsrc":"http://user.kongfz.com/data/member_pic/8264/218264.jpg","title":"潘家园旧书苑","classicon":"level level_orange_3","pinglvtext":"十一年老店 | 好评率100.00%","storyshoplist":[{"imgsrc":"https://www.kfzimg.com/sw/kfzimg/363/46cb77b2f5925364_n.jpg","title":"亚洲首位雨果奖得主 刘慈欣《流浪地球 》科幻小说","price":"10"},{"imgsrc":"https://www.kfzimg.com/sw/kfzimg/363/46cb54c6f1d19fd3_n.jpg","title":"漫画世界幽默系列《爆笑校园4》","price":"5"},{"imgsrc":"https://www.kfzimg.com/sw/kfzimg/361/46cba4ee98ca004f_n.jpg","title":"书法《诗书集  五体字本》16开 品佳","price":"10"}]},{"imgsrc":"http://user.kongfz.com/data/member_pic/9495/29495.jpg","title":"文革经典专卖店","classicon":"level level_orange_2","pinglvtext":"十五年老店 | 好评率99.22%","storyshoplist":[{"imgsrc":"https://www.kfzimg.com/sw/kfzimg/386/4c2ef1ca9f3e6fb0_n.jpg","title":"造字号《新疆日报》散布的流毒必须彻底肃清（复印件）","price":"25"},{"imgsrc":"https://www.kfzimg.com/sw/kfzimg/367/4850486a98bfd6ea_n.jpg","title":"菏泽地区革委会关于进一步掀起农业学大寨群众运动新高潮的通知","price":"40"},{"imgsrc":"https://www.kfzimg.com/sw/kfzimg/369/48185e966c1f99e1_n.jpg","title":"紧跟华主席干革命，狠揭猛批“四人帮” （青岛34中贯彻中央15、16号文件的情况和作法）","price":"50"}]},{"imgsrc":"http://user.kongfz.com/data/member_pic/8935/218935.jpg","title":"东方红书屋","classicon":"level level_orange_2","pinglvtext":"十一年老店 | 好评率99.90%","storyshoplist":[{"imgsrc":"https://www.kfzimg.com/sw/kfzimg/383/4b98aac6b9cfc6cd_n.jpg","title":"1961年海报宣传画==小刀会，上海天马电影制片厂，中国电影发行放映公司，规格1开，85品。\n挂刷为折叠邮寄。","price":"2800"},{"imgsrc":"https://www.kfzimg.com/sw/kfzimg/384/4b65bca6a4f7af7a_n.jpg","title":"1962年海报宣传画，老三战--南征北战，地道战（二种不同）、地、雷战（三种不同），八一电影制片厂，中国电影发行放映公司，2开，9-95品。挂刷折叠邮寄。","price":"4800"},{"imgsrc":"https://www.kfzimg.com/sw/kfzimg/383/4b6416c68becb66e_n.jpg","title":"1962年海报宣传画，老三战--南征北战，地道战、地、雷战（一对），八一电影制片厂，中国电影发行放映公司，2开，85-95品。挂刷折叠邮寄。","price":"2600"}]}]
                        }
                      ]
                    };
          },
          methods: {
            handleClick(tab, event) {
              console.log(tab, event);
            },
            booksnaClick(tab, event) {
              console.log(tab, event);
            }
          }
};
</script>
<style scoped>
* {
  padding: 0;
  margin: 0;
}
.header {
  height: 0.58rem;
  line-height: 0.58rem;
}
.header h2 {
  text-align: center;
  font-size: 0.24rem;
  font-weight: 600;
  color: #262626;
}
.innernav {
  display: flex;
  justify-content: space-around;
  text-align: center;
  margin: 0 auto;
  padding-top: 0.35rem;
  padding-bottom: 0.56rem;
  color: #666;
}
.innernav img {
  width: 0.586667rem;
  display: block;
  margin-bottom: 0.04rem;
}
.line {
  width: 100%;
  height: 0.117333rem;
  background: #f3f3f3;
}
.mjprefecture {
  box-sizing: border-box;
  width: 100%;
  height: 0.76rem;
  color: #262626;
  font-size: 0.266667rem;
  padding: 0.373333rem 0.2rem 0 0.2rem;
}
.telercla {
  font-size: 0.213333rem;
  font-weight: 600;
  margin-top: 0.066667rem;
  color: #333;
}
.zuozcla {
  font-size: 0.16rem;
  color: #ccc;
  margin: 0.066667rem 0;
  width: 1.133333rem;
  overflow: hidden;
  white-space: nowrap;
}
.linnebox {
  background: #fafafa;
  width: 2.233333rem;
  padding: 0.133333rem 0.133333rem 0rem 0.133333rem;
  overflow: hidden;
  box-sizing: border-box;
  margin-top: 0.066667rem;
}
.shudanimg {
  width: 4.46667rem;
}
.bookp {
  line-height: 0.6rem;
  padding-left: 0.15rem;
  font-size: 0.186667rem;
  color: #999;
}
.sdanullis li:last-child img {
  width: 0px;
}
.sdanullis li:last-child p {
  line-height: 0.333333rem;
  padding: 0 0.266667rem;
  color: #626262;
  font-size: 0.213333rem;
  text-align: center;
  height: 1.066667rem;
  margin-top: 0.8rem;
  font-weight: 600;
}
.level {
  width: 1.6rem;
  height: 0.3rem;
  font-size: 0;
  background: url(../assets/bookstore/level.png) no-repeat 0 0;
  background-size: 1rem auto;
  margin-left: 0.08rem;
}
.level_star_2 {
 background-position: 0 -0.17rem;
}
.level_star_5 {
  background-position: 0 -.753333rem;
}
.level_orange_3 {
  background-position: 0 -1.3rem;
}
.level_orange_1 {
  background-position: 0 -.93rem;
}
.level_red_3 {
  background-position: 0 -1.49rem;
}
</style>