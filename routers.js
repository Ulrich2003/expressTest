const express = require('express')

// 创建路由对象
const router = express.Router()

// 挂载具体路由
router.get('/user/:age',(req,res)=>{
    res.send({
        name:'ulrich',
        gender:'m',
        age:req.params.age
    })
})

router.post('/user',(req,res)=>{
    res.send("hi, My name is Ulrich")
})

module.exports = router