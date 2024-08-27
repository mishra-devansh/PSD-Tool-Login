const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
require("./db/mongoose"); // Ensure this file is correct
const userRouter = require("./routes/userRoute");

const app = express();

app.use(cors());
app.use(bodyparser.json()); // This middleware parses JSON bodies
app.use(express.json()); // This middleware parses JSON bodies again (you can choose either bodyparser or express.json())
app.use(userRouter);

const port = 4000;

app.listen(port, () => {
    console.log("Server is running on port " + port);
});
