const router = require('express').Router();
const auth = require('../middlewares/auth');
const {
  getMovies,
  getMovie,
  createMovie,
  updateMovie,
  deleteMovie,
} = require('../controllers/movies');

router.get('/', getMovies);
router.get('/:id', getMovie);
router.post('/', auth, createMovie);
router.put('/:id', auth, updateMovie);
router.delete('/:id', auth, deleteMovie);

module.exports = router;
