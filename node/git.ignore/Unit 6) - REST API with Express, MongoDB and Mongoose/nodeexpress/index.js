const fs = require('fs');
const path = require('path');
const http = require('http');
const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req,res)=> {
	//console.log(req.headers);
	console.log('Request for' + req.url + 'by method' + req.method);
	if(req.method == 'GET')
	{
	 var fileUrl;
	 if (req.url =='/')
		fileUrl = '/app.html';
	 else
		fileUrl = req.url;
	var filePath = path.resolve('./main'+fileUrl);
	const fileExt = path.extname(filePath);

	if (fileExt == '.html')
	{
		fs.exists(filePath, (exists) => {
			if (!exists)
			{
				res.statusCode = 404;
				res.setHeader('Content-Type', 'text/html');
				res.end('<html><body><h2>Error 404:' +fileUrl+ 'not found </h2></body></html>');
				return;
			}
			res.statusCode=200;
			res.setHeader('Content-Type','text/html');
			res.end('<html><body><h2>Success</h2></body></html>');
			fs.createReadStream(filePath).pipe(res);
		})
	}
	else
	{
		res.statusCode = 404;
		res.setHeader('Content-Type','text/html');
		res.end('<html><body><h2>Erro 404:' +fileUrl+ 'not found </h2></body></html>');
	}
}

else
{
	res.statusCode = 404;
		res.setHeader('Content-Type','text/html');
		res.end('<html><body><h2>Erro 404:' +fileUrl+ 'not found </h2></body></html>');
}
})

server.listen(port,hostname,() =>{
	console.log(`server running at http://${hostname}:${port}/`);
});
