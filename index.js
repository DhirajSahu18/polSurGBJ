const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();

const app = express();

const port = Number(process.env.PORT) || 8080;


app.use(express.json());
app.use(cors());

const connectToDatabase = require("./db.js");
connectToDatabase();

const pollsRoutes = require("./routes/polls.routes.js");
const surveysRoutes = require("./routes/surveys.routes.js");
const donationsRoutes = require("./routes/donations.routes.js");
const eventsRoutes = require("./routes/events.routes.js");

app.use("/events", eventsRoutes);
app.use("/donations", donationsRoutes);
app.use("/polls", pollsRoutes);
app.use("/surveys", surveysRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
