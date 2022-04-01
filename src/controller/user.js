/**
 * @description 用户模块
 * @author zsy
 */

const UserModel = require('../models/User')

/**
 * 
 * @param {用户名} username 
 * @param {密码} password 
 * @returns 
 */
async function register(username, password) {
    const newUser = UserModel.create({
        username,
        password
    })
    return newUser
}

/**
 * 
 * @param {用户名} username 
 * @param {密码} password 
 * @returns 
 */
async function login(username, password) {
    const findUserResult = UserModel.findOne({
        username,
        password
    })
    return findUserResult
}


module.exports = {
    register,
    login
}