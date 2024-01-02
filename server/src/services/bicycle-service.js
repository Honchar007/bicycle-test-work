const Bicycle = require('../db/models/bicycle-model');

class BicycleService {
  async add (id, name, type, color, wheelSize, price, description) {
    const existBike = await Bicycle.findOne({ id: 'id' });

    if (existBike) {
      throw new Error('This id had been already chosen');
    }

    const bike = await Bicycle.create({ id, name, type, color, wheelSize, price, description });

    bike
      .save()
      .then(() => {
        console.log(bike.id + ' save to collection');
      })
      .catch((error) => {
        return console.error(error);
      });

    return bike;
  }

  async delete (id) {
    const bike = await Bicycle.findByIdAndDelete(id);
    return bike;
  }

  async updateBikeStatus (id, status) {
    const updatedBike = await Bicycle.findOneAndUpdate(
      { id },
      { $set: { status } },
      { new: true }
    );
    return updatedBike;
  }

  async getBicycles () {
    const totalBicycles = await Bicycle.countDocuments();
    const availableBicycles = await Bicycle.countDocuments({ status: 'available' }); // Assuming 'status' field
    const bookedBicycles = await Bicycle.countDocuments({ status: 'booked' }); // Assuming 'status' field
    const averagePrice = await Bicycle.aggregate([
      {
        $group: {
          _id: null,
          avgPrice: { $avg: '$price' } // Assuming 'price' field
        }
      }
    ]);

    const bicycles = await Bicycle.find();

    return {
      total: totalBicycles,
      available: availableBicycles,
      booked: bookedBicycles,
      averagePrice,
      bicycles,
    };
  }
}

module.exports = new BicycleService();
