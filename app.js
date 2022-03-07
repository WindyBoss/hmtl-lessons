const express = require('express');
const exhbs = require('express-handlebars');
const countries = require('./countries.json');

const PORT = process.env.PORT || 4444;

const app = express();
app.use(express.static('public')); // -> express public the page from 'public' directory
app.set('view engine', 'hbs');
app.engine('hbs', exhbs({
    extname: 'hbs',
}));


app.get('/', (req, res) => {
    //     console.log('This is a call to app.get("/")');
    //     console.log(req.url);
    //     res.send({name: 'mango'});
    res.render('home',  {pageTitle: 'Home Page'});
});

app.get('/about', (req, res) => {
    //     console.log('This is a call to app.get("/about")');
    //     console.log(req.url);
    //     res.send('<h1>Hi, this is /about</h1>');
    res.render('about',  {pageTitle: 'About US'})
});

app.get('/countries', (req, res) => {
    //     console.log('This is a call to app.get("/")');
    //     console.log(req.url);
    //     res.send({name: 'mango'});
    res.render('countries', {countries, cssFileName: 'countries', pageTitle: 'The list of Countries'});
});

app.get('/countries/:country', (req, res) => {
    console.log(req.params);

    const country = countries.find(country => country.id === Number(req.params.country));
    console.log(country);
    res.render('country', { country, cssFileName: 'countries', pageTitle: `${ country.name }` });
});

app.listen(PORT, () => {
    console.log(`Web Server is running on port ${PORT}`);
});


/*
*JAMstack - [https://youtu.be/b1ZnAmIXXAQ]

[https://waelyasmina.medium.com/a-guide-into-using-handlebars-with-your-express-js-application-22b944443b65]

npm install nodemon -D --> npm package, which helps to reset server only by saving changes

[heroku.com] -> free domain
git push heroku main:master
*/
