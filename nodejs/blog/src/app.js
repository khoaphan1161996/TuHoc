const path = require('path');
const express = require('express')
const handlebars  = require('express-handlebars');

const app = express()
const port = 3000

// cách cấu hình static file
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({   // import middleware body để xử lý submit form
  extended: true
}))  
app.use(express.json())   // import middleware body để xử lý submit form khi dùng thư viện js (XMLHttpRequest, fetch, axios, jqueryajax)

// template engine
app.engine('hbs', handlebars({
  extname: '.hbs'
}));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

app.get('/', (req, res) => {
  res.render('home')
})

app.get('/news', (req, res) => {
  console.log(req.query.q) 
  res.render('news')
})

app.get('/search', (req, res) => {
  // console.log(req.query)  // lấy key query trong req
  res.render('search')
})

app.post('/search', (req, res) => {
  // console.log(req.body)
  res.send('')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})