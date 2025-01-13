const foodModels = require("../models/foodModels");

const createFoodController = async (req, res) => {
    try {
      const {
        title,
        description,
        price,
        imageUrl,
        foodTags,
        category,
        code,
        isAvailable,
        resturant,
        rating,
      } = req.body;
  
      if (!title || !description || !price || !resturant) {
        return res.status(500).send({
          success: false,
          message: "Please Provide all fields",
        });
      }
      const newFood = new foodModels({
        title,
        description,
        price,
        imageUrl,
        foodTags,
        category,
        code,
        isAvailable,
        resturant,
        rating,
      });
  
      await newFood.save();
      res.status(201).send({
        success: true,
        message: "New Food Item Created",
        newFood,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Error in creating food api",
        error,
      });
    }
  };
  const getAllFoodsController = async (req, res) => {
    try {
      const foods = await foodModels.find({});
      if (!foods) {
        return res.status(404).send({
          success: false,
          message: "No food items was found",
        });
      }
      res.status(200).send({
        success: true,
        totalFoods: foods.length,
        foods,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Error In Get ALL Foods API",
        error,
      });
    }
  };
  
module.exports = {createFoodController,getAllFoodsController}