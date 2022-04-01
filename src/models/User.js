/**
 * @description User Model
 * @author zsy
 */

const mongoose = require('../db/db')
let Schemal = mongoose.Schema

let userRules = new Schemal({
    username: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true,
    }
}, {
    timestamps: true
})

const UserModel = mongoose.model('user', userRules)

module.exports = UserModel