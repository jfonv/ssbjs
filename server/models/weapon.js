import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const weaponSchema = new Schema({
  name: String,
  image: String,
  power: { type: Number, default: 10 },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Weapon', weaponSchema);
