import express from "express";

import { getCrops } from "../controllers/crops.js";

const router = express.Router();

router.get("/:name", getCrops);

export default router;
