import express from "express";
import weatherRoute from "./routes/weatherRoutes.js";
import cors from "cors";

//creating an express app
const app = express();

// The port that the express server will listen on
const PORT = 3000;

app.use(express.json());
app.use("/api/weather", weatherRoute);
app.use(cors());

//start the express server
app.listen(PORT, () => {
  console.log("Server is listening on port ${PORT}");
});
