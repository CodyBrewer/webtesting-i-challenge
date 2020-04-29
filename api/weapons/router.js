const router = require('express').Router();
const Weapons = require('./models.js');

router.get('/status', (req, res) => {
  res.send({ weapons: 'up' });
});

router.get('/', (req, res) => {
  Weapons.get()
    .then((weapons) => {
      if (weapons) res.send(weapons);
      else res.status(400).json({ message: 'no weapons in inventory' });
    })
    .catch((err) =>{
      res.status(500).json({ message: 'server error', error: err.message });
    });
});

module.exports = router;
