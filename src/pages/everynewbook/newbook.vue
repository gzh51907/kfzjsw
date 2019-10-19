<template>
  <div>
    <header data-v-26464177 style="border-bottom:.013333rem solid #eee;">
      <i data-v-26464177 class="el-icon-arrow-left" @click="goOff()"></i>
      <span style="color:#333;font-size:.226667rem;">今日新书</span>
      <i data-v-26464177 class="el-icon-more"></i>
    </header>
    <div style="width:100%;position: relative;">
      <ul
        style="display: flex;justify-content: space-around;align-items:center;height:.8rem;font-size:.183333rem;"
        class="mushulnav"
      >
        <li v-for="(item,i) in mush" @click="navShow(i)">
          {{item.lisname}}
          <i :class="item.icon"></i>
        </li>
      </ul>
      <div style="height: .106667rem;background: #f8f8f8;"></div>
      <!--  -->
      <div style="width:100%;position: absolute;top:.92rem;background:#fff;" v-if="nav==1">
        <ul style>
          <li
            v-for="(item,i) in moren"
            style="border-bottom:.013333rem solid #eee;font-size:.12rem;"
            :key="item.pashli"
            @click="order(i)"
          >
            <div
              style="margin:0 .2rem;line-height:.866667rem;display: flex;justify-content: space-between;"
            >
              {{item.pashli}}
              <i
                class="el-icon-check"
                style="font-size:20px;color:red;line-height:.866667rem;"
                v-if="item.classname == 'true'"
              ></i>
            </div>
          </li>
        </ul>
      </div>
      <!-- maijiasuozaid -->
      <div style="width:100%;position: absolute;top:.92rem;background:#fff;" v-else-if="nav==2">
        <div style="margin:0 .4rem;">
          <h3
            style="width:100%;line-height:.666667rem;font-weight: 600;font-size:.146667rem;"
          >{{locat}}</h3>
          <ul style=" display: flex;justify-content: space-between;flex-wrap: wrap;">
            <li
              style="background:#eee;color: #333;width:21%;line-height:.533333rem;text-align: center;margin-bottom:.266667rem;font-size:.146667rem"
              v-for="item in region"
            >{{item}}</li>
          </ul>
        </div>
      </div>
      <!-- shaixuan -->
      <div style="width:100%;position: absolute;top:.92rem;background:#fff;" v-else-if="nav==3">
        <div style="margin:0 .2rem;">
          <h3
            style="color:#333;width:100%;line-height:.666667rem;font-weight: 600;font-size:.126667rem;"
          >铵价格筛选</h3>
          <div style="color:#999;margin-bottom:20px;">
            <span style="color:#999;margin-right:.3rem;">商品价格</span>
            <el-input placeholder style="width:.966667rem;margin-right:.11rem" v-model="inputval1"></el-input>一
            <el-input placeholder style="width:.966667rem;margin-left:.11rem;" v-model="inputval2"></el-input>
            <el-button
              type="danger"
              style="margin-left:.13rem;"
              size="mini"
              @click="buttominpi()"
            >确认</el-button>
          </div>
          <div>
            <h3
              style="width:100%;line-height:.666667rem;font-weight: 600;font-size:.126667rem;color:#333;"
            >分类浏览</h3>
            <ul>
              <li
                v-for="item in fenleiyulan"
                style="float: left;width:29%;text-align:center;height:.666667rem;background-color: #f5f5f5;margin:.08rem;padding-top:.133333rem;color: #333333;font-size:.12rem"
              >
                <p>{{item.text1}}</p>
                <p>{{item.text2}}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- listgood -->
    <div>
      <ul style="margin:0 15px;">
        <li
          v-for="item in datlere"
          @click="gotodetails(item._id)"
          :key="item.id"
          style="padding:10px 0;width:100%;display: flex;justify-content:space-between;"
        >
          <div style="width:.85rem;height:.85rem;text-align:center">
            <img :src="item.imgsrc" alt style="width:.6;height:100%" />
          </div>
          <div style="width:80%;border-bottom:1px solid #ccc;">
            <div>
              <p style="margin:0 0 20px 0px;font-size:16px;">{{item.title}}</p>
            </div>
            <div
              style="display: flex;justify-content:space-between;margin:10px 0px;font-size:14px;color:#999999"
            >
              <span>{{item.action0}}</span>
              <div>
                <span>{{item.action1}}</span>
                <span>({{item.action2}})</span>
              </div>
            </div>
            <div style="display: flex;justify-content:space-between;font-size:14px;">
              <div style="color:red;">
                <span>￥</span>
                <span style="color:#d00000;font-size:16px;">{{item.prite}}</span>
              </div>
              <span style="color:#999999">{{item.dateli}}</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      inputval1: "",
      inputval2: "",
      szdlna: "szd",
      nav: 0,
      activeIndex: "默认排序",
      mush: [
        {
          lisname: "默认排序",
          icon: "el-icon-caret-bottom"
        },
        {
          lisname: "所在地",
          icon: "el-icon-caret-bottom"
        },
        {
          lisname: "筛选",
          icon: "el-icon-caret-bottom"
        },
        {
          icon: "el-icon-s-operation"
        }
      ],
      moren: [
        { goinde: "mor", pashli: "默认排序", classname: "true" },
        { goinde: "priacc", pashli: "价格升序", classname: "fall" },
        { goinde: "priadd", pashli: "价格降序", classname: "fall" },
        { goinde: "cbacc", pashli: "出版时间降序", classname: "fall" },
        { goinde: "ssadd", pashli: "上书时间升序", classname: "fall" },
        { goinde: "ssacc", pashli: "上书时间降序", classname: "fall" },
        { goinde: "sdjacc", pashli: "书店等级降序", classname: "fall" }
      ],

      locat: "买家所在地",
      region: [
        "不限",
        "北京市",
        "上海市",
        "天津市",
        "重庆市",
        "安徽省",
        "福建省",
        "甘肃省",
        "广东省",
        "广西",
        "贵州省",
        "海南省",
        "河北省",
        "河南省",
        "黑龙江省",
        "湖北省",
        "湖南省",
        "吉林省",
        "江苏省",
        "江西省",
        "辽宁省",
        "内蒙古",
        "宁夏",
        "青海省",
        "山东省",
        "山西省",
        "陕西省",
        "四川省",
        "西藏",
        "新疆",
        "云南",
        "浙江省",
        "澳门",
        "中国台湾",
        "香港",
        "海外地区"
      ],
      fenleiyulan: [
        { text1: "线装古籍", text2: "(1343)" },
        { text1: "民国旧书", text2: "(749)" },
        { text1: "名人墨迹", text2: "(520)" },
        { text1: "名人字画", text2: "(2230)" },
        { text1: "期刊", text2: "(3008)" },
        { text1: "报纸", text2: "(674)" },
        { text1: "外文原版", text2: "(7850)" },
        { text1: "小说", text2: "(159960)" },
        { text1: "文学", text2: "(331654)" },
        { text1: "语言文字", text2: "(77302)" },
        { text1: "历史", text2: "(116521)" },
        { text1: "地理", text2: "(2898)" },
        { text1: "艺术", text2: "(132218)" },
        { text1: "政治", text2: "(63231)" },
        { text1: "法律", text2: "(53341)" },
        { text1: "军事", text2: "(12430)" },
        { text1: "哲学心理学", text2: "(176653)" },
        { text1: "宗教", text2: "(9889)" },
        { text1: "经济", text2: "(155607)" },
        { text1: "社会文化", text2: "(140470)" },
        { text1: "教育", text2: "(21632)" },
        { text1: "管理", text2: "(125887)" },
        { text1: "童书", text2: "(261819)" },
        { text1: "生活", text2: "(203579)" },
        { text1: "体育", text2: "(13177)" },
        { text1: "工程技术", text2: "(153436)" },
        { text1: "计算机与互联网", text2: "(65577)" },
        { text1: "自然科学", text2: "(81290)" },
        { text1: "医药卫生", text2: "(43769)" },
        { text1: "综合性图书", text2: "(8947)" },
        { text1: "国学古籍", text2: "(40950)" },
        { text1: "收藏与鉴赏", text2: "(7470)" },
        { text1: "红色文献", text2: "(820)" },
        { text1: "教材教辅考试", text2: "(547998)" },
        { text1: "古旧地图", text2: "(30)" },
        { text1: "照片影像", text2: "(324)" },
        { text1: "连环画", text2: "(1778)" },
        { text1: "版画宣传画", text2: "(202)" },
        { text1: "邮票税票", text2: "(634)" },
        { text1: "钱币", text2: "(1008)" },
        { text1: "碑帖印谱", text2: "(161)" },
        { text1: "红色收藏", text2: "(40)" },
        { text1: "文房雅玩", text2: "(309)" },
        { text1: "玉石金银木器", text2: "(1813)" },
        { text1: "漆器", text2: "(23)" },
        { text1: "陶器瓷器", text2: "(1133)" },
        { text1: "工艺品", text2: "(73)" },
        { text1: "收藏杂项", text2: "(3884)" },
        { text1: "笔墨", text2: "(4)" },
        { text1: "纸本", text2: "(74)" },
        { text1: "卡片", text2: "(143)" },
        { text1: "日历", text2: "(22)" },
        { text1: "包袋", text2: "(2)" },
        { text1: "摆件挂画", text2: "(60)" },
        { text1: "器皿", text2: "(12)" },
        { text1: "动漫影视周边", text2: "(107)" }
      ],
      datlere: {}
    };
  },
  async created(){
      let {data} = await this.$axios.get('http://127.0.0.1:1906/goods');
      this.datlere=data
      
  },
  methods: {
    goOff() {
      this.$router.go(-1);
    },
    gotodetails(id) {
      this.$router.push(`/details/${id}`);
      console.log(id);
      
    },
    navShow(index) {
      if (index == 0) {
        if (this.nav == 0) {
          this.nav = 1;
        } else {
          this.nav = 0;
        }
      } else if (index == 1) {
        if (this.nav == 0) {
          this.nav = 2;
        } else {
          this.nav = 0;
        }
      } else if (index == 2) {
        if (this.nav == 0) {
          this.nav = 3;
        } else {
          this.nav = 0;
        }
      }
    },
    async order(i) {
      if (this.moren[i].classname == "false") {
        this.moren.forEach(ele => {
          ele.classname = "false";
        });
        this.moren[i].classname = "true";
        if (i == 0) {
          let {
            data: { data }
          } = await this.$axios.get("http://127.0.0.1:1906/goods/");
          this.datlere = data;
        } else if (i == 1) {
          let {
            data: { data }
          } = await this.$axios.get("http://127.0.0.1:1906/goods/asc");
          this.datlere = data;
        } else if (i == 2) {
          let {
            data: { data }
          } = await this.$axios.get("http://127.0.0.1:1906/goods/desc");
          this.datlere = data;
        }
      } else {
        this.moren[i].classname = "false";
      }
      this.nav = 0;
    },
    async buttominpi() {
      let {
        data: { data }
      } = await this.$axios.get("http://127.0.0.1:1906/goods/pat", {
        params: {
          in1: this.inputval1,
          in2: this.inputval2
        }
      });
      console.log(this.inputval1, this.inputval2);
      this.datlere = data;
      this.inputval1 = "";
      this.inputval2 = "";
      this.nav = 0;
    }
  },
  async created() {
    let { data } = await this.$axios.get("http://127.0.0.1:1906/goods");
    this.datlere = data;
  }
};
</script>
<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
}

.mushulnav li:last-child i {
  font-size: 24px;
  color: rgb(95, 95, 95);
}
.icnvaclas {
  color: red;
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
</style>