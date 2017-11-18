module.exports = function (app) {
  app.get('/', function (req, res) {
    res.render('about');
  });

  app.get('/contact', function (req, res) {
    res.render('contact');
  });

  app.get('/portfolio', function (req, res) {
    res.render('portfolio');
  });
};
