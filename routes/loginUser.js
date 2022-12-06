const express = require("express");
const app = express();
// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const loginRoutes = express.Router();
 
// This will help us connect to the database
const dbo = require("../db/conn");
 
// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;
 

// This section will help you get a list of all the records.
loginRoutes.route("/login").get(function (req, res) {
 let db_connect = dbo.getDb("employees");
 db_connect
   .collection("logins")
   .find({})
   .toArray(function (err, result) {
     if (err) throw err;
     res.json(result);
   });
});



// This section will help you create a new login.
loginRoutes.route("/login/register").post(function (req, response) {
 let db_connect = dbo.getDb();
 let myobj = {
   email: req.body.email,
   school: req.body.school,
   password: req.body.password,
 };


// Checking User's Email/Username to verify if they mean to sign in and prevent duplicate logins.
db_connect.collection("logins").findOne({email: req.body.email}).then(existingUser => {
  if (existingUser != null) {
    console.log("This username already exists. Did you mean to sign in?");
    }
    else {
        db_connect.collection("logins").insertOne(myobj, function (err, res) {
        console.log("User Created Successfully.");
        // if (err) throw err;
        // console.log(err);
        response.json(res);
      });
    }    
   });
  });


  
  loginRoutes.route("/login/profile").post(function (req, res) {
    console.log("attempting")
    let db_connect = dbo.getDb();
    var userqueryID = req.body;

    var cursor = db_connect.collection("logins").find({_id: ObjectId(userqueryID)});
    cursor.forEach(function(userId){
      //access all the attributes of the document here
      var uName = userId.email;
      var uSchool = userId.school;
      var addition = userId.addition;
      var multiplication = userId.multiplication;
      var subtraction = userId.subtraction;
      var division = userId.division;
      

      return res.json({
        uName,uSchool,addition,multiplication,subtraction,division
      })
      })
  }); 

loginRoutes.route("/login/validate").post(function (req, res) {
  console.log("attempting")
  let db_connect = dbo.getDb();
  db_connect.collection("logins").findOne({ email: req.body.email, password: req.body.password }).then(
    (user) => {
      console.log("Checking Username & Password")
      if (!user) {
        console.log("Incorrect Username or Password")
        return res.status(401).json({
          error: new Error('Incorrect username or password!')
        });
        
      }
      console.log("logged in")
      var cursor = db_connect.collection("logins").find({email: req.body.email});
      cursor.forEach(function(userId){
      //access all the attributes of the document here
      var id = userId._id;
      console.log(id)
      return res.json({
        id
      })
      })
      
      
    }
  );
}); 

module.exports = loginRoutes;