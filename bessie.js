var Nightmare = require('nightmare');
var config    = require('./config.json');
var nightmare = Nightmare()

nightmare
  .goto(config.urls.login_portal)
  .type('#username-label', config.credentials.username)
  .type('#password', config.credentials.password)
  .click('.button')
  .wait(4000)
  .goto(config.urls.timestamp_app)
  .click('.BM')
  .wait(100)
  .end()
  .catch(function (error) { 
  	console.error('Timestamp Entry Failed', error);
  });
