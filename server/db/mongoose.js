const mongoose = require("mongoose");


const mongodbURL = "mongodb://localhost:27017/users";
mongoose.connect(mongodbURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
});

const connection = mongoose.connection;

connection.once("open",()=>{
    console.log("mongo db connected");
})