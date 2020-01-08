var express = require('express')
var toPackController = require('./controllers/toPackController')
var app = express()


// assigning the template engine --> EJS
app.set('view engine', 'ejs')


// Handling static files : middleware
app.use(express.static('/public'))


// Starting the controller(s)
toPackController(app)


//listen to a port
app.listen(3000)
console.log('We are listening to port 3000')

