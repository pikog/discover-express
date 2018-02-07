//Import packages
const express = require('express')
const hbs = require('hbs')

//Express init
const app = express()

//Port to use
const port = 8080

//Setting template engine
hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs')

//Set new function to HBS
//Return current year
hbs.registerHelper('current_year', () =>
{
    return new Date().getFullYear()
})

//Return string in lowercase
hbs.registerHelper('lowercase', (text) =>
{
    return text.toLowerCase()
})

//Access to public file
app.use('/static', express.static(__dirname + '/public'));

//Routes
app.get('/', (req, res) =>
{
    res.render('home.hbs', 
        {
            title: 'Home',
        }
    )
})

app.get('/test', (req, res) =>
{
    res.render('test.hbs', 
        {
            title: 'Test',
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