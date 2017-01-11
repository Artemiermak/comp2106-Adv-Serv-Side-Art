/* Created by Artem Iermak on 1.11.2017 */

/* link to the http module that ships with node */

var http = require('http');
// start the http server (method create server). Run callback function
// callback function always anonymous.
// it has 2 parametres: request, response

http.createServer(function(request, response){

	response.writeHead(200); //http status code is ok
	response.write('<h1>Our first node page</h1>');
	response.end('<h1>End of response</h1>');
}).listen(3000); // listen is a method. 3000 is a port number (use it always). http://localhost:3000/

// display message in command prompt

console.log('server running on port 3000')