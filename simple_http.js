var http = require("http");

http.createServer( function ( request , response)	{

response.writeHead( 200 , {'Content-Type' : 'text/plain'});
response.end("Hello This is from HTTP server and still says Hello! World");
}).listen(8081);
console.log("Hello Server running buddy from localhost with port 8081");

