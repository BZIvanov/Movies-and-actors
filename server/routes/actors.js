const router = require('express').Router();
const auth = require('../middlewares/auth');
const {
  getActors,
  getActor,
  createActor,
  updateActor,
  deleteActor,
} = require('../controllers/actors');

router.get('/', getActors);
router.get('/:id', getActor);
router.post('/', auth, createActor);
router.put('/:id', auth, updateActor);
router.delete('/:id', auth, deleteActor);

module.exports = router;
