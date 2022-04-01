/**
 * @description 失败的时候返回的数据模型
 * @author zsy
 */


class ErrorModel {
    constructor(code = -1, msg = '出错了') {
        this.code = code
        this.msg = msg
    }
}

module.exports = ErrorModel