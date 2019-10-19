const express = require('express');

const Router = express.Router();
const {
    mongo
} = require('../db');

Router.post('/add', async (req, res) => {
    let {
        id,
        name,
        qty,
        price,
        imgurl,
        selected
    } = req.body;
    let result = await mongo.create('order', [{
        id,
        name,
        qty,
        price,
        imgurl,
        selected
    }]);
    res.send(result);
})

Router.get('/gain', async (req, res) => {

    let result = await mongo.find('order')
    res.send(result);

});
Router.delete('/remove', async (req, res) => {
    let {
        id
    } = req.query;
    console.log(id);

    let result = await mongo.remove('order', {
        id
    });
    res.send(result);

});
Router.delete('/removeall', async (req, res) => {

    let result = await mongo.remove('order');
    res.send(result);

});
Router.patch('/alter', async (req, res) => {
    let {
        id,qty
    } = req.body;console.log(id,qty);
    
    let result = await mongo.update('order', {
        id: id
    }, {
        $set: {
            qty:qty
        }
    });
    res.send(result);

});

module.exports = Router;