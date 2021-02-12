const mongoose = require('mongoose');
const Joi = require('joi');

const movieSchema = mongoose.Schema({
  title: { type: String, required: true, minlength: 5, maxlength: 50 },
  year: { type: Number, required: true, min: 1900, max: 2021 },
  imageUrl: { type: String, required: true, minlength: 5, maxlength: 250 },
  description: { type: String, required: true, minlength: 5, maxlength: 250 },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  createdAt: {
    type: mongoose.Schema.Types.Date,
    default: Date.now,
  },
});

function validateMovie(movie) {
  const schema = Joi.object({
    title: Joi.string().min(5).max(50).required(),
    year: Joi.number().min(1900).max(2021).required(),
    imageUrl: Joi.string().min(5).max(250).required(),
    description: Joi.string().min(5).max(250).required(),
  });
  const { error } = schema.validate(movie);
  return error;
}

const Movie = new mongoose.model('Movie', movieSchema);

exports.Movie = Movie;
exports.validateMovie = validateMovie;
