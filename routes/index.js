var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', messages });
});

router.get('/new', function (req, res, next) {
  res.render('form', { title: 'New message' });
});

router.post('/new', function (req, res) {
  messages.push ({
    text: req.body.messageUser,
    user: req.body.messageText,
    added: new Date(),
  });
  res.redirect('/');
});

module.exports = router;
