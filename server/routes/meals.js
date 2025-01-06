import express from "express";
import {
  createMeal,
  getMeals,
  getMeal,
  deleteMeal,
  updateMeal,
} from "../controllers/recipesController.js";

const router = express.Router();

router.get("/", getMeals);
router.get("/:id", getMeal);
router.post("/", createMeal);
router.put("/:id", updateMeal);
router.delete("/:id", deleteMeal);

export default router;
