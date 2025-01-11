var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello World!\n');
});

app.get('/:id/', function (req, res) {
  const id  = req.params.id
  if(id=="1"){
    return res.send('Sreyas\n');
  }
  return res.send('Samarth\n');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

