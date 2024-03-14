import express from "express";
import { validateCityName } from "../middleware/validators.js";
const router = express.Router();
router.get("/:city", validateCityName, getWeatherData);
export default router;
//# sourceMappingURL=weatherRoutes.js.map