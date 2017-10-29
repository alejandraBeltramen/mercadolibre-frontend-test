var express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '../app')));

var router 	= express.Router();
var search = require('./controllers/api/busqueda');

router.get('/api/items', search.getAll);
router.route('/api/items/:id').get(search.read);

app.use('/', router);

app.connect = function(opts) {
    var server = app.listen(3000, function(){
		var port = server.address().port;
		console.log('Listening on port ' + port);
	});
};

app.connect();
