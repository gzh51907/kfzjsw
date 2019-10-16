const express = require('express');

const Router = express.Router();

const {mongo} = require('../db');

//创建连接对象连接数据库
// var connection = mongo.createConnection({
//     host:'localhost',
//     user:'root',
//     password:'',
//     database:'yaofangwang'
// });


Router.route('/')
    .post((req,res)=>{

    })
    .get(async (req,res)=>{
        // let sql = 'select * from goods';
        // db.query(sql).then((results)=>{
        //     res.send(results)
        // });
        let result = await mongo.find('goods');
        res.send(result);
    })
Router.route('/:id')
    .get(async(req,res)=>{
        let {id} = req.params;
        // pool.query(`select * from list where gid=${id}`,function(error,results,fields){
        //     if(error) throw error;
        //     res.send(results);
        // });
        let result = await mongo.find('goods',{'id':id});
        res.send(result);

    })
    .patch(async(req,res)=>{
        let {id} = req.params;

        let {money} = req.body;
        let sql = `updata list set `
        for(key in req.body){
            sql += key+'='+req.body[key]+','
        }
        sql = sql.slice(0,-1);
        sql += `where gid=${id}`
        console.log(sql);
        
        let result = await query(sql);
        res.send(result);
    })
    .delete(async(req,res)=>{
        let {id} = req.params;
        let result = await mongo(`delete from list where gid=${id}`);
        res.send(result);
    })

module.exports = Router;