const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors());

app.use('/', express.static(path.join(__dirname, 'build')));
const PORT = process.env.PORT || 8000;


app.get('/fresh/ping', (res,req) => {
res.send('Our server is up and running')
});

app.listen(PORT, () => console.log('Store url ${port}'+PORT));