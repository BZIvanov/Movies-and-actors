const { Actor, validateActor } = require('../models/actor');
const asyncMiddleware = require('../middlewares/async');

module.exports.getActors = asyncMiddleware(async (req, res) => {
  const filterParams = {};
  if (req.query.search) {
    filterParams['fullName'] = { $regex: req.query.search, $options: 'i' };
  }

  const actors = await Actor.find(filterParams).sort('fullName');
  res.send(actors);
});

module.exports.getActor = asyncMiddleware(async (req, res) => {
  const actor = await Actor.findById(req.params.id);
  if (!actor) {
    return res.status(404).send('Actor not found!');
  }

  res.send(actor);
});

module.exports.createActor = asyncMiddleware(async (req, res) => {
  const error = validateActor(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  const { fullName, gender, imageUrl, biography } = req.body;
  let actor = new Actor({
    fullName,
    gender,
    imageUrl,
    biography,
    creator: req.user.id,
  });
  actor = await actor.save();

  res.statusMessage = 'Created';
  res.send(actor);
});

module.exports.updateActor = asyncMiddleware(async (req, res) => {
  const error = validateActor(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  const { fullName, gender, imageUrl, biography } = req.body;
  const actor = await Actor.findByIdAndUpdate(
    req.params.id,
    { fullName, gender, imageUrl, biography },
    { new: true }
  );
  if (!actor) {
    return res.status(404).send('Actor not found!');
  }

  res.send(actor);
});

module.exports.deleteActor = asyncMiddleware(async (req, res) => {
  const actor = await Actor.findByIdAndRemove(req.params.id);
  if (!actor) {
    return res.status(404).send('Actor not found!');
  }

  res.send(actor);
});
