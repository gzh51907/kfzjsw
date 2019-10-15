<template>
    <div class="details">
        <div class="tit">
            <div class="goback" @click="goOff"><i class="el-icon-arrow-left"></i></div>
            <div class="goback cart" @click="goto('/cart')"><i class="el-icon-shopping-cart-full"></i></div>
            <el-dropdown trigger="click">
                <span class="el-dropdown-link">
                    <div class="goback"><i class="el-icon-more"></i></div>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item icon="el-icon-bell">消息</el-dropdown-item>
                    <el-dropdown-item style="display:flex">
                        <div @click="goto('./home')">
                            <i class="el-icon-house"></i>
                            <span>首页</span>
                        </div>
                    </el-dropdown-item>
                    <el-dropdown-item icon="el-icon-search">搜索</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
        <van-swipe @change="onChange" class="banner">
            <van-swipe-item v-for="item in banner" :key="item">
                <img :src="require(`../assets/betails/${item}`)" alt="">
            </van-swipe-item>
            <div class="custom-indicator" slot="indicator">{{ current + 1 }}/{{banner.length}}</div>
        </van-swipe>
        <div class="title">
            <h1>盗墓玄机</h1>
        </div>
        <p class="price">
            <span class="price-now">
                <span class="price-icon">￥</span>
                <span class="price-txt">14.4</span>
            </span>
            <span class="discount">4.8折</span>
            <del>￥30</del>
            <span class="adr-send">北京海淀</span>
        </p>
        <p class="cns">
            <span class="cover-txt">全新</span>
            <span class="stock">库存1件</span>
        </p>
        <div class="notes-list"> 
                <p v-for="item in noteslist" :key="item.name">
                    <span class="note-title">{{item.name}}</span>
                    <span class="note-txt">{{item.val}}</span>
                </p>          
        </div>
        <div class="footer_inner">
            <p>
                <i class="el-icon-takeaway-box"></i>
                <span>店铺</span>
            </p>
            <p>
                <i class="el-icon-chat-dot-square"></i>
                <span>联系</span>
            </p>
            <p>
                <van-icon name="like-o" />
                <span>收藏</span>
            </p>
            <el-button-group>
                <el-button class="go-buy-btn" icon="el-icon-goods">立即购买</el-button>
                <el-button class="add-cart-btn" icon="el-icon-shopping-cart-2">加入购物车</el-button>
            </el-button-group>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      current: 0,
      banner: [
        "rhRM9wM8AD_b.jpg",
        "7eLYxGrNet_b.jpg",
        "67Qma7HWJY_b.jpg",
        "MQAKAeQSLJ_b.jpg",
        "qbK4dNjgyX_b.jpg"
      ],
      noteslist:[
          {
              name:'作者',
              val:'朱晓翔 著'
          },
          {
              name:'出版社',
              val:'中国华侨出版社'
          },
          {
              name:'ISBN',
              val:'9787511308313'
          },
          {
              name:'出版时间',
              val:'2011-01'
          },
          {
              name:'版次',
              val:'1'
          },
          {
              name:'装帧',
              val:'平装'
          },
          {
              name:'开本',
              val:'16开'
          },
          {
              name:'纸张',
              val:'胶版纸'
          },
          {
              name:'页数',
              val:'282页'
          },
          {
              name:'字数',
              val:'260千字'
          },
          {
              name:'定价',
              val:'30元'
          },
          {
              name:'货号',
              val:'yx'
          },
          {
              name:'上书时间',
              val:'2019-10-14'
          },

      ]
    };
  },
  methods: {
    goto(path) {
      this.$router.push(path);
    },
    goOff() {
      this.$router.go(-1);
    },
    onChange(index) {
      this.current = index;
    }
  }
};
</script>
<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
}
.details{
    padding-bottom: .733333rem;
    box-sizing: border-box;
}
.el-dropdown-menu {
  padding: 0;
}
.banner {
  width: 100%;
  height: 5rem;
  position: relative;
  img {
    width: 100%;
    height: 100%;
  }
  .custom-indicator {
    width: .533333rem;
    height: .266667rem;
    position: absolute;
    right: .266667rem;
    bottom: .266667rem;
    border-radius: .133333rem;
    text-align: center;
    background: rgba(37, 31, 28, 0.5);
    color: #fff;
    font-size: .213333rem;
  }
}
.tit {
  width: 100%;
  height: 0.666667rem;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9;
  display: flex;
  padding: 0 0.133333rem;
  justify-content: space-between;
  align-items: center;
  img {
    width: 1.333333rem;
    height: 0.36rem;
    position: absolute;
    right: 0.933333rem;
  }
  .cart {
    position: absolute;
    right: 0.8rem;
  }
  .goback {
    width: 0.4rem;
    height: 0.4rem;
    line-height: 0.506667rem;
    text-align: center;
    background: #000;
    opacity: 0.5;
    border-radius: 50%;
    i {
      font-size: 0.293333rem;
      color: #fff;
    }
  }
}
.title {
  width: 100%;
  height: 0.32rem;
  margin-top: 0.133333rem;
  padding: 0 0.133333rem;
  font-size: 0.266667rem;
  font-weight: bold;
}
.price {
  width: 100%;
  height: 0.4rem;
  margin-top: 0.133333rem;
  padding: 0 0.133333rem;
  display: flex;
  align-items: flex-end;
  position: relative;
  .price-now {
    color: #9e100e;
    .price-icon {
      font-size: 0.213333rem;
    }
    .price-txt {
      font-size: 0.266667rem;
      font-weight: bold;
    }
  }
  .discount {
    font-size: 0.16rem;
    color: #d48c68;
    margin-right: 0.133333rem;
  }
  .del {
    color: #ddd;
    font-size: 0.186667rem;
    margin-left: 0.266667rem;
  }
  .adr-send {
    position: absolute;
    right: 0.266667rem;
    font-size: 0.186667rem;
    color: #999;
  }
}
.cns {
  width: 100%;
  height: 0.346667rem;
  margin-top: 0.133333rem;
  padding: 0 0.266667rem 0 0.133333rem;
  display: flex;
  justify-content: space-between;
  .cover-txt {
    width: 0.56rem;
    height: 0.346667rem;
    padding: 0 0.106667rem;
    line-height: 0.346667rem;
    text-align: center;
    font-size: .16rem;
    border-radius: 0.066667rem;
    background-color: #ddd;
  }
  .stock {
    height: 0.346667rem;
    line-height: 0.346667rem;
    color: #999;
    font-size: .16rem;
  }
}
.notes-list{
    width: 100%;
    height: 4.266667rem;
    padding: .133333rem .2rem;
    box-sizing: border-box;
    .note-title{
        display: inline-block;
        width: 1rem;
        height: .306667rem;
        font-size: .186667rem;
        color: #aaa;
    }
    .note-txt{
            display: inline-block;
            font-size: .186667rem;
            color: #000;
        }
}
.footer_inner{
    width: 100%;
    height: .733333rem;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    padding: .133333rem .133333rem 0 .133333rem;
    box-sizing: border-box;
    background-color: #fff;
    p{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-right: .333333rem;
        i{
            width: .266667rem;
            height: .266667rem;
            font-size: .266667rem;
        }
        span{
            width: .333333rem;
            font-size: .16rem;
            text-align: center;
        }
    }
    .go-buy-btn{
        width: 1.333333rem;
        height: .533333rem;
        background-color: #D48C66;
        color: #fff;
        margin-left: .066667rem;
        padding: 0;
        font-size: .186667rem;
    }
    .add-cart-btn{
        width: 1.333333rem;
        height: .533333rem;
        background-color: #9E100E;
        color: #fff;;
        padding: 0;
        font-size: .186667rem;
    }
}
</style>
