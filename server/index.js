import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import cropRoutes from "./routes/crops.js";

const app = express();

dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/crops", cropRoutes);

app.use("/", (req, res) => {
  res.send("hello to crop API");
});

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch((error) => console.log(error.message));

// var crops = [
//   {
//     name: "Sugarcane",
//     state: "UttarPradesh",
//     duration: "January - December",
//     price: "3800 (/Metric Ton)",
//     soil: "Loamy-Sand and Alluvial",
//   },
// ];

// // save multiple documents to the collection referenced by Book Model
// Crop.collection.insert(crops, function (err, docs) {
//   if (err) {
//     return console.error(err);
//   } else {
//     console.log("Multiple documents inserted to Collection");
//   }
// });

mongoose.set("useFindAndModify", false);
