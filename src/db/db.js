/**
 * @deprecated mongoose 数据库连接
 * @author zsy
 */

const mongoose = require('mongoose')

const DB_NAME = 'demo'
const PORT = 72017
const IP = 'localhost'

mongoose.connection.on(`mongodb://${IP}:${PORT}/${DB_NAME}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.on('open', err => {
    if (err) {
        console.log('数据连接失败', err)
    } else {
        console.log('数据库连接成功')
    }
})

module.exports = mongoose