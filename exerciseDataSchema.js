const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const exerciseDataSchema = new Schema({
  name:"String",
  category:"String",
  icon:"String"
});
const exerciseList = mongoose.model('exerciseList', exerciseDataSchema);
module.exports = exerciseList;