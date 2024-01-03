const { Schema, model } = require('mongoose');

const BicycleSchema = new Schema({
  id: { type: String, unique: true, required: true },
  name: { type: String, required: true },
  type: { type: String, required: true },
  color: { type: String, required: true },
  status: { type: String, default: 'Unavailable' },
  wheelSize: { type: Number, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
});

const Bicycle = model('Bicycle', BicycleSchema);

module.exports = Bicycle;
