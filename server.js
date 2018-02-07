//Import package
const express = require('express')

//Express init
const app = express()
const port = 8080;

//Access to public file
app.use('/static', express.static(__dirname + '/public'));

//Routes
app.get('/', (req, res) =>
{
    res.send({
        foo:'bar',
        id: 5
    })
})

app.get('/test', (req, res) =>
{
    res.send('<h1>Test page</h1>')
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