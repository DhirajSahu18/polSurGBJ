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

const pollsRoutes = require("./Routes/poll.routes.js");
const surveysRoutes = require("./Routes/survey.route.js");
const donationsRoutes = require("./Routes/donation.route.js");
const eventsRoutes = require("./Routes/event.route.js");

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
