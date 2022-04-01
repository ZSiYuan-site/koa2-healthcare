/**
 * @description 成功时返回数据模型
 * @author zsy
 */


class SuccessModel {
    constructor(data, msg = '成功了') {
        this.code = 0 // 成功的标志
        if (data != null) {
            this.data = data
        }
        this.msg = msg
    }
}

module.exports = SuccessModel