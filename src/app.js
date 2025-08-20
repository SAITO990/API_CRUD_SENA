const express = require('express');
const mongoose = require('mongoose');
require("dotenv").config();
const userRoutes =  require("./routes/empleadoRoutes");

const app = express();
const port = process.env.PORT || 9000;

//Middleware
app.use('/api', userRoutes);

//Routes
app.get("/", (req, res) =>{
    res.send("Welcome to my API");
})

//Mongodb connect
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log('Connected to MongoDB Atlas'))
    .catch((error) => console.error(error));

app.listen(port, () => console.log('server listening on port', port));