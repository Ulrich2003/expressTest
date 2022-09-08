const express = require('express')
const userRouter = require('./routers')

// 创建web服务器
const app = express()

// 倒入路由模块
app.use(userRouter)

// http://localhost:8080/ulrich/
app.use('/ulrich',express.static('./myWeb'))

// 启动web服务器
app.listen(8080,()=>{
    console.log('✨已启动')
})