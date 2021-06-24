const express = require('express')
const needle = require('needle');
const cors = require('cors')
const serv = express()

// 设置 POST 响应的数据格式
serv.use(express.json()) // for parsing application/json
serv.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
// 设置跨域响应头
serv.use(cors())


// 如果是 post 接口，直接 serv.post 即可，其他 method 同理
serv.get('/aaa',(req,res)=>{
    
    // 路径参数，比如 /user/:name, 这个 name 值就是 req.param
    let param = req.param
    // 查询参数，比如 /user/张三?age=13, 这个 age 值就是 req.query
    let query = req.query
    // 如果是 post put 请求，通过 req.body 获得请求体
    
    // 发起 http 请求 BEGIN-----------------------------------------------------------------------
    let options = {
        headers: { 'X-Custom-Header': 'Bumbaway atuna' },
        json: true
    }
    // 发 get 请求
    needle('get', 'http://localhost:5910/login',options)
    // 如果不需要对响应进行处理，下面.then 和 .catch 可以删掉
    //     .then(function(res) {
    //         // console.log(res)
    //     })
    //     .catch(function(err) {
    //         // console.log(err)
    //     })
    
    // 发 post 请求
    // needle('post', 'http://urhost/abc', { a: 'a', b: 'b' }, options)
    // 如果不需要对响应进行处理，下面.then 和 .catch 可以删掉
    //     .then(function(res) {
    //         // console.log(res)
    //     })
    //     .catch(function(err) {
    //         // console.log(err)
    //     })
    
    // 接受大文件
    // let file = fs.createWriteStream('logo.png');
    // needle.get('https://google.com/images/logo.png').pipe(file).on('done', function() {
    //     console.log('Pipe finished!');
    // })
    
    // 发起 http 请求 END-----------------------------------------------------------------------
    
    res.send(true)
})


serv.listen(5000)
console.log('listening: 5000')