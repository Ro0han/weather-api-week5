import express from "express";
import { getWeatherData } from "../controllers/WeatherControllers.js";
import { validateCityName } from "../middleware/validators.js";

const router = express.Router();

router.get("/:city", validateCityName, getWeatherData);

export default router;
