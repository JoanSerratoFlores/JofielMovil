const express = require('express');
const path = require('path');
 
const app = express();
const port = process.env.PORT || 5000
app.use(express.static(__dirname + '/www'));
 
app.get('*', function(req,res) {
  res.sendFile(path.join(__dirname + '/www/index.html'));
});

app.listen(port, () => {
  console.log('Server is in port', port);
});