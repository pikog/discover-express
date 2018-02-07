const express = require('express')

const app = express()

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

app.listen(8080)