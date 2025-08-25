const express = require('express');
const userSchema = require("../models/empleado");

const router = express.Router();


// Create User
router.post("/users", (req, res) => {
    const empleado = userSchema(req.body);
    empleado
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}))
});


module.exports = router;