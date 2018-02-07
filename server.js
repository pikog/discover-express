//Import packages
const express = require('express')
const hbs = require('hbs')

//Express init
const app = express()

//Port to use
const port = 8080

//Setting template engine
app.set('view engine', 'hbs')

//Access to public file
app.use('/static', express.static(__dirname + '/public'));

//Routes
app.get('/', (req, res) =>
{
    res.render('home.hbs', 
        {
            title: 'Home page !',
            year: new Date().getFullYear()
        }
    )
})

app.get('/test', (req, res) =>
{
    res.render('test.hbs', 
        {
            date: new Date().toDateString()
        }
    )
})

app.get('/bad', (req, res) =>
{
    res.send(
        {
            errorMessage: 'Bad page'
        }
    )
})

//Launch on port
app.listen(port, () =>
{
    console.log(`Server started on ${port}`)
})