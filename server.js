const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')
const routes = require('./routes');

const app = express();

app.use(express.static(path.join(__dirname, 'client')));
app.use(bodyParser.json());
app.use('api/v1/', routes());

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/views/index.html'));
})

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ', + port);