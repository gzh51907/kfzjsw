<template>
  <div class="mine">
    <main>
      <header>
        <i class="el-icon-arrow-left" @click="goOff"></i>
        个人中心
        <i class="el-icon-more" @click="asideShow()">
          <span
            class="message"
            v-if="messageNumberPersonalCenter!=0"
          >{{messageNumberPersonalCenter}}</span>
        </i>
      </header>

      <!-- 用户信息 -->
      <section class="user">
        <div class="left">
          <img :src="userImgSrc" alt />
        </div>

        <div class="right">
          <p>
            <span>欢迎您 {{username}}</span>
            <span>
              帐户管理
              <i class="el-icon-arrow-right"></i>
            </span>
          </p>

          <p class="p2">
            买家好评率：
            <span>{{favorableRate}}</span>
            买家信誉：
            <span>{{userReputation}}</span>
          </p>
        </div>
      </section>

      <!-- 我的订单 -->
      <section class="order">
        <div class="top">
          <span class="span1">我的订单</span>
          <span class="span2">
            查看全部
            <i class="el-icon-arrow-right"></i>
          </span>
        </div>

        <div class="bottom">
          <ul>
            <li>
              <i class="el-icon-circle-check"></i>
              <p>待确认</p>
            </li>
            <li>
              <i class="el-icon-s-finance"></i>
              <p>待付款</p>
            </li>

            <li>
              <i class="el-icon-ship"></i>
              <p>待发货</p>
            </li>

            <li>
              <i class="el-icon-truck"></i>
              <p>待收货</p>
            </li>
            <li>
              <i class="el-icon-medal"></i>
              <p>待评价</p>
            </li>
          </ul>
        </div>
      </section>

      <!-- 我的拍卖交易 -->
      <section class="auction">
        <div class="top">
          <span class="span1">我的拍卖交易</span>
          <span class="span2">
            查看全部
            <i class="el-icon-arrow-right"></i>
          </span>
        </div>

        <div class="bottom">
          <ul>
            <li>
              <i class="el-icon-s-finance"></i>
              <p>待付款</p>
            </li>

            <li>
              <i class="el-icon-ship"></i>
              <p>待发货</p>
            </li>

            <li>
              <i class="el-icon-truck"></i>
              <p>待收货</p>
            </li>
            <li>
              <i class="el-icon-medal"></i>
              <p>待评价</p>
            </li>
          </ul>
        </div>
      </section>

      <!-- 资金账户 -->
      <section class="account">
        <span>资金账户</span>
        <span>
          余额：
          <span>
            {{balance}}
            <i class="el-icon-arrow-right"></i>
          </span>
        </span>
      </section>

      <!-- 邀请有礼 -->
      <section class="invitation">
        <span>邀请有礼</span>
        <span>
          邀请好友注册得好礼
          <i class="el-icon-arrow-right"></i>
        </span>
      </section>

      <!--其他一堆入口 -->
      <section class="other">
        <ul>
          <li @click="goCart()">
            <i class="el-icon-shopping-cart-full" style="color:red">
              <span class="message" v-if="messageNumberCar!=0">{{messageNumberCar}}</span>
            </i>
            <p>购物车</p>
          </li>
          <li>
            <i class="el-icon-s-comment" style="color:green">
              <span class="message" v-if="messageNumberMyMessage!=0">{{messageNumberMyMessage}}</span>
            </i>
            <p>我的消息</p>
          </li>

          <li>
            <i class="el-icon-star-on" style="color:red">
              <span
                class="message"
                v-if="messageNumberMyCollection!=0"
              >{{messageNumberMyCollection}}</span>
            </i>
            <p>我的收藏</p>
          </li>

          <li>
            <i class="el-icon-location" style="color:black">
              <span
                class="message"
                v-if="messageNumberReceivingAddress!=0"
              >{{messageNumberReceivingAddress}}</span>
            </i>
            <p>收货地址</p>
          </li>
        </ul>
        <ul>
          <li>
            <i class="el-icon-dish" style="color:orange">
              <span class="message" v-if="messageNumberMyAuction!=0">{{messageNumberMyAuction}}</span>
            </i>
            <p>我的竞拍</p>
          </li>
          <li>
            <i class="el-icon-s-promotion" style="color:blue">
              <span class="message" v-if="messageNumberMyFootprint!=0">{{messageNumberMyFootprint}}</span>
            </i>
            <p>我的足迹</p>
          </li>

          <li>
            <i class="el-icon-s-claim" style="color:green">
              <span
                class="message"
                v-if="messageNumberMySubscription!=0"
              >{{messageNumberMySubscription}}</span>
            </i>
            <p>我的订阅</p>
          </li>

          <li>
            <i class="el-icon-goblet-square-full" style="color:brown">
              <span
                class="message"
                v-if="messageNumberReputationRecord!=0"
              >{{messageNumberReputationRecord}}</span>
            </i>
            <p>信誉档案</p>
          </li>
        </ul>
        <ul>
          <li>
            <i class="el-icon-service" style="color:blue">
              <span class="message" v-if="messageNumberServiceWord!=0">{{messageNumberServiceWord}}</span>
            </i>
            <p>客服留言</p>
          </li>
          <li>
            <i class="el-icon-view" style="color:red">
              <span
                class="message"
                v-if="messageNumberSpervisionAdvise!=0"
              >{{messageNumberSpervisionAdvise}}</span>
            </i>
            <p>监督与建议</p>
          </li>

          <li>
            <i class="el-icon-edit-outline" style="color:purple">
              <span
                class="message"
                v-if="messageNumberOpinionFeedback!=0"
              >{{messageNumberOpinionFeedback}}</span>
            </i>
            <p>意见反馈</p>
          </li>
        </ul>
      </section>

      <footer>
        <div class="top">
          <ul>
            <li>欢迎您 {{username}}</li>|
            <li @click="logout">退出</li>|
            <li>客服留言</li>|
            <li>电脑版</li>
          </ul>
        </div>
        <div class="bottom">京ICP证041501 孔夫子拍卖网</div>
      </footer>

      <section class="shade" v-show="asideWidth"></section>
    </main>

    <asided v-on:asideClose="asideClose" :style="{width:asideWidth}"></asided>
  </div>
