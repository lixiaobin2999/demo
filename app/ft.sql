SET NAMES UTF8;
DROP DATABASE IF EXISTS ft;
CREATE DATABASE ft CHARSET=UTF8;
USE ft;
/* 用户 */
CREATE TABLE ft_user(
   uid INT PRIMARY KEY AUTO_INCREMENT,
   uname VARCHAR(32),               #用户昵称
   upwd VARCHAR(32),                #用户密码
   email VARCHAR(64),               #邮箱
   phone VARCHAR(16),               #手机
   head_photo VARCHAR(128),         #头像图片路径
   user_name VARCHAR(32),           #用户名，如王小明
   gender INT                       #性别 0-女 1-男
);
/****首页商品****/
CREATE TABLE ft_index_product(
   pid INT PRIMARY KEY AUTO_INCREMENT,
   title VARCHAR(64),                    #标题
   details VARCHAR(128),                 #商品说明
   pic VARCHAR(128),                     #商品图片
   price DECIMAL(10,2),                  #价格
   href VARCHAR(128),                    #路径
);

/*** 产品详情 ***/
CREATE TABLE ft_product(
   pid INT PRIMARY KEY AUTO_INCREMENT,
   family_id INT,                         #所属家族系列的编号
   tname VARCHAR(128),                    #商品名称
   subtitle VARCHAR(128),                 #副标题
   price  DECIMAL(10,2),                  #促销价格
   original_price DECIMAL(10,2),          #原价
   spec VARCHAR(32),                      #规格
   pic VARCHAR(128),                      #图片路径                  
   procuct_total INT                      #商品总数量
);
/*** 商品收藏***/
CREATE TABLE ft_product_collect(
   cid INT PRIMARY KEY AUTO_INCREMENT,
   user_id INT,                          #用户编号
   product_id INT,                       #商品编号
   is_collect BOOLEAN DEFAULT true       #收藏 (默认为收藏状态)
);
/** 商品型号和家族 **/
CREATE TABLE ft_product_family(
   fid INT PRIMARY KEY AUTO_INCREMENT,
   fname VARCHAR(32),                    #商品的家族
);
/** 商品详情图片 **/
CREATE TABLE ft_product_pic(  
   pid INT PRIMARY KEY AUTO_INCREMENT,
   product_id INT,                       #商品编号
   sm VARCHAR(128),                      #小图片路径
   md VARCHAR(128),                      #中图片路径
   lg VARCHAR(128)                       #大图片路径
);
/** 购物车条目 **/
CREATE TABLE ft_shoppingcart_item(
   lid INT PRIMARY KEY AUTO_INCREMENT,
   user_id INT,                          #用户编号
   product_id INT,                       #商品编号
   count INT,                            #购买数量
   is_checked BOOLEAN DEFAULT true       #是否已勾选，确定购买 (默认为勾选状态)
);
/**数据添加**/
/** 用户数据**/
INSERT INTO ft_user VALUE
(NULL,"ming","123456","135123456@qq.com","13512345678",DEFAULT,"王小明",1),
(NULL,"hong","123456","135123456@qq.com","13512345678",DEFAULT,"李小红",0),
(NULL,"hua","123456","135123456@qq.com","13512345678",DEFAULT,"李华",1),
(NULL,"xuan","123456","135123456@qq.com","13512345678",DEFAULT,"曾小璇",0);
/****商品详情数据****/

