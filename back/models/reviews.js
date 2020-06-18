const { Schema, model } = require('mongoose');
const { ObjectId } = require('mongoose').Schema.Types;

const reviewsSchema = new Schema({
  text: String,
  author: { type: ObjectId, ref: 'User' },
  recipe: { type: ObjectId, ref: 'Recipe' },
  flag: { type: String, default: '🍵' },
});

const Reviews = model('Reviews', reviewsSchema);

module.exports = Reviews;