</template>
<script>
import { mapState, mapGetters, mapMutations } from "vuex";
import asided from "./aside/aside.vue";

// 禁止滑动
var preD = function(e) {
  e.preventDefault();
};

export default {
  data() {
    return {
      username: "",
      userImgSrc: require("../assets/Mine/11186033.jpg"),
      favorableRate: "0%",
      userReputation: "0",
      balance: "￥0.00",
      messageNumberPersonalCenter: "1",

      messageNumberCar: "0",
      messageNumberMyMessage: "1",
      messageNumberReceivingAddress: "0",
      messageNumberMyCollection: "0",

      messageNumberMyAuction: "0",
      messageNumberMyFootprint: "0",
      messageNumberMySubscription: "0",
      messageNumberReputationRecord: "0",

      messageNumberServiceWord: "0",
      messageNumberSpervisionAdvise: "0",
      messageNumberOpinionFeedback: "0",

      asideSection1: [
        {
          icon: "el-icon-chat-line-round",
          text: "我的消息",
          messageNumber: "0"
        },
        {
          icon: "el-icon-shopping-cart-full",
          text: "我的购物车",
          messageNumber: "0"
        },
        {
          icon: "el-icon-user",
          text: "个人中心",
          messageNumber: "0"
        },
        {
          icon: "el-icon-user-solid",
          text: "卖家中心",
          messageNumber: "0"
        }
      ],
      asideSection2: [
        "我的订单",
        "我的拍卖交易",
        "我的竞拍",
        "资金账户",
        "我的足迹"
      ],
      asideSection3: ["书店区", "在线拍卖", "资讯", "社区"],
      asideWidth: 0,
      popupStatus: false
    };
  },
  created() {
    
    this.username = this.$route.query.username;

    this.activeIndex = this.$route.path;

    this.$store.dispatch("checkLogin");
  },
  methods: {
    goOff() {
      this.$router.go(-1);
    },
    goCart() {
      this.$router.push("/cart");
    },
    asideShow() {
      console.log(55);

      this.asideWidth = "2.4rem";
      var mo = function(e) {
        e.preventDefault();
      };
      document.body.style.overflow = "hidden";
      document.addEventListener("touchmove", mo, false); //禁止页面滑动
    },
    asideClose() {
      this.asideWidth = 0;
    },
    // ...mapMutations({
    //   signout:'logout',
    //     userlogout(commit,payload){
    //        commit('logout',payload)
    //     }
    // })
    ...mapMutations(["logout"])
    // logout() {
    //   console.log(1111);
    //   this.$store.commit("logout");
    // }
  },
  components: {
    asided
  }
};
</script>
<style lang="scss" scoped>
i {
  font-size: 0.35rem;
  vertical-align: middle;
  color: #999;
  position: relative;
}

