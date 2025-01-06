import express from "express";
import {
  createMeal,
  getMeals,
  getMeal,
  deleteMeal,
} from "../controllers/recipesController.js";

const router = express.Router();

router.get("/", getMeals);
router.get("/:id", getMeal);
router.post("/", createMeal);
router.delete("/:id", deleteMeal);

export default router;
