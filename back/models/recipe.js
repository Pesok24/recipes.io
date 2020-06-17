const { Schema, model } = require('mongoose');
const { ObjectId } = require('mongoose').Schema.Types;

const recipeSchema = new Schema({
  title: String,
  author: { type: String, default: 'Recipe.io' },
  date: String,
  image: String,
  steps: [],
  ingridients: [],
  recipe: String,
  owners: [{ type: ObjectId, ref: 'User' }],
  favorite: [{ type: ObjectId, ref: 'User' }]
});

const Recipe = model('Recipe', recipeSchema);

module.exports = Recipe;
