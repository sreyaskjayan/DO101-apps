var express = require('express');
app = express();

app.get('/', function (req, res) {
	res.send(
		`<div style={"background-color:green;"}>
			<h1>HELLLLLOOOOOOOOOOO00000000000</h1>
		</div>`
	);
});

app.get('/:id/', function (req, res) {
	const id  = req.params.id
	if(id=="1"){
		return res.send('Sreyas\n');
	} else if(id=="2"){
		return res.send('Samarth\n');
	} else {
		return res.send('No Name\n')
	}
});

app.listen(8080, function () {
	console.log('Example app listening on port 8080!');
});

