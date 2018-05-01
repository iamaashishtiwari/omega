const morgan = require('morgan');
const express=require('express');
const http=require('http');
const hostname='localhost';
const port=3000;
const app=express();
app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
app.use((req,res,next)=>
{
	//console.log(req.Headers);
	res.statusCode=200;
	res.setHeader('Content-Type','text/html');
	res.end('<html><body><h1>Aashish</h1> <h2>11506677</h2></body></html>');
});

const server=http.createServer(app);
server.listen(port,hostname,()=>{
	console.log(`Server running at http://${hostname}:${port}/`);
});
