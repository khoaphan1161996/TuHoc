const express = require('express');
const bodyParser = require('body-parser');
var cookieParser = require('cookie-parser')

const userRoute = require('./routes/user.route')
const authRoute = require('./routes/auth.route')

const authMiddleware = require('./middlewares/auth.middleware')

// config những gì liên quan tới app
const app = express();
const port = 8080
app.set('view engine', 'pug')
app.set('views', './views')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static('public'))

app.use(cookieParser())

// config routes
app.use('/users', authMiddleware.requireAuth,userRoute)
app.use('/auth',authRoute)

app.get('/', (req, res) => {
    res.render('index', {name: 'Khoa'})
})

app.listen(port, () => {
    console.log('listening on port ',port)
})