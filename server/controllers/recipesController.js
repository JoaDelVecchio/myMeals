import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const API_BASE_URL = process.env.API_BASE_URL;

export const getMeals = async (req, res, next) => {
  try {
    const chickenResponse = await axios.get(`${API_BASE_URL}chicken_breast`);
    const beefResponse = await axios.get(`${API_BASE_URL}beef`);
    res.json({
      chicken: chickenResponse.data.meals,
      beef: beefResponse.data.meals,
    });
  } catch (error) {
    next(error);
  }
};
