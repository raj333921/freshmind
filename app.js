const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
var serveStatic = require('serve-static')

const app = express();

app.use(cors());
app.use(serveStatic(path.join(__dirname, 'build')))
const PORT = process.env.PORT || 8000;


app.get('/fresh/ping', (res,req) => {
res.send('Our server is up and running')
});

app.listen(PORT, () => console.log('Store url ${port}'+PORT));