var mongoose = require('mongoose');

//catagory Schema
var itemSchema = mongoose.Schema({
  item:{
    type: String,
    required: true
  },
  catagory:{
    type: String,
    required: true
  },
  description:{
    type: String
  },
  price:{
    type: String
  },
  image_url:{
    type: String
  },
  buy_url:{
    type: String
  },
  create_date:{
    type: Date,
    default:Date.now
  }
});

var Item = module.exports = mongoose.model('Item',itemSchema);

// Get items
module.exports.getItems = function(limit, callback){
    Item.find(callback).limit(limit);
}
// Get Item
module.exports.getItemById = function(id, callback){
    Item.findById(id, callback);
}

//Add items
module.exports.addItem = function(item, callback){
    Item.create(item, callback);
}
//Update Item
module.exports.updateItem = function(id,item, options,callback){
    var query = {_id: id};
    var update = {
      name: item.name,
      catagory: item.catagory,
      price: item.price,
      description: item.description,
      image_url: item.image_url,
      buy_url: item.buy_url

    }
    Item.findOneAndUpdate(query, update, options, callback);
}
//delete Item
module.exports.removeItem = function(id, callback){
    var query = {_id:id};
    Item.remove(query, callback);
}
