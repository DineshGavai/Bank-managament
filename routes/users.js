const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("User list");
});
router.get("/new", (req, res) => {
  res.send("User Form");
});
router.get("/user-form", (req, res) => {
  res.render("user-form");
});
router.post("/user-form", (req, res) => {
  const { name, password } = req.body;
  res.send(`Name: ${name}, Password: ${password}`);
});

module.exports = router;
