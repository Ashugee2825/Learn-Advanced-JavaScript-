var http = require("http");
var fs = require("fs");
var url = require("url"); //parsing the url

http
  .createServer(function (req, res) {
    var q = url.parse(req.url, true); //user req to the server
    console.log("Full path is: ", q);

    const name = q.query.name; //John
    console.log("Hey my name is " + name + " my id is: " + q.query.id);

    var filename = q.pathname.substring(1); //index.html
    console.log(filename); //index.html

    fs.readFile(filename, function (err, data) {
      if (err) {
        res.writeHead(200, { "Content-Type": "text/plain" });
        return res.end("404 not found");
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end(`Hi , ${name}`);
    });
  })
  .listen(8087, function () {
    console.log("server started at http://localhost:8087");
  });
//localhost:8087/  or localhost:8087
// q = https://www.google.com/search?q=cdac&rlz=1C1JJTC_en-GBIN10
