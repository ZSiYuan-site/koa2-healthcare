/**
 * @description 技术信息
 * @author zsy
 */

const mongoose = require('../db/db')

const Schema = mongoose.Schema

const ApplyRules = new Schema({
    apiType: {
        type: String,
        require: true
    },
    doc: {
        type: Object,
        require: true
    }
}, {
    timestamps: true
})

const ApplyModel = mongoose.model('apply', ApplyRules)

module.exports = ApplyModel