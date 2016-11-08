var http= require('http');
var fs = require('fs');

http.createServer(function(request,response) {
	var url = request.url;
	switch(url){
		case '/':
			getStaticFileContent(response,'index.html','text/html');
			break;
		case '/about':
			getStaticFileContent(response,'about.html','text/html');
			break;

		case '/contact':
			getStaticFileContent(response,'contact.html','text/html');
			break;
		default :
			response.writeHead(404, {'Content-Type':'text/plain'});
			response.end('404 - Page Not Found');

	}
}).listen(9099);
console.log('Server Running it at http://localhost:9099');

function getStaticFileContent(response, filepath, contentType){
	fs.readFile(filepath, function(error,data){
		if (error) {
			response.writeHead(500,{'Content-Type':'text/plain'});
			response.end('500 - INTERNAL SERVER ERROR');
		}
		if (data) {
			response.writeHead(200,{'Content-Type':'text/html'});
			response.end(data);
		}
	});
}