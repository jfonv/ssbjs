/* eslint-disable new-cap */

import express from 'express';
const router = module.exports = express.Router();
import Weapon from '../models/weapon';

router.get('/', (req, res) => {
  Weapon.find().exec((err, weapons) => res.send({ weapons }));
});

router.post('/new', (req, res) => {
  const weapon = new Weapon(req.body);
  console.log('WE GOT HERE BABY!');
  weapon.save(() => {
    res.send({ weapon });
  });
});

router.get('/:id', (req, res) => {
  const weapon = Weapon.find(req.params.id);
  res.send({ weapon });
});

router.post('/:id/update', (req, res) => {
  const weapon = new Weapon();
  weapon.save();
  res.send({ weapon });
});
