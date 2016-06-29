/* eslint-disable new-cap */

import express from 'express';
const router = module.exports = express.Router();
// import Fighter from '../models/fighter';
import Fight from '../models/fight';

router.get('/', (req, res) => {
  // const fight = Fighter.find();
  res.send({ });
});

router.get('/new', (req, res) => {
  const fight = new Fight();
  res.send({ fight });
});

router.get('/:id', (req, res) => {
  const fight = new Fight();
  res.send({ fight });
});

router.post('/:id/update', (req, res) => {
  const fight = new Fight();
  // fight.save();
  res.send({ fight });
});
