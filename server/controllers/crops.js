import express from "express";
import mongoose from "mongoose";

import Crop from "../models/crop.js";

const router = express.Router();

export const getCrops = async (req, res) => {
  const { name } = req.params;
  try {
    const data = await Crop.find({ name: `${name}` });
    res.status(200).json(data);
  } catch (err) {
    res.status(404).json({ message: err });
  }
};

export default router;
