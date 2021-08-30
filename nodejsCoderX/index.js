const express = require('express');
const bodyParser = require('body-parser');

const userRoute = require('./routes/user.route')

// config những gì liên quan tới app
const app = express();
const port = 8080
app.set('view engine', 'pug')
app.set('views', './views')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))

// config routes
app.use('/users',userRoute)

app.get('/', (req, res) => {
    res.render('index', {name: 'Khoa'})
})

app.listen(port, () => {
    console.log('listening on port ',port)
})