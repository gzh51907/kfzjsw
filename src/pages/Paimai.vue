<template>
    <div style="padding-bottom:.6rem">
        <div class="header">
            <div class="logo">
                <img src="../assets/paimai/logo.png" alt="">
            </div>
            <div class="inner">
                <img src="../assets/paimai/serach.png" alt="">
                <input type="text" placeholder="拍品名称 拍主昵称">
            </div>
            <div class="message">
                <img src="../assets/paimai/message.png" alt="">
            </div>
        </div>
        <el-carousel trigger="click" class="banner" height="2.133333rem" >
            <el-carousel-item v-for="item in bannerimg" :key="item">
                <img :src="require(`../assets/paimai/${item}`)" alt="">
            </el-carousel-item>
        </el-carousel>
        <div class="nav-box">
            <div v-for="item in nav" :key="item.text">
                <img :src="require(`../assets/paimai/${item.img}`)" alt="">
                <span>{{item.text}}</span>
            </div>
        </div>
        <div class="auctionArea_box">
            <div class="two_module">
                <div class="module_list">
                    <div class="title">全部拍卖</div>
                    <div class="num">62782件</div>
                    <div class="img_box">
                        <img src="http://www.kongfz.cn/images/app/indexarea_2/quanbu.png" alt="">
                    </div>
                </div>
                <div class="module_list">
                    <div class="title">艺术品专场</div>
                    <div class="num">364场</div>
                    <div class="img_box">
                        <img src="http://www.kongfz.cn/images/app/indexarea_2/yishu.png" alt="">
                    </div>
                </div>
            </div>
            <div class="four_module">
                <div class="module_list" v-for="item in fourModule" :key="item.text">
                    <div>
                        <div class="title">{{item.text}}</div>
                        <div class="num">{{item.num}}</div>
                    </div>
                    <div class="img_box">
                        <img :src="require(`../assets/paimai/${item.img}`)" alt="">
                    </div>
                </div>
            </div>
        </div>
        <div class="title_box">
            <div class="title_line_left"></div>
            <span>推荐专场</span>
            <div class="title_line_right"></div>
            <div class="link_to">
               <i class="el-icon-arrow-right"></i>
            </div>
        </div>
        <div class="tuijian">
            <el-col class="list" v-for="item in tuijian" :key="item.text">
                    <img :src="require(`../assets/paimai/${item.img}`)" class="image">
                    <div class="content">
                        <span>{{item.text}}</span>
                        <div class="bottom">
                            <time class="time">{{item.time}}</time>
                            <span>{{item.name}}</span>
                        </div>
                    </div>
            </el-col>
        </div>
        <div class="title_box">
            <div class="title_line_left"></div>
            <span>今日热点</span>
            <div class="title_line_right"></div>
            <div class="link_to">
               <i class="el-icon-arrow-right"></i>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      bannerimg: ["pm-banner1.png", "pm-banner2.png", "pm-banner3.jpg"],
      nav: [
        {
          img: "xzgj.png",
          text: "线装古籍"
        },
        {
          img: "mrmj.png",
          text: "名人墨迹"
        },
        {
          img: "mrzh.png",
          text: "名人字画"
        },
        {
          img: "gwzx.png",
          text: "古玩杂项"
        },
        {
          img: "qbfl.png",
          text: "全部分类"
        }
      ],
      fourModule: [
        {
          text: "珍本拍卖",
          num: "184件",
          img: "zhenben.png"
        },
        {
          text: "大众拍卖",
          num: "34636件",
          img: "dazhong.png"
        },
        {
          text: "低价拍卖",
          num: "27681件",
          img: "dijia.png"
        },
        {
          text: "一口价拍卖",
          num: "281件",
          img: "yikoujia.png"
        }
      ],
      tuijian: [
        {
          text: "传承经典弘扬传统文化 1010-2",
          time: "10月06日-10月10日",
          name: "雅娟书画 >",
          img: "tuijian1.jpg"
        },
        {
          text: "传承经典弘扬传统文化 1010-3",
          time: "10月06日-10月10日",
          name: "雅娟书画 >",
          img: "tuijian2.jpg"
        },
        {
          text: "传承经典弘扬传统文化 10-4",
          time: "10月06日-10月10日",
          name: "雅娟书画 >",
          img: "tuijian3.jpg"
        },
        {
          text: "低价捡漏包邮字画专场三期",
          time: "10月03日-10月10日",
          name: "品逸轩 >",
          img: "tuijian4.jpg"
        },
        {
          text: "回流老画专场 四",
          time: "10月07日-10月10日",
          name: "回流老画 >",
          img: "tuijian5.jpg"
        },
        {
          text: "【书窗集韵】第7期",
          time: "10月07日-10月10日",
          name: "老纸老墨老字画店 >",
          img: "tuijian6.jpg"
        },
        {
          text: "传承经典弘扬传统文化 10-5",
          time: "10月06日-10月10日",
          name: "雅娟书画 >",
          img: "tuijian7.jpg"
        },
        {
          text: "大众典藏-精品国画拍卖专场第三期",
          time: "10月03日-10月10日",
          name: "品逸轩 >",
          img: "tuijian8.jpg"
        },
        {
          text: "传承经典弘扬传统文化 10-6",
          time: "10月06日-10月10日",
          name: "雅娟书画 >",
          img: "tuijian9.jpg"
        },
        {
          text: "【逍遥居】-------第一百二十六场，青花专场",
          time: "10月07日-10月10日",
          name: "李逍遥666 >",
          img: "tuijian10.jpg"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
}
.header {
  height: 0.64rem;
  padding: 0.093333rem 0.2rem;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  .logo {
    width: 0.453333rem;
    height: 0.346667rem;
    img {
      width: 100%;
    }
  }
  .inner {
    width: 3.466667rem;
    height: 0.453333rem;
    position: relative;
    img {
      position: absolute;
      width: 0.2rem;
      height: 0.2rem;
      top: 0.133333rem;
      left: 0.2rem;
    }
    input {
      width: 100%;
      height: 100%;
      border: none;
      background-color: #f5f5f5;
      border-radius: 0.226667rem;
      padding-left: 0.533333rem;
      box-sizing: border-box;
    }
  }
  .message {
    width: 0.28rem;
    height: 0.28rem;
    img {
      width: 100%;
      margin-top: 0.08rem;
    }
  }
}
.banner {
  width: 100%;
  height: 2.133333rem;
  img {
    width: 100%;
  }
}
.nav-box {
  width: 100%;
  height: 0.933333rem;
  display: flex;
    margin-bottom: 0.266667rem;
  div {
    width: 20%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    img {
      width: 0.293333rem;
    }
    span {
      font-size: 0.16rem;
      margin-top: 0.066667rem;
      color: #262626;
    }
  }
}
.auctionArea_box {
  width: 100%;
  height: 3.333333rem;
  padding: 0 0.133333rem;
  box-sizing: border-box;
  .two_module {
    height: 1.666667rem;
    display: flex;
    border-bottom: 1px solid #ddd;
    .module_list {
      width: 50%;
      height: 100%;
      position: relative;
      .title {
        height: 0.48rem;
        padding: 0.2rem 0 0 0.2rem;
        font-size: 0.2rem;
        font-weight: bold;
      }
      .num {
        height: 0.333333rem;
        padding: 0.066667rem 0 0 0.2rem;
        font-size: .16rem;
        color: #999;
      }
      .img_box {
        width: 1.066667rem;
        height: 0.8rem;
        position: absolute;
        right: 0.2rem;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .module_list:nth-child(1) {
      border-right: 1px solid #ddd;
    }
  }
  .four_module {
    height: 1.666667rem;
    display: flex;
    box-sizing: border-box;
    .module_list {
      width: 25%;
      height: 100%;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-right: 1px solid #ddd;
      .title {
        height: 0.226667rem;
        font-size: 0.2rem;
        font-weight: bold;
      }
      .num {
        height: 0.266667rem;
        margin-top: 0.133333rem;
        color: #999;
        font-size: .16rem;
      }
      .img_box {
        width: 0.906667rem;
        height: 0.666667rem;
        margin-top: 0.2rem;
        margin: 0 auto;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .module_list:nth-child(4) {
      border-right: none;
    }
  }
}
.title_box {
  width: 100%;
  height: 0.333333rem;
  padding: 0.533333rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  .title_line_left {
    width: 0.133333rem;
    height: 0.026667rem;
    background-color: #999;
    margin-right: 0.16rem;
  }
  span {
    font-size: 0.24rem;
    font-weight: bold;
  }
  .title_line_right {
    width: 0.133333rem;
    height: 0.026667rem;
    background-color: #999;
    margin-left: 0.16rem;
  }
  .link_to {
    width: 0.266667rem;
    height: 0.266667rem;
    position: absolute;
    right: 0.133333rem;
    i {
      width: 100%;
    }
  }
}
.tuijian {
  width: 100%;
  height: 2.84rem;
  display: flex;
  overflow: auto;
  .list {
    width: 2.773333rem;
    height: 2.84rem;
    margin-left: 0.133333rem;
    border-radius: 5px;
    box-shadow: #eee .026667rem .026667rem .053333rem .053333rem,#eee -.026667rem -.026667rem .053333rem .053333rem;
    .image {
    border-radius: .066667rem;
      width: 2.773333rem;
      height: 1.626667rem;
    }
    .content {
      height: 1.213333rem;
      border: 1px solid #ccc;
      border-top: none;
      display: flex;
      flex-direction: column;
      padding: 0 0.066667rem;
      box-sizing: border-box;
      > span {
        height: 0.56rem;
        display: block;
        font-size: 0.2rem;
        margin-top: 0.066667rem;
      }
      .bottom {
          height: .2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 0.066667rem;
        box-sizing: border-box;
        .time{
          font-size: .16rem;
        }
        span {
          font-size: 0.16rem;
          color: #666;
        }
      }
    }
  }
}
</style>
