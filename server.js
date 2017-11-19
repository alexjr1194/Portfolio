var express = require('express');
var app = express();
var path = require('path');

var port = process.env.PORT || 8080;

var exphbs = require('express-handlebars');

app.use('/public', express.static('public'));

app.set('views', './views');
app.engine('hbs', exphbs({
  extname: '.hbs',
  defaultLayout: 'main'
}));
app.set('view engine', '.hbs');

var htmlRoutes = require('./routes/html-routes')(app);

app.listen(port, function (err) {
  if (!err) {
    console.log('My portfolio is live on PORT: ' + port);
  } else {
    console.log(err);
  }
});
