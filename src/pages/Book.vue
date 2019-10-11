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
          <div v-for="item in innernav">
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
          <div v-for="item in module" class="linnebox">
            <p class="telercla">{{item.teler}}</p>
            <p class="zuozcla">{{item.zuoz}}</p>
            <img :src="item.imgsrc1" alt style="width:1.8rem; border-radius: .066667rem;" />
          </div>
          <div>
            <div v-for="item in moduleone" class="linnebox">
              <div style="float:left;">
                <p class="telercla">{{item.teler}}</p>
                <p class="zuozcla">{{item.zuoz}}</p>
              </div>
              <img :src="item.imgsrc1" alt style="width: .533333rem;float:right;" />
            </div>
          </div>
          <div style="display:flex;justify-content:space-around;flex-wrap: wrap;">
            <div v-for="item in moduletow" class="linnebox">
              <div style="float:left;">
                <p class="telercla">{{item.teler}}</p>
                <p class="zuozcla">{{item.zuoz}}</p>
              </div>
              <img :src="item.imgsrc1" alt style="width: .533333rem;float:right;" />
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
        <div style="margin-bottom:150px;margin-left:15px;color:#999" class="teselis">
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane
              :label="item.tele"
              :name="item.tele"
              v-for="item in testlisnav"
              :key="item.tele"
            >
              <div>
                <ul>
                  <li v-for="ele in item.divgood">{{ele}}</li>
                </ul>
              </div>
            </el-tab-pane>
          </el-tabs>
          <!--  -->
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
          teler: "傅雷",
          zuoz: "孤独的赤子",
          imgsrc1: require("../assets/bookstore/7fa1558502fd8acb09928ab973e7f888.jpg")
        },
        {
          teler: "丰子恺",
          zuoz: "一钩新月天如水",
          imgsrc1: require("../assets/bookstore/95a7cad9e5591bddef5f58316907eeb8.jpg")
        },
        {
          teler: "傅雷",
          zuoz: "孤独的赤子",
          imgsrc1: require("../assets/bookstore/7fa1558502fd8acb09928ab973e7f888.jpg")
        },
        {
          teler: "丰子恺",
          zuoz: "一钩新月天如水",
          imgsrc1: require("../assets/bookstore/95a7cad9e5591bddef5f58316907eeb8.jpg")
        },
        {
          teler: "傅雷",
          zuoz: "孤独的赤子",
          imgsrc1: require("../assets/bookstore/7fa1558502fd8acb09928ab973e7f888.jpg")
        },
        {
          teler: "丰子恺",
          zuoz: "一钩新月天如水",
          imgsrc1: require("../assets/bookstore/95a7cad9e5591bddef5f58316907eeb8.jpg")
        },
        {
          teler: "傅雷",
          zuoz: "孤独的赤子",
          imgsrc1: require("../assets/bookstore/7fa1558502fd8acb09928ab973e7f888.jpg")
        },
        {
          teler: "丰子恺",
          zuoz: "一钩新月天如水",
          imgsrc1: require("../assets/bookstore/95a7cad9e5591bddef5f58316907eeb8.jpg")
        },
        {
          teler: "傅雷",
          zuoz: "孤独的赤子",
          imgsrc1: require("../assets/bookstore/7fa1558502fd8acb09928ab973e7f888.jpg")
        },
        {
          teler: "丰子恺",
          zuoz: "一钩新月天如水",
          imgsrc1: require("../assets/bookstore/95a7cad9e5591bddef5f58316907eeb8.jpg")
        },
        {
          teler: "傅雷",
          zuoz: "孤独的赤子",
          imgsrc1: require("../assets/bookstore/7fa1558502fd8acb09928ab973e7f888.jpg")
        },
        {
          teler: "丰子恺",
          zuoz: "一钩新月天如水",
          imgsrc1: require("../assets/bookstore/95a7cad9e5591bddef5f58316907eeb8.jpg")
        },
        {
          teler: "傅雷",
          zuoz: "孤独的赤子",
          imgsrc1: require("../assets/bookstore/7fa1558502fd8acb09928ab973e7f888.jpg")
        },
        {
          teler: "丰子恺",
          zuoz: "一钩新月天如水",
          imgsrc1: require("../assets/bookstore/95a7cad9e5591bddef5f58316907eeb8.jpg")
        },
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
      testlisnav: [
        { tele: "线装古籍", divgood: ["线装古籍111", "w hao shuai a"] },
        { tele: "国学古籍", divgood: ["线装古国学古籍籍111"] },
        { tele: "民国旧书", divgood: ["名人墨迹www"] },
        { tele: "名人墨迹", divgood: ["民国旧书222"] },
        { tele: "艺术珍本", divgood: ["艺术珍本sss"] },
        { tele: "史学典籍", divgood: ["史学典籍2222"] }
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
}
.linnebox {
  background: #fafafa;
  width: 2.233333rem;
  padding: 0rem 0.133333rem 0.1rem 0.133333rem;
  overflow: hidden;
  box-sizing: border-box;
  margin-top: 0.066667rem;
}
</style>