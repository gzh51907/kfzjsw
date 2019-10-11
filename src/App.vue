<template>
  <div>
    <div>
      <el-row
        :gutter="20"
        id="start"
        style="margin:0"
        v-if="this.$route.path=='/home'| this.$route.path=='/book'|  this.$route.path=='/paimai'"
      >
        <el-col :span="4" v-for="item in menus" :key="item.name">
          <router-link :to="item.path" active-class="current" style="text-decoration: none;">
            <div class="nav">
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
          icon: "el-icon-house"
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
sty
<style >
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
a {
  text-decoration: none;
}
.el-col a{
  color: #555;
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
  align-items: center;
}
.current i{
  color: #C21B29;
  font-weight: bold;
}
.current .nav{
  color: #C21B29;
}
.nav {
  display: flex;
  flex-direction: column;
  font-size: .16rem;
}
.nav i {
  font-size: .346667rem;
}
.el-tabs__nav .el-tabs__item {
  padding: 0 .133333rem;
}
</style>
