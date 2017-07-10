// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
var useragent = require('useragent');

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));
useragent(true);

app.all("/*", function (request, response) {
  var agent = useragent.parse(request.headers['user-agent']);
  var ip = request.headers['x-forwarded-for'];
  response.send({ipaddress: ip, browser:agent.toAgent(), os: agent.os.toString()});
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
