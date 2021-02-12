const { Movie, validateMovie } = require('../models/movie');
const asyncMiddleware = require('../middlewares/async');

module.exports.getMovies = asyncMiddleware(async (req, res) => {
  const filterParams = {};
  let sortOrder = 'title';
  if (req.query.user) {
    filterParams['creator'] = req.query.user;
  } else if (req.query.search) {
    filterParams['title'] = { $regex: req.query.search, $options: 'i' };
  } else if (req.query.order) {
    sortOrder = req.query.order === 'asc' ? 'year' : '-year';
  }

  const movies = await Movie.find(filterParams).sort(sortOrder);
  res.send(movies);
});

module.exports.getMovie = asyncMiddleware(async (req, res) => {
  const movie = await Movie.findById(req.params.id);
  if (!movie) {
    return res.status(404).send('Movie not found!');
  }

  res.send(movie);
});

module.exports.createMovie = asyncMiddleware(async (req, res) => {
  const error = validateMovie(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  const { title, year, imageUrl, description } = req.body;
  let movie = new Movie({
    title,
    year,
    imageUrl,
    description,
    creator: req.user.id,
  });
  movie = await movie.save();

  res.statusMessage = 'Created';
  res.send(movie);
});

module.exports.updateMovie = asyncMiddleware(async (req, res) => {
  const error = validateMovie(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  const { title, year, imageUrl, description } = req.body;
  const movie = await Movie.findByIdAndUpdate(
    req.params.id,
    { title, year, imageUrl, description },
    { new: true }
  );
  if (!movie) {
    return res.status(404).send('Movie not found!');
  }

  res.send(movie);
});

module.exports.deleteMovie = asyncMiddleware(async (req, res) => {
  const movie = await Movie.findByIdAndRemove(req.params.id);
  if (!movie) {
    return res.status(404).send('Movie not found!');
  }

  res.send(movie);
});
