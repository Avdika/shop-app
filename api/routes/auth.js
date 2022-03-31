const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

//Register
router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SECKEY).toString(),
  });

  try {
    const savedUser = await newUser.save();

    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json(error);
  }
})

//Login
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });

    if (!user) {
      return res.status(401).json("Wrong username or password1!");
    }

    const hashPass = CryptoJS.AES.decrypt(user.password, process.env.PASS_SECKEY);
    const password = hashPass.toString(CryptoJS.enc.Utf8);

    if (password !== req.body.password) {
      return res.status(401).json("Wrong username or password2!");
    }

    const accessToken = jwt.sign({
      id: user._id,
      isAdmin: user.isAdmin,
    }, process.env.JWT_SECKEY, {expiresIn: "3d"})

    //mongoDB stores in _doc folder
    const { passwrd, ...others } = user._doc;

    res.status(200).json({ ...others, accessToken });
  } catch (error) {
    res.status(500).json(error);
  }
})

module.exports = router;
