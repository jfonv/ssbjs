/* eslint-disable new-cap */

import express from 'express';
const router = module.exports = express.Router();
import Fighter from '../models/fighter';

router.get('/', (req, res) => {
  Fighter.find().exec((err, fighters) => res.send({ fighters }));
});

router.post('/new', (req, res) => {
  const fighter = new Fighter(req.body);
  // console.log('res.body: ', res.body);
  fighter.save(() => {
    res.send({ fighter });
  });
});

router.get('/:id', (req, res) => {
  Fighter.findById(req.params.id)
    .exec((err, fighter) => res.send({ fighter }));
});

router.post('/:id/update', (req, res) => {
  const fighter = new Fighter();
  fighter.save();
  res.send({ fighter });
});
