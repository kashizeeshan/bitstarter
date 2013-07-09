
var fs = require('fs');
var data = fs.readFileSync("index.html", "utf8");
response.send(data);



