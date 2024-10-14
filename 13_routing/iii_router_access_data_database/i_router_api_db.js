//🚩 "How to access data from Database--Step by Step Proces"🎁
// #1- Goto Mongodb Database(open mongo compass gui)--Create a database--then create a "collection"(collection means table).
// #2- Then insert data in "collection"(table)
// #3- So data we stored in database now we have to fetch data and render in UI.
// #4- So we need to create an "api" using that "api" we can access/fetch data from database this is the process. 
//     Without "api" we can't access database's data.
// #5- So in order to access data from database we need to create an API, here below we are going to create "API"👇
// #6- So in order to create API we need to use "NodeJS" & "ExpressJS" and here we used Database "MongoDB".
// #6- We can access/handle "API" using "fetch()" or 3rd party library "Axios".


//🔴NOTE: Below example not giving output properly when click on "categories".
//        the issue is backend(express js) is not able to connect to database(mongo db).(Need to resolve later..)

// import express from "express";

const mongoClient = require("mongodb").MongoClient;  //👈It will create "mongodb"
const express = require("express");                 //👈It will create "express" application
const cors = require('cors');                      //👈It will create "cors" 
const mongoose = require("mongoose");             //👈It will create mongoose db
const url = "mongodb://localhost:27017/";
const app = express()
app.use(cors());
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

/* #1. here getting 1st table/collection from "onlineshopping" database */
app.get("/getcategories", function(request, response){
    mongoClient.connect(url, function(error, clientObject){
        var dbo = clientObject.db("onlineshopping");
        dbo.collection("tblcategoriesrecord").find().toArray(function(error, documents){
            if(!error){
                response.send(documents);
            }
        })
    })
});

/* #2. here getting 2nd table/collection from "onlineshopping" database */
app.get("/getproducts", function(request, response){
    mongoClient.connect(url, function(error, clientObject){
        var dbo = clientObject.db("onlineshopping");
        dbo.collection("tblproductsrecord").find().toArray(function(error, documents){
            if(!error){
                response.send(documents);
            }
        })
    })
});
/* #3. here getting 2nd table products "id" only */
app.get("/getproducts/:id", function(request, response){
    var id = parseInt(request.params.id)
    mongoClient.connect(url, function(error, clientObject){
        var dbo = clientObject.db("onlineshopping");
        dbo.collection("tblproductsrecord").find({Categoryid:id}).toArray(function(error, documents){
            if(!error){
                response.send(documents);
            }
        })
    })
});
app.listen(8080, '127.0.0.1', () => {
    console.log("Server is running on port 8080")
});