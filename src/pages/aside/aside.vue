<template>
  <div class="aside">
    <header>
      <i class="el-icon-house"></i>
      <i class="el-icon-search"></i>
      <i class="el-icon-close" @click="asideClose()"></i>
    </header>
    <section class="section1">
      <ul>
        <li v-for="item in asideSection1" :key="item.text">
          <span :class="item.icon"></span>
          <span class="text">{{item.text}}</span>
          <span class="messageAside" v-if="item.messageNumber!=0">{{item.messageNumber}}</span>
        </li>
      </ul>
    </section>
    <section class="section2">
      <ul>
        <li v-for="item in asideSection2" :key="item">
          <span class="text">{{item}}</span>
        </li>
      </ul>
    </section>
    <section class="section3">
      <ul>
        <li v-for="item in asideSection3" :key="item">
          <span class="text">{{item}}</span>
        </li>
      </ul>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      asideSection1: [
        {
          icon: "el-icon-chat-line-round",
          text: "我的消息",
          messageNumber: "1"
        },
        {
          icon: "el-icon-shopping-cart-full",
          text: "我的购物车",
          messageNumber: ""
        },
        {
          icon: "el-icon-user",
          text: "个人中心",
          messageNumber: ""
        },
        {
          icon: "el-icon-user-solid",
          text: "卖家中心",
          messageNumber: ""
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
      asideShowValue: 0
    };
  },
  methods: {
    asideClose() {
      this.$emit("asideClose");
    }
  }
};
</script>
<style lang="scss" scoped>
.aside {
  position: absolute;
  top: 0;
  right: 0;
  width: 0;
  height: 100%;
  background: #f8f8f8;
  z-index: 3;

  transition: all 0.2s;
  white-space: nowrap;
  overflow: hidden;

  header {
    width: 100%;
    background-color: #fff;
    text-align: center;
    line-height: 0.64rem;
    position: relative;
    font-size: 0.213333rem;
    display: flex;
    justify-content: space-between;
    padding: 0 0.2rem;
    align-items: center;
    border-bottom: 1px solid #eee;
    height: 0.6rem;
    padding: 0 0.3rem;
    background: #f8f8f8;

    i {
      font-size: 0.28rem;
    }
  }
  .section1 {
    ul {
      margin-bottom: 0.1rem;
      li {
        padding-left: 0.2rem;
        border-bottom: 1px solid #eee;
        height: 0.533333rem;
        display: flex;
        align-items: center;
        background-color: white;

        span:nth-child(1) {
          margin-right: 0.066667rem;
          width: 0.266667rem;
          font-size: 0.23rem;
        }
        .text {
          font-size: 0.18rem;
          width: 1.433333rem;
        }

        .messageAside {
          padding: 0 0.04rem;
          border-radius: 2rem;
          background-color: red;
          font-size: 0.133333rem;
          color: white;
          float: right;
        }
      }
    }
  }
  .section2,
  .section3 {
    ul {
      margin-bottom: 0.1rem;
      li {
        padding-left: 0.573333rem;
        border-bottom: 1px solid #eee;
        height: 0.533333rem;
        display: flex;
        align-items: center;
        background-color: white;

        .text {
          font-size: 0.18rem;
          width: 1.433333rem;
        }
      }
    }
  }
}
</style>