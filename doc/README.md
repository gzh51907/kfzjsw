#   vue团队项目说明
## 项目名称：孔夫子旧书网

## 演示

*   官网地址
    *   https://m.thebeastshop.com/
*   项目上线地址
    *   WebApp地址
        *   http://120.24.178.210:1906
    *   后台管理系统地址
        *   http://120.24.178.210:1906/backgroundLogin（账号admin，密码12345）

### git仓库地址
*   项目在github上的仓库地址
    *   https://github.com/gzh51906/thebeastshop.git

### 团队与分工
*   团队成员
    *   组长：刘文盛
    *   组员：彭友豪，钟金生，叶迪
*   负责模块说明
    *   刘文盛负责的模块
        *   项目搭建、项目分配、合并解决冲突、首页、分类页面、登录注册和后台管理系统登录页面及后端接口验证
    	
    *   彭友豪负责的模块
        *   书店页面，列表页面，详情页面，购物车
		
    *   叶迪负责的模块
        *   书店页面，价格排序等功能，后台管理系统商品管理。
    
    *   钟金生负责的模块
        *   我的页面，后台管理系统ui及用户管理功能。

## 项目页面截图
![首页](./src/assets/首页.png "首页")
![选购](./src/assets/选购.png "选购")
![发现](./src/assets/发现.png "发现")
![门店](./src/assets/门店.png "门店")
![列表页](./src/assets/列表页.png "列表页")

#### 项目目录说明


* MongoDB为数据库相关内容
    * 其中db为底层增删查改的操作
    * 其中router为数据库相关接口
    * 其中utils为数据相关工具
* src为webapp相关资源
    * 其中assets为部分图片资源
    * 其中components为可复用的组件
    * 其中db为用于渲染到页面的相关Json文件
    * 其中pages为各个路由页面
        * 其中store为vuex的文件模块
    * router为管理所有路由的总文件


#### 项目目录树形结构
```
├─public
│      favicon.ico
│      index.html
│      shuju.json
│
└─src
    │  App.vue
    │  main.js
    │  rem.js
    │
    ├─assets
    │  │  listDate.js
    │  │  logo.png
    │  │
    │  ├─betails
    │  │      67Qma7HWJY_b.jpg
    │  │      7eLYxGrNet_b.jpg
    │  │      MQAKAeQSLJ_b.jpg
    │  │      qbK4dNjgyX_b.jpg
    │  │      rhRM9wM8AD_b.jpg
    │  │      xiazai.png
    │  │
    │  ├─bookstore
    │  │      017054d1e9cdba5a29e99b548dc68571.jpg
    │  │      02fb07324d4df110_n.jpg
    │  │      039b4062c23535a2_n.jpg
    │  │      04f75e5af6adc07a_n.jpg
    │  │      070babce62ecfca1_n.jpg
    │  │      083a6d230ccdf6dde74570f09db6ff68.jpg
    │  │      0e656112258f2b26_n.jpg
    │  │      0f39739aa20533d0e0403ab13b4bfe05_n.jpg
    │  │      1009080.gif
    │  │      1010863.gif
    │  │      1025129.jpg
    │  │      107662.gif
    │  │      1081286.jpg
    │  │      1094226.jpg
    │  │      1099533.gif
    │  │      1158049WmT9j0_n.jpg
    │  │      120443.jpg
    │  │      1243853.jpg
    │  │      1284237.jpg
    │  │      1285144.gif
    │  │      1307810.jpg
    │  │      1335437.gif
    │  │      1360493e38d31643_n.jpg
    │  │      142013.gif
    │  │      1459528.gif
    │  │      1492239.jpg
    │  │      14c9ad7e18c0e3fb_n.jpg
    │  │      1528244.jpg
    │  │      1550920.gif
    │  │      1608992.jpg
    │  │      167c6e401fc15ba63d790d33f2b2f208.jpg
    │  │      172110.gif
    │  │      1833904.jpg
    │  │      18661576aGD_n.jpg
    │  │      1934.gif
    │  │      194234.jpg
    │  │      1b2b0411c923ce0a0d18a18b2b359108.png
    │  │      1e22ba1ec3afd6b0_n.jpg
    │  │      1e358522e66cca21_n.jpg
    │  │      1e64b7a212dd15d4_n.jpg
    │  │      1ff6f72efc4ed026_n.jpg
    │  │      2089660.jpg
    │  │      20ac27ca191511ce_n.jpg
    │  │      2144100.jpg
    │  │      218264.jpg
    │  │      218935.gif
    │  │      22477.jpg
    │  │      2628890a3fba46c4_n.jpg
    │  │      280f2d1851087b91eea47c4580e62d9e.jpg
    │  │      28688.jpg
    │  │      29495.jpg
    │  │      2c45aa27422001cb3b97c74531bd924b.jpg
    │  │      2d26e08ac58c22e5_n.jpg
    │  │      2dacdfaaa71881ee_n.jpg
    │  │      2e271aae49a98fda_n.jpg
    │  │      2e82393eb5cfc2db_n.jpg
    │  │      3389981.jpg
    │  │      33d9431e4bd49422_n.jpg
    │  │      3411854.jpg
    │  │      34927.jpg
    │  │      34bab1faae6e3bd5_n.jpg
    │  │      3556514.jpg
    │  │      37551.jpg
    │  │      3994320.jpg
    │  │      3c2ccf0e336b9466_n.jpg
    │  │      3c696216aba6817b_n.jpg
    │  │      3e95cf2a59578e1f_n.jpg
    │  │      3e96068e0e6a79a8_n.jpg
    │  │      3e960dd2559cfcdd_n.jpg
    │  │      403fd83ea82e02dc_n.jpg
    │  │      4222642.jpg
    │  │      423a721607437935_n.jpg
    │  │      429141ae2ccfa399_n.jpg
    │  │      42e48b3e306ecf3a_MASK_n.jpg
    │  │      43127.jpg
    │  │      46cb54c6f1d19fd3_n.jpg
    │  │      46cb77b2f5925364_n.jpg
    │  │      46cba4ee98ca004f_n.jpg
    │  │      47ad75d60f463a38_n.jpg
    │  │      47ae07b2eb8e6c52_n.jpg
    │  │      48182f0242b1bf8b_n.jpg
    │  │      48185e966c1f99e1_n.jpg
    │  │      4850486a98bfd6ea_n.jpg
    │  │      48c5ca9ac3f96973_n.jpg
    │  │      48c6335e12e7fac7_n.jpg
    │  │      48c8f45e1f4c4dc1_n.jpg
    │  │      49271232108e862e_n.jpg
    │  │      4928791a9e66868c_n.jpg
    │  │      4928fb42f209af6e_n.jpg
    │  │      494aaada8a03a82e_n.jpg
    │  │      4992edc2265b8488_n.jpg
    │  │      49f858e2b3dac6ee_n.jpg
    │  │      49f8a94656ddfc72_n.jpg
    │  │      49fda892f9cfe29e_n.jpg
    │  │      49fde7daeba5747c_n.jpg
    │  │      49fe3db623a4aa34_n.jpg
    │  │      4a04403a50c387f1_n.jpg
    │  │      4a2aa7f2cbf17af7_n.jpg
    │  │      4a354072ccf496e0_n.jpg
    │  │      4a43bb2a116b496f_n.jpg
    │  │      4a47c1de7ebe4bca_n.jpg
    │  │      4a488baa703ab87e_n.jpg
    │  │      4a4954ae4f1b14cf_n.jpg
    │  │      4a5ff056c54bcebd_n.jpg
    │  │      4a723ed275f7637d_n.jpg
    │  │      4a7cb23086c8e628410c59ac7fcb5d03.jpg
    │  │      4a9cf37aa4ab90db_n.jpg
    │  │      4aa1c62a610369dd_n.jpg
    │  │      4aa1d03e6e21c475_n.jpg
    │  │      4ab5338603f41f3d_n.jpg
    │  │      4ab895eed45c64de_n.jpg
    │  │      4ac176e6ef711447_n.jpg
    │  │      4ac227ee01abee3e_n.jpg
    │  │      4ac2cbae2c330765_n.jpg
    │  │      4ac32e0afffa2c7f_n.jpg
    │  │      4ac4d9da418805be_n.jpg
    │  │      4accb70e2ab1e492_n.jpg
    │  │      4ad5e36a337b08b9_n.jpg
    │  │      4ad6062e07e15869_n.jpg
    │  │      4ad619a2abb3dd4b_n.jpg
    │  │      4af0af56baca9c34_n.jpg
    │  │      4af0c482a4b68271_n.jpg
    │  │      4af0da8ad9f45037_n.jpg
    │  │      4afa4ec6d1820879_n.jpg
    │  │      4b00573a393d5d2c_n.jpg
    │  │      4b005df2c0af750f_n.jpg
    │  │      4b0063f6573cfc5a_n.jpg
    │  │      4b09f2aea9ddab03_n.jpg
    │  │      4b0b3f5667f4d7ad_n.jpg
    │  │      4b0bde52b2511930_n.jpg
    │  │      4b112fe2d11d80f8_n.jpg
    │  │      4b13c0c22e08af47_n.jpg
    │  │      4b162a2e96d5b0fd_n.jpg
    │  │      4b164afeb0af6862_n.jpg
    │  │      4b16774a8f9b40a2_n.jpg
    │  │      4b168c26898ec1ca_n.jpg
    │  │      4b16d12246fd50b2_n.jpg
    │  │      4b195a6e4c1987b4_n.jpg
    │  │      4b226d522f9bdd1d_n.jpg
    │  │      4b22a10a1d743b1b_n.jpg
    │  │      4b22e7beb871df85_n.jpg
    │  │      4b22e886d769788b_n.jpg
    │  │      4b234a7e3d233523_n.jpg
    │  │      4b276a4685611a95_n.jpg
    │  │      4b2814fa69d77b65_n.jpg
    │  │      4b2886f658700467_n.jpg
    │  │      4b28ecae8e290270_n.jpg
    │  │      4b28f122ee1914e1_n.jpg
    │  │      4b29747609bebcc9_n.jpg
    │  │      4b29db1e0091771c_n.jpg
    │  │      4b2c122633b3b039_n.jpg
    │  │      4b2f7a5620f865c1_n.jpg
    │  │      4b2fcd761a335e1d_n.jpg
    │  │      4b3003febcf120bd_n.jpg
    │  │      4b30304af91d068c_n.jpg
    │  │      4b303afef0c4f316_n.jpg
    │  │      4b307fbe190e0998_n.jpg
    │  │      4b3086da244aa0b3_n.jpg
    │  │      4b31d2426984a2a0_n.jpg
    │  │      4b32d21e09b5cf3b_n.jpg
    │  │      4b337ade5e644c5a_n.jpg
    │  │      4b339b2211decf49_n.jpg
    │  │      4b33cd36aa6d3b5b_n.jpg
    │  │      4b33e4a6e3e592a5_n.jpg
    │  │      4b378fa2bda2b376_n.jpg
    │  │      4b381c06b2c272f2_n.jpg
    │  │      4b38938e83944735_n.jpg
    │  │      4b38fe96da85426d_n.jpg
    │  │      4b3908fa810312d9_n.jpg
    │  │      4b390f26962413bd_n.jpg
    │  │      4b3939a6f22a9fad_n.jpg
    │  │      4b396b92c9ef8e4f_n.jpg
    │  │      4b3978c6d0d4ea90_n.jpg
    │  │      4b399072d8e1b82c_n.jpg
    │  │      4b399de237e177a6_n.jpg
    │  │      4b3a20aae1f654d6_n.jpg
    │  │      4b3a3f0e61f3b9fa_n.jpg
    │  │      4b3a5066ad593fef_n.jpg
    │  │      4c40fc98bbdf86a54c41cea9a9a833b5.jpg
    │  │      4dd662d6b6f90af15169677b5e696e3d.jpg
    │  │      5040.jpg
    │  │      5579.gif
    │  │      55ca4a16275d20986e02395a62bf7ad8.jpg
    │  │      5ae0adbcbd23c27dc560947b773b6cda.png
    │  │      61db2f7ce7502d7af15108c1657630a6.jpg
    │  │      6335711.gif
    │  │      68fb0841623166d35ee198cd06173140.jpg
    │  │      69963f454f325d7995ff542dba04b573.jpg
    │  │      79453QDqra0_n.jpg
    │  │      79982.jpg
    │  │      7fa1558502fd8acb09928ab973e7f888.jpg
    │  │      91065.jpg
    │  │      91557.jpg
    │  │      92e9799a20a6baf8645b6f7a5576ff44.png
    │  │      9587.gif
    │  │      95a7cad9e5591bddef5f58316907eeb8.jpg
    │  │      96c0f24dcba7f9096fc776011101d930.jpg
    │  │      96d26344d5a955a8c1c8ce119450dd01.jpg
    │  │      984ac5ddf47077b676705c70f494c357.jpg
    │  │      9bd7cd60d74b3deda91dd0a9cd2a941a.jpg
    │  │      9c688abce1def4e25660349f25a6a188.jpg
    │  │      9fcb4f787dba29c2a8d19d451c6f6377.jpg
    │  │      a0f90a1df5f74df0e7008d631282e1f0.png
    │  │      ac4acb14e529d1355b3fa429b129b4bb.jpg
    │  │      arrow_blue.png
    │  │      b5xRh5Tg7W_n.jpg
    │  │      c52f830973e60f2b1eb563911d88b62a.jpg
    │  │      d38a126ebf7e04c81826c0ad1202c339.jpg
    │  │      d9af0dde30f2316fd055f0df4e86bb76.png
    │  │      e16e9b0682f8e6e96c52a02386e37847.jpg
    │  │      f8975e033cd1c97119311b1bbd77a584.jpg
    │  │      fab4f1ccfd6d0cbada807824500689a3.jpg
    │  │      level.png
    │  │      oYYBAFNtgneAN6luAABb6-_g-38600_n.jpg
    │  │      oYYBAFNtikmAbIGEAABkGW9Uoz0928_n.jpg
    │  │      oYYBAFOJWCyABAdXAAGcUlW7GRY344_n.jpg
    │  │      p4YBAFewL32AGBB4ADRP33gehE8413_n.jpg
    │  │      p4YBAFk0x0uAUYAdAAcqXA4awY4641_n.jpg
    │  │      p4YBAFkUeaaAD165AADGKZvlFzw413_n.jpg
    │  │      p4YBAFlQvKmAYWP5AAMF8r4ZrSk032_n.jpg
    │  │      p4YBAFlQvZeAPaUwAAOolsu7-bw551_n.jpg
    │  │      p4YBAFmdY7mAYKoQAAKXHqygASU183_n.jpg
    │  │      p4YBAFmEbliAW9CeAAI_q-ltjSY856_n.jpg
    │  │      p4YBAFmrsGmAEyTxAALSWIyF1wU903_n.jpg
    │  │      p4YBAFmzPZyAVwo4AAMGAq3XmJg989_n.jpg
    │  │      p4YBAFoFGQuAUVCJAAJz0AHI4AQ355_n.jpg
    │  │      p4YBAFooDhKABwazAADicMEUXUY695_n.jpg
    │  │      p4YBAFqZGYGAXXd6AAC7IA-wirk727_n.jpg
    │  │      p4YBAFsGUr6AdcmoAACkG4CXFIc471_n.jpg
    │  │      p4YBAFsxuzqAWO0LAABJKx3wTOo034_n.jpg
    │  │      p4YBAFuL6aaAOvalAAGAaFmCA6A317_n.jpg
    │  │      p4YBAFvC9DGAPGcgAAGspjzLO40761_n.jpg
    │  │      p4YBAFvISEWAIU8jAAI3uS78UDw769_n.jpg
    │  │      poYBAFdsx4eAJt-aAAMNN51P7F0770_n.jpg
    │  │      pYYBAFVUpE6AMC60AAL0FCPYf8o029_n.jpg
    │  │      q4YBAF0ApoOAcFeQAANQOukFBh0346_n.jpg
    │  │      q4YBAF0DUfuAK1KeAABmZmTaihE743_n.jpg
    │  │      q4YBAF0FiX-AB-RUAADRslWVUYQ323_n.jpg
    │  │      q4YBAF0PPuGACtqKAATI95TmbhU052_n.jpg
    │  │      q4YBAFxuQBaAfxGaAAGjNogvW00309_n.jpg
    │  │      q4YBAFy4ckaAAQ1rAAJ8ttCxmpI592_n.jpg
    │  │      q4YBAFz48f6AEVHnAAHZ1ZrAk2g414_n.jpg
    │  │      q4YBAFz6eT-AJAfIAAGDHhIxGak304_n.jpg
    │  │      q4YBAFzmX_2AUJGmAAFn0Hx-A_E410_n.jpg
    │  │      q4YBAFzn9dKAMZYzAAKyGkRcvHw395_n.jpg
    │  │      q4YBAFzraxGAUcbkAALB9GZJLvA228_n.jpg
    │  │      q4YBAFzRTK-AN9CjAAIu9qQZW9w063_n.jpg
    │  │      q4YBAFz_sXuAYrLgAAJwAgWoQvE815_n.jpg
    │  │      qoYBAFvhMx6AfRRuAALEMO1DvMo897_n.jpg
    │  │      qoYBAFw0YDSAVRHYAAFeC2-hTB8061_n.jpg
    │  │      qoYBAFw8guuAe0tPAADTG4gYpQs842_n.jpg
    │  │      qoYBAFwLNyiAai4QAABZ7LSa4xQ441_n.jpg
    │  │      qoYBAFwsf7CANj6wAAC6Ox82CbQ633_n.jpg
    │  │      qoYBAFwsfjCAegW1AADMyCt78c0312_n.jpg
    │  │      qoYBAFwsgMqALLdLAADfTACMQAM216_n.jpg
    │  │      qoYBAFyB9IaARMZ3AACcU2jqfNA714_n.jpg
    │  │      qoYBAFzXgFCAZDpCAAMmoznqUZ8875_n.jpg
    │  │      R6SDBnsXTr_n.jpg
    │  │      twSMQmR7bq_n.jpg
    │  │      V2_6gsjHQeW2X_n.jpg
    │  │      V2_7wMpgMxNdJ_n.jpg
    │  │      V2_D5vVFqYpG5_n.jpg
    │  │      V2_d8DyFWdnKt_n.jpg
    │  │      V2_EVfejHNRV4_n.jpg
    │  │      V2_FiVYASJsME_n.jpg
    │  │      V2_gNEenETfpW_n.jpg
    │  │      V2_t8Q8PQ7qFv_n.jpg
    │  │      V2_tEpSJpbYfS_n.jpg
    │  │      V2_Xw7WVKFDQa_n.jpg
    │  │      wkPfwHx7rm_n.jpg
    │  │      下载 (1).png
    │  │      下载 (10).png
    │  │      下载 (2).png
    │  │      下载 (3).png
    │  │      下载 (4).png
    │  │      下载 (5).png
    │  │      下载 (6).png
    │  │      下载 (7).png
    │  │      下载 (8).png
    │  │      下载 (9).png
    │  │      下载.png
    │  │
    │  ├─Mine
    │  │      11186033.jpg
    │  │      personal_info.jpg
    │  │
    │  ├─paimai
    │  │      44f65826a3826465_n.jpg
    │  │      AuctionPlaceholder@2x.png
    │  │      dazhong.png
    │  │      dijia.png
    │  │      gwzx.png
    │  │      logo.png
    │  │      message.png
    │  │      mrmj.png
    │  │      mrzh.png
    │  │      pm-banner1.png
    │  │      pm-banner2.png
    │  │      pm-banner3.jpg
    │  │      qbfl.png
    │  │      quanbu.png
    │  │      ret-top.jpg
    │  │      see-all.jpg
    │  │      serach.png
    │  │      tuijian1.jpg
    │  │      tuijian10.jpg
    │  │      tuijian2.jpg
    │  │      tuijian3.jpg
    │  │      tuijian4.jpg
    │  │      tuijian5.jpg
    │  │      tuijian6.jpg
    │  │      tuijian7.jpg
    │  │      tuijian8.jpg
    │  │      tuijian9.jpg
    │  │      V2_2X55fiLdvi_n.jpg
    │  │      V2_9PgBGQk6t4_n.jpg
    │  │      V2_ApLpt8s9pe_n.jpg
    │  │      V2_esRApejLJY_n.jpg
    │  │      V2_S8es63tWwB_n.jpg
    │  │      V2_TBLV4yLRJK_n.jpg
    │  │      V2_TyfKX79WM5_n.jpg
    │  │      V2_WXfkFhp9QW_n.jpg
    │  │      xzgj.png
    │  │      yikoujia.png
    │  │      yishu.png
    │  │      zhenben.png
    │  │      下载 (10).png
    │  │      下载 (11).png
    │  │      下载 (12).png
    │  │      下载 (13).png
    │  │      下载 (14).png
    │  │      下载 (15).png
    │  │      下载 (16).png
    │  │      下载 (17).png
    │  │      下载 (8).png
    │  │      下载 (9).png
    │  │
    │  └─shouye
    │          01ef621f970261c94e4be8cfb52581f6_0_1_300_300.jpg
    │          0ca205ce38984608_n.jpg
    │          10556Ha9F8L_n.jpg
    │          1189b596eb13de23_n.jpg
    │          1ced5ad2b6be58d1_n.jpg
    │          1cfeeb8a897f627d_n.jpg
    │          1f9dfccbda320ea5408be83bb9089686_0_1_300_300.jpg
    │          1fbaccae69ee0f63_n.jpg
    │          280f2d1851087b91eea47c4580e62d9e.jpg
    │          296d169e4b6675c2_n.jpg
    │          2d0b0716c24ff98e_n.jpg
    │          2d2e609e92cdce85_n.jpg
    │          2dbb17fa65382da9_n.jpg
    │          2dead4feff9fd955_n.jpg
    │          2ebdf1860b243391_n.jpg
    │          30db27c294740885_n.jpg
    │          312febc2e3bff2dd_n.jpg
    │          34405feaa7cf3600_n.jpg
    │          350bd7ba79168cbf_n.jpg
    │          3a683ecea97e36f9_n.jpg
    │          3e91afc7668dd35b9b5fa4df376f188b_0_1_300_300.jpg
    │          421e063adad25f68_n.jpg
    │          4377d50e59bd755c3faa3b49b3fa60e8.jpg
    │          43897swvAg0_n.jpg
    │          46f10714888fb22a23c84f1b15c34da7_0_1_300_300.jpg
    │          4bb8fb49f90343f8b94c86c3643fe58e.jpg
    │          57825be21c468f9df23d4224449c57ba.jpg
    │          735eb10e17d9cb92110bfa7dfa92ce1a_0_1_300_300.jpg
    │          96d26344d5a955a8c1c8ce119450dd01.jpg
    │          9709ca9d2c7ce892e914ddb6c43ac53b_0_1_300_300.jpg
    │          9c48671008f085c8292c859fac009e15_0_1_300_300.jpg
    │          a1.jpg
    │          a2.jpg
    │          a3.jpg
    │          b532b079266a038124bd3792289d9cd6_0_1_300_300.jpg
    │          c1.jpg
    │          c2.jpg
    │          c267e02b073a8c39acf3df4410db3eeb_0_1_300_300.jpg
    │          c3.jpg
    │          dedbbf52ce680ac3ba702c78dfaaef30_0_1_300_300.jpg
    │          e2712d710f2302cfa4894f3b51e94f3c_0_1_300_300.jpg
    │          f275c25e5c921a049b1db11d966c2a34_0_1_300_300.jpg
    │          j2.jpg
    │          j3.jpg
    │          j4.jpg
    │          lb1.jpg
    │          lb2.jpg
    │          lb3.jpg
    │          lb4.jpg
    │          li1.png
    │          li2.png
    │          li3.png
    │          li4.png
    │          ll1.png
    │          ll2.png
    │          ll3.png
    │          ll4.png
    │          ll5.png
    │          logo.png
    │          lq1.png
    │          lq2.png
    │          lq3.png
    │          lq4.png
    │          lq5.png
    │          lq6.png
    │          lq7.png
    │          o4YBAFRpSy-AKZXwAAKuyoF7CiU404_n.jpg
    │          oYYBAFbNKfOAWMjiAAaDwfyOTCs688_n.jpg
    │          p4YBAFo5AIOAUvO1AAOi0Ld3-rA596_n.jpg
    │          p4YBAFr2K6iAfUzUAAHxhb1mKe0180_n.jpg
    │          q4YBAFzWpFKAcNePAAGrluc5-kk145_n.jpg
    │          qoYBAFwuxV6AUdNIAAEdLlWdrNI307_n.jpg
    │          qoYBAFxQH8eAVs2qAAFR-cX0HhQ891_n.jpg
    │          qoYBAFxvqWmAdVe5AAJTuPXtlV4205_n.jpg
    │          s1.jpg
    │          s10.jpg
    │          s2.jpg
    │          s3.jpg
    │          s4.jpg
    │          s5.jpg
    │          s6.jpg
    │          s7.jpg
    │          s8.jpg
    │          s9.jpg
    │          serch.png
    │          t1.jpg
    │          t2.jpg
    │          V2_Kxdn73HLKL_n.jpg
    │          V2_n6SMpwdr5B_n.jpg
    │          V2_WJME3ntsmn_n.jpg
    │          x1.jpg
    │          x2.jpg
    │          x3.jpg
    │          下载 (10).png
    │          下载 (11).png
    │          下载 (12).png
    │          下载 (2).png
    │          下载 (3).png
    │          下载 (4).png
    │          下载 (5).png
    │          下载 (6).png
    │          下载 (7).png
    │          下载 (8).png
    │          下载 (9).png
    │
    ├─components
    │      HelloWorld.vue
    │
    ├─data
    │      fenlei.json
    │      goods.json
    │      paimai.json
    │      shouye.json
    │
    ├─mongo
    │  │  package-lock.json
    │  │  package.json
    │  │
    │  ├─node_modules
    │  │  ├─.bin
    │  │  │      mime
    │  │  │      mime.cmd
    │  │  │      semver
    │  │  │      semver.cmd
    │  │  │
    │  │  ├─accepts
    │  │  │      HISTORY.md
    │  │  │      index.js
    │  │  │      LICENSE
    │  │  │      package.json
    │  │  │      README.md
    │  │  │
    │  │  ├─array-flatten
    │  │  │      array-flatten.js
    │  │  │      LICENSE
    │  │  │      package.json
    │  │  │      README.md
    │  │  │
    │  │  ├─bignumber.js
    │  │  │  │  bignumber.d.ts
    │  │  │  │  bignumber.js
    │  │  │  │  bignumber.js.map
    │  │  │  │  bignumber.min.js
    │  │  │  │  bignumber.mjs
    │  │  │  │  bower.json
    │  │  │  │  CHANGELOG.md
    │  │  │  │  LICENCE
    │  │  │  │  package.json
    │  │  │  │  README.md
    │  │  │  │
    │  │  │  └─doc
    │  │  │          API.html
    │  │  │
    │  │  ├─body-parser
    │  │  │  │  HISTORY.md
    │  │  │  │  index.js
    │  │  │  │  LICENSE
    │  │  │  │  package.json
    │  │  │  │  README.md
    │  │  │  │
    │  │  │  └─lib
    │  │  │      │  read.js
    │  │  │      │
    │  │  │      └─types
    │  │  │              json.js
    │  │  │              raw.js
    │  │  │              text.js
    │  │  │              urlencoded.js
    │  │  │
    │  │  ├─bson
    │  │  │  │  bower.json
    │  │  │  │  HISTORY.md
    │  │  │  │  index.js
    │  │  │  │  LICENSE.md
    │  │  │  │  package.json
    │  │  │  │  README.md
    │  │  │  │
    │  │  │  ├─browser_build
    │  │  │  │      bson.js
    │  │  │  │      package.json
    │  │  │  │
    │  │  │  └─lib
    │  │  │      └─bson
    │  │  │          │  binary.js
    │  │  │          │  bson.js
    │  │  │          │  code.js
    │  │  │          │  db_ref.js
    │  │  │          │  decimal128.js
    │  │  │          │  double.js
    │  │  │          │  float_parser.js
    │  │  │          │  int_32.js
    │  │  │          │  long.js
    │  │  │          │  map.js
    │  │  │          │  max_key.js
    │  │  │          │  min_key.js
    │  │  │          │  objectid.js
    │  │  │          │  regexp.js
    │  │  │          │  symbol.js
    │  │  │          │  timestamp.js
    │  │  │          │
    │  │  │          └─parser
    │  │  │                  calculate_size.js
    │  │  │                  deserializer.js
    │  │  │                  serializer.js
    │  │  │                  utils.js
    │  │  │
    │  │  ├─buffer-equal-constant-time
    │  │  │      .npmignore
    │  │  │      .travis.yml
    │  │  │      index.js
    │  │  │      LICENSE.txt
    │  │  │      package.json
    │  │  │      README.md
    │  │  │      test.js
    │  │  │
    │  │  ├─bytes
    │  │  │      History.md
    │  │  │      index.js
    │  │  │      LICENSE
    │  │  │      package.json
    │  │  │      Readme.md
    │  │  │
    │  │  ├─content-disposition
    │  │  │      HISTORY.md
    │  │  │      index.js
    │  │  │      LICENSE
    │  │  │      package.json
    │  │  │      README.md
    │  │  │
    │  │  ├─content-type
    │  │  │      HISTORY.md
    │  │  │      index.js
    │  │  │      LICENSE
    │  │  │      package.json
    │  │  │      README.md
    │  │  │
    │  │  ├─cookie
    │  │  │      HISTORY.md
    │  │  │      index.js
    │  │  │      LICENSE
    │  │  │      package.json
    │  │  │      README.md
    │  │  │
    │  │  ├─cookie-signature
    │  │  │      .npmignore
    │  │  │      History.md
    │  │  │      index.js
    │  │  │      package.json
    │  │  │      Readme.md
    │  │  │
    │  │  ├─core-util-is
    │  │  │  │  float.patch
    │  │  │  │  LICENSE
    │  │  │  │  package.json
    │  │  │  │  README.md
    │  │  │  │  test.js
    │  │  │  │
    │  │  │  └─lib
    │  │  │          util.js
    │  │  │
    │  │  ├─debug
    │  │  │  │  .coveralls.yml
    │  │  │  │  .eslintrc
    │  │  │  │  .npmignore
    │  │  │  │  .travis.yml
    │  │  │  │  CHANGELOG.md
    │  │  │  │  component.json
    │  │  │  │  karma.conf.js
    │  │  │  │  LICENSE
    │  │  │  │  Makefile
    │  │  │  │  node.js
    │  │  │  │  package.json
    │  │  │  │  README.md
    │  │  │  │
    │  │  │  └─src
    │  │  │          browser.js
    │  │  │          debug.js
    │  │  │          index.js
    │  │  │          inspector-log.js
    │  │  │          node.js
    │  │  │
    │  │  ├─depd
    │  │  │  │  History.md
    │  │  │  │  index.js
    │  │  │  │  LICENSE
    │  │  │  │  package.json
    │  │  │  │  Readme.md
    │  │  │  │
    │  │  │  └─lib
    │  │  │      ├─browser
    │  │  │      │      index.js
    │  │  │      │
    │  │  │      └─compat
    │  │  │              callsite-tostring.js
    │  │  │              event-listener-count.js
    │  │  │              index.js
    │  │  │
    │  │  ├─destroy
    │  │  │      index.js
    │  │  │      LICENSE
    │  │  │      package.json
    │  │  │      README.md
    │  │  │
    │  │  ├─ecdsa-sig-formatter
    │  │  │  │  CODEOWNERS
    │  │  │  │  LICENSE
    │  │  │  │  package.json
    │  │  │  │  README.md
    │  │  │  │
    │  │  │  └─src
    │  │  │          ecdsa-sig-formatter.d.ts
    │  │  │          ecdsa-sig-formatter.js
    │  │  │          param-bytes-for-alg.js
    │  │  │
    │  │  ├─ee-first
    │  │  │      index.js
    │  │  │      LICENSE
    │  │  │      package.json
    │  │  │      README.md
    │  │  │
    │  │  ├─encodeurl
    │  │  │      HISTORY.md
    │  │  │      index.js
    │  │  │      LICENSE
    │  │  │      package.json
    │  │  │      README.md
    │  │  │
    │  │  ├─escape-html
    │  │  │      index.js
    │  │  │      LICENSE
    │  │  │      package.json
    │  │  │      Readme.md
    │  │  │
    │  │  ├─etag
    │  │  │      HISTORY.md
    │  │  │      index.js
    │  │  │      LICENSE
    │  │  │      package.json
    │  │  │      README.md
    │  │  │
    │  │  ├─express
    │  │  │  │  History.md
    │  │  │  │  index.js
    │  │  │  │  LICENSE
    │  │  │  │  package.json
    │  │  │  │  Readme.md
    │  │  │  │
    │  │  │  └─lib
    │  │  │      │  application.js
    │  │  │      │  express.js
    │  │  │      │  request.js
    │  │  │      │  response.js
    │  │  │      │  utils.js
    │  │  │      │  view.js
    │  │  │      │
    │  │  │      ├─middleware
    │  │  │      │      init.js
    │  │  │      │      query.js
    │  │  │      │
    │  │  │      └─router
    │  │  │              index.js
    │  │  │              layer.js
    │  │  │              route.js
    │  │  │
    │  │  ├─finalhandler
    │  │  │      HISTORY.md
    │  │  │      index.js
    │  │  │      LICENSE
    │  │  │      package.json
    │  │  │      README.md
    │  │  │
    │  │  ├─forwarded
    │  │  │      HISTORY.md
    │  │  │      index.js
    │  │  │      LICENSE
    │  │  │      package.json
    │  │  │      README.md
    │  │  │
    │  │  ├─fresh
    │  │  │      HISTORY.md
    │  │  │      index.js
    │  │  │      LICENSE
    │  │  │      package.json
    │  │  │      README.md
    │  │  │
    │  │  ├─http-errors
    │  │  │      HISTORY.md
    │  │  │      index.js
    │  │  │      LICENSE
    │  │  │      package.json
    │  │  │      README.md
    │  │  │
    │  │  ├─iconv-lite
    │  │  │  │  Changelog.md
    │  │  │  │  LICENSE
    │  │  │  │  package.json
    │  │  │  │  README.md
    │  │  │  │
    │  │  │  ├─encodings
    │  │  │  │  │  dbcs-codec.js
    │  │  │  │  │  dbcs-data.js
    │  │  │  │  │  index.js
    │  │  │  │  │  internal.js
    │  │  │  │  │  sbcs-codec.js
    │  │  │  │  │  sbcs-data-generated.js
    │  │  │  │  │  sbcs-data.js
    │  │  │  │  │  utf16.js
    │  │  │  │  │  utf7.js
    │  │  │  │  │
    │  │  │  │  └─tables
    │  │  │  │          big5-added.json
    │  │  │  │          cp936.json
    │  │  │  │          cp949.json
    │  │  │  │          cp950.json
    │  │  │  │          eucjp.json
    │  │  │  │          gb18030-ranges.json
    │  │  │  │          gbk-added.json
    │  │  │  │          shiftjis.json
    │  │  │  │
    │  │  │  └─lib
    │  │  │          bom-handling.js
    │  │  │          extend-node.js
    │  │  │          index.d.ts
    │  │  │          index.js
    │  │  │          streams.js
    │  │  │
    │  │  ├─inherits
    │  │  │      inherits.js
    │  │  │      inherits_browser.js
    │  │  │      LICENSE
    │  │  │      package.json
    │  │  │      README.md
    │  │  │
    │  │  ├─ipaddr.js
    │  │  │  │  ipaddr.min.js
    │  │  │  │  LICENSE
    │  │  │  │  package.json
    │  │  │  │  README.md
    │  │  │  │
    │  │  │  └─lib
    │  │  │          ipaddr.js
    │  │  │          ipaddr.js.d.ts
    │  │  │
    │  │  ├─isarray
    │  │  │      .npmignore
    │  │  │      .travis.yml
    │  │  │      component.json
    │  │  │      index.js
    │  │  │      Makefile
    │  │  │      package.json
    │  │  │      README.md
    │  │  │      test.js
    │  │  │
    │  │  ├─jsonwebtoken
    │  │  │  │  CHANGELOG.md
    │  │  │  │  decode.js
    │  │  │  │  index.js
    │  │  │  │  LICENSE
    │  │  │  │  package.json
    │  │  │  │  README.md
    │  │  │  │  sign.js
    │  │  │  │  verify.js
    │  │  │  │
    │  │  │  ├─lib
    │  │  │  │      JsonWebTokenError.js
    │  │  │  │      NotBeforeError.js
    │  │  │  │      psSupported.js
    │  │  │  │      timespan.js
    │  │  │  │      TokenExpiredError.js
    │  │  │  │
    │  │  │  └─node_modules
    │  │  │      └─ms
    │  │  │              index.js
    │  │  │              license.md
    │  │  │              package.json
    │  │  │              readme.md
    │  │  │
    │  │  ├─jwa
    │  │  │      index.js
    │  │  │      LICENSE
    │  │  │      package.json
    │  │  │      README.md
    │  │  │
    │  │  ├─jws
    │  │  │  │  CHANGELOG.md
    │  │  │  │  index.js
    │  │  │  │  LICENSE
    │  │  │  │  package.json
    │  │  │  │  readme.md
    │  │  │  │
    │  │  │  └─lib
    │  │  │          data-stream.js
    │  │  │          sign-stream.js
    │  │  │          tostring.js
    │  │  │          verify-stream.js
    │  │  │
    │  │  ├─lodash.includes
    │  │  │      index.js
    │  │  │      LICENSE
    │  │  │      package.json
    │  │  │      README.md
    │  │  │
    │  │  ├─lodash.isboolean
    │  │  │      index.js
    │  │  │      LICENSE
    │  │  │      package.json
    │  │  │      README.md
    │  │  │
    │  │  ├─lodash.isinteger
    │  │  │      index.js
    │  │  │      LICENSE
    │  │  │      package.json
    │  │  │      README.md
    │  │  │
    │  │  ├─lodash.isnumber
    │  │  │      index.js
    │  │  │      LICENSE
    │  │  │      package.json
    │  │  │      README.md
    │  │  │
    │  │  ├─lodash.isplainobject
    │  │  │      index.js
    │  │  │      LICENSE
    │  │  │      package.json
    │  │  │      README.md
    │  │  │
    │  │  ├─lodash.isstring
    │  │  │      index.js
    │  │  │      LICENSE
    │  │  │      package.json
    │  │  │      README.md
    │  │  │
    │  │  ├─lodash.once
    │  │  │      index.js
    │  │  │      LICENSE
    │  │  │      package.json
    │  │  │      README.md
    │  │  │
    │  │  ├─media-typer
    │  │  │      HISTORY.md
    │  │  │      index.js
    │  │  │      LICENSE
    │  │  │      package.json
    │  │  │      README.md
    │  │  │
    │  │  ├─merge-descriptors
    │  │  │      HISTORY.md
    │  │  │      index.js
    │  │  │      LICENSE
    │  │  │      package.json
    │  │  │      README.md
    │  │  │
    │  │  ├─methods
    │  │  │      HISTORY.md
    │  │  │      index.js
    │  │  │      LICENSE
    │  │  │      package.json
    │  │  │      README.md
    │  │  │
    │  │  ├─mime
    │  │  │  │  .npmignore
    │  │  │  │  CHANGELOG.md
    │  │  │  │  cli.js
    │  │  │  │  LICENSE
    │  │  │  │  mime.js
    │  │  │  │  package.json
    │  │  │  │  README.md
    │  │  │  │  types.json
    │  │  │  │
    │  │  │  └─src
    │  │  │          build.js
    │  │  │          test.js
    │  │  │
    │  │  ├─mime-db
    │  │  │      db.json
    │  │  │      HISTORY.md
    │  │  │      index.js
    │  │  │      LICENSE
    │  │  │      package.json
    │  │  │      README.md
    │  │  │
    │  │  ├─mime-types
    │  │  │      HISTORY.md
    │  │  │      index.js
    │  │  │      LICENSE
    │  │  │      package.json
    │  │  │      README.md
    │  │  │
    │  │  ├─mongodb
    │  │  │  │  HISTORY.md
    │  │  │  │  index.js
    │  │  │  │  LICENSE.md
    │  │  │  │  package.json
    │  │  │  │  README.md
    │  │  │  │
    │  │  │  └─lib
    │  │  │      │  admin.js
    │  │  │      │  aggregation_cursor.js
    │  │  │      │  apm.js
    │  │  │      │  change_stream.js
    │  │  │      │  collection.js
    │  │  │      │  command_cursor.js
    │  │  │      │  constants.js
    │  │  │      │  cursor.js
    │  │  │      │  db.js
    │  │  │      │  dynamic_loaders.js
    │  │  │      │  error.js
    │  │  │      │  mongo_client.js
    │  │  │      │  read_concern.js
    │  │  │      │  url_parser.js
    │  │  │      │  utils.js
    │  │  │      │  write_concern.js
    │  │  │      │
    │  │  │      ├─async
    │  │  │      │      .eslintrc
    │  │  │      │      async_iterator.js
    │  │  │      │
    │  │  │      ├─bulk
    │  │  │      │      common.js
    │  │  │      │      ordered.js
    │  │  │      │      unordered.js
    │  │  │      │
    │  │  │      ├─core
    │  │  │      │  │  cursor.js
    │  │  │      │  │  error.js
    │  │  │      │  │  index.js
    │  │  │      │  │  sessions.js
    │  │  │      │  │  transactions.js
    │  │  │      │  │  uri_parser.js
    │  │  │      │  │  utils.js
    │  │  │      │  │
    │  │  │      │  ├─auth
    │  │  │      │  │      auth_provider.js
    │  │  │      │  │      defaultAuthProviders.js
    │  │  │      │  │      gssapi.js
    │  │  │      │  │      mongocr.js
    │  │  │      │  │      mongo_credentials.js
    │  │  │      │  │      plain.js
    │  │  │      │  │      scram.js
    │  │  │      │  │      sspi.js
    │  │  │      │  │      x509.js
    │  │  │      │  │
    │  │  │      │  ├─connection
    │  │  │      │  │      apm.js
    │  │  │      │  │      commands.js
    │  │  │      │  │      command_result.js
    │  │  │      │  │      connect.js
    │  │  │      │  │      connection.js
    │  │  │      │  │      logger.js
    │  │  │      │  │      msg.js
    │  │  │      │  │      pool.js
    │  │  │      │  │      utils.js
    │  │  │      │  │
    │  │  │      │  ├─sdam
    │  │  │      │  │      monitoring.js
    │  │  │      │  │      server.js
    │  │  │      │  │      server_description.js
    │  │  │      │  │      server_selectors.js
    │  │  │      │  │      srv_polling.js
    │  │  │      │  │      topology.js
    │  │  │      │  │      topology_description.js
    │  │  │      │  │
    │  │  │      │  ├─tools
    │  │  │      │  │      smoke_plugin.js
    │  │  │      │  │
    │  │  │      │  ├─topologies
    │  │  │      │  │      mongos.js
    │  │  │      │  │      read_preference.js
    │  │  │      │  │      replset.js
    │  │  │      │  │      replset_state.js
    │  │  │      │  │      server.js
    │  │  │      │  │      shared.js
    │  │  │      │  │
    │  │  │      │  └─wireprotocol
    │  │  │      │          command.js
    │  │  │      │          compression.js
    │  │  │      │          constants.js
    │  │  │      │          get_more.js
    │  │  │      │          index.js
    │  │  │      │          kill_cursors.js
    │  │  │      │          query.js
    │  │  │      │          shared.js
    │  │  │      │          write_command.js
    │  │  │      │
    │  │  │      ├─gridfs
    │  │  │      │      chunk.js
    │  │  │      │      grid_store.js
    │  │  │      │
    │  │  │      ├─gridfs-stream
    │  │  │      │      download.js
    │  │  │      │      index.js
    │  │  │      │      upload.js
    │  │  │      │
    │  │  │      ├─operations
    │  │  │      │      add_user.js
    │  │  │      │      admin_ops.js
    │  │  │      │      aggregate.js
    │  │  │      │      bulk_write.js
    │  │  │      │      close.js
    │  │  │      │      collections.js
    │  │  │      │      collection_ops.js
    │  │  │      │      command.js
    │  │  │      │      command_v2.js
    │  │  │      │      common_functions.js
    │  │  │      │      connect.js
    │  │  │      │      count.js
    │  │  │      │      count_documents.js
    │  │  │      │      create_collection.js
    │  │  │      │      create_index.js
    │  │  │      │      create_indexes.js
    │  │  │      │      cursor_ops.js
    │  │  │      │      db_ops.js
    │  │  │      │      delete_many.js
    │  │  │      │      delete_one.js
    │  │  │      │      distinct.js
    │  │  │      │      drop.js
    │  │  │      │      drop_index.js
    │  │  │      │      drop_indexes.js
    │  │  │      │      estimated_document_count.js
    │  │  │      │      execute_db_admin_command.js
    │  │  │      │      execute_operation.js
    │  │  │      │      explain.js
    │  │  │      │      find.js
    │  │  │      │      find_and_modify.js
    │  │  │      │      find_one.js
    │  │  │      │      find_one_and_delete.js
    │  │  │      │      find_one_and_replace.js
    │  │  │      │      find_one_and_update.js
    │  │  │      │      geo_haystack_search.js
    │  │  │      │      has_next.js
    │  │  │      │      indexes.js
    │  │  │      │      index_exists.js
    │  │  │      │      index_information.js
    │  │  │      │      insert_many.js
    │  │  │      │      insert_one.js
    │  │  │      │      is_capped.js
    │  │  │      │      list_collections.js
    │  │  │      │      list_databases.js
    │  │  │      │      list_indexes.js
    │  │  │      │      map_reduce.js
    │  │  │      │      next.js
    │  │  │      │      operation.js
    │  │  │      │      options_operation.js
    │  │  │      │      profiling_level.js
    │  │  │      │      remove_user.js
    │  │  │      │      rename.js
    │  │  │      │      replace_one.js
    │  │  │      │      re_index.js
    │  │  │      │      set_profiling_level.js
    │  │  │      │      stats.js
    │  │  │      │      to_array.js
    │  │  │      │      update_many.js
    │  │  │      │      update_one.js
    │  │  │      │      validate_collection.js
    │  │  │      │
    │  │  │      └─topologies
    │  │  │              mongos.js
    │  │  │              native_topology.js
    │  │  │              replset.js
    │  │  │              server.js
    │  │  │              topology_base.js
    │  │  │
    │  │  ├─ms
    │  │  │      index.js
    │  │  │      license.md
    │  │  │      package.json
    │  │  │      readme.md
    │  │  │
    │  │  ├─mysql
    │  │  │  │  Changes.md
    │  │  │  │  index.js
    │  │  │  │  License
    │  │  │  │  package.json
    │  │  │  │  Readme.md
    │  │  │  │
    │  │  │  └─lib
    │  │  │      │  Connection.js
    │  │  │      │  ConnectionConfig.js
    │  │  │      │  Pool.js
    │  │  │      │  PoolCluster.js
    │  │  │      │  PoolConfig.js
    │  │  │      │  PoolConnection.js
    │  │  │      │  PoolNamespace.js
    │  │  │      │  PoolSelector.js
    │  │  │      │
    │  │  │      └─protocol
    │  │  │          │  Auth.js
    │  │  │          │  BufferList.js
    │  │  │          │  PacketHeader.js
    │  │  │          │  PacketWriter.js
    │  │  │          │  Parser.js
    │  │  │          │  Protocol.js
    │  │  │          │  ResultSet.js
    │  │  │          │  SqlString.js
    │  │  │          │  Timer.js
    │  │  │          │
    │  │  │          ├─constants
    │  │  │          │      charsets.js
    │  │  │          │      client.js
    │  │  │          │      errors.js
    │  │  │          │      field_flags.js
    │  │  │          │      server_status.js
    │  │  │          │      ssl_profiles.js
    │  │  │          │      types.js
    │  │  │          │
    │  │  │          ├─packets
    │  │  │          │      AuthSwitchRequestPacket.js
    │  │  │          │      AuthSwitchResponsePacket.js
    │  │  │          │      ClientAuthenticationPacket.js
    │  │  │          │      ComChangeUserPacket.js
    │  │  │          │      ComPingPacket.js
    │  │  │          │      ComQueryPacket.js
    │  │  │          │      ComQuitPacket.js
    │  │  │          │      ComStatisticsPacket.js
    │  │  │          │      EmptyPacket.js
    │  │  │          │      EofPacket.js
    │  │  │          │      ErrorPacket.js
    │  │  │          │      Field.js
    │  │  │          │      FieldPacket.js
    │  │  │          │      HandshakeInitializationPacket.js
    │  │  │          │      index.js
    │  │  │          │      LocalDataFilePacket.js
    │  │  │          │      OkPacket.js
    │  │  │          │      OldPasswordPacket.js
    │  │  │          │      ResultSetHeaderPacket.js
    │  │  │          │      RowDataPacket.js
    │  │  │          │      SSLRequestPacket.js
    │  │  │          │      StatisticsPacket.js
    │  │  │          │      UseOldPasswordPacket.js
    │  │  │          │
    │  │  │          └─sequences
    │  │  │                  ChangeUser.js
    │  │  │                  Handshake.js
    │  │  │                  index.js
    │  │  │                  Ping.js
    │  │  │                  Query.js
    │  │  │                  Quit.js
    │  │  │                  Sequence.js
    │  │  │                  Statistics.js
    │  │  │
    │  │  ├─negotiator
    │  │  │  │  HISTORY.md
    │  │  │  │  index.js
    │  │  │  │  LICENSE
    │  │  │  │  package.json
    │  │  │  │  README.md
    │  │  │  │
    │  │  │  └─lib
    │  │  │          charset.js
    │  │  │          encoding.js
    │  │  │          language.js
    │  │  │          mediaType.js
    │  │  │
    │  │  ├─on-finished
    │  │  │      HISTORY.md
    │  │  │      index.js
    │  │  │      LICENSE
    │  │  │      package.json
    │  │  │      README.md
    │  │  │
    │  │  ├─parseurl
    │  │  │      HISTORY.md
    │  │  │      index.js
    │  │  │      LICENSE
    │  │  │      package.json
    │  │  │      README.md
    │  │  │
    │  │  ├─path-to-regexp
    │  │  │      History.md
    │  │  │      index.js
    │  │  │      LICENSE
    │  │  │      package.json
    │  │  │      Readme.md
    │  │  │
    │  │  ├─process-nextick-args
    │  │  │      index.js
    │  │  │      license.md
    │  │  │      package.json
    │  │  │      readme.md
    │  │  │
    │  │  ├─proxy-addr
    │  │  │      HISTORY.md
    │  │  │      index.js
    │  │  │      LICENSE
    │  │  │      package.json
    │  │  │      README.md
    │  │  │
    │  │  ├─qs
    │  │  │  │  .editorconfig
    │  │  │  │  .eslintignore
    │  │  │  │  .eslintrc
    │  │  │  │  CHANGELOG.md
    │  │  │  │  LICENSE
    │  │  │  │  package.json
    │  │  │  │  README.md
    │  │  │  │
    │  │  │  ├─dist
    │  │  │  │      qs.js
    │  │  │  │
    │  │  │  ├─lib
    │  │  │  │      formats.js
    │  │  │  │      index.js
    │  │  │  │      parse.js
    │  │  │  │      stringify.js
    │  │  │  │      utils.js
    │  │  │  │
    │  │  │  └─test
    │  │  │          .eslintrc
    │  │  │          index.js
    │  │  │          parse.js
    │  │  │          stringify.js
    │  │  │          utils.js
    │  │  │
    │  │  ├─range-parser
    │  │  │      HISTORY.md
    │  │  │      index.js
    │  │  │      LICENSE
    │  │  │      package.json
    │  │  │      README.md
    │  │  │
    │  │  ├─raw-body
    │  │  │      HISTORY.md
    │  │  │      index.d.ts
    │  │  │      index.js
    │  │  │      LICENSE
    │  │  │      package.json
    │  │  │      README.md
    │  │  │
    │  │  ├─readable-stream
    │  │  │  │  .travis.yml
    │  │  │  │  CONTRIBUTING.md
    │  │  │  │  duplex-browser.js
    │  │  │  │  duplex.js
    │  │  │  │  GOVERNANCE.md
    │  │  │  │  LICENSE
    │  │  │  │  package.json
    │  │  │  │  passthrough.js
    │  │  │  │  readable-browser.js
    │  │  │  │  readable.js
    │  │  │  │  README.md
    │  │  │  │  transform.js
    │  │  │  │  writable-browser.js
    │  │  │  │  writable.js
    │  │  │  │
    │  │  │  ├─doc
    │  │  │  │  └─wg-meetings
    │  │  │  │          2015-01-30.md
    │  │  │  │
    │  │  │  └─lib
    │  │  │      │  _stream_duplex.js
    │  │  │      │  _stream_passthrough.js
    │  │  │      │  _stream_readable.js
    │  │  │      │  _stream_transform.js
    │  │  │      │  _stream_writable.js
    │  │  │      │
    │  │  │      └─internal
    │  │  │          └─streams
    │  │  │                  BufferList.js
    │  │  │                  destroy.js
    │  │  │                  stream-browser.js
    │  │  │                  stream.js
    │  │  │
    │  │  ├─require_optional
    │  │  │  │  .npmignore
    │  │  │  │  .travis.yml
    │  │  │  │  HISTORY.md
    │  │  │  │  index.js
    │  │  │  │  LICENSE
    │  │  │  │  package.json
    │  │  │  │  README.md
    │  │  │  │
    │  │  │  └─test
    │  │  │      │  require_optional_tests.js
    │  │  │      │
    │  │  │      └─nestedTest
    │  │  │              index.js
    │  │  │              package.json
    │  │  │
    │  │  ├─resolve-from
    │  │  │      index.js
    │  │  │      license
    │  │  │      package.json
    │  │  │      readme.md
    │  │  │
    │  │  ├─safe-buffer
    │  │  │      index.d.ts
    │  │  │      index.js
    │  │  │      LICENSE
    │  │  │      package.json
    │  │  │      README.md
    │  │  │
    │  │  ├─safer-buffer
    │  │  │      dangerous.js
    │  │  │      LICENSE
    │  │  │      package.json
    │  │  │      Porting-Buffer.md
    │  │  │      Readme.md
    │  │  │      safer.js
    │  │  │      tests.js
    │  │  │
    │  │  ├─semver
    │  │  │  │  CHANGELOG.md
    │  │  │  │  LICENSE
    │  │  │  │  package.json
    │  │  │  │  range.bnf
    │  │  │  │  README.md
    │  │  │  │  semver.js
    │  │  │  │
    │  │  │  └─bin
    │  │  │          semver
    │  │  │
    │  │  ├─send
    │  │  │  │  HISTORY.md
    │  │  │  │  index.js
    │  │  │  │  LICENSE
    │  │  │  │  package.json
    │  │  │  │  README.md
    │  │  │  │
    │  │  │  └─node_modules
    │  │  │      └─ms
    │  │  │              index.js
    │  │  │              license.md
    │  │  │              package.json
    │  │  │              readme.md
    │  │  │
    │  │  ├─serve-static
    │  │  │      HISTORY.md
    │  │  │      index.js
    │  │  │      LICENSE
    │  │  │      package.json
    │  │  │      README.md
    │  │  │
    │  │  ├─setprototypeof
    │  │  │  │  index.d.ts
    │  │  │  │  index.js
    │  │  │  │  LICENSE
    │  │  │  │  package.json
    │  │  │  │  README.md
    │  │  │  │
    │  │  │  └─test
    │  │  │          index.js
    │  │  │
    │  │  ├─sqlstring
    │  │  │  │  HISTORY.md
    │  │  │  │  index.js
    │  │  │  │  LICENSE
    │  │  │  │  package.json
    │  │  │  │  README.md
    │  │  │  │
    │  │  │  └─lib
    │  │  │          SqlString.js
    │  │  │
    │  │  ├─statuses
    │  │  │      codes.json
    │  │  │      HISTORY.md
    │  │  │      index.js
    │  │  │      LICENSE
    │  │  │      package.json
    │  │  │      README.md
    │  │  │
    │  │  ├─string_decoder
    │  │  │  │  .travis.yml
    │  │  │  │  LICENSE
    │  │  │  │  package.json
    │  │  │  │  README.md
    │  │  │  │
    │  │  │  └─lib
    │  │  │          string_decoder.js
    │  │  │
    │  │  ├─toidentifier
    │  │  │      index.js
    │  │  │      LICENSE
    │  │  │      package.json
    │  │  │      README.md
    │  │  │
    │  │  ├─type-is
    │  │  │      HISTORY.md
    │  │  │      index.js
    │  │  │      LICENSE
    │  │  │      package.json
    │  │  │      README.md
    │  │  │
    │  │  ├─unpipe
    │  │  │      HISTORY.md
    │  │  │      index.js
    │  │  │      LICENSE
    │  │  │      package.json
    │  │  │      README.md
    │  │  │
    │  │  ├─util-deprecate
    │  │  │      browser.js
    │  │  │      History.md
    │  │  │      LICENSE
    │  │  │      node.js
    │  │  │      package.json
    │  │  │      README.md
    │  │  │
    │  │  ├─utils-merge
    │  │  │      .npmignore
    │  │  │      index.js
    │  │  │      LICENSE
    │  │  │      package.json
    │  │  │      README.md
    │  │  │
    │  │  └─vary
    │  │          HISTORY.md
    │  │          index.js
    │  │          LICENSE
    │  │          package.json
    │  │          README.md
    │  │
    │  └─src
    │      │  config.json
    │      │  mime.js
    │      │  server.js
    │      │
    │      ├─db
    │      │      index.js
    │      │      mongo.js
    │      │      mysql.js
    │      │
    │      ├─routers
    │      │      goods.js
    │      │      index.js
    │      │      order.js
    │      │      user.js
    │      │
    │      └─utils
    │              index.js
    │              token.js
    │
    ├─pages
    │  │  Book.vue
    │  │  Cart.vue
    │  │  Details.vue
    │  │  Home.vue
    │  │  Login.vue
    │  │  management.vue
    │  │  Mine.vue
    │  │  Paimai.vue
    │  │  Reg.vue
    │  │
    │  ├─aside
    │  │      aside.vue
    │  │
    │  ├─everynewbook
    │  │      newbook.vue
    │  │
    │  └─shouye
    │          Fenlei.vue
    │
    ├─router
    │      index.js
    │
    └─store
            cart.js
            common.js
            index.js





```