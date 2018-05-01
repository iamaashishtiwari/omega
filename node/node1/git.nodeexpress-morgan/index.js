
//1st 
const morgan=require('morgan');


//step 1 & 2 : import modules && construct server components 
const express=require('express');
const http=require('http');

const hostname='localhost';
const port=3000;

//step 3 : create express app 
const app=express();

//2nd
//static server
app.use(morgan('dev'));
app.use(express.static(__dirname+'/public'));

app.use((req,res,next)=> {
    
	
	//3rd
	//  console.log(req.headers);
	
res.statusCode=200;
res.setHeader('Content-Type','text/html');
res.end('<html> <body> <h1> Name:-Suraj Kumar Ganesh  </h1> <h1> Reg.No:-11509249</h1>  </body> </html>');
});

//step 4 : create server

const server=http.createServer (app);
server.listen(port,hostname,()=>
{
console.log(`server running at http://${hostname}:${port}/`);
});
