const express=require('express');
const http=require('http');

const hostname='localhost';
const port=5000;

const app=express();



app.use((req,res,next)=> {
    console.log(req.headers);
	
res.statusCode=200;
res.setHeader('Content-Type','text/html');
res.end('<html> <body> <h1> Name:-Suraj Kumar Ganesh  </h1> <h1> Reg.No:-11509249</h1>  </body> </html>');
});

const server=http.createServer (app);
server.listen(port,hostname,()=>
{
console.log(`server running at http://${hostname}:${port}/`);
});
