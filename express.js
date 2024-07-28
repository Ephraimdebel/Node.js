// import express from "express";
const express = require("express")
const app = express()
app.use(express.static("static/apple-html-css-replica"));
app.listen(1245,function(err){
  if(err) console.log(err);
  else console.log("listining 1245");
})