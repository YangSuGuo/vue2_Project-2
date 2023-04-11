let express = require('express')
let router = express.Router()
let user= require('./api/user')
let login = require('./api/list')
let suggestion = require('./api/Suggestion')
let user_update = require('./api/user_update')

router.get('/user', user.get)
router.get('/login',login.get)

router.get('/suggestion', suggestion.get)
router.get('/user_update', user_update.update)

module.exports = router