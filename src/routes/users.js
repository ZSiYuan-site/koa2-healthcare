const router = require('koa-router')()

router.prefix('/api/user')

const SuccessModel = require('../res-model/SuccessModel')
const ErrorModel = require('../res-model/ErrorModel')

// 引入用户功能的controller
const {
  register,
  login
} = require('../controller/user')

/**
 * 用户注册路由
 */
router.post('/register', async function (ctx, next) {
  // 获取前端携带的参数
  const {
    username,
    password
  } = ctx.request.body

  try {
    // 新创建用户
    const newUser = await register(username, password)
    ctx.body = new SuccessModel(20000, newUser, '注册成功')
  } catch (err) {
    console.error(err)
    ctx.body = new ErrorModel(20001, `注册失败,${err.message}`)
  }
})

/**
 * 用户登录路由
 */
router.post('/login', function (ctx, next) {
  const {
    username,
    password
  } = ctx.request.body

  try {
    if (findUserResult) {
      // 查找用户 
      const findUserResult = await login(username, password)
      ctx.body = new SuccessModel(20000, findUserResult, '登录成功')
    }
  } catch (err) {
    ctx.body = new ErrorModel(20001, '登录失败')
  }
})

module.exports = router