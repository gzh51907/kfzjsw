<template>
    <div>
        <header>
            <i class="el-icon-arrow-left" @click="goOff"></i>
            购物车
        </header>
        <div class="page-cart">
            <el-row v-for="(item,idx) in datalist" :key="item.id" style="margin-top:.13333rem;border-bottom:.01333rem solid #ccc;padding:.1333rem 0;">
                <el-col :span="8" style="display:flex">
                    <van-checkbox v-model="item.selected" class="check" checked-color="#C21B29">复选框</van-checkbox>
                    <img :src="require(`../assets/paimai/${item.imgurl}`)" />
                </el-col>
                <el-col :span="13" style="display:flex;flex-direction: column;">
                    <h4>{{item.name}}</h4>
                    <p class="price">
                        <span>￥ {{item.price}}</span>
                    </p>
                    <el-input-number size="mini" v-model="item.qty" :min="1"></el-input-number>
                </el-col>
                <el-col :span="3" style="text-align:right">
                    <el-button type="danger" icon="el-icon-delete" @click="remove(idx)" circle size="mini" style="margin-top:.13333rem;background:#C21B29"></el-button>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="24" style="text-align:right;margin-top:.266667rem;">
                    <el-button type="danger" style="background:#C21B29" icon="el-icon-delete" size="mini" @click="removeAll">清空购物车</el-button>
                </el-col>
            </el-row>
        </div>
        <div class="jiesuan">
            <el-col :span="12" class="price" style="">
                    总计：
                <span>￥ {{totalPrice.toFixed(2)}}</span>
            </el-col>
            <el-col :span="12" style="text-align:right">
                <el-button type="danger" icon="el-icon-shopping-bag-1" style="background:#C21B29">去结算</el-button>
            </el-col>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      checked: false,
      datalist: [
        {
          id: "1",
          name: "免费衬衫",
          imgurl:
            "dijia.png",
          price: 138.8,
          qty: 3,
          selected: false
        },
        {
          id: "2",
          name: "牛津纺衬衫",
          imgurl:
            "gwzx.png",
          price: 238,
          qty: 2,
          selected: false
        },
        {
          id: "3",
          name: "灯芯绒衬衫",
          imgurl:
            "mrmj.png",
          price: 98.9,
          qty: 1,
          selected: false
        }
      ]
    };
  },
  computed: {
    totalPrice() {
      // let total = 0;
      // this.datalist.forEach(item=>{
      //     total += item.price*item.qty;
      // })
      // return total;

      return this.datalist.reduce((pre, item) => {
        // pre ： 前一次的返回值（第一次为初始值）
        return pre + item.price * item.qty;
      }, 0);
    }
  },
  methods: {
    goOff() {
      this.$router.go(-1);
    },
    remove(idx){
        this.datalist.splice(idx,1)
    },
    removeAll(){
         this.datalist.splice(0,this.datalist.length);
    }
  }
};
</script>
<style lang="scss" scoped>
.page-cart {
  padding: .2rem;
  box-sizing: border-box;
  .check{
    display: block;
    width:.266667rem;
    height:.266667rem;
    margin-right:.13333rem;
    margin-top:.266667rem;
  }
  img {
    width: 1.066667rem;
    height: 1.066667rem;
  }
}
.jiesuan {
  width: 100%;
  height: .666667rem;
  border-top: .013333rem solid #ccc;
  padding: .133333rem;
  box-sizing: border-box;
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  font-size: .213333rem;
  span{
    font-size: .186667rem;
      color: #C21B29;
  }
}
header {
  width: 100%;
  height: .64rem;
  background-color: #C21B29;
  text-align: center;
  line-height: .64rem;
  color: #fff;
  position: relative;
  font-size: .213333rem;
  i {
    font-size: .4rem;
    position: absolute;
    top: .16rem;
    left: .266667rem;
  }
}
</style>
