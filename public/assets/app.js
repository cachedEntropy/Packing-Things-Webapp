var express = require('express')

var app = express()

// assigning the template engine EJS

app.set('view engine', 'ejs')

// Handling static files : middleware

app.use(express.static('/public'))

//listen to port

app.listen(3000)

console.log('We are listening to port 3000')

