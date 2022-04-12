const http = require("http");

//creating a server

http.createServer(function(request, response)
{
    response.write("<h1>hey Jyoti</h1>");
    response.write("<h3>hey Jyoti</h3>");
    response.write("<h6>hey Jyoti</h6>");
    let user= { name: "John", city: "Surat" };
    response.write(JSON.stringify(user));
    response.end();

}).listen(3030)