Tips for Node.js
================

Useful tips and tricks for node.js developement.
This is just a quick memo for me

- [Tips for Node.js](#tips-for-nodejs)
    - [Prefix static files](#prefix-static-files)
    - [Templating engine](#templating-engine)

## Prefix static files

If we want a prefix in url for static files, we indicate before using `express.static()`

```javascript
app.use('/static', express.static(__dirname + '/public'))
```

We access to file in the folder `public` with `ourserver.com/static/myfile.html` instead of `ourserver.com/myfile.html`

## Templating engine

We use [handlebars](http://handlebarsjs.com/) in order to create template page. Handlebars is an improved version of [mustache](http://mustache.github.io/). We need [hbs](https://www.npmjs.com/package/hbs) package as template engine for Express.