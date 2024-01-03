import http from '../instances/http';

const BikeApi = {
  async getBikes() {
    const res = await http.get('/bicycles');
    return res.data;
  },
  async addBike({ id, name, type, color, wheelSize, price, description }) {
    const res = await http.post('/add-bike', {
        id,
        name,
        type,
        color,
        wheelSize: parseFloat(wheelSize),
        price: parseFloat(price),
        description
      }
    );
    return res.data;
  },
  async updateBike(id, status) {
    const res = await http.patch(`/bicycles/${id}/status`, { status });
    return res.data;
  },
  async removeBike(id) {
    const res = await http.delete(`/remove/${id}`);
    return res.data;
  },
};

export default BikeApi;