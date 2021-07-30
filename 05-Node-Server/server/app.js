require("dotenv").config();
let express = require("express");
const app = express();
const sequelize = require("./db");
let journal = require("./controllers/journalcontroller");
let user = require("./controllers/usercontroller");

sequelize.sync();

app.use(express.json());

//Exposed Route:
app.use('/user', user);

app.use("/journal", journal);

app.listen(3000, function(){
    console.log("App is listening on port 3000");
});






// app.use("/test", function(req, res){
//     res.send("This is a message from the test endpoint on the server!")
// })

// app.use("/Courtney", function(req, res){
//     res.send("My name is Courtney and I am 34 years old!")
// })