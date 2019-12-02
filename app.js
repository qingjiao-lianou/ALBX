// 引入express
const express = require('express')
const fs = require('fs')
// 搭建服务器
const app = express()
// 添加端口监听
app.listen(3000, () => {
    console.log('http://127.0.0.1:3000');

})

// 托管静态资源文件
app.use('/assets',express.static('assets'))
app.use('/uploads',express.static('uploads'))

// 配置ejs模板引擎
app.set('view engine','ejs')
app.set('views',__dirname+'/views')

// 添加路由配置
app.get('/',(req,res) => {
   res.render('index.ejs')
})

app.use('/admin',(req,res) => {
  res.render('admin/index.ejs')
})