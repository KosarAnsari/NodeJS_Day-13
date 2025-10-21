var express = require("express");
var router = express.Router();

const userModel = require ("./users")

/* GET home page. */
router.get('/', function(req,res){
  res.cookie("age",25);
  //req.session.banned = true;
  res.render("index");
});

router.get("/read",function(req,res){
  console.log(req.cookies);
  res.send("check");
});

router.get("/delete", function(req,res){
  res.clearCookie("age");
  res.send("clear ho gyi");
})

//creating a session

/*router.get("/checkban",function(req,res){
  if(req.session.banned === true){
    res.send("you are banned for this site");
    
  }else{
    res.send("not banned");
  }
  console.log(req.session);
  
});

// deleting a session 

router.get("/removeban",function(req,res){
  req.session.destroy(function(err){
    console.log(err);
    res.send("ban removed");
  });
})*/

/*router.get("/create", async function(req,res){
 const resultdb = await userModel.create({
    name:"harsh",
    age:25,
    username:"harsh"
  });
  
  res.send(resultdb);

});*/

/*router.get("/allusers",async function(req,res){
  let allusers = await userModel.find();
  res.send(allusers)
});*/

/*router.get("/allusers",async function(req,res) {
  let allusers = await userModel.findOne({
    username:"harsh"
  });
  res.send(allusers);
})

router.get("/delete",async function(req,res){
  let deleteduser = await userModel.findOneAndDelete({username:"harsh"});
  res.send(deleteduser);
})*/



module.exports = router;
