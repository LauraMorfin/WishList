var mongoose = require('mongoose');

//category Schema
var categorySchema = mongoose.Schema({
  name:{
    type: 'string',
    require: true
  },
  create_date:{
    type: Date,
    default:Date.now
  }
});

var category = module.exports = mongoose.model('category',categorySchema);

// Get categories
module.exports.getcategories = function(callback, limit){
    category.find(callback).limit(limit);
}
//Add category
module.exports.addcategory = function(category, callback){
    category.create(category, callback);
}
//Update category
module.exports.updatecategory = function(id,category, options,callback){
    var query = {_id: id};
    var update = {
      name: category.name
    }
    category.findOneAndUpdate(query, update, options, callback);
}
//delete category
module.exports.removecategory = function(id, callback){
    var query = {_id:id};
    category.remove(query, callback);
}
