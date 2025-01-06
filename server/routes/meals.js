import express from "express";
import { createMeal, getMeals } from "../controllers/recipesController.js";

const router = express.Router();

router.get("/", getMeals);

router.post("/", createMeal);

export default router;
