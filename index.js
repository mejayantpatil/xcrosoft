var express = require('express');
var app = express();
var cors = require('cors');

app.use(cors());

app.get('/data', function(req,res){
    let data = [];
    for(let i = 0; i< 1000; i++){
        data.push({name: 'test '+i})
    }
    res.json({data: data});
});

app.get('/', function(req,res){
    res.send('This is the Xcrosoft');
});

app.listen(3000, function(err){
    console.log('Server is runing on port localhost:3000');
});
