const express = require('express');
var router = express.Router();
//引入连接池
const pool = require('../pool.js');
//用户注册路由
router.post("/userReg", (req, res) => {
   var $phone = req.body.phone;
   var $upwd = req.body.upwd;
   var $cpwd = req.body.cpwd;
   var obj = req.body;
   if ($upwd.length < 6 || $upwd.length > 15) {
      res.send("402")
      return;
   }
   if ($cpwd != $upwd) {
      res.send("403");
      return;
   }

   var sql = "select *from ft_user where phone=?";
   var sql2 = "INSERT INTO ft_user set phone=?,upwd=?";
   pool.query(sql, [$phone], (err, result) => {
      if (err) throw err;
      if (result.length > 0) {
         res.send("0")
      } else {
         pool.query(sql2, [$phone, $upwd], (err, result) => {
            if (err) throw err;
            if (result.affectedRows > 0) {
               res.send("1")
            }
         })
      }
   })
})
//用户登录
router.post("/userLogin", (req, res) => {
   var $phone = req.body.phone;
   var $upwd = req.body.upwd;
   if (!$phone) {
      res.send("401")
      return;
   }
   if (!$upwd) {
      res.send("402")
      return;
   }
   var sql = "select *from ft_user where phone=?";
   var sql2 = "select *from ft_user where phone=? AND upwd=?";
   pool.query(sql, [$phone], (err, result) => {
      if (err) throw err;
      if (result.length < 1) {
         res.send("400")
      } else {
         pool.query(sql2, [$phone, $upwd], (err, result) => {
            if (err) throw err;
            if (result.length > 0) {
               res.send("1")
            } else {
               res.send("0")
            }
         })
      }
   })
})
module.exports = router;