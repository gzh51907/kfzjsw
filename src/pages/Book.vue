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
            <el-tabs v-model="activeName" @tab-click="handleClick">
              <el-tab-pane
                :label="item.tele"
                :name="item.tele"
                v-for="item in shudianlisgoods"
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
            <div style="width:100%;height: .293333rem;"></div>
            <!--  -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeName: "线装古籍",
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
      shudianlisgoods: [
        {
          tele: "线装古籍",
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
          tele: "国学古籍",
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
          tele: "历史",
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
          tele: "艺术",
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
          tele: "红色文献",
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
      ]
    };
  },
  methods: {
    handleClick(tab, event) {
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
</style>