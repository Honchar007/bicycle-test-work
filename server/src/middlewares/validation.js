const { body, validationResult } = require('express-validator');
const Bicycle = require('../db/models/bicycle-model');

const validateBikeData = [
  body('name').isLength({ min: 5 }).trim().escape().withMessage('Name must be at least 5 characters'),
  body('type').isLength({ min: 5 }).trim().escape().withMessage('Type must be at least 5 characters'),
  body('color').isLength({ min: 5 }).trim().escape().withMessage('Color must be at least 5 characters'),
  body('wheelSize').isNumeric().withMessage('Wheel size must be a number'),
  body('price').isNumeric().withMessage('Price must be a number'),
  body('description').isLength({ min: 5 }).trim().escape().withMessage('Description must be at least 5 characters'),
  body('id').custom(async (value, { req }) => {
    const existingBike = await Bicycle.findOne({ id: value });
    if (existingBike) {
      throw new Error('Bike ID must be unique');
    }
    return true;
  }),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = validateBikeData;
