const express = require('express');
const axios = require('axios');

const server = express();

server.use( '/public', express.static('./public') );

server.get('/getdata', (req, res) => {
    // console.log('请求过来了');

    // res.header('Access-Control-Allow-Origin', 'http://localhost:63342');
    res.header('Access-Control-Allow-Origin', '*');

    res.send('miaov');
});

server.get('/getbaidu', (req, res) => {
    axios('http://www.baidu.com').then( response => {
        // console.log(response.data);
        res.send(response.data);
    } )
});


server.get('/getdata2', (req, res) => {

    let callback = req.query.callback || 'fn';

    let str = 'miaov';

    res.send(callback + '("'+ str +'")');

});

server.listen(9999, '0.0.0.0');