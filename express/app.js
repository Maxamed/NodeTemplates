
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , Browser = require("zombie")
  , assert = require("assert"); 

var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);
app.get('/page', function(req, res){
  res.render('page', { title: 'Landing' , username: req.query['username'], password: req.query['password'] })
});

app.listen(3000, function(){
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env); 


});

 
