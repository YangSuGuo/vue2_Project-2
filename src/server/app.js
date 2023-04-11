let express = require('express')
let app = express()
let cors = require('cors')
let bodyParser = require('body-parser')
let router = require('./router')

app.use(bodyParser.json());  //配置解析，用于解析json和urlencoded格式的数据
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors())              //配置跨域
app.use(router)              //配置路由

app.listen(80, () => {
    console.log('服务启动成功');
    /*
    验证浏览器访问   http://127.0.0.1/user
    */
})