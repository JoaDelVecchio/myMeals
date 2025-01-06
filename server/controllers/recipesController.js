import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const API_BASE_URL = process.env.API_BASE_URL;
const customMeals = [
  {
    strMeal: "scrumble Eggs",
    strMealThumb:
      "https://www.allrecipes.com/thmb/8BBgJVfLLvM2UtSmNSxwWPb6XG0=/0x512/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/AR-57459-oven-scrambled-eggs-DDMFS-4x3-step-Beauty-f31f2904bb3a4eee80ed3e135436cc77.jpg",
    idMeal: "custom_1",
  },
];

export const getMeals = async (req, res, next) => {
  try {
    const chickenResponse = await axios.get(`${API_BASE_URL}chicken_breast`);
    const beefResponse = await axios.get(`${API_BASE_URL}beef`);
    res.json([
      ...chickenResponse.data.meals,
      ...beefResponse.data.meals,
      ...customMeals,
    ]);
  } catch (error) {
    next(error);
  }
};

export const createMeal = (req, res, next) => {
  try {
    const { strMeal, strMealThumb } = req.body;
    if (!strMeal || !strMealThumb) {
      const error = new Error("There is a missing field, try again!");
      error.status = 400;
      throw error;
    }

    const newMeal = {
      strMeal,
      strMealThumb,
      idMeal: `custom_${customMeals.length + 1}`,
    };

    customMeals.push(newMeal);
    res;
    res.status(201).json({
      msg: "A new meal has been created",
      meal: newMeal,
    });
  } catch (error) {
    next(error);
  }
};
