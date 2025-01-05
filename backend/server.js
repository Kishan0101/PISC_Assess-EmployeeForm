require('dotenv').config();  

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();


app.use(cors());
app.use(bodyParser.json());


mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("Error connecting to MongoDB:", error));

// Employee Schema
const employeeSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  address: String,
});

const Employee = mongoose.model("Employee", employeeSchema);

// API Routes
app.post("/api/employees", async (req, res) => {
  try {
    const newEmployee = new Employee(req.body);
    await newEmployee.save();
    res.status(201).send("Employee added successfully!");
  } catch (error) {
    res.status(500).send("Error saving employee data");
  }
});

app.post("/api/employees/check-email", async (req, res) => {
  try {
    const { email } = req.body;
    const existingEmployee = await Employee.findOne({ email });
    if (existingEmployee) {
      return res.status(200).send({ exists: true });
    }
    res.status(200).send({ exists: false });
  } catch (error) {
    res.status(500).send("Error checking email");
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
