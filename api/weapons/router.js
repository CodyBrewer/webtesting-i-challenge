const router = require('express').Router();
const Weapons = require('./models.js');

router.get('/status', (req, res) => {
  res.send({ weapons: 'up'});
});

module.exports = router;
