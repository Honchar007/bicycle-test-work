const bicycleService = require('../services/bicycle-service');
const { validationResult } = require('express-validator');

class UserController {
  async add (req, res, next) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return next(new Error(400, errors.array()))
      }

      const { id, name, type, color, wheelSize, price, description } = req.body;

      const bikeData = await bicycleService.add(id, name, type, color, wheelSize, price, description);

      return res.json(bikeData);
    } catch (e) {
      next(e)
    }
  }

  async remove (req, res, next) {
    try {
      const id = req.params.id;

      const bike = await bicycleService.remove(id);

      if (!bike) {
        return res.status(404).send({ message: 'Bike not found' });
      }

      return res.send({ message: 'Bike deleted successfully' });
    } catch (e) {
      next(e);
    }
  }

  async updateBikeStatus (req, res, next) {
    try {
      const { id } = req.params;
      const { status } = req.body;

      const updatedBike = await bicycleService.updateBikeStatus(id, status);

      if (!updatedBike) {
        return res.status(404).json({ message: 'Bike not found' });
      }

      return res.status(200).json({ message: 'Bike status updated successfully', bike: updatedBike });
    } catch (e) {
      next(e)
    };
  }

  async getBicycles (req, res, next) {
    try {
      const info = await bicycleService.getBicycles();
      return res.json(info);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new UserController();
