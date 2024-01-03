const Router = require('express').Router;
const bicycleController = require('../controllers/bicycle-controller');
const validateBikeData = require('../middlewares/validation');

const router = new Router()

router.post('/add-bike', validateBikeData, bicycleController.add);
router.delete('/remove/:id', bicycleController.remove);
router.patch('/bicycles/:id/status', bicycleController.updateBikeStatus);
router.get('/bicycles', bicycleController.getBicycles);

module.exports = router;
