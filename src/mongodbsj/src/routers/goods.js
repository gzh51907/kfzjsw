/**
 * 用户CRUD
 * 增：C（Create）
 * 删：D（Delete）
 * 改：U（Update）
 * 查：R（Retrieve）
 */
const express = require('express');
var ObjectId = require('mongodb').ObjectId;
const Router = express.Router();

const { mongo } = require('../db')
const { formatData, token } = require('../utils')

const colName = 'datlere'


// 升序排序
Router.get('/asc', async (req, res) => {

    let data = await mongo.sort(colName, {}, { prite: 1 });
    res.send(formatData({ data }));
})

// 降序排序
Router.get('/desc', async (req, res) => {
    let data = await mongo.sort(colName, {}, { prite: -1 });
    res.send(formatData({ data }));
})

// 价格之间
Router.get('/pat', async (req, res) => {
    let { in1, in2 } = req.query
    let data = await mongo.find(colName, { prite: { $lte: in2 * 1, $gte: in1 * 1 } })
    res.send(formatData({ data }));
})

// 条件查询
Router.get('/:id', async (req, res) => {
    let { id } = req.params;
    let mongoid = ObjectId(id);
    let data = await mongo.find(colName, { "_id": mongoid });
    res.send(formatData({ data }));
})

// 查询所有
Router.get('/', async (req, res) => {
    let data = await mongo.find(colName, {})
    res.send(formatData({ data }));
})


// 所有集合
Router.route('/:id')
    // 删除
    .delete(async (req, res) => {
        let { id } = req.params;
        let mongoid = ObjectId(id);
        let data = await mongo.remove(colName, { "_id": mongoid });
        res.send(formatData({ data }));
    })// 用户信息修改
    .patch(async (req, res) => {
        let { id } = req.params;
        let mongoid = ObjectId(id);
        let data = await mongo.update(colName, { "_id": mongoid }, { $set: { "action2": "0星" } });
        res.send(formatData({ data }));
    })

module.exports = Router;