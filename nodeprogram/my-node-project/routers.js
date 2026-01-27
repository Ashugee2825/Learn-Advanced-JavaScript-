//router functionality of express
//localhost:8085//admin/homepage, here admin is the base route
//localhost:8085//user/homepage

var express = require("express");
var router = express.Router();
router.get("/home", function (req, res) {
  res.send("Get routes on Home");
});
// router.get('/loginPage',function(req,res){
//     res.send("this is your login page")
// })

module.exports = router;





//localhost:8085//admin/homepage, here admin is the base route
//localhost:8085//user/homepage
 
var express = require('express');
var router = express.Router(); //router functionality of express
router.get('/home',function(req,res){
    let animals =[
        {name:'Tiger'},
        {name:'Lion'}]
    //res.send("Get routes on Home");
    res.render('home', {animals:animals})
});
router.get('/loginPage',function(req,res){
    res.send("this is your login page");
});
 
module.exports = router;



