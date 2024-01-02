const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/bicycleAdmin').then(() => console.log('DB connected'))
  .catch((err) => console.log(err));
