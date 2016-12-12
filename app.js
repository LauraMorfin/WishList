//if(process.env.NODE_ENV !== 'production') require('dotenv').config();

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(express.static(__dirname+'/client'));
app.use(bodyParser.json());

category = require('./models/category');
Item = require('./models/item');
//Connect to mongoose

//var MLAB_URI = process.env.MLAB_URI;
//console.log(MLAB_URI);
//mongoose.connect(MLAB_URI);
mongoose.connect(process.env.MONGO_URL ||'mongodb://localhost/wishlist');
var db = mongoose.connection;

app.get('/', function(req, res){
  res.send('Please use /api/items or api/categories');
});
app.get('/api/categories', function(req, res){
    category.getcategories(function(err, categories){
      if(err){
        throw err;
      }
      res.json(categories);
    });
});
app.post('/api/categories', function(req, res){
var category = req.body;
    category.addcategory(category, function(err,catgory){
      if(err){
        throw err;
      }
      res.json(category);
    });
});
app.put('/api/categories/:id', function(req, res){
var id = req.params._id
var category = req.body;
    category.updatecategory(id, category,{}, function(err,catgory){
      if(err){
        throw err;
      }
      res.json(category);
    });
});
app.delete('/api/categories/:id', function(req, res){
var id = req.params._id
    category.removecategory(id, function(err,category){
      if(err){
        throw err;
      }
      res.json(category);
    });
});
app.get('/api/items', function(req, res){
    Item.getItems(function(err, items){
      if(err){
        throw err;
      }
      res.json(items);
    });
});
app.get('/api/items/:_id', function(req, res){
    Item.getItemById(req.params._id, function(err, item){
      if(err){
        throw err;
      }
      res.json(item);
    });
});
app.post('/api/items', function(req, res){
var item = req.body;
    Item.addItem(item, function(err,item){
      if(err){
        throw err;
      }
      res.json(item);
    });
});
app.put('/api/items/:_id', function(req, res){
var id = req.params._id
var item = req.body;
    Item.updateItem(id, item,{}, function(err,item){
      if(err){
        throw err;
      }
      res.json(item);
    });
});
app.delete('/api/items/:_id', function(req, res){
var id = req.params._id
    Item.removeItem(id, function(err,item){
      if(err){
        throw err;
      }
      res.json(item);
    });
});
app.listen(3000);
console.log('Running on port 3000...');
