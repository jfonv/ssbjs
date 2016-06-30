/* eslint-disable new-cap */

import express from 'express';
const router = module.exports = express.Router();
// import Fighter from '../models/fighter';
import Fight from '../models/fight';

router.get('/', (req, res) => {
  // const fight = Fighter.find();
  res.send({ });
});

router.post('/new', (req, res) => {
  const fight = new Fight();
  fight.newGame(req.fighterR, req.fighterL,
                req.weaponR, req.weaponL);
  res.send({ fight });
});
