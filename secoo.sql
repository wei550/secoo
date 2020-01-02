/*
Navicat MySQL Data Transfer

Source Server         : czy
Source Server Version : 50508
Source Host           : localhost:3306
Source Database       : secoo

Target Server Type    : MYSQL
Target Server Version : 50508
File Encoding         : 65001

Date: 2019-11-16 14:16:50
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `secooproduct`
-- ----------------------------
DROP TABLE IF EXISTS `secooproduct`;
CREATE TABLE `secooproduct` (
  `pid` int(11) NOT NULL AUTO_INCREMENT,
  `ptype` varchar(255) NOT NULL,
  `ptitle` varchar(255) NOT NULL,
  `pdetail` varchar(1000) NOT NULL,
  `pprice` float NOT NULL,
  `pcategory` varchar(255) NOT NULL,
  `pbrand` varchar(255) NOT NULL,
  `pamount` int(11) NOT NULL,
  `ppic` varchar(1000) NOT NULL,
  `purls` varchar(5000) NOT NULL,
  `psize` varchar(255) NOT NULL,
  `pcolor` varchar(255) NOT NULL,
  `pep` smallint(6) NOT NULL,
  PRIMARY KEY (`pid`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of secooproduct
-- ----------------------------
INSERT INTO `secooproduct` VALUES ('1', 'bag', 'MK荔枝纹锁头单肩斜挎包', 'Michael Kors/迈克·科尔斯 Mercer系列 MK荔枝纹锁头单肩斜挎包 黑色', '1878', '单肩包', 'Michael Kors', '5', 'http://pic11.secooimg.com/product/500/500/96/64/16739664.jpg', 'http://pic11.secooimg.com/product/80/80/96/64/16739664.jpg,http://pic11.secooimg.com/product/80/80/96/64/16739664_2.jpg,http://pic11.secooimg.com/product/80/80/96/64/16739664_3.jpg,http://pic11.secooimg.com/product/80/80/96/64/16739664_3.jpg,http://pic11.secooimg.com/product/80/80/96/64/16739664_3.jpg', '均码', '黑色', '1');
INSERT INTO `secooproduct` VALUES ('2', 'bag', 'MK Mercer中号风琴款单肩手提包', '【杨幂同款】MK Mercer中号风琴款单肩手提包 30F8GM9T2T MICHAEL KORS/MK单肩包 斜挎包 女包', '4200', '手提包', 'Michael Kors', '3', 'http://pic11.secooimg.com/product/500/500/98/48/b0de5992016c481498aa80d5d2e389db.jpg', 'http://pic11.secooimg.com/product/80/80/98/48/b0de5992016c481498aa80d5d2e389db.jpg,http://pic11.secooimg.com/product/80/80/52/10/4d90e23ad6c94b86af9540db318b76b3.jpg,http://pic11.secooimg.com/product/80/80/48/49/0148a01ce8a64cdf8b0773488a5df9fb.jpg,http://pic11.secooimg.com/product/80/80/55/97/7a65cb5ce34f4919883b929b5d23bf0b.jpg', '均码', '蓝色', '1');
INSERT INTO `secooproduct` VALUES ('3', 'bag', '马赫丽美super PC聚碳酸酯材质蓝牙报警行李箱', 'LIEMOCH/利马赫丽美super PC聚碳酸酯材质蓝牙报警行李箱20寸男士旅行箱女中性青年款式拉杆箱万向轮', '5688', '拉杆箱', 'Liemoch', '10', 'http://pic11.secooimg.com/product/500/500/2019/0904/15c9de59f5074fc196512073d6e296b7.jpg', 'http://pic11.secooimg.com/product/80/80/2019/0904/15c9de59f5074fc196512073d6e296b7.jpg,http://pic11.secooimg.com/product/80/80/2019/0904/124904f3e32542a09ea3601acc77e6d9.jpg,http://pic11.secooimg.com/product/80/80/2019/0904/d3c205c81b9246a4999e2b26cbec35df.jpg,http://pic11.secooimg.com/product/80/80/2019/0904/e71d41ca4e2e4aa7a864322d3d7faf73.jpg,http://pic11.secooimg.com/product/80/80/2019/0904/452a1ff5b2bb42e5884e86760399fa0e.jpg', '均码', '银色', '1');
INSERT INTO `secooproduct` VALUES ('4', 'bag', '蔻驰 男士双C纹单肩斜挎包', 'COACH/蔻驰 男士双C纹单肩斜挎包 50715', '3214', '斜挎包', 'Coach', '2', 'http://pic11.secooimg.com/product/500/500/2019/0711/1f885a9aa1c44f51b2e3a0592e4ac493.jpg', 'http://pic11.secooimg.com/product/80/80/2019/0711/1f885a9aa1c44f51b2e3a0592e4ac493.jpg,http://pic11.secooimg.com/product/80/80/2019/0711/1f885a9aa1c44f51b2e3a0592e4ac493.jpg,http://pic11.secooimg.com/product/80/80/2019/0711/1f885a9aa1c44f51b2e3a0592e4ac493.jpg,http://pic11.secooimg.com/product/80/80/2019/0711/96833e9ee2cb45878aac3aa2c0cfb2f5.jpg,http://pic11.secooimg.com/product/80/80/2019/0711/232912de08c54667983ef123e332c565.jpg', '均码', '黄色', '1');
INSERT INTO `secooproduct` VALUES ('5', 'bag', '芬迪 19春夏 男士黑色牛皮金色小怪兽眼睛装饰时尚手拿包', 'FENDI/芬迪 19春夏 男士黑色牛皮金色小怪兽眼睛装饰时尚手拿包', '8234', '手拿包', 'Fendi', '7', 'http://pic11.secooimg.com/product/500/500/54/10/6f9ff2c4b29d4779be12903bde2f299c.jpg', 'http://pic11.secooimg.com/product/80/80/54/10/6f9ff2c4b29d4779be12903bde2f299c.jpg,http://pic11.secooimg.com/product/80/80/98/49/b12877dca17644b286cad395987e95d1.jpg,http://pic11.secooimg.com/product/80/80/49/54/163c71fadb55431695e86b6e2a2ded68.jpg,http://pic11.secooimg.com/product/80/80/51/50/32026d300dd14fd0b5f36c7aefbe2853.jpg,http://pic11.secooimg.com/product/80/80/48/99/0c9db6dc7704460a85c648d1d4a4cac7.jpg', '均码', '黑色', '1');
INSERT INTO `secooproduct` VALUES ('6', 'bag', 'PRADA 19年秋冬 手提包 男性 LOGO 商务风 黑色 公文包 ', '普拉达/PRADA 19年秋冬 手提包 男性 LOGO 商务风 黑色 公文包 2VE016 9Z2 F0002', '8787', '公文包', 'Parada', '20', 'http://pic11.secooimg.com/product/500/500/2019/0621/82a698c19ea54f54980e35f16ab62a07.jpg', 'http://pic11.secooimg.com/product/80/80/2019/0621/82a698c19ea54f54980e35f16ab62a07.jpg,http://pic11.secooimg.com/product/80/80/2019/0621/455e89cff081428c8844e71330b80205.jpg,http://pic11.secooimg.com/product/80/80/2019/0621/d118c3bf3912459e97f942e5b4b58b20.jpg', '均码', '黑色', '1');
INSERT INTO `secooproduct` VALUES ('7', 'watch', '豪利时潜水系列39.5mm自动机械男表733-7732-4135MB', 'Oris/豪利时潜水系列39.5mm自动机械男表733-7732-4135MB\r\nOris/豪利时潜水系列39.5mm自动机械男表733-7732-4135MB\r\nOris/豪利时潜水系列39.5mm自动机械男表733-7732-4135MB', '13668', '腕表', 'Oris', '2', 'http://pic11.secooimg.com/product/500/500/99/10/cdcaa950114c406a93888a9299ea43f6.jpg', 'http://pic11.secooimg.com/product/80/80/99/10/cdcaa950114c406a93888a9299ea43f6.jpg,http://pic11.secooimg.com/product/80/80/98/50/b2e9044dbe434f1ab35db4f4dd55c6dc.jpg,http://pic11.secooimg.com/product/80/80/49/99/1cae48fa0aa44ac3b79ac688f72cdbc2.jpg,http://pic11.secooimg.com/product/80/80/52/50/4296ecbb30a74de8afc18e799a6e5765.jpg', '均码', '银色', '1');
INSERT INTO `secooproduct` VALUES ('8', 'jewelry', '古钻珠宝 克拉戒18K金钻石戒指女士结婚/求婚戒指', 'GZUAN/古钻珠宝 克拉戒18K金钻石戒指女士结婚/求婚戒指 BLH0034', '56879', '戒指/指环', 'GZUAN', '3', 'http://pic11.secooimg.com/product/500/500/56/51/839e0e109d05426b923d910c15e2b34a.jpg', 'http://pic11.secooimg.com/product/80/80/56/51/839e0e109d05426b923d910c15e2b34a.jpg,http://pic11.secooimg.com/product/80/80/10/10/df72517dabe34dc18330514810ecebf2.jpg,http://pic11.secooimg.com/product/80/80/54/56/682abf683238407082ab3753bc2bb655.jpg,http://pic11.secooimg.com/product/80/80/10/53/d5bda4afa56b48b29b0a67decb4d0367.jpg', '10号', '银色', '1');
INSERT INTO `secooproduct` VALUES ('9', 'clothes', 'SAINT LAURENT PARIS 19年春夏 ysl 大衣 女性 西装领', 'SAINT LAURENT PARIS/SAINT LAURENT PARIS 19年春夏 ysl 大衣 女性 西装领 复古 混色 女士皮草 562391#Y7PR2#1039', '178252', '女式外套', 'SAINT LAURENT PARIS', '1', 'http://pic11.secooimg.com/product/500/500/49/98/1be856edc34c42d08f70db654bb00ed4.jpg', 'http://pic11.secooimg.com/product/80/80/49/98/1be856edc34c42d08f70db654bb00ed4.jpg,http://pic11.secooimg.com/product/80/80/57/57/9963ad31f44c4a80bbfa56c5621a4145.jpg,http://pic11.secooimg.com/product/80/80/50/57/296addf01cc948cc9dfca0a7acbee949.jpg', '意码38', '混色', '1');
INSERT INTO `secooproduct` VALUES ('10', 'shoes', 'Alexander McQueen 19年秋冬 及裸靴 女性 马丁靴 圆头 短靴', '亚历山大麦昆/Alexander McQueen 19年秋冬 及裸靴 女性 马丁靴 圆头 短靴 586394 WHX51 1000', '3593', '短靴', 'Alexander McQueen', '2', 'http://pic11.secooimg.com/product/500/500/2019/0627/f2e4fe4a3ec24fe5831e2da34535b68a.jpg', 'http://pic11.secooimg.com/product/80/80/2019/0627/f2e4fe4a3ec24fe5831e2da34535b68a.jpg,http://pic11.secooimg.com/product/80/80/2019/0627/33bedd8f518a476595da60db667171e1.jpg,http://pic11.secooimg.com/product/80/80/2019/0627/b77c6c896db34d54b51fa4191472a8f9.jpg,http://pic11.secooimg.com/product/80/80/2019/0627/525e4461961c43c59ad3451c6d114791.jpg', '欧码38', '黑色', '1');
INSERT INTO `secooproduct` VALUES ('11', 'accessories', '菲拉格慕 核桃木色/黑色 男士GANCINI双面可调式腰带', 'Salvatore Ferragamo/菲拉格慕 核桃木色/黑色 男士GANCINI双面可调式腰带 715732-67A075-DOUBLE ADJUS 19年秋冬', '3950', '腰带', 'Ferragamo', '10', 'http://pic11.secooimg.com/product/500/500/2019/0822/d20f2ccf476a45b188b6316f8c8888d9.jpg', 'http://pic11.secooimg.com/product/80/80/2019/0822/d20f2ccf476a45b188b6316f8c8888d9.jpg,http://pic11.secooimg.com/product/80/80/2019/0822/dd54152a78c04ee49adb27404367d855.jpg,http://pic11.secooimg.com/product/80/80/2019/0822/b7a44735945b4329bee3e7924aeffc95.jpg', '90cm', '黑色', '1');

-- ----------------------------
-- Table structure for `secoouser`
-- ----------------------------
DROP TABLE IF EXISTS `secoouser`;
CREATE TABLE `secoouser` (
  `userid` varchar(255) NOT NULL,
  `userpsd` varchar(255) NOT NULL,
  `usercart` varchar(2000) DEFAULT NULL,
  PRIMARY KEY (`userid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of secoouser
-- ----------------------------
INSERT INTO `secoouser` VALUES ('czy1', '7c4a8d09ca3762af61e59520943dc26494f8941b', '');
INSERT INTO `secoouser` VALUES ('lisi', '7c4a8d09ca3762af61e59520943dc26494f8941b', '1,3');
INSERT INTO `secoouser` VALUES ('wangwu', '7c4a8d09ca3762af61e59520943dc26494f8941b', '');
INSERT INTO `secoouser` VALUES ('zhangsan', '7c4a8d09ca3762af61e59520943dc26494f8941b', '5,1-6,1-1,1-7,1');
