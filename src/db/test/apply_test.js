/**
 * @description 技术数据操作
 * @author zsy
 */

const ApplyModel = require('../../models/Apply')

    !(async () => {
        // 模拟增加舌诊信息
        await ApplyModel.create({
            apiType: '舌头诊断',
            doc: {
                name: 'zsy'
            }
        })
    })()