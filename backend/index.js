require('dotenv').config();
const axios = require("axios");
const express = require("express");
const mongoose = require("mongoose");

const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

// Ensure your UserModel is correctly imported and available
const {HoldingsModel}=require("./model/HoldingsModel");
const {PositionsModel}=require("./model/PositionsModel");
const {OrdersModel} = require("./model/OrdersModel");
const {UserModel} = require("./model/UserModel"); 

const app=express();

app.use(cors());
app.use(bodyParser.json());


// --------------------------------------------------------
// 🟢 SIGNUP ROUTE
// --------------------------------------------------------
app.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if user already exists
    const existingUser = await UserModel.findOne({ email: email.toLowerCase() });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new UserModel({
      name,
      email: email.toLowerCase(),
      password: hashedPassword,
    });
    await user.save();

    res.status(201).json({
      message: "User created successfully",
      user: { name: user.name, email: user.email },
    });

  } catch (err) {
    console.error("Signup Error:", err.message);
    res.status(500).json({ error: "Internal Server Error during signup" });
  }
});


// --------------------------------------------------------
// 🔴 LOGIN ROUTE (FIXED)
// --------------------------------------------------------
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1. Find user and EXPLICITLY retrieve the password hash
    // .select('+password') is the critical fix for Mongoose to fetch the password hash.
    const user = await UserModel.findOne({ email: email.toLowerCase() }).select('+password');
    
    if (!user) return res.status(404).json({ message: "User not found" });

    // 2. Compare the plaintext password with the stored hash
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

    // 3. Generate JWT Token
    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET, // Ensure JWT_SECRET is set in your .env file
      { expiresIn: "1h" }
    );

    // 4. Login Success
    res.json({
      message: "Login successful",
      token,
      user: { name: user.name, email: user.email },
    });

  } catch (err) {
    console.error("Login Error:", err.message);
    res.status(500).json({ error: "Internal Server Error during login" });
  }
});

// --------------------------------------------------------
// ⚡ Other Routes 
// --------------------------------------------------------

app.get('/allHoldings',async(req,res)=>{
    let allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
});

app.get('/allPositions',async(req,res)=>{
    let allPositions = await PositionsModel.find({});
    res.json(allPositions);
});

app.post("/newOrder", async (req, res) => {
  try {
    let newOrder = new OrdersModel({
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      mode: req.body.mode,
    });
    await newOrder.save();
    res.send("Order saved!");
  } catch (err) {
    console.error("Order Save Error:", err.message);
    res.status(500).send("Failed to save order");
  }
});

// --------------------------------------------------------
// 🔗 DATABASE CONNECTION
// --------------------------------------------------------

mongoose.connect(uri)
  .then(() => {
    console.log("DB connected");
    app.listen(PORT, () => console.log("App started on port", PORT));
  })
  .catch(err => console.error("DB connection error:", err));

// (Original commented-out routes for adding initial data removed for brevity)
