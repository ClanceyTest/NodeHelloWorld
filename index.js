var http = require('http');

var server = http.createServer(function(request, response) {

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World! This was auto deployed from commit 2");

});

var port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at test push http://localhost:%d", port);
