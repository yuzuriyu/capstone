const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken"); // Added JWT package
const InquiriesModel = require("./models/Inquiries");
const UsersInfoModel = require("./models/UsersInfo");
const UsersModel = require("./models/Users");
const crypto = require("crypto");
require("dotenv").config();

mongoose.connect(
  "mongodb+srv://garciaccole:careycole39@capstone.aevnofm.mongodb.net/capstone?retryWrites=true&w=majority"
);

app.use(express.json());
app.use(cors());

const secretKey = crypto.randomBytes(32).toString("hex");
console.log(secretKey);
process.env.JWT_SECRET = secretKey;

const saltRounds = 10;

async function hashPassword(password) {
  return await bcrypt.hash(password, saltRounds);
}

// Middleware to verify JWT token
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, secretKey, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

app.post("/signIn", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UsersModel.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid password" });
    }

    // Generate JWT token
    const token = jwt.sign({ email: user.email }, secretKey, {
      expiresIn: "1h",
    });

    console.log("Generated Token:", token);

    res.status(200).json({ message: "Login successful", token: token });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.post("/createUser", async (req, res) => {
  const { email, password } = req.body;

  try {
    const hashedPassword = await hashPassword(password);

    const newUser = new UsersModel({ email, password: hashedPassword });

    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Registration error:", error);

    if (error.name === "ValidationError") {
      return res.status(400).json({
        message:
          "Validation error: Please provide a unique username and a password",
      });
    }

    res.status(500).json({ message: "Internal server error" });
  }
});

app.put("/addUserInfo", async (req, res) => {
  const info = req.body;
  try {
    const newInfo = new UsersInfoModel(info);
    await newInfo.save();
  } catch (err) {
    res.json(err).status(400);
    console.log(err);
  }
});

app.put("/updateUserInfo", authenticateToken, async (req, res) => {
  // Extract user ID from the token
  const userId = req.user.id;
  const info = req.body;
  try {
    // Use the userId to update the user information
    await UsersModel.findByIdAndUpdate(userId, info);
    res.status(200).json({ message: "User information updated successfully" });
  } catch (error) {
    console.error("Error updating user information:", error);
    res.status(500).json({ message: "Failed to update user information" });
  }
});

app.get("/currentUser", authenticateToken, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    res.json(user);
  } catch (error) {
    console.error("Error fetching current user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.get("/usersInfo", async (req, res) => {
  try {
    const result = await UsersInfoModel.find({});
    res.json(result);
  } catch (err) {
    console.error("Error fetching user information:", err);
    res.status(500).json({ message: "Failed to fetch user information" });
  }
});

app.get("/voltage", authenticateToken, (req, res) => {
  const voltage = generateVoltage();
  res.json({ voltage });
});

app.get("/inquiries", async (req, res) => {
  try {
    const result = await InquiriesModel.find({});
    res.status(200).json(result);
  } catch (err) {
    console.error("Error fetching inquiries:", err);
    res.status(500).json({ message: "Failed to fetch inquiries" });
  }
});

app.post("/submit-inquiry", async (req, res) => {
  const inquiry = req.body;
  try {
    const newInquiry = new InquiriesModel(inquiry);
    await newInquiry.save();
    res.status(200).json({ message: "Submission complete", success: true });
  } catch (err) {
    console.error("Error submitting inquiry:", err);
    res.status(500).json({ success: false, message: "Submission failed" });
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
