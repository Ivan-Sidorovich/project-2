const express = require('express');
const app = express();
const fs = require('fs');
const bodyParser = require('body-parser');
const {
    connected
} = require('process');

app.use(bodyParser.json());
app.listen(3000, () => {
    console.log('server started');
})

app.use(express.static('.'));

app.get('/data.', (req, res) => {

    fs.readFile('./JSON/catalog.json', 'utf-8', (err, data) => {
       
        res.send(JSON.parse(data));
    })
})

app.get('/dataCart.', (req, res) => {
    fs.readFile('./JSON/cart.json', 'utf-8', (err, data) => {

        res.send(JSON.parse(data))
    })
})

app.delete('/deleteCart.', (req, res) => {
    fs.readFile('./JSON/cart.json', 'utf-8', (err, data) => {
        const cart = JSON.parse(data);
        const item = req.body;
        const statData = {
            product: item,
            method: "deleteCart",
        };
        cart.splice(cart.findIndex(ARRitem => ARRitem.name == item.name), 1) //добавить обработку ошибок
        fs.writeFile('./JSON/cart.json', JSON.stringify(cart), err => {
            res.send(JSON.stringify(statData))
        })
    })
})

app.post('/addToCArt.', (req, res) => {
    fs.readFile('./JSON/cart.json', 'utf-8', (err, data) => {
        const cart = JSON.parse(data);
        const item = req.body;
        const statData = {
            product: item,
            method: "addToCart",
        };
        cart.push(item);
        fs.writeFile('./JSON/cart.json', JSON.stringify(cart), err => {
            if (err) {
                res.send('{"result":0}')
            } else {
                res.send(JSON.stringify(statData))
            }
        })
    })
})

app.post('/statsData.', (req, res) => {
    fs.readFile('./JSON/stats.json', 'utf-8', (err, data) => {
        const bigData = JSON.parse(data);
        const item = req.body;
        bigData.push(item);
        fs.writeFile('./JSON/stats.json', JSON.stringify(bigData), err => {
            if (err) {
                res.send('{"result":0}')
            } else {
                res.send('{"result":1}')
            }
        })
    })
})