module.exports = app => {
  var basket = require('../controllers/basketController');

  // routes
  app
    .route('/basket')
    .get(basket.list_all_basket)
    .post(basket.add_to_basket);
};
