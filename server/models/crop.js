import mongoose from "mongoose";

const cropsSchema = mongoose.Schema({
  name: String,
  state: String,
  duration: String,
  price: String,
  soil: String,
});

var Crop = mongoose.model("Crop", cropsSchema);

export default Crop;