INSERT INTOft_product VALUE
(NULL,1,"方太 CXW-200-JQ22TS 风魔方 近吸直排 智能油烟机（不带装饰罩）","下单送爱仕达炊具五件套，限量赠送，更多优惠咨询在线客服！",4999,5680,"JQ22TS","./images/procuct/20151127155142791.jpg",999),
(NULL,2,"方太 JA22CB 燃气灶","下单送KOK精品套锅，限量赠送，更多优惠咨询在线客服！",3399,3680,"天然气12T","./images/procuct/201582491126168.jpg",999),
(NULL,2,"方太 JA22CB 燃气灶","下单送KOK精品套锅，限量赠送，更多优惠咨询在线客服！",3399,3680,"液化气20Y","./images/procuct/201582491126168.jpg",999),
(NULL,3,"方太 ZTD100F-WH6 消毒柜","官方直销 会员尊享",5262,5262,"ZTD100F-WH6","./images/procuct/2018528165417118.jpg",999),
(NULL,4,"方太 JSQ21-11ATES 燃气热水器","下单送沐浴三件套，限量赠送，更多优惠咨询在线客服！",3460,4200,"北方防冻天然气","./images/procuct/2016413142818215.jpg",999),
(NULL,4,"方太 JSQ21-11ATES 燃气热水器","下单送沐浴三件套，限量赠送，更多优惠咨询在线客服！",3460,4200,"北方防冻液化气","./images/procuct/2016413142818215.jpg",999),
(NULL,4,"方太 JSQ21-11ATES 燃气热水器","下单送沐浴三件套，限量赠送，更多优惠咨询在线客服！",3460,4200,"南方防冻天然气","./images/procuct/2016413142818215.jpg",999),
(NULL,4,"方太 JSQ21-11ATES 燃气热水器","下单送沐浴三件套，限量赠送，更多优惠咨询在线客服！",3460,4200,"南方防冻液化气","./images/procuct/2016413142818215.jpg",999),
(NULL,5,"方太 SCD26-C2T 蒸箱","官方直销 会员尊享",7980,7980,"SCD26-C2T","./images/procuct/201843224417409.jpg",999),
(NULL,6,"方太 W25800K-E2 微波炉","官方直销 会员尊享",2790,3580,"W25800K-E2","./images/procuct/20166111522181.jpg",999),
(NULL,7,"方太 KQD50F-E2 烤箱","下单送烤箱工具，限量赠送，更多优惠咨询在线客服！",5790,6880,"KQD50F-E2","./images/procuct/201661115029244.jpg",999),
(NULL,8,"方太 JBSD2T-X6S/JBSD2T-X6SL 水槽洗碗机","官方直销 会员尊享",8380,8380,"X6S（洗碗机在右边）","./images/procuct/2016414162145903.jpg",999),
(NULL,8,"方太 JBSD2T-X6S/JBSD2T-X6SL 水槽洗碗机","官方直销 会员尊享",8380,8380,"X6SL（洗碗机在左边）","./images/procuct/2016414162145903.jpg",999),
(NULL,9,"方太 ZW-C2.i 蒸微一体机 外蒸内微 家常不寻常","官方直销 会员尊享",14750,14750,"ZW-C2.i","./images/procuct/201862014396516.jpg",999);
/** 商品收藏 **/
#INSERT INTO ft_product_collect VALUE (NULL,1,1,true);
/** 购物车条目 **/
#INSERT INTO ft_shoppingcart_item VALUE (NULL,1,1,20,true);
/** 商品型号系列 **/
INSERT INTO ft_product_family VALUE
(NULL,"油烟机"),
(NULL,"灶具"),
(NULL,"消毒柜"),
(NULL,"热水器"),
(NULL,"蒸箱"),
(NULL,"微波炉"),
(NULL,"烤箱"),
(NULL,"水槽洗碗机"),
(NULL,"蒸微一体机");

