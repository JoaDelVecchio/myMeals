import express from "express";
import {
  createMeal,
  getMeals,
  getMeal,
} from "../controllers/recipesController.js";

const router = express.Router();

router.get("/", getMeals);
router.get("/:id", getMeal);
router.post("/", createMeal);

export default router;
