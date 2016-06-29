import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const fighterSchema = new Schema({
  name: String,
  image: String,
  power: { type: Number, default: 10 },
  health: { type: Number, default: 100 },
  wins: { type: Number, default: 0 },
  losses: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Fighter', fighterSchema);
