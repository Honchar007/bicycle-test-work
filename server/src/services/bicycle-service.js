const Bicycle = require('../db/models/bicycle-model');

class BicycleService {
  async getStats () {
    const availableBicycles = await Bicycle.countDocuments({ status: 'Available' }); // Assuming 'status' field
    const bookedBicycles = await Bicycle.countDocuments({ status: 'Busy' }); // Assuming 'status' field
    const averagePrice = await Bicycle.aggregate([
      {
        $group: {
          _id: null,
          avgPrice: { $avg: '$price' } // Assuming 'price' field
        }
      }
    ]);

    return {
      available: availableBicycles,
      booked: bookedBicycles,
      averagePrice,
    };
  }

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

    const stats = await this.getStats();

    return { bike, ...stats };
  }

  async delete (id) {
    const bike = await Bicycle.findOneAndDelete({ id });
    const stats = await this.getStats();
    return { bike, ...stats };
  }

  async updateBikeStatus (id, newStatus) {
    const updatedBike = await Bicycle.findOneAndUpdate(
      { id },
      {
        $set: { status: newStatus }
      },
      { new: true },
    );

    const availableBicycles = await Bicycle.countDocuments({ status: 'Available' });
    const bookedBicycles = await Bicycle.countDocuments({ status: 'Busy' });

    return { updatedBike, booked: bookedBicycles, available: availableBicycles };
  }

  async getBicycles () {
    const totalBicycles = await Bicycle.countDocuments();
    const availableBicycles = await Bicycle.countDocuments({ status: 'Available' }); // Assuming 'status' field
    const bookedBicycles = await Bicycle.countDocuments({ status: 'Busy' }); // Assuming 'status' field
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
