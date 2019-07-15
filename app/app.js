//引入express
const express = require('express');
//
const bodyParser = require('body-parser')
//使用路由器  用户路由器
const userRouter = require('./router/user.js')
//cor
const cors = require("cors");
//创建服务器

var server = express();
//设置并监听端口
server.listen(1200);
//托管静态资源到public
server.use(cors({
	origin: "http://127.0.0.1:5500"
}))
server.use(bodyParser.urlencoded({
	//不使用扩展的qs模块,而是使用querystring模块,格式化为对象
	extended: false
}))
server.use(express.static('public'));
//使用挂载的url
server.use('/user', userRouter);