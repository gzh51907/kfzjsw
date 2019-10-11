<template>
  <div>
    <div>
      <el-row
        :gutter="20"
        id="start"
        style="margin:0"
        v-if="this.$route.path=='/home'|this.$route.path=='/mine'| this.$route.path=='/book'| this.$route.path=='/cart' | this.$route.path=='/paimai'"
      >
        <el-col :span="4" v-for="item in menus" :key="item.name">
          <router-link :to="item.path" active-class="current">
            <div class="grid-content bg-purple">
              <i :class="item.icon"></i>
              {{item.text}}
            </div>
          </router-link>
        </el-col>
      </el-row>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      menus: [
        {
          name: "home",
          path: "/home",
          text: "首页",
          icon: "el-icon-s-home"
        },
        {
          name: "book",
          path: "/book",
          text: "书店",
          icon: "el-icon-notebook-2"
        },
        {
          name: "paimai",
          path: "/paimai",
          text: "拍卖",
          icon: "el-icon-bangzhu"
        },
        {
          name: "cart",
          path: "/cart",
          text: "购物车",
          icon: "el-icon-shopping-cart-full"
        },
        {
          name: "mine",
          path: "/mine",
          text: "我的",
          icon: "el-icon-user"
        }
      ]
    };
  },
  components: {}
};
</script>

<style >
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
a {
  text-decoration: none;
}
#start {
  position: fixed;
  width: 100%;
  height: 0.6rem;
  bottom: 0;
  left: 0;
  z-index: 88;
  text-align: center;
  background-color: #fff;
  display: flex;
  justify-content: space-around;
  justify-content: space-between;
}
.current {
  color: #fe846b;
  font-weight: bold;
}
.grid-content {
  display: flex;
  flex-direction: column;
}
.grid-content i {
  font-size: .266667rem;
}
.el-tabs__nav .el-tabs__item {
  padding: 0 .133333rem;
}
</style>
