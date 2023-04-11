let db = require('../db')

//修改密码
exports.update = (req, res) => {
    var sql = 'update vue_ltem1.user set password = ? where name = ?'
    db.query(sql, [req.query.password, req.query.name], (err, data) => {
        if (err) {
            return res.send('错误：' + err.message)
        }
        res.send(data)
      /*  if (data.changedRows >= 1) {
            res.send({
                status: 200,
                message: 'success',
            })
        } else {
            res.send({
                status: 202,
                message: 'error'
            })
        }*/
    })
}