.mine {
  position: relative;
  background-color: #f8f8f8;
  .message {
    position: absolute;
    top: -0.1rem;
    right: -0.013333rem;
    padding: 0.013333rem 0.026667rem;
    border-radius: 0.09rem;
    background-color: red;
    font-size: 0.133333rem;
    color: white;
  }
}

main {
  .shade {
    position: absolute;
    top: 0;
    right: 0;
    opacity: 0.9;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 1;
  }

  header {
    width: 100%;
    height: 0.6rem;
    background-color: #fff;
    text-align: center;
    line-height: 0.64rem;
    position: relative;
    font-size: 0.213333rem;
    display: flex;
    justify-content: space-between;
    padding: 0 0.2rem;
    align-items: center;
    i {
      font-size: 0.28rem;
    }
  }

  .user {
    height: 1.3rem;
    line-height: 0.333333rem;
    color: #fff;
    padding: 0.333333rem 0.25rem;
    background: url(../assets/Mine/personal_info.jpg) no-repeat 0 0;
    background-size: cover;
    display: flex;

    .left {
      img {
        width: 0.666667rem;
        height: 0.666667rem;
      }
    }
    .right {
      padding-left: 0.266667rem;
      font-size: 0.19667rem;
      flex: 1;
      p {
        display: flex;
        justify-content: space-between;
        span {
          display: inline-block;
          vertical-align: middle;
          max-width: 1.533333rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          font-size: 0.2rem;
          i {
            font-size: 0.25rem;
            font-weight: 900;
            -webkit-text-stroke-width: 0.002667rem;
            vertical-align: middle;
          }
        }
      }
      .p2 {
        font-size: 0.19rem;
        color: rgba(255, 255, 255, 0.6);
        justify-content: flex-start;
        span {
          margin-right: 0.156667rem;
        }
      }
    }
  }

  .order,
  .auction {
    border-top: 0.013333rem solid #eee;
    border-bottom: 0.013333rem solid #eee;
    background: #fff;
    margin-bottom: 0.076667rem;

    .top {
      padding: 0 0.2rem;
      height: 0.666667rem;
      line-height: 0.666667rem;
      font-size: 0.226667rem;
      display: block;
      border-bottom: 1px solid #eee;
      .span2 {
        font-size: 0.2rem;
        color: #999;
        float: right;
        i {
          // -webkit-text-stroke-width: 0.003667rem;
          font-size: 0.266667rem;
          vertical-align: middle;
        }
      }
    }
    .bottom {
      padding: 0.2rem 0;
      height: 1.1rem;
      ul {
        display: flex;
        height: 100%;
        justify-content: space-around;

        li {
          width: 20%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;

          p {
            color: #999;
            font-size: 0.173333rem;
          }
        }
      }
    }
  }

  .account,
  .invitation {
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    background: #fff;

    padding: 0 0.2rem;
    height: 0.666667rem;
    font-size: 0.226667rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 0.076667rem;
    span {
      color: #333;
      font-size: 0.2rem;
    }
  }

  .other {
    background-color: white;
    margin-bottom: 0.093333rem;
    ul {
      display: flex;
      height: 1.053333rem;
      padding: 0.2rem 0;
      border-bottom: 1px solid #eee;
      font-size: 0.16rem;

      li {
        width: 25%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

        i {
          font-size: 0.36rem;
        }
        p {
          color: #999;
        }
      }
    }
  }

  footer {
    .top {
      ul {
        padding: 0 0.2rem;
        border-top: 0.013333rem solid #eee;
        background: #fbfbfb;
        height: 0.533333rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #cccccc;

        li {
          font-size: 0.19rem;
          color: #666;
          max-width: 1.333333rem;
          word-break: break-all;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }
    .bottom {
      height: 0.533333rem;
      line-height: 0.533333rem;
      text-align: center;
      background: #fff;
      border-top: 1px solid #eee;
      color: #999;
      font-size: 0.173333rem;
    }
  }
}
</style>