const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const { createFoodController, getAllFoodsController } = require('../controllers/foodController');


const router = express.Router();

router.post('/create',authMiddleware,createFoodController);

router.get('/getAll',getAllFoodsController)
module.exports = router;