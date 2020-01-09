var bodyParser = require('body-parser')

var data = [ {item: 'Shoes'}, {item: 'Jacket'}, {item: 'ToothBrush'}, {item: 'Shades'}, {item: 'Jeans'}]
var urlencodedParser = bodyParser.urlencoded({extended:false})

module.exports = function(app){

app.get('/toPack', function(req, res){
    res.render('toPack', {things : data})
})    

app.post('/toPack',urlencodedParser, function(req, res){
    console.log('ajax request recieved')
    data.push(req.body)
    res.json(data)
})   

app.delete('/toPack/:thing', function(req, res){
    console.log(req.params.thing)
    data = data.filter(function(value, index, arr){
        return value.item!==req.params.thing
    })
    console.log(data)
    res.json(data)  
})

}