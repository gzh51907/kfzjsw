<template>
  <div class="management">
    <header>
      <h1>孔夫子旧书网后台管理系统</h1>
      <div class="right">
        <ul class="ul1">
          <li>
            <el-dropdown show-timeout="1">
              <span class="el-dropdown-link text el-icon-user-solid">
                欢迎你,{{user}}
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>个人资料</el-dropdown-item>
                <el-dropdown-item>我的任务</el-dropdown-item>
                <el-dropdown-item>退出系统</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </li>
          <li>
            <el-dropdown show-timeout="1">
              <span class="el-dropdown-link el-icon-message">
                我的消息
                <span class="message">{{myMessageNumber}}</span>
                <i class="el-icon-arrow-down"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>
                  新消息
                  <span class="message">{{newMessageNumber}}</span>
                </el-dropdown-item>
                <el-dropdown-item>
                  收件箱
                  <span class="message">{{inboxNumber}}</span>
                </el-dropdown-item>
                <el-dropdown-item>
                  发件箱
                  <span class="message"></span>
                </el-dropdown-item>
                <el-dropdown-item>回收站</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </li>
          <li>
            <span>退出系统</span>
          </li>
        </ul>
        <div class="search">
          <input type="text" placeholder="搜索..." />
          <el-button type="success" icon="el-icon-search" size="mini" style="border-radius: 0"></el-button>
        </div>
      </div>
    </header>
    <main>
      <el-tabs tabPosition="left">
        <el-tab-pane label="用户管理">
          <div class="content">
            <el-row style="display:flex">
              <el-button type="success">添加用户</el-button>
              <el-input placeholder="查询用户" prefix-icon="el-icon-search" v-model="input2"></el-input>
              <el-button type="success">查询</el-button>
            </el-row>

            <el-table :data="tableData" style="width: 100%">
              <el-table-column label="创建日期" width="180">
                <template slot-scope="scope">
                  <i class="el-icon-time"></i>
                  <span style="margin-left: 10px">{{ scope.row.date }}</span>
                </template>
              </el-table-column>

              <el-table-column label="用户手机号码" width="180">
                <template slot-scope="scope">
                  <i class="el-icon-mobile-phone"></i>
                  <span style="margin-left: 10px">{{ scope.row.name }}</span>
                </template>
              </el-table-column>

              <el-table-column label="密码" width="180">
                <template slot-scope="scope">
                  <i class="el-icon-key"></i>
                  <span style="margin-left: 10px">{{ scope.row.password }}</span>
                </template>
              </el-table-column>

              <el-table-column label="操作">
                <template slot-scope="scope">
                  <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">修改密码</el-button>
                  <el-button
                    size="mini"
                    type="danger"
                    @click="handleDelete(scope.$index, scope.row)"
                  >删除</el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </el-tab-pane>
        <el-tab-pane label="配置管理"></el-tab-pane>
        <el-tab-pane label="角色管理"></el-tab-pane>
      </el-tabs>
    </main>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: "大王",
      newMessageNumber: 1,
      inboxNumber: 2,
      tableData: [
        {
          date: "2016-05-02",
          name: "13642309535",
          password: 1234
        },
        {
          date: "2016-05-02",
          name: "13642309535",
          password: 1234
        },
        {
          date: "2016-05-02",
          name: "13642309535",
          password: 1234
        }
      ]
    };
  },
  computed: {
    myMessageNumber: function() {
      let myMessageNumber = this.newMessageNumber + this.inboxNumber;
      return myMessageNumber;
    }
  },

  components: {},
  methods: {}
};
</script>
<style lang="scss" scoped>
.management {
  height: 100%;
}
header {
  height: 50px;
  background-color: #1f262d;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #cccccc;

  h1 {
    padding-left: 20px;
    line-height: 36px;
    font-size: 20px;
    font-weight: bold;
    color: #a4d3ee;
  }
  .right {
    height: 100%;
    display: flex;

    .ul1 {
      margin-right: 25px;
      display: flex;
      font-size: 14px;
      li {
        position: relative;
        cursor: pointer;
        padding: 0 10px;
        display: flex;
        align-items: center;
        .message {
          padding: 0 4px;
          background-color: red;
          color: white;
          // font-size: 12px;
          margin-left: 3px;
        }
        span {
          color: white;
        }
      }
      li:hover {
        background-color: green;
        color: yellow;
      }
    }
    .search {
      display: flex;
      align-items: center;
      input {
        background-color: #47515b;
        color: #fff;
        height: 28px;
        padding: 4px 10px 5px;
        border: 0;
        width: 200px;
      }
      input::-webkit-input-placeholder,
      textarea::-webkit-input-placeholder {
        /* WebKit browsers */
        color: yellowgreen;
      }
    }
  }
}
main {
  height: 600px;
}
</style>