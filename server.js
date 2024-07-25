const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("index", { text: "my name is dinesh" });
});

const userRouter = require("./routes/users");

app.use("/users", userRouter);

app.listen(3000);
