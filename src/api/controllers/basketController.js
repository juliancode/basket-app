const mongoose = require('mongoose');
const Basket = mongoose.model('Basket');

exports.list_all_basket = (req, res) => {
  Basket.find({}, (err, basketItems) => {
    if (err) {
      res.send(err);
    }
    res.json(basketItems);
  });
};

exports.add_to_basket = (req, res) => {
  const new_basketItem = new Basket(req.body);
  new_basketItem.save((err, basketItem) => {
    if (err) {
      res.send(err);
    }
    res.json(basketItem);
  });
};
