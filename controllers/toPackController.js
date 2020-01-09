var bodyParser = require('body-parser')
var mongoose = require('mongoose')

//connecting to the remote database

mongoose.connect("mongodb+srv://admin:admin@topack-duxvj.mongodb.net/test?retryWrites=true&w=majority", {useNewUrlParser: true})

// Create a schema - a blueprint 

var toPackSchema = new mongoose.Schema({

    item: String
    
})

var ToPack = mongoose.model('ToPack', toPackSchema)

//var data = [ {item: 'Shoes'}, {item: 'Jacket'}, {item: 'ToothBrush'}, {item: 'Shades'}, {item: 'Jeans'}]
var urlencodedParser = bodyParser.urlencoded({extended:false})

module.exports = function(app){

app.get('/toPack', function(req, res){
    // get data from mongoDB and pass it to the view

    ToPack.find({}, function(err, data){
        if (err) throw err
        res.render('toPack', {things : data})
    })
})    

app.post('/toPack',urlencodedParser, function(req, res){
    // get data from the view and add to the mongoDB

    var newToPack = ToPack(req.body).save(function(err, data){
        if (err) throw err;
        res.json(data)
    })
    // console.log('ajax request recieved')
    // data.push(req.body)
    // res.json(data)
})   

app.delete('/toPack/:thing', function(req, res){
    console.log(req.params.thing)

    //delete the requested item from mongoDB
    ToPack.find({item: req.params.thing}).deleteMany(function(err, data){
        if (err) throw err
        res.json(data)
    })

    // data = data.filter(function(value, index, arr){
    //     return value.item!==req.params.thing
    // })
    // console.log(data)
    // res.json(data)  
})

}