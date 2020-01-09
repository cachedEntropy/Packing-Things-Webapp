var mongoose = require('mongoose')

//connecting to the remote database

mongoose.connect("mongodb+srv://admin:admin@topack-duxvj.mongodb.net/test?retryWrites=true&w=majority", {useNewUrlParser: true})

// Create a schema - a blueprint 

var toPackSchema = new mongoose.Schema({

    item: String
    
})

var ToPack = mongoose.model('ToPack', toPackSchema)

module.exports = ToPack