var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//课程接口
//接口维护人：JT
//维护时间：2019/5/19/15：33
router.get('/course',function(req,res,next) {
  const sql = "select * from course where subject = 1"
  connection.query(sql,(err,data)=>{
    if(err){
      console.log('[query] - :' + err);
      return res.json({success:false,message:'获取失败'})
    }
    if(data == ''){
      return res.json({success:false,message:'暂无此课程'})
    }
    return res.json(data)
  })
})

module.exports = router;