# Basket App

Write a program and associated unit tests that can price a basket of goodos taking into account some special offers.

The goods that can be purchased, together with their normal prices are:

* Soup - 65p per taking
* Bread - 80p per loaf
* Milk - £1.30 per bottle
* Apples - £1.00 per bag

_Current special offers:_

* _Apples have a 10% discount off their normal price this week_
* _Buy 2 tins of soup and get a loaf of bread for half price_

# Installing the app and running tests

_There is no need to start the API since this hasn't been implemented fully yet - however I left the code in to get an idea of the direction I was headed given more time._

1. To install the app navigate to the directory and firstly install the dependencies with `npm install`
2. Once the node modules have installed then type `npm start` to run the app or `npm test` to run the unit tests

# Shortcomings and future developments

I didn't manage to figure out a nice way of implementing the discounts therefore I left that part out and moved onto developing the backend. For future developments I would consider restructuring my store to be accessible `[byId]`.

The API is fully implemented however I fell short on being able to `POST` products to the API. The `GET` works however there is nothing to retrieve from the database and with no ability to `POST` I left this code commented out.