/** 首页商品 **/
INSERT INTO ft_index_product VALUE
(NULL,"方太 CXW-200-JQ22TS 风魔方 近吸直排 智能油烟机（不带装饰罩）","下单送爱仕达炊具五件套，限量赠送，更多优惠咨询在线客服！","./images/procuct/20151127155142791.jpg",4999,"detail.html?pid=1"),
(NULL,"方太 JA22CB 燃气灶","下单送KOK精品套锅，限量赠送，更多优惠咨询在线客服！","./images/procuct/201582491126168.jpg",3399,"detail.html?pid=2"),
(NULL,"方太 ZTD100F-WH6 消毒柜","官方直销 会员尊享","./images/procuct/2018528165417118.jpg",5262,"detail.html?pid=3"),
(NULL,"方太 JSQ21-11ATES 燃气热水器","下单送沐浴三件套，限量赠送，更多优惠咨询在线客服！","./images/procuct/2016413142818215.jpg",3460,"detail.html?pid=4"),
(NULL,"方太 SCD26-C2T 蒸箱","官方直销 会员尊享","./images/procuct/201843224417409.jpg",7980,"detail.html?pid=5"),
(NULL,"方太 W25800K-E2 微波炉","官方直销 会员尊享","./images/procuct/20166111522181.jpg",2790,"detail.html?pid=6"),
(NULL,"方太 KQD50F-E2 烤箱","下单送烤箱工具，限量赠送，更多优惠咨询在线客服！","./images/procuct/201661115029244.jpg",5790,"detail.html?pid=7"),
(NULL,"方太 JBSD2T-X6S/JBSD2T-X6SL 水槽洗碗机","官方直销 会员尊享","./images/procuct/2016414162145903.jpg",8380,"detail.html?pid=8"),
(NULL,"方太 ZW-C2.i 蒸微一体机 外蒸内微 家常不寻常","官方直销 会员尊享","./images/procuct/201862014396516.jpg",14750,"detail.html?pid=9");
INSERT INTO ft_product_pic VALUE
(NULL,1,"images/product/md/20151127155143244.jpg",NULL,NULL),
(NULL,1,"images/product/md/20151127155142791.jpg",NULL,NULL),
(NULL,1,"images/product/md/20151127155143682.jpg",NULL,NULL),
(NULL,1,"images/product/md/20151127155143932.jpg",NULL,NULL),
(NULL,1,"images/product/md/201839162929560.png",NULL,NULL),
(NULL,2,"images/product/md/201582491126168.jpg",NULL,NULL),
(NULL,2,"images/product/md/201584213249468.jpg",NULL,NULL),
(NULL,2,"images/product/md/201584213249656.jpg",NULL,NULL),
(NULL,2,"images/product/md/201584213250250.jpg",NULL,NULL),
(NULL,2,"images/product/md/2017722184542900.jpg",NULL,NULL),
(NULL,3,"images/product/md/2018528165417118.jpg",NULL,NULL),
(NULL,4,"images/product/md/20161230211955696.jpg",NULL,NULL),
(NULL,4,"images/product/md/2016413142818215.jpg",NULL,NULL),
(NULL,4,"images/product/md/2016413142819637.jpg",NULL,NULL),
(NULL,4,"images/product/md/2016413142820278.jpg",NULL,NULL),
(NULL,4,"images/product/md/20191891355156.jpg",NULL,NULL),
(NULL,5,"images/product/md/201843224417409.jpg",NULL,NULL),
(NULL,5,"images/product/md/201843224417540.jpg",NULL,NULL),
(NULL,5,"images/product/md/201843224417602.jpg",NULL,NULL),
(NULL,5,"images/product/md/201843224417703.jpg",NULL,NULL),
(NULL,5,"images/product/md/201843224417782.jpg",NULL,NULL),
(NULL,6,"images/product/md/201661115216244.jpg",NULL,NULL),
(NULL,6,"images/product/md/20166111522181.jpg",NULL,NULL),
(NULL,6,"images/product/md/20166111526259.jpg",NULL,NULL),
(NULL,6,"images/product/md/201661115299.jpg",NULL,NULL),
(NULL,6,"images/product/md/2018730144217489.jpg",NULL,NULL),
(NULL,7,"images/product/md/2016414162145903.jpg",NULL,NULL),
(NULL,7,"images/product/md/2016414162146496.jpg",NULL,NULL),
(NULL,7,"images/product/md/2016414162147137.jpg",NULL,NULL),
(NULL,7,"images/product/md/2016414162147465.jpg",NULL,NULL),
(NULL,7,"images/product/md/20176281763373.jpg",NULL,NULL),
(NULL,8,"images/product/md/201862014396516.jpg",NULL,NULL),
(NULL,9,"images/product/md/201661115029244.jpg",NULL,NULL),
(NULL,9,"images/product/md/201661115110775.jpg",NULL,NULL),
(NULL,9,"images/product/md/20193411546500.jpg",NULL,NULL),
(NULL,9,"images/product/md/20193411546734.jpg",NULL,NULL),
(NULL,9,"images/product/md/20193411545927.jpg",NULL,NULL),
