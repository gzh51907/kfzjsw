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
            v-for="item in moren"
            style="border-bottom:.013333rem solid #eee;font-size:.12rem;"
            :key="item.pashli"
          >
            <div
              style="margin:0 .2rem;line-height:.866667rem;display: flex;justify-content: space-between;"
            >
              {{item.pashli}}
              <i
                class="el-icon-check"
                style="font-size:20px;color:red;line-height:.866667rem;"
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
            <el-input placeholder style="width:.966667rem;margin-right:.11rem"></el-input>一
            <el-input placeholder style="width:.966667rem;margin-left:.11rem;"></el-input>
            <el-button type="danger" style="margin-left:.13rem;" size="mini">确认</el-button>
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
        {
          goinde: "mor",
          pashli: "默认排序"
        },
        { goinde: "priacc", pashli: "价格升序" },
        { goinde: "priadd", pashli: "价格降序" },
        { goinde: "cbacc", pashli: "出版时间降序" },
        { goinde: "ssadd", pashli: "上书时间升序" },
        { goinde: "ssacc", pashli: "上书时间降序" },
        { goinde: "sdjacc", pashli: "书店等级降序" }
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
      datlere: [
        {
          imgsrc:
            "https://www.kfzimg.com/G06/M00/C9/A0/p4YBAFqYTOaAS8VZAACLOM-1w80486_s.jpg",
          title: "开启创新之门 创新人才素质教育与实践",
          action0: "九五品",
          action1: "四合文化图书馆",
          action2: "5星",
          prite: "12.80",
          dateli: "今日19:33"
        },
        {
          imgsrc:
            "https://www.kfzimg.com/G06/M00/C5/23/p4YBAFsjmwKAE2D5AAFYOAyMWFY031_s.jpg",
          title: "新书--设计新经典:植物花卉插画图案集",
          action0: "九五品",
          action1: "缘文轩书店",
          action2: "5星",
          prite: "80.24",
          dateli: "今日19:33"
        },
        {
          imgsrc:
            "https://www.kfzimg.com/G06/M00/CC/BC/p4YBAFsj0waAbeoiAABVXJP84Ss808_s.jpg",
          title:
            "新书--中国社会科学引文索引（cssci）来源集刊：诸子学刊（第十五辑）",
          action0: "九五品",
          action1: "缘文轩书店",
          action2: "5星",
          prite: "74.34",
          dateli: "今日19:33"
        },
        {
          imgsrc:
            "https://www.kfzimg.com/G06/M00/E0/1A/p4YBAFqY4tOAEDY_AACRV1Iia30826_s.jpg",
          title: "药物分析学习指导与习题集（第2版 本科药学配教）",
          action0: "全新",
          action1: "华宇文化",
          action2: "5星",
          prite: "13.80",
          dateli: "今日19:33"
        },
        {
          imgsrc:
            "https://www.kfzimg.com/G06/M00/34/22/p4YBAFqbPuGAFrgsAABTS8eULyk554_s.jpg",
          title: "Pick定理",
          action0: "九品",
          action1: "丰林书店",
          action2: "3钻",
          prite: "34.00",
          dateli: "今日19:33"
        },
        {
          imgsrc:
            "https://www.kfzimg.com/G06/M00/4E/F5/p4YBAFqkwU-AVFz0AABVAc1yt1A411_s.jpg",
          title: "机械工程专业英语（第17版）",
          action0: "九品",
          action1: "丰林书店",
          action2: "3钻",
          prite: "13.00",
          dateli: "今日19:33"
        },
        {
          imgsrc:
            "https://www.kfzimg.com/G06/M00/D9/F5/p4YBAFqgvemABpe1AABuRKqmf7g153_s.jpg",
          title: "物理化学核心教程（第三版）",
          action0: "全新",
          action1: "华宇文化",
          action2: "5星",
          prite: "27.14",
          dateli: "今日19:33"
        },
        {
          imgsrc:
            "https://www.kfzimg.com/G06/M00/C9/A0/p4YBAFqYTOmAYS0lAACHh9o9DmA494_s.jpg",
          title: "钒钛磁铁矿烧结特性与强化技术研究",
          action0: "九五品",
          action1: "四合文化图书馆",
          action2: "5星",
          prite: "15.20",
          dateli: "今日19:33"
        },
        {
          imgsrc:
            "https://www.kfzimg.com/G06/M00/11/BB/p4YBAFqaEhiAPqFmAAEpXe3S7mU409_s.jpg",
          title: "名医话养生：十大营养科主任教你吃出健康",
          action0: "全新",
          action1: "心中有书图书",
          action2: "3星",
          prite: "13.68",
          dateli: "今日19:33"
        },
        {
          imgsrc:
            "https://www.kfzimg.com/G07/M00/07/93/q4YBAFvsSSCABIDQAAAxxlEPsCs767_s.jpg",
          title: "中国古代史（下）（第4版）",
          action0: "全新",
          action1: "博通文化",
          action2: "1钻",
          prite: "28.60",
          dateli: "今日19:33"
        },
        {
          imgsrc:
            "https://www.kfzimg.com/G06/M00/EC/A2/p4YBAFqZHdSAH1qlAABAAfnToDg656_s.jpg",
          title: "知识型企业组群的知识状态系统演化",
          action0: "全新",
          action1: "瑞华图书",
          action2: "3星",
          prite: "14.00",
          dateli: "今日19:33"
        },
        {
          imgsrc:
            "https://www.kfzimg.com/G06/M00/3A/F4/p4YBAFqbXRqAORkxAADCutPxbug730_s.jpg",
          title: "激光制备先进材料及其应用",
          action0: "九五品",
          action1: "四合文化图书馆",
          action2: "5星",
          prite: "25.60",
          dateli: "今日19:33"
        },
        {
          imgsrc:
            "https://www.kfzimg.com/G06/M00/53/11/p4YBAFqb9hWAC7a-AADvJaBuWh4361_s.jpg",
          title: "日本历届（初级）广中杯数学竞赛试题及解答（第2卷）",
          action0: "九品",
          action1: "丰林书店",
          action2: "3钻",
          prite: "19.00",
          dateli: "今日19:33"
        },
        {
          imgsrc:
            "https://www.kfzimg.com/G06/M00/1B/F6/p4YBAFqaPSyAZpRnAAE-nMhA1WI258_s.jpg",
          title: "名医话养生：老马识“毒”",
          action0: "全新",
          action1: "心中有书图书",
          action2: "3星",
          prite: "13.68",
          dateli: "今日19:33"
        },
        {
          imgsrc:
            "https://www.kfzimg.com/G06/M00/58/6D/p4YBAFtMoKCAOxyPAAChxGSJFp0483_s.jpg",
          title: "心经修行课:过往不恋 将来不负（精装）",
          action0: "九五品",
          action1: "张杰书店",
          action2: "3钻",
          prite: "25.10",
          dateli: "今日19:33"
        },
        {
          imgsrc:
            "https://www.kfzimg.com/G06/M00/D1/90/p4YBAFqYrF6AGmYEAABP4nZV4xc553_s.jpg",
          title: "社会变迁中的我国中小学教师队伍发展研究",
          action0: "全新",
          action1: "博通文化",
          action2: "1钻",
          prite: "28.60",
          dateli: "今日19:33"
        },
        {
          imgsrc:
            "https://www.kfzimg.com/G06/M00/9D/A8/p4YBAFvJlWSALeb1AADaA-Sl1dE345_s.jpg",
          title: "高血压脑卒中家庭健康管理手册",
          action0: "九五品",
          action1: "Di9书城",
          action2: "5星",
          prite: "25.50",
          dateli: "今日19:33"
        },
        {
          imgsrc:
            "https://www.kfzimg.com/G06/M00/5B/21/p4YBAFqciLGAA3IAAACdDpzR7Jg765_s.jpg",
          title: "钳工职业技能零起点丛书：工具钳工问答",
          action0: "全新",
          action1: "心中有书图书",
          action2: "3星",
          prite: "13.68",
          dateli: "今日19:33"
        },
        {
          imgsrc:
            "https://www.kfzimg.com/G06/M00/B7/90/p4YBAFrK6BeAOEC2AADiaVUj2rM559_s.jpg",
          title: "基础知识归纳表：初中语文（新课标）",
          action0: "全新",
          action1: "桑梓图书专营书城",
          action2: "3钻",
          prite: "4.67",
          dateli: "今日19:33"
        },
        {
          imgsrc:
            "https://www.kfzimg.com/G06/M00/FA/8A/p4YBAFuscymAc59oAABVfTpkfuA522_s.jpg",
          title: "服装工业制板（第三版）（本科教材）",
          action0: "九五品",
          action1: "Di9书城",
          action2: "5星",
          prite: "25.60",
          dateli: "今日19:33"
        },
        {
          imgsrc:
            "https://www.kfzimg.com/G06/M00/01/73/p4YBAFqZhriAPgyqAABcrBnMpMo286_s.jpg",
          title: "深部硬岩开采岩爆倾向性分析与防治技术",
          action0: "九五品",
          action1: "四合文化图书馆",
          action2: "5星",
          prite: "21.60",
          dateli: "今日19:33"
        },
        {
          imgsrc:
            "https://www.kfzimg.com/G06/M00/DE/36/p4YBAFqY22iAErOcAACo_6_qcC4408_s.jpg",
          title:
            "Android移动网络程序设计案例教程/21世纪高等学校规划教材·计算机应用",
          action0: "全新",
          action1: "华宇文化",
          action2: "5星",
          prite: "20.70",
          dateli: "今日19:33"
        },
        {
          imgsrc:
            "https://www.kfzimg.com/G06/M00/31/A4/p4YBAFqa4K-AeYvtAAD9OW0L8uw562_s.jpg",
          title: "ADAMS 2016虚拟样机技术从入门到精通（CAX工程应用丛书）",
          action0: "全新",
          action1: "华宇文化",
          action2: "5星",
          prite: "36.34",
          dateli: "今日19:33"
        },
        {
          imgsrc:
            "https://www.kfzimg.com/G06/M00/FE/14/p4YBAFsRb2GAYlJ_AACLVRuKaGc095_s.jpg",
          title: "专利申请与审查（第2版）",
          action0: "全新",
          action1: "瑞华图书",
          action2: "3星",
          prite: "23.00",
          dateli: "今日19:33"
        },
        {
          imgsrc:
            "https://www.kfzimg.com/G06/M00/3D/D6/p4YBAFqbaoeAcLa7AADt9ccgttw517_s.jpg",
          title: "矿山闭坑管理新机制",
          action0: "九五品",
          action1: "四合文化图书馆",
          action2: "5星",
          prite: "18.40",
          dateli: "今日19:33"
        },
        {
          imgsrc:
            "https://www.kfzimg.com/G06/M00/2E/EE/p4YBAFqauUGAULQpAAAjRk5u5gE443_s.jpg",
          title: "傅雷书信选",
          action0: "全新",
          action1: "天天正版书店",
          action2: "3钻",
          prite: "21.75",
          dateli: "今日19:33"
        },
        {
          imgsrc:
            "https://www.kfzimg.com/G06/M00/3B/6C/p4YBAFqbX1yASn6MAACKZCnyJQc981_s.jpg",
          title: "蓝晶石矿中性浮选理论及应用",
          action0: "九五品",
          action1: "四合文化图书馆",
          action2: "5星",
          prite: "14.40",
          dateli: "今日19:33"
        },
        {
          imgsrc:
            "http://shopimg.kongfz.com.cn/sw/kfzimg/396/4dfbd1daa5e96611_s.jpg",
          title: "新书--创新之光 引领松江高质量发展",
          action0: "九五品",
          action1: "缘文轩书店",
          action2: "5星",
          prite: "80.24",
          dateli: "今日19:33"
        },
        {
          imgsrc:
            "https://www.kfzimg.com/G06/M00/81/FC/p4YBAFqdiayAcFCUAACKZnGIBA8315_s.jpg",
          title: "商业银行综合柜台业务",
          action0: "全新",
          action1: "蓝色故事图书",
          action2: "5星",
          prite: "15.30",
          dateli: "今日19:33"
        },
        {
          imgsrc:
            "https://www.kfzimg.com/G06/M00/CA/CF/p4YBAFqYk6iAYlV9AACrpDsx75k360_s.jpg",
          title: "一个记者的长征：汤计与呼格案的故事",
          action0: "九五品",
          action1: "张杰书店",
          action2: "3钻",
          prite: "12.60",
          dateli: "今日19:33"
        },
        {
          imgsrc:
            "https://www.kfzimg.com/G06/M00/56/DB/p4YBAFuHym6AB0rpAAC9OiYw_aY334_s.jpg",
          title: "初心",
          action0: "九五品",
          action1: "张杰书店",
          action2: "3钻",
          prite: "18.40",
          dateli: "今日19:33"
        },
        {
          imgsrc:
            "https://www.kfzimg.com/G07/M00/0F/E2/q4YBAFvs5z-AZHDIAABARPbuy0s935_s.jpg",
          title: "新书--信息文明与当代哲学发展译丛：数字方法（精装）",
          action0: "九五品",
          action1: "缘文轩书店",
          action2: "5星",
          prite: "80.24",
          dateli: "今日19:33"
        },
        {
          imgsrc:
            "https://www.kfzimg.com/G06/M00/CF/7D/p4YBAFqo5nmASQaZAABki0tgn5Q699_s.jpg",
          title: "基督教经典译丛---异教徒",
          action0: "全新",
          action1: "天天正版书店",
          action2: "3钻",
          prite: "21.75",
          dateli: "今日19:33"
        },
        {
          imgsrc:
            "https://www.kfzimg.com/G06/M00/F8/5D/p4YBAFqqKGWAYhOtAAB-un-Uawk815_s.jpg",
          title: "知识产权与区域经济发展",
          action0: "全新",
          action1: "瑞华图书",
          action2: "3星",
          prite: "20.00",
          dateli: "今日19:33"
        },
        {
          imgsrc:
            "https://www.kfzimg.com/G06/M00/53/AF/p4YBAFqb-FiASzirAADMrjwcP0U600_s.jpg",
          title: "液压与气压传动",
          action0: "九品",
          action1: "丰林书店",
          action2: "3钻",
          prite: "14.00",
          dateli: "今日19:33"
        },
        {
          imgsrc:
            "https://www.kfzimg.com/G06/M00/DD/CB/p4YBAFukjaqABzVVAACDA6cONbY522_s.jpg",
          title: "亿万年的孤独:地外文明探寻史话",
          action0: "九五品",
          action1: "张杰书店",
          action2: "3钻",
          prite: "31.60",
          dateli: "今日19:33"
        },
        {
          imgsrc:
            "https://www.kfzimg.com/G06/M00/2E/C3/p4YBAFqauLmAArUNAACoJoQuEdc592_s.jpg",
          title: "中学图书馆文库——语文闲谈（选订本）",
          action0: "全新",
          action1: "天天正版书店",
          action2: "3钻",
          prite: "21.75",
          dateli: "今日19:33"
        },
        {
          imgsrc:
            "https://www.kfzimg.com/G07/M00/13/23/qoYBAFywINaASFkEAADJd-YuW4c905_s.jpg",
          title: "新书--世界英雄史诗译丛：罗摩衍那（森林篇）（精装）",
          action0: "九五品",
          action1: "缘文轩书店",
          action2: "5星",
          prite: "74.34",
          dateli: "今日19:33"
        },
        {
          imgsrc:
            "https://www.kfzimg.com/G07/M00/C2/84/q4YBAFvdzFeAToGcAAA6JIBtXpU589_s.jpg",
          title: "投资者权益知识读本（2018年）",
          action0: "九五品",
          action1: "Di9书城",
          action2: "5星",
          prite: "34.80",
          dateli: "今日19:33"
        },
        {
          imgsrc:
            "https://www.kfzimg.com/G06/M00/1B/B8/p4YBAFqaPLKAXUmGAADHJm3_gf4748_s.jpg",
          title: "火凤凰",
          action0: "九五品",
          action1: "张杰书店",
          action2: "3钻",
          prite: "30.20",
          dateli: "今日19:33"
        },
        {
          imgsrc:
            "https://www.kfzimg.com/G06/M00/5E/35/p4YBAFt8sweAL_HTAADW1PURvP8027_s.jpg",
          title: "城市会展业发展的理论、方法与应用 基于宁波的探索",
          action0: "九五品",
          action1: "四合文化图书馆",
          action2: "5星",
          prite: "16.80",
          dateli: "今日19:33"
        },
        {
          imgsrc:
            "https://www.kfzimg.com/G06/M00/10/04/p4YBAFss_3eAYx2WAABwGEFJ904777_s.jpg",
          title: "高等学校通信工程专业“十二五”规划教材：通信原理",
          action0: "全新",
          action1: "博通文化",
          action2: "1钻",
          prite: "28.60",
          dateli: "今日19:33"
        },
        {
          imgsrc:
            "https://www.kfzimg.com/G06/M00/FB/45/p4YBAFslOh2ACGs8AAEefFKhc7U722_s.jpg",
          title:
            "新书--136计详细解析心理效应及其运用策略和技巧：心理效应与思想工作（上下）",
          action0: "九五品",
          action1: "缘文轩书店",
          action2: "5星",
          prite: "76.70",
          dateli: "今日19:33"
        },
        {
          imgsrc:
            "https://www.kfzimg.com/G06/M00/C5/5D/p4YBAFqYOhmAO_wbAACy9eE-GKM037_s.jpg",
          title: "空间数据库",
          action0: "全新",
          action1: "华宇文化",
          action2: "5星",
          prite: "31.74",
          dateli: "今日19:33"
        },
        {
          imgsrc:
            "https://www.kfzimg.com/G06/M00/20/E3/p4YBAFqaT8uABW7kAABrHiqvF8E718_s.jpg",
          title: "仓储管理实务/刘丽",
          action0: "全新",
          action1: "蓝色故事图书",
          action2: "5星",
          prite: "15.30",
          dateli: "今日19:33"
        },
        {
          imgsrc:
            "https://www.kfzimg.com/G06/M00/8E/AA/p4YBAFqvdM6AJYJBAAB8tFGYr6M647_s.jpg",
          title: "Schwarz引理",
          action0: "九品",
          action1: "丰林书店",
          action2: "3钻",
          prite: "34.00",
          dateli: "今日19:33"
        },
        {
          imgsrc:
            "https://www.kfzimg.com/G06/M00/C9/B5/p4YBAFqYTceAdqL9AABxdlVfX5I586_s.jpg",
          title: "深层油气地质学科发展报告（2014-2015）",
          action0: "全新",
          action1: "博通文化",
          action2: "1钻",
          prite: "28.60",
          dateli: "今日19:33"
        },
        {
          imgsrc:
            "https://www.kfzimg.com/G06/M00/C9/9D/p4YBAFqYTMaAYZY6AACGtcSaAjs363_s.jpg",
          title: "传输现象",
          action0: "九五品",
          action1: "四合文化图书馆",
          action2: "5星",
          prite: "8.80",
          dateli: "今日19:33"
        },
        {
          imgsrc:
            "https://www.kfzimg.com/G06/M00/3D/9D/p4YBAFqj6S2AS2aXAAC5nFxxoL4556_s.jpg",
          title: "归去来兮：14名海外学人回归的故事",
          action0: "全新",
          action1: "天天正版书店",
          action2: "3钻",
          prite: "21.75",
          dateli: "今日19:33"
        },
        {
          imgsrc:
            "https://www.kfzimg.com/G06/M00/4F/C9/p4YBAFqkx_OAF328AABu3mSB_k4454_s.jpg",
          title: "微积分（第二卷）",
          action0: "九品",
          action1: "丰林书店",
          action2: "3钻",
          prite: "24.00",
          dateli: "今日19:33"
        }
      ]
    };
  },
  methods: {
    goOff() {
      this.$router.go(-1);
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
    }
  },
  async created() {
    let data = await this.$axios.get("http://127.0.0.1:1906/goods/");
    console.log(data);
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