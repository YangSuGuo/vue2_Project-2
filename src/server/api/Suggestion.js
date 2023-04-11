let db = require('../db')

exports.get = (req, res) => {
    var sql = 'select value from vue_ltem1.suggestion';
    db.query(sql, (err, data) => {
        if (err) {
            return res.send('错误：' + err.message)
        }
        res.send(data)
    })
}