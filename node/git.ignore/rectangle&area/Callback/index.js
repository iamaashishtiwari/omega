var rect=require('./callback');

function solveRect(l,b){
rect(l,b,(err,callback)=>{
if(err)
{
console.log("ERROR:",err.message);
}
else
{
console.log("Values Are:"+l+"And"+b+" are As Area:"+ 
callback.area(l,b)+"and perimeter:"+callback.perimeter(l,b));
}

});
}

console.log("After call to Rect");
solveRect(2,4);
solveRect(-2,6);
solveRect(2,0);