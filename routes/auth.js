const router = require("express").Router();
const mongoose = require("mongoose");
require("@/schemas/user");

const Users = mongoose.model("Users");

router.post("/register", async (req, res) => {
  const { username, email } = req.body;

  const previousUser = await Users.findOne({ email });

  if (previousUser) return res.status(400).send("User Exists");

  try {
    await Users.create({
      username,
      email,
    });
    res.status(201).send("OK");
  } catch (error) {
    res.status(error.status || 500).json({ error });
  }
});

module.exports = router;
