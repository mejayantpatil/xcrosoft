var express = require('express');
var app = express();
var cors = require('cors');
var port = process.env.PORT || 8080;
app.use(cors());

app.use('/', express.static('public'));
app.use('/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist'));

app.get('/data', function(req,res){
    let data = [];
    for(let i = 0; i< 1000; i++) {
        data.push({name: 'test '+i})
    }
    res.json({data: data});
});

// app.get('/', function(req,res){
//     res.send('This is the Xcrosoft');
// });

app.listen(port, function(err){
    console.log('Server is runing on port localhost:'+port);
});
