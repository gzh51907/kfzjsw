<template>
    <div>
          <header>
            <i class="el-icon-arrow-left" @click="goOff"></i>
            个人中心
            <i class="el-icon-more"></i>
        </header>
    </div>
</template>
<script>
export default {
    data(){
        return{}
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
  width: 100%;
  height: .64rem;
  background-color: #fff;
  text-align: center;
  line-height: .64rem;
  position: relative;
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