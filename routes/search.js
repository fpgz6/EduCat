var express = require('express');
var router = express.Router();

const mysql = require('../config/mysql');
/* GET home page. */
router.get('/', function(req, res, next) {
	const search = req.query.search;
  const sql = "select * from course where * like '"+search+"'"
	mysql.query(sql,(err,row,fields) => {
		if(err){
			console.log('[query] - :' + err);
			return res.json({success:false,message:'服务端错误!'});
		}else if(row == ''){
			return res.json({success:false,message:'没有查询到您想要的结果!'});
		}
		res.json(row);
		// res.json({success:true,message:'搜索成功！',row});
		
		
	});
});



module.exports = router;
