<template>
    <div>
          <header>
            <i class="el-icon-arrow-left" @click="goOff"></i>
           <b>全部分类——孔夫子旧书网</b>
            <i class="el-icon-more"></i>
        </header>
        <div style="margin-top:.6rem">
          <el-tabs tab-position="left" style="height:100%;">
            <el-tab-pane :label="item.name1"  v-for="item in data" :key="item.name1">
               <h4 style="">{{item.name1}}</h4>
              <ul style="display:flex;flex-wrap:wrap;overflow: hidden;height:100%;">
                <li v-for="val in item.lists" :key="val.img" style="width:1.733333rem;display:flex;flex-wrap:wrap;margin:.2rem .05rem;">
                  <img :src="val.img" style="width:.466667rem;height:.566667rem;">
                  <div style="margin:0 0 0 .1rem;">
                    <p style="margin-bottom:.05rem">{{val.name}}</p>
                  <p>{{val.count}}</p>
                  </div>
                </li>
              </ul>
            </el-tab-pane>
            
          </el-tabs>
        </div>
    </div>
</template>
<script>
import data from '../../data/fenlei.json'

export default {
    data(){
        return{
          data,
        }
    },
    methods:{
        goOff() {
      this.$router.go(-1);
    },
    }
}
</script>
<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 88;
  width: 100%;
  height: .64rem;
  background-color: #fff;
  text-align: center;
  line-height: .64rem;
  font-size: .213333rem;
  display: flex;
  justify-content: space-between;
  padding: 0 .2rem ;
  align-items: center;
}
header i {
    font-size: .4rem;
  }
</style>