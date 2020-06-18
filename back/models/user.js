const { Schema, model } = require('mongoose');
const { ObjectId } = require('mongoose').Schema.Types;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: [true, 'enter email!'],
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'wrong email'],
  },
  password: {
    type: String,
    required: [true, 'enter password'],
  },
  image: { type: String, default: 'https://affordableamericaninsurance.com/wp-content/uploads/2017/04/no-image-icon-hi.png' },
  friends: [{ type: String }],
  history: [{ type: ObjectId, ref: 'Recipe' }],
  status: { type: ObjectId, ref: 'Recipe' },
  
  favorite: [{ type: ObjectId, ref: 'Recipe' }]
});

const User = model('User', userSchema);

module.exports = User;
