/* eslint-disable func-names */

// import fs from 'fs';
// import path from 'path';
// import uuid from 'uuid';
// const file = path.join(__dirname, '../../data/aliens.json');

function Fight() {
  this.fighterR = {};
  this.fighterL = {};
  this.currHealthR = 0;
  this.currHealthL = 0;
  this.currWeaponR = {};
  this.currWeaponL = {};
}

Fight.prototype.newGame = function (rFighter, lFighter, rWeapon, lWeapon) {
  this.fighterR = rFighter;
  this.fighterL = lFighter;
  this.currHealthR = this.fighterR.health;
  this.currHealthL = this.fighterL.health;
  this.currWeaponR = rWeapon;
  this.currWeaponL = lWeapon;
};

module.exports = Fight;
