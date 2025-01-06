import express from "express";
import { getMeals } from "../controllers/recipesController.js";

const router = express.Router();

router.get("/", getMeals);

export default router;
