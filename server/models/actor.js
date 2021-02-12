const mongoose = require('mongoose');
const Joi = require('joi');

const actorSchema = mongoose.Schema({
  fullName: { type: String, required: true, minlength: 5, maxlength: 50 },
  gender: {
    type: mongoose.Schema.Types.String,
    enum: {
      values: ['male', 'female'],
      message: 'Gender should be either "Male" or "Female".',
    },
  },
  imageUrl: { type: String, required: true, minlength: 5, maxlength: 250 },
  biography: { type: String, required: true, minlength: 5, maxlength: 250 },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  createdAt: {
    type: mongoose.Schema.Types.Date,
    default: Date.now(),
  },
});

function validateActor(actor) {
  const schema = Joi.object({
    fullName: Joi.string().min(5).max(50).required(),
    gender: Joi.string().valid('male', 'female'),
    imageUrl: Joi.string().min(5).max(250).required(),
    biography: Joi.string().min(5).max(250).required(),
  });
  const { error } = schema.validate(actor);
  return error;
}

const Actor = new mongoose.model('Actor', actorSchema);

exports.Actor = Actor;
exports.validateActor = validateActor;
