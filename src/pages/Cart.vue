<template>
    <div>
        <header>
            <i class="el-icon-arrow-left" @click="goOff"></i>
            购物车
        </header>
        <div class="page-cart">
            <el-row v-for="(item,idx) in datalist" :key="item.id" style="margin-top:10px;border-bottom:1px solid #ccc;padding:10px 0;">
                <el-col :span="8" style="display:flex">
                    <el-checkbox v-model="checked" size="medium" style="margin-right:10px;margin-top:20px;"></el-checkbox>
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
                    <el-button type="danger" icon="el-icon-delete" @click="remove(idx)" circle size="mini" style="margin-top:10px;"></el-button>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="24" style="text-align:right;margin-top:20px;">
                    <el-button type="danger" icon="el-icon-delete" size="mini" @click="removeAll">清空购物车</el-button>
                </el-col>
            </el-row>
        </div>
        <div class="jiesuan">
            <el-col :span="12" class="price" style="">
                    总计：
                <span>￥ {{totalPrice.toFixed(2)}}</span>
            </el-col>
            <el-col :span="12" style="text-align:right">
                <el-button type="danger" icon="el-icon-shopping-bag-1">去结算</el-button>
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
          qty: 3
        },
        {
          id: "2",
          name: "牛津纺衬衫",
          imgurl:
            "gwzx.png",
          price: 238,
          qty: 2
        },
        {
          id: "3",
          name: "灯芯绒衬衫",
          imgurl:
            "mrmj.png",
          price: 98.9,
          qty: 1
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
<<<<<<< HEAD
<style lang="scss" scoped>
.page-cart {
  padding: .2rem;
  box-sizing: border-box;

  img {
    width: 1.333333rem;
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
      color: red;
  }
}
header {
  width: 100%;
  height: .64rem;
  background-color: #b81c22;
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
=======
<style scoped>
</style>
>>>>>>> yd
