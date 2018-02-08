Tips for Node.js
================

Useful tips and tricks for node.js developement.
This is just a quick memo for me

- [Tips for Node.js](#tips-for-nodejs)
    - [Prefix static files](#prefix-static-files)
    - [Templating engine](#templating-engine)
        - [Partials](#partials)
        - [Register helper](#register-helper)
    - [Nodemon config file](#nodemon-config-file)
    - [Middlewares](#middlewares)

## Prefix static files

If we want a prefix in url for static files, we indicate before using `express.static()`

```javascript
app.use('/static', express.static(__dirname + '/public'))
```

We access to file in the folder `public` with `ourserver.com/static/myfile.html` instead of `ourserver.com/myfile.html`

## Templating engine

We use [handlebars](http://handlebarsjs.com/) in order to create template page. Handlebars is an improved version of [mustache](http://mustache.github.io/). We need [hbs](https://www.npmjs.com/package/hbs) package as template engine for Express.

### Partials

Used to import a partial of a template inside the template *(ex: the footer which is repetitive)*.
First we setup partial folder

```javascript
hbs.registerPartials(__dirname + '/views/partials')
```

And then we used the partial with `{{> partialname}}`

### Register helper

We can add new functions to hbs

```javascript
hbs.registerHelper('current_year', () =>
{
    return new Date().getFullYear()
})
```

We can use this function with `{{current_year}}`.   
More info on [docs](http://handlebarsjs.com/)

## Nodemon config file

We can create `nodemon.json` to configure nodemon like watch specific files.

```JSON
{
    "ext": "js hbs"
}
```

*  *ext* : Which file extension is watched

## Middlewares

This a function which launch before routes. We can use middleware to get info on request, change the response or stop/enable the continuation of the process. The order of middleware is important.

The syntax is :

```javascript
app.use((req, res, next) =>
{
    next() //call the next middleware (continue the process)
})
```

There are examples of middlewares : 

```javascript
//Log all server call in a file
app.use((req, res, next) =>
{
    const text = `${new Date().toString()} : ${req.method} ${req.originalUrl}`
    console.log(text)
    fs.appendFile('server.log', `${text}\n`, (error) =>
    {
        if(error)
        {
            console.log(error)
        }
    })
    next()
})

//Show a maitenance page instead of normal response
app.use((req, res, next) =>
{
    res.render('maintenance.hbs')
    //next() is not call, so the processus doesn't continue and just show maitenance page
})

//Access to public file
app.use('/static', express.static(__dirname + '/public'));
```