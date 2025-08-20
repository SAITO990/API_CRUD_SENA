const express = require('express');
const userSchema = require("../models/empleado");

const router = express.Router();


// Create User
router.post("/users", (req, res) => {
    res.send("Create User");
});


module.exports = router;