var express = require('express');

// Create app
var app = express();
const port = process.env.PORT || 3000;

// Designate folder to serve
app.use(express.static('public'));

// Start server
app.listen(port, function() {
  console.log('Express server is on port '+port);
});
