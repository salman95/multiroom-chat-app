'use strict';
const express = require('express');
const app = express();//creates an instance of an express app

app.set('port', process.env.PORT || 3000);


//if '/' is found in the request url, then the response is ...
app.get('/', (req, res, next) => {
    //res.send('<h1>Hello Express!</h1>');
    res.sendFile(__dirname + '/login.htm');
});//example of route handler

app.get('/dashboard', (req, res, next) => {
    res.send(`<h1>This is the dashboard page. </h1>`);
});//example of route handler

app.listen(3000, () => {
    console.log('ChatCAT listening on port 3000');
});

