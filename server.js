var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var hbs = require('hbs');

var app = express();
const publicPath = path.join(__dirname, '/views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(publicPath + '/index.hbs'));
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/getRoute', (req, res) => {
  console.log(req.query.loc1);
  console.log(req.query.loc2);
  console.log(req.query.loc3);
  console.log(req.query.loc4);
  res.render('index', {
    data1: req.query.loc1,
    data2: req.query.loc2,
    data3: req.query.loc3,
    data4: req.query.loc4
  });
});

app.listen(3000, () => {
  console.log('Magic will happen on port 3000');
});
