const bicycleService = require('../services/bicycle-service');
const { validationResult } = require('express-validator');

class BicycleController {
  async add (req, res, next) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return next(new Error(400, errors.array()))
      }

      const { id, name, type, color, wheelSize, price, description } = req.body;

      const {
        bike,
        available,
        booked,
        averagePrice,
      } = await bicycleService.add(id, name, type, color, wheelSize, price, description);

      return res.json({ bike, booked, available, averagePrice });
    } catch (e) {
      next(e)
    }
  }

  async remove (req, res, next) {
    try {
      const id = req.params.id;
      const {
        bike,
        available,
        booked,
        averagePrice,
      } = await bicycleService.delete(id);

      if (!bike) {
        return res.status(404).send({ message: 'Bike not found' });
      }

      return res.json({ bike, booked, available, averagePrice, message: 'Bike deleted successfully' });
    } catch (e) {
      next(e);
    }
  }

  async updateBikeStatus (req, res, next) {
    try {
      const { id } = req.params;
      const { status } = req.body;

      const { updatedBike, booked, available } = await bicycleService.updateBikeStatus(id, status);
      if (!updatedBike) {
        return res.status(404).json({ message: 'Bike not found' });
      }

      return res.status(200).json({ message: 'Bike status updated successfully', bike: updatedBike, booked, available });
    } catch (e) {
      next(e)
    };
  }

  async getBicycles (req, res, next) {
    try {
      const info = await bicycleService.getBicycles();
      return res.status(200).json(info);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new BicycleController();
