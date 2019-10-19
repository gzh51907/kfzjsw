<template>
    <div class="carts">
        <header>
            <i class="el-icon-arrow-left" @click="goOff"></i>
            购物车
        </header>
        <div class="page-cart">
            <el-row v-for="(item,idx) in carts" :key="item.id" style="margin-top:.13333rem;border-bottom:.01333rem solid #ccc;padding:.1333rem 0;">
                <el-col :span="8" style="display:flex" @click="selectItem(idx)">
                    <van-checkbox v-model="item.selected" class="check" checked-color="#C21B29"></van-checkbox>
                    <img :src="item.imgurl" @click="gotodetails(item._id)"/>
                </el-col>
                <el-col :span="13" style="height:1.066667rem;font-size:.186667rem;display:flex;flex-direction: column;justify-content: space-between;">
                    <h4>{{item.name}}</h4>
                    <p class="price">
                        <span>￥ {{item.price}}</span>
                    </p>
                    <el-input-number size="mini" v-model="item.qty" :min="1" ></el-input-number>
                </el-col>
                <el-col :span="3" style="text-align:right">
                    <el-button type="danger" icon="el-icon-delete" @click="remove(item._id)" circle size="mini" style="margin-top:.13333rem;background:#C21B29"></el-button>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="22" :offset="2" style="text-align:left;margin-top:.466667rem;">
                    <el-button type="danger" style="background:#C21B29" icon="el-icon-delete" size="mini" @click="clearCart()">清空购物车</el-button>
                </el-col>
            </el-row>
        </div>
        <div class="jiesuan">
            <el-col :span="7" class="quanxuan" style="">
                <van-checkbox v-model="checkAll" class="checkall" checked-color="#C21B29"></van-checkbox>
                <span>全选</span>
            </el-col>
            <el-col :span="9" class="price" style="">
                    总计:
                <span>￥{{totalPrice}}</span>
            </el-col>
            <el-col :span="8" style="text-align:right">
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
      carts:[]
    };
  },
  computed: {
    cartlist() {
      //return this.$store.state.cart.cartlist;
    },
    totalPrice() {
      //return this.$store.getters.totalPrice;
       return Number(this.carts.reduce((prev,item)=>{
            // if(item.selected){
              return prev+item.price*item.qty*item.selected;
            // }
          },0)).toFixed(2)
    },
    checkAll: {
      get() {
        return this.carts.every(item => item.selected);
      },
      set(val) {
        // 主动修改：checkAll的值影响所有数据的值
        this.carts.forEach(item => (item.selected = val));
      }
    }
  },
  async created(){
    let { data } = await this.$axios.get('http://localhost:1906/order/gain');
    this.carts = data;
    
  },
  methods: {
    goOff() {
      this.$router.go(-1);
    },
    gotodetails(id){
      this.$router.push(`/details/${id}`);
    },
    // changeQty(id, qty) {
    //   this.$store.dispatch("changeQty", { id, qty });
    // },
    remove(id) {
      //this.$store.commit("removeFromCart", id);
      this.carts = this.carts.filter(item=>item._id!=id);
      this.$axios.delete('http://localhost:1906/order/remove',{params:{id}});
    },
    clearCart() {
      //this.$store.commit("clearCart");
      this.$axios.delete('http://localhost:1906/order/removeall');
      this.carts = [];
    },
    selectItem(idx) {
      this.$store.state.cart.cartlist.forEach((item, i) => {
        if (i === idx) item.selected = !item.selected;
      });
      this.totalPrice();
    }
  }
}
</script>
<style lang="scss" scoped>
.carts{
  width: 100%;
  height: 100%;
  padding-top: 0.64rem ;
  padding-bottom: .666667rem ;
}
.page-cart {
  padding: 0.2rem;
  box-sizing: border-box;
  .check {
    display: block;
    width: 0.266667rem;
    height: 0.266667rem;
    margin-right: 0.13333rem;
    margin-top: 0.266667rem;
  }
  img {
    width: 1.066667rem;
    height: 1.066667rem;
  }
  .price{
    span{
      color: #c21b29;
    }
  }
}
.jiesuan {
  width: 100%;
  height: 0.666667rem;
  border-top: 0.013333rem solid #ccc;
  background-color: #fff;
  padding: 0.133333rem;
  box-sizing: border-box;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 99;
  display: flex;
  align-items: center;
  font-size: 0.213333rem;
  .quanxuan{
    display: flex;
    align-items: center;
    .checkall{
    display: block;
    width: 0.266667rem;
    height: 0.266667rem;
    margin-right: .133333rem;
  }
  }
  
  span {
    font-size: 0.186667rem;
    color: #c21b29;
  }
}
header {
  width: 100%;
  height: 0.64rem;
  background-color: #c21b29;
  text-align: center;
  line-height: 0.64rem;
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  font-size: 0.213333rem;
  i {
    font-size: 0.4rem;
    position: absolute;
    top: 0.16rem;
    left: 0.266667rem;
  }
}
</style>
