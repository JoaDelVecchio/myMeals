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

// @desc GET all meals
// @route /api/meals

export const getMeals = async (req, res, next) => {
  try {
    const chickenResponse = await axios.get(
      `${API_BASE_URL}/filter.php?i=chicken_breast`
    );
    const beefResponse = await axios.get(`${API_BASE_URL}/filter.php?i=beef`);
    res.json([
      ...chickenResponse.data.meals,
      ...beefResponse.data.meals,
      ...customMeals,
    ]);
  } catch (error) {
    next(error);
  }
};

// @desc GET a meal
// @route /api/meals/:id

export const getMeal = async (req, res, next) => {
  try {
    const { id } = req.params;

    const customMeal = customMeals.find((meal) => meal.idMeal === id);
    if (customMeal) {
      return res
        .status(200)
        .json({ msg: "Meal found successfully", meal: customMeal });
    }

    const response = await axios.get(`${API_BASE_URL}/lookup.php?i=${id}`);
    const meal = response.data.meals;

    if (meal == "Invalid ID") {
      const error = new Error(`Meal with id ${id} wasn't found`);
      error.status = 404;
      throw error;
    }

    res.status(200).json({ msg: "Meal found successfully", meal });
  } catch (error) {
    next(error);
  }
};

// @desc Create meals
// @route /api/meals

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

// @desc DELETE a meal
// @route /api/meals/:id

export const deleteMeal = async (req, res, next) => {
  try {
    const { id } = req.params;

    const indexOfCustomMeal = customMeals.findIndex(
      (meal) => meal.idMeal === id
    );
    if (indexOfCustomMeal == -1) {
      const error = new Error(`The meal with id ${id} was not found`);
      error.status = 404;
      throw error;
    }
    const deletedMeal = customMeals[indexOfCustomMeal];
    customMeals.splice(indexOfCustomMeal, 1);

    res.status(200).json({
      msg: `${deletedMeal.strMeal} was deleted`,
      meal: deletedMeal,
    });
  } catch (error) {
    next(error);
  }
};

// @desc UPDATE meal
// @route /api/meals/:id
export const updateMeal = (req, res, next) => {
  try {
    const { id } = req.params;
    const mealUpdate = req.body;

    const mealIndex = customMeals.findIndex((meal) => meal.idMeal === id);

    if (mealIndex === -1) {
      const error = new Error(`Meal with id ${id} wasn't found`);
      error.status = 404;
      throw error;
    }

    if (!req.body.strMeal || !req.body.strMealThumb) {
      const error = new Error(`There are missing fields`);
      error.status = 400;
      throw error;
    }

    const mealUpdated = { ...customMeals[mealIndex], ...mealUpdate };
    customMeals[mealIndex] = mealUpdated;

    res.status(200).json({ msg: `Meal updated successfully`, mealUpdated });
  } catch (error) {
    next(error);
  }
};
