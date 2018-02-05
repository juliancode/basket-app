const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var BasketSchema = new Schema({
  id: { 
    type: Number,
    required: 'id'
  },
  name: { 
    type: String,
    default: 'productname'
  },
  price: { 
    type: Number,
    default: 100
  },
  quantity: { 
    type: Number,
    default: 1
  }
});

module.exports = mongoose.model('Basket', BasketSchema);
