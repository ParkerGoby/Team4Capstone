const express = require("express");
 
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


// This section will help you get a single login by id
loginRoutes.route("/login/:id").get(function (req, res) {
 let db_connect = dbo.getDb();
 let myquery = { _id: ObjectId(req.params.id) };
 db_connect
   .collection("logins")
   .findOne(myquery, function (err, result) {
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

  // Checking User's Email/Username to verify if they mean to sign in and prevent duplicate logins.
loginRoutes.route("/login/:email").get(function (req, response) {
  db_connect.collection("logins").findOne({email: req.body.email, password: req.body.password}).then(userCheck => {
  if(userCheck) {
        console.log("email found");
        res.status(200).send("let's check pw");

    }
     if (exist.password == password){
        console.log("pw match great");
    }
    else {
        // db_connect.collection("logins").insertOne(myobj, function (err, res) {
        if (err) throw err;
        console.log(err);
        response.json(res);
      // });
    }    
   });
  });


// This section will help you update a login by id.
loginRoutes.route("/update/:id").post(function (req, response) {
 let db_connect = dbo.getDb();
 let myquery = { _id: ObjectId(req.params.id) };
 let newvalues = {
   $set: {
     email: req.body.email,
     school: req.body.school,
     password: req.body.password,
   },
 };
 db_connect
   .collection("logins")
   .updateOne(myquery, newvalues, function (err, res) {
     if (err) throw err;
     console.log("1 document updated");
     response.json(res);
   });
});
 

// This section will help you delete a login
loginRoutes.route("/:id").delete((req, response) => {
 let db_connect = dbo.getDb();
 let myquery = { _id: ObjectId(req.params.id) };
 db_connect.collection("logins").deleteOne(myquery, function (err, obj) {
   if (err) throw err;
   console.log("1 document deleted");
   response.json(obj);
 });
});
 
module.exports = loginRoutes;