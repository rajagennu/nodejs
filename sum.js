var http = require('http');

http.createServer( function (request , response)		{

response.writeHead(200 ,{'Content-Type' : 'text/plain'});
response.end("Server on 8081");

}).listen(8081);

console.log("Server started");
a = 10 ;
console.log(a);
