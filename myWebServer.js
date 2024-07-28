const http = require("http")
const fs = require("fs")
// const url = require("url")
myserver  = http.createServer(function(req,res){
  filepath = req.url
  if(filepath == "/"){
    filepath = "index.html"
}
console.log(filepath);
 x = __dirname + "/static/apple-html-css-replica/" + filepath;
 fs.readFile(x, function (err, data) {
   if (err) {
     console.log("error");
   } else {
     res.write(data);
     res.end();
   }
 });
})
myserver.listen(4545,function(err){
  if(err){
    console.log("error happen");
  }
  else{
    console.log("listning port 4545");
  }
})