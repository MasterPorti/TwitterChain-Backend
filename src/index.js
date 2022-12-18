const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const userRoute = require("./routes/user");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 1000;

app.use(cors());
app.use(express.json());

//middleware 🐘
app.use("/api", userRoute);

//mongobd connection 🐒
mongoose
  .connect(process.env.MONGOBD_URI)
  .then(() => console.log("Conectado"))
  .catch(error => console.log(error));

//start conncetion 🏁
app.listen(PORT, () => {
  console.log(`Corriendo en http://localhost:${PORT}`);
});
