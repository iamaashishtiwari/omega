var express = require ('express'),
app=express(),
session = require('express-session');
app.use(session({
secret : 'MySecret',
resave : true,
saveUnitialized: true
}));

var auth = function (req, res, next) {
if(req.session && req.session.user === "aashish" && req.session.admin)
return next();
else
return res.sendStatus(401);
};
app.get('/login', function(req,res){
if(!req.query.username || !req.query.password){
res.send('login failed');
}
else if(req.query.username ==="aashish" || req.query.password==="aashish"){
req.session.user = "aashish";
req.session.admin = true ;
res.send("Login Success");
}
});
//logout endpoint
app.get('/logout', function (req,res){
req.session.destroy();
res.send("logout success");
});

app.get('/content',auth,function(req,res){
res.send("you can see this because you are logged in");
});
app.listen(3000);
console.log("app running at http://localhost:3000");