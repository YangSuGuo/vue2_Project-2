let db = require('../db')

//登录
exports.get = (req, res) => {
    var sql = 'select id from vue_ltem1.user where user.name = ? and user.password = ?'
    db.query(sql, [req.query.name, req.query.password], (err, data) => {
        if(err) {
            return res.send({
                status: 400,
                message: "登录失败"
            })
        }
        if(data.length > 0) {
            res.send({
                status: 200,
                message: "登录成功",
            })
        }else{
            res.send({
                status: 202,
                message: '用户名或密码错误'
            })
        }
    })
}