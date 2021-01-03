var http = require("http");

const port = 3000;
const hostname = '0.0.0.0';

http.createServer(function (request, response) {
	// Send the HTTP header
	// HTTP Status: 200 : OK
	// Content Type: text/plain
	response.writeHead(200, {'Content-Type': 'text/plain'});

	// Send the response body as "Hello World"
	response.end('Test 2');
}).listen(port, hostname);

// Log out the startup
console.log('Server running on localhost:3000')
