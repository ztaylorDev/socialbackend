const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/users")
const authRoute = require("./routes/auth")

dotenv.config();

mongoose.connect('process.env.MONGO_URL', {useNewUrlParser: true},()=>{
    console.log("connected to MongoDB")
});




//middleware
app.use(express.json());


app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);




app.listen(9000,()=>{
    console.log("Backend server is live!")
})