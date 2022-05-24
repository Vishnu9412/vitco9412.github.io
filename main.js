const path = require('path')
const express = require('express')
const hbs = require('hbs')
const app = express()
const port = 3000

const staticPath = path.join(__dirname, '/public')
const templatePath = path.join(__dirname, '/templates/views')
const partialsPath = path.join(__dirname, 'templates/partials')
app.set('view engine', 'hbs');
app.set('views', templatePath)
hbs.registerPartials(partialsPath)
app.use(express.static(staticPath))


app.get('', (req, res) => {
    res.render('home/index')
})

app.get('/products', (req, res) => {
    res.render('products/products')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
    console.log(`click here to visit : http://localhost:${port}`)
})