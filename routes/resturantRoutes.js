const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const { createResturantController, getAllResturantController, getAllResturantByIdController, deleteResturantController } = require('../controllers/resturantControllers');

const router = express.Router();


router.post('/create',authMiddleware,createResturantController);

router.get('/getAll',getAllResturantController);

router.get('/get/:id',getAllResturantByIdController);

router.delete('/delete/:id',authMiddleware,deleteResturantController);

module.exports = router;