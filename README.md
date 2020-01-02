## 1.项目目录（商城名称为总的项目目录）

> 后端文件--php
>
> 前端开发目录--src
>
> 前端线上目录--dist(环境，压缩，优化)



## 2.src开发目录

> iconfont(可选)：自定义字体目录
>
> img目录：(css样式图片--css)  --  测试图片全部采用地址加载（数据库）
>
> sass(可选)：css预编译框架的目录
>
> css目录：（reset.css 重置样式   public 公用样式   style.css 其他样式）
>
> script目录：js文件目录(自定义名称)
>
> index.html  首页
>
> details.html  详情页
>
> login.html   register.html 登录注册页
>
> cart.html  购物车页面



## 3.分析每一个页面

> index.html页面
>
> 网站标题，keywords关键字 ，description描述   --  参考原网站
>
> 全部商品分类只做一个模块
>
> 首页的效果出现多处相同，封装插件js实现。
>
> 页面字体图标(自定义字体)，下载1个woff文件，才能生成自定义字体。（原网站）
>
> 布局方式：结构数据（数据渲染和效果分开写）
>
> 注释清晰明了

> details.html
>
> 一定要有放大镜效果，没有自己添加
>
> 详情页只做一半（以添加购物车为基准）

> login.html   register.html登录注册页面
>
> 注册页面出现注册步骤，无法查看，注册页面自定义布局（参考其他商场）。
>
> 如果登录注册在一个页面上面，算两个页面。

> cart.html购物车页面实现布局和原网站一致



## 4.数据库
>database:secoo
>
>table:secooUser
>
>​		userid key
>
>​		userpsd
>
>​		usercart
>
>table:secooProduct
>
>​		pid key	商品编码
>
>​		ptype       商品类型
>
>​		pcategory 商品详细分类
>
>​		pbrand     商品品牌
>
>​		ptitle		商品标题
>
>​		pdetail	商品详细信息
>
>​		pprice	商品价格
>
>​		pamount	商品库存
>
>​		ppic		商品图片
>
>​		psize	商品尺码
>
>​		pcolor	商品颜色
>
>​		pep		是否编辑推荐