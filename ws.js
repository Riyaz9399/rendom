var http = require('http');
var url = require("url");
var fs = require("fs");

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.end('Hello World!');
// }).listen(8080);

// url from client side  write a name after the domain of the web

// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(req.url);
//     res.end();
//   }).listen(8080);

  // require url
//   http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     var q = url.parse(req.url, true).query;
//     var txt = q.year + " " + q.month;
//     res.end(txt);
//   }).listen(8080);


//read file

// http.createServer(function (req,res){
//     fs.readFile("index.html",function(err,data){
//         res.writeHead(200,{"Content-Type" : "text/html"});
//         res.write(data);
//         return res.end();
//     });
// }).listen(8080);

// fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
//     if (err) throw err;
//     console.log('Saved!');
//   });

//   fs.writeFile("mynewfile1.txt", "Hi this is a node js starting from the biggning" , function(err){
//     if(err) throw err ;
//     console.log("saved");
//   })

//   fs.unlink("mynewfile1.txt" , function(err){
//     if(err) throw err;
//     console.log("the file has been deleted!");
//   })
  
  fs.rename("ren.txt1" ,"myreamefile.txt" , function(err){
    if (err) throw err;
    console.log("the file has rename");
  })


