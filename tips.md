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
    //Watch .js and .hbs files
    "ext": "js hbs"
}
```