


module.exports=(x,y,callback)=>{
if(x<=0 || y<=0)
{
setTimeout(()=>callback(new Error(" x,y  Are -Ve"),
null),2000);
}
else{
setTimeout(()=>
callback(null,{are:(x)=>(6*x*x),vol:(x)=>(x*x*x),volume:(y)=>(4/3*3.14*y)}),2000);
}
}