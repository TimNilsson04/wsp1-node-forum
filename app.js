require('dotenv').config();
const express = require('express');
const nunjucks = require('nunjucks');
const app = express();
const port = 4200;
const bodyParser = require('body-parser')
const indexRouter = require('./routes/index');

nunjucks.configure('views', {
    autoescape: true,
    express: app,
});

app.use(express.static('public'))

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencode

app.use('/', indexRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